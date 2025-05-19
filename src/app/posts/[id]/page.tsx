'use client'

import { useEffect } from 'react'

import { useParams } from 'next/navigation'

import { useQuery } from '@apollo/client'
import { toast } from 'react-toastify'

import LoadingSpinner from '@/components/LoadingSpinner'
import PostPageContent from '@/components/PostPageContent'
import { GET_POST_BY_ID } from '@/graphql/queries'

const PostPage = () => {
  const { id } = useParams()

  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  })

  useEffect(() => {
    if (error) {
      toast.error('Failed to load post details. Please try again later.')
    }
  }, [error])

  const post = data?.post

  if (loading) return <LoadingSpinner />

  return <PostPageContent post={post} />
}

export default PostPage
