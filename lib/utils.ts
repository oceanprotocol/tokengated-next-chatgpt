import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

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

export function signToken(payload: any, options: any) {
  return jwt.sign(
    payload, 
    process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET, 
    options
  );
}

export function verifyToken(request: NextRequest) {
  try {
    const token = request.cookies.get('web3jwt')?.value

    if (!token) {
      throw new Error('An unexpected error occurred')
    }

    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET);
    // Integrate token w/ auth
    // return decoded;
    return token;
  } catch (err) {
    return false;
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