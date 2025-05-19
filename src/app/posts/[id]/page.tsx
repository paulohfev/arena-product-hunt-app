'use client'

import { useParams } from 'next/navigation'

import { useQuery } from '@apollo/client'

import LoadingSpinner from '@/components/LoadingSpinner'
import PostPageContent from '@/components/PostPageContent'
import { GET_POST_BY_ID } from '@/graphql/queries'

const PostPage = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  })

  const post = data?.post

  if (loading) return <LoadingSpinner />

  return <PostPageContent post={post} />
}

export default PostPage
