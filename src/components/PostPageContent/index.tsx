import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Post } from '@/types/Post'

import Button from '../Button'
import {
  PostPageBody,
  PostPageButtonsWrapper,
  PostPageContentButton,
  PostPageContentDescription,
  PostPageContentHeaderImage,
  PostPageContentText,
  PostPageContentTitle,
  PostPageContentWrapper,
  PostPageWrapper,
} from './PostPageContent.styled'

export type PostPageContentProps = {
  post: Post
}

const PostPageContent: React.FC<PostPageContentProps> = ({ post }) => {
  const router = useRouter()

  return (
    <PostPageWrapper>
      <PostPageContentButton onClick={() => router.back()}>
        <Image src='/icons/left-arrow.png' alt='Back' width={24} height={24} />
      </PostPageContentButton>

      <PostPageContentWrapper $direction='column'>
        <PostPageBody>
          <PostPageContentHeaderImage src={post.thumbnail.url} alt={post.name} width={64} height={64} />

          <PostPageContentText>
            <PostPageContentTitle>{post.name}</PostPageContentTitle>

            <PostPageContentDescription>{post.description}</PostPageContentDescription>
          </PostPageContentText>
        </PostPageBody>
      </PostPageContentWrapper>

      <PostPageContentWrapper $direction='row'>
        <PostPageButtonsWrapper>
          <Button backgroundColor='white' border='1px solid #e0e0e0' color='black' disabled>
            Get it
          </Button>

          <Button backgroundColor='#FF5733' color='white' disabled>
            Upvote ({post.votesCount})
          </Button>
        </PostPageButtonsWrapper>
      </PostPageContentWrapper>
    </PostPageWrapper>
  )
}

export default PostPageContent
