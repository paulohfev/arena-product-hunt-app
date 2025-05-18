import { Post } from './Post'

export type PostQueryData = {
  posts: {
    nodes: Post[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
  }
}
