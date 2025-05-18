import { redirect } from 'next/navigation'

import { APP_ROUTES } from '@/constants/appRoutes'

export default function Home() {
  redirect(APP_ROUTES.posts)
}
