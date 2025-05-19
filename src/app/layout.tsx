import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ApolloProvider } from '@/providers/ApolloProvider'

import MainLayout from '../components/MainLayout'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Arena Product Hunt',
  description: 'Running on Next.js and React.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ApolloProvider>
          <MainLayout>{children}</MainLayout>
          <ToastContainer position='top-right' autoClose={3000} />
        </ApolloProvider>
      </body>
    </html>
  )
}
