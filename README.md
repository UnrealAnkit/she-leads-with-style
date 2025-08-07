# Nikita Vora - Digital Strategist & Women's Empowerment Leader

A modern, responsive website showcasing Nikita Vora's expertise as a Business Strategist, Independent Director, and Founder of SHELeadsIndia. The site features a blog system with admin panel powered by Supabase.

## Features

- **Modern Design**: Clean, professional design with custom color palette
- **Responsive Layout**: Optimized for all devices
- **Blog System**: Full-featured blog with admin panel
- **Supabase Integration**: Database and authentication backend
- **SEO Optimized**: Meta tags and structured content

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Backend**: Supabase (Database, Authentication)
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Set up Supabase (see setup instructions below)
4. Start the development server: `npm run dev`
5. Open [http://localhost:8080](http://localhost:8080) to view it in the browser

## Supabase Setup

### 1. Database Schema

Run the following SQL in your Supabase SQL editor:

```sql
-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  slug TEXT UNIQUE NOT NULL,
  featured_image TEXT,
  author TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  category TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can view published posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Authenticated users can manage posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO blog_posts (title, content, excerpt, slug, author, published, category, tags) VALUES
('Welcome to My Blog', 'This is my first blog post...', 'A brief introduction to my blog', 'welcome-to-my-blog', 'Nikita Vora', true, 'General', ARRAY['welcome', 'introduction']),
('Women in Leadership', 'Leadership insights for women entrepreneurs...', 'Key strategies for women in leadership roles', 'women-in-leadership', 'Nikita Vora', true, 'Leadership', ARRAY['leadership', 'women', 'entrepreneurship']);
```

### 2. Environment Variables

Update the Supabase configuration in `src/lib/supabase.ts` with your project credentials.

### 3. Admin User Setup

1. Go to your Supabase dashboard
2. Navigate to Authentication > Users
3. Create a new user or invite an existing user
4. The user will be able to access the admin panel at `/admin/login`

## Project Structure

```
src/
├── components/
│   ├── admin/          # Admin panel components
│   ├── ui/             # Shadcn/ui components
│   └── *.tsx           # Main site components
├── lib/
│   ├── supabase.ts     # Supabase configuration
│   └── utils.ts        # Utility functions
├── pages/              # Page components
└── hooks/              # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The site can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Customization

- **Colors**: Update the HSL color variables in `tailwind.config.ts`
- **Fonts**: Modify font families in `tailwind.config.ts`
- **Content**: Update component content in the respective `.tsx` files 
