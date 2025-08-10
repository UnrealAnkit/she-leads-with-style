import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yvqgudgchdcoqdebeayx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cWd1ZGdjaGRjb3FkZWJlYXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1OTU0NjMsImV4cCI6MjA3MDE3MTQ2M30.jKmczIhNC8L2o1mwZsG1lu4_C3KwIU_g1LoEejJq3CE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  featured_image?: string
  author: string
  published: boolean
  created_at: string
  updated_at: string
  tags?: string[]
  category?: string
}

export interface AdminUser {
  id: string
  email: string
  role: 'admin' | 'editor'
  created_at: string
}

