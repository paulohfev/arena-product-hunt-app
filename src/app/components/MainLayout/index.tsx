'use client'

import { Wrapper } from './MainLayout.styled'

export type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default MainLayout
