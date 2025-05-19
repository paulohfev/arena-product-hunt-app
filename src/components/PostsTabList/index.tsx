import { useEffect, useRef, useState } from 'react'

import { useQuery } from '@apollo/client'
import { toast } from 'react-toastify'

import { GET_POSTS } from '@/graphql/queries'
import { Post } from '@/types/Post'
import { PostQueryData } from '@/types/PostQueryData'

import LoadingSpinner from '../LoadingSpinner'
import PostCard from '../PostCard'
import { PostsList, TabButton, TabsControls } from './PostsTabList.styled'

enum TabType {
  POPULAR = 'popular',
  RECENT = 'recent',
}

const POSTS_PER_PAGE = 10

const PostsTabList = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.POPULAR)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const { data, loading, error, fetchMore } = useQuery<PostQueryData>(GET_POSTS, {
    variables: {
      order: activeTab === TabType.POPULAR ? 'VOTES' : 'NEWEST',
      first: POSTS_PER_PAGE,
    },
  })

  useEffect(() => {
    if (error) {
      toast.error('Failed to load posts. Please try again later.')
    }
  }, [error])

  const posts = data?.posts?.nodes || []
  const hasNextPage = data?.posts?.pageInfo.hasNextPage
  const endCursor = data?.posts?.pageInfo.endCursor

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !loading) {
          fetchMore({
            variables: {
              after: endCursor,
              first: POSTS_PER_PAGE,
            },
            updateQuery: (prev: PostQueryData, { fetchMoreResult }: { fetchMoreResult?: PostQueryData }) => {
              if (!fetchMoreResult) return prev
              return {
                posts: {
                  ...fetchMoreResult.posts,
                  nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes],
                },
              }
            },
          })
        }
      },
      { threshold: 1.0 }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [fetchMore, hasNextPage, loading, endCursor])

  return (
    <div>
      <TabsControls>
        <TabButton $isActive={activeTab === TabType.POPULAR} onClick={() => setActiveTab(TabType.POPULAR)}>
          Popular
        </TabButton>
        <TabButton $isActive={activeTab === TabType.RECENT} onClick={() => setActiveTab(TabType.RECENT)}>
          Recent
        </TabButton>
      </TabsControls>

      <PostsList>
        {loading ? <LoadingSpinner /> : posts.map((post: Post) => <PostCard key={post.id} post={post} />)}

        <div ref={loadMoreRef} style={{ height: '20px' }}></div>
      </PostsList>
    </div>
  )
}

export default PostsTabList
