import { useState } from 'react'

import { useQuery } from '@apollo/client'

import { GET_POPULAR_POSTS } from '@/graphql/queries'
import { Post } from '@/types/Post'

import PostCard from '../PostCard'
import { LoadingSpinner, PostsList, TabButton, TabsControls } from './PostsTabList.styled'

type TabType = 'popular' | 'recent'

const PostsTabList = () => {
  const [activeTab, setActiveTab] = useState<TabType>('popular')
  const { data, loading } = useQuery<{ posts: { nodes: Post[] } }>(GET_POPULAR_POSTS)
  const posts = data?.posts?.nodes

  return (
    <div>
      <TabsControls>
        <TabButton $isActive={activeTab === 'popular'} onClick={() => setActiveTab('popular')}>
          Popular
        </TabButton>
        <TabButton $isActive={activeTab === 'recent'} onClick={() => setActiveTab('recent')}>
          Recent
        </TabButton>
      </TabsControls>

      <PostsList>
        {loading ? (
          <LoadingSpinner>Loading more posts...</LoadingSpinner>
        ) : (
          posts?.map((post: Post) => <PostCard key={post.id} post={post} />)
        )}
      </PostsList>
    </div>
  )
}

export default PostsTabList
