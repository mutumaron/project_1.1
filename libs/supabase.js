import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xvwdfkycliedykkymdmk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2d2Rma3ljbGllZHlra3ltZG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2NzUwOTEsImV4cCI6MjA0MzI1MTA5MX0.cXjBDFD_0ZDs3uvZLPCuGxTxH2WEW036dUlmrFpty7c"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})