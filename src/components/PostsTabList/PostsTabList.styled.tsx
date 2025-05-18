import styled from 'styled-components'

export const TabsControls = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`

export const TabButton = styled.div<{ $isActive: boolean }>`
  border-bottom: 2px solid ${({ $isActive }) => ($isActive ? 'orange' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? 'orange' : 'grey')};
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

export const PostsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 1rem;
  color: #666;
`
