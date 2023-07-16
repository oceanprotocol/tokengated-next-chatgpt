import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient, createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/db_types'

/*
// If you want to use jwt and not persist sessions...
// then setup a inMemoryStorageProvider to facilitate auth
// Current warnings being reported in terminal atm
// https://github.com/supabase/gotrue-js/pull/340#issuecomment-1260942393
const client = createClient(supabaseUrl, anonKey, {
  auth: { storage: inMemoryStorageProvider() }, 
  global: {headers: {Authorization: `Bearer ${access_token}`}}
});
function inMemoryStorageProvider(): SupportedStorage {
  const items = new Map();
  return ({
    getItem: (key: string) => items.get(key),
    setItem: (key: string, value: string) => {
      items.set(key, value);
    },
    removeItem: (key: string) => {
      items.delete(key);
    }
  }) as SupportedStorage;
}
*/

// Supabase admin/service_role client for use in server-side code
export const getServiceRoleServerSupabaseClient = () => createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || ''
)

// Supabase authorized client for use in server-side code
export const getServerSupabaseClient = () => {
    const token = cookies().get('web3jwt')
    if(!token) {
        return createRouteHandlerClient<Database>({ cookies })
    } else {
        return createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
            {
                global: {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                }
            }
        )
    }
}

// Supabase authorized client for use in client-side code
export const getClientSupabaseClient = () => {
    const token = cookies().get('web3jwt')
    
    if(!token) {
        return createClientComponentClient()
    } else {
        return createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
            {
                global: {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                }
            }
        )
    }
}


