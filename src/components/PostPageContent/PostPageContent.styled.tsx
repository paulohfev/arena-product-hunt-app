import Image from 'next/image'

import styled from 'styled-components'

export const PostPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const PostPageContentWrapper = styled.div<{ $direction: 'row' | 'column' }>`
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  gap: 16px;
  padding: 24px;
`

export const PostPageBody = styled.div`
  display: flex;
  gap: 16px;
`

export const PostPageContentHeaderImage = styled(Image)`
  border-radius: 8px;
`

export const PostPageContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const PostPageContentTitle = styled.h1`
  font-size: 24px;
`

export const PostPageContentDescription = styled.p`
  color: #666;
  font-size: 16px;
`

export const PostPageButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

export const PostPageContentButton = styled.button`
  align-items: center;
  display: flex;
  background-color: #ffffff;
  border: none;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  padding: 10px;
  transition: all 0.2s;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`
