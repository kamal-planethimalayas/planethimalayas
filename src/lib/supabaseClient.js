// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Use PUBLIC keys so the client-side code can access them
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://pkyaezvtjynzfgsfzblv.supabase.co'
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreWFlenZ0anluemZnc2Z6Ymx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTIzMzUsImV4cCI6MjA3MDEyODMzNX0.2fW5pWvAV0snkdr6Iv4GaVcOoVuoQNmXjV_7bFIypf4'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)


console.log("Supabase client initialized", supabase)

