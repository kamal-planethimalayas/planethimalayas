import { createClient } from '@supabase/supabase-js'

// Your Supabase project credentials
const supabaseUrl = 'https://pkyaezvtjynzfgsfzblv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreWFlenZ0anluemZnc2Z6Ymx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTIzMzUsImV4cCI6MjA3MDEyODMzNX0.2fW5pWvAV0snkdr6Iv4GaVcOoVuoQNmXjV_7bFIypf4'

// Create and export the client
export const supabase = createClient(supabaseUrl, supabaseKey)
console.log("Supabase client initialized", supabase);
