import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { createUser } from '@/lib/auth'
import { z } from 'zod'

// Basic validation schema
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, name } = registerSchema.parse(body)

    // 1. Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // 2. Create user (hashes password internally via auth.ts helper)
    const newUser = await createUser({
      email,
      password,
      name
    })

    return NextResponse.json(
      { user: newUser, message: 'Account created successfully' },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: 'Invalid input data' }, { status: 400 })
    }
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
  }
}