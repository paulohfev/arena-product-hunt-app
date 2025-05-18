import Image from 'next/image'

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const SpinnerIcon = styled(Image)`
  animation: ${rotate} 1s linear infinite;
`
