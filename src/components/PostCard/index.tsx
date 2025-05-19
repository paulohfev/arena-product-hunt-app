import Image from 'next/image'

import { Post } from '@/types/Post'

import {
  PostBody,
  PostCardLink,
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
    <PostCardLink href={`/posts/${post.id}`}>
      <PostCardWrapper>
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
    </PostCardLink>
  )
}

export default PostCard
