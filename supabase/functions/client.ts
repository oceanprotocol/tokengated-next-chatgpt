import {
  createClientComponentClient,
  createRouteHandlerClient
} from '@supabase/auth-helpers-nextjs'

import { Database } from '@/lib/db_types'
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'

// Supabase admin/service_role client for use in server-side code
export const getServiceRoleServerSupabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || '',
    {
      auth: {
        persistSession: false
      }
    }
  )

// Supabase authorized client for use in server-side code
export const getServerSupabaseClient = () => {
  const token = cookies().get('web3jwt')
  if (!token) {
    return createRouteHandlerClient<Database>({ cookies })
  } else {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    const options = {
      global: {
        headers: { Authorization: `Bearer ${token}` },
        auth: {
          persistSession: false
        }
      }
    }
    return createClient(url, anonKey, options)
  }
}

// Supabase authorized client for use in client-side code
export const getClientSupabaseClient = () => {
  const token = cookies().get('web3jwt')

  if (!token) {
    return createClientComponentClient()
  } else {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    const headers = {
      global: { headers: { Authorization: `Bearer ${token}` } },
      auth: { persistSession: false }
    }
    return createClient(url, anonKey, headers)
  }
}
