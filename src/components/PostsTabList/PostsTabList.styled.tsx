import styled from 'styled-components'

export const TabsControls = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`

export const TabButton = styled.div<{ $isActive: boolean }>`
  border-bottom: 2px solid ${({ $isActive }) => ($isActive ? '#FF5733' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#FF5733' : 'grey')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-weight: 600;
  padding: 16px;
  width: 50%;
  transition: all 0.2s;

  &:hover {
    background: ${({ $isActive }) => ($isActive ? 'transparent' : '#e5e5e5')};
  }
`

export const PostsList = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
