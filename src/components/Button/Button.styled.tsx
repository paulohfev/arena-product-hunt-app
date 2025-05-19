import styled from 'styled-components'

export const ButtonWrapper = styled.button<{ $backgroundColor: string; $border?: string; $color: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: ${({ $border }) => ($border ? $border : 'none')};
  border-radius: 8px;
  cursor: pointer;
  color: ${({ $color }) => $color};
  font-weight: 600;
  padding: 16px;
  transition: all 0.2s;
  width: 325px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`
