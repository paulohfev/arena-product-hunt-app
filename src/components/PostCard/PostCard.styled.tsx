import Image from 'next/image'

import styled from 'styled-components'

export const PostCardWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 16px;
  margin-bottom: 1rem;
  padding: 16px;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

export const PostBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PostImage = styled(Image)`
  border-radius: 16px;
`

export const PostTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
`

export const PostTagline = styled.p`
  color: #666;
`

export const PostStats = styled.div`
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 4px;
  height: 48px;
  justify-content: center;
  width: 48px;
`
