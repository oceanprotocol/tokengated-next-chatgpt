import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import { SignJWT, jwtVerify } from 'jose';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

interface UserJwtPayload {
  jti: string
  iat: number
}

export async function signToken(payload: any, options: any) {
  const token = await new SignJWT(payload)
  .setProtectedHeader({ alg: 'HS256' })
  .setJti(nanoid())
  .setIssuedAt()
  .setExpirationTime('2h')
  .sign(new TextEncoder().encode(process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET))

  return token
}

export async function verifyToken(token: string, address: string) {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET)
    )
    return verified.payload as UserJwtPayload
  } catch (err) {
    return jsonResponse(401, { error: { message: 'Your token has expired.' } })
  }
}

export function jsonResponse(status: number, data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
    },
  })
}