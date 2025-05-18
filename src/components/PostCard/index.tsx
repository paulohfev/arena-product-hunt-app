import Image from 'next/image'

import { Post } from '@/types/Post'

import {
  PostBody,
  PostCardWrapper,
  PostImage,
  PostStats,
  PostTagline,
  PostTextContainer,
  PostTitle,
} from './PostCard.styled'

export type PostCardProps = {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <PostCardWrapper key={post.id}>
      <PostImage src={post.thumbnail.url} alt={post.name} width={48} height={48} />

      <PostBody>
        <PostTextContainer>
          <PostTitle>{post.name}</PostTitle>
          <PostTagline>{post.tagline}</PostTagline>
        </PostTextContainer>
        <PostStats>
          <Image src='/icons/triangle.png' alt='vote' width={12} height={12} />

          {post.votesCount}
        </PostStats>
      </PostBody>
    </PostCardWrapper>
  )
}

export default PostCard
