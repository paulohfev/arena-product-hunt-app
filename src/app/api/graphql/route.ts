import { NextRequest } from 'next/server'

const PRODUCT_HUNT_API_URL = process.env.NEXT_PUBLIC_API_URL
const API_TOKEN = process.env.API_TOKEN

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await fetch(PRODUCT_HUNT_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()
  return Response.json(data)
}
