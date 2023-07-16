// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { SignJWT, jwtVerify } from 'jose'
import { jsonResponse } from './utils'

interface UserJwtPayload {
  jti: string
  iat: number
}

/**
 * Verifies the user's JWT token and returns the payload if
 * it's valid or a response if it's not.
 */
export async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('web3jwt')?.value

  if (!token) {
    return jsonResponse(401, { error: { message: 'Missing user token' } })
  }

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

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookie(
  request: NextRequest,
  response: NextResponse
) {
  const cookie = request.cookies.get('web3jwt')?.value

  if (!cookie) {
    const token = await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(new TextEncoder().encode(process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET))
    response.cookies.set('web3jwt', token, { httpOnly: true })
  }

  return response
}