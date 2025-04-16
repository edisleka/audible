import { useAuth } from '@clerk/clerk-expo'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const useSupabase = () => {
  const { getToken } = useAuth()

  return createClient(supabaseUrl, supabaseAnonKey, {
    accessToken: async () => getToken() ?? null,
  })
}
