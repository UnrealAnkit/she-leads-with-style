-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  featured_image TEXT,
  author TEXT NOT NULL DEFAULT 'Nikita Vora',
  published BOOLEAN DEFAULT FALSE,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published posts
CREATE POLICY "Public can view published posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Create policies for authenticated users to manage posts
CREATE POLICY "Authenticated users can insert posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update posts" ON blog_posts
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete posts" ON blog_posts
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO blog_posts (title, content, excerpt, slug, author, published, category, tags) VALUES
(
  '5 Essential LinkedIn Strategies for Women Entrepreneurs',
  '<h2>Building Your Professional Brand</h2><p>LinkedIn has become the go-to platform for professional networking and business growth. As a woman entrepreneur, your LinkedIn presence can be a powerful tool for building credibility, attracting clients, and creating meaningful connections.</p><h3>1. Optimize Your Profile</h3><p>Your LinkedIn profile is your digital business card. Make sure it reflects your expertise and values. Use a professional headshot, write a compelling headline, and craft a summary that tells your story.</p><h3>2. Create Valuable Content</h3><p>Share insights, experiences, and tips that provide value to your network. Don''t just promote your services - educate and inspire your audience.</p><h3>3. Engage Authentically</h3><p>Comment on posts from your network, congratulate connections on their achievements, and participate in relevant discussions. Authentic engagement builds trust and relationships.</p><h3>4. Use LinkedIn Articles</h3><p>Publishing articles on LinkedIn positions you as a thought leader in your industry. Share your expertise and insights through long-form content.</p><h3>5. Leverage LinkedIn Groups</h3><p>Join and actively participate in LinkedIn groups related to your industry. This is a great way to connect with like-minded professionals and potential clients.</p>',
  'Discover the top 5 LinkedIn strategies that every woman entrepreneur should implement to grow their business and build meaningful professional relationships.',
  'linkedin-strategies-women-entrepreneurs',
  'Nikita Vora',
  true,
  'Digital Marketing',
  ARRAY['LinkedIn', 'Social Media', 'Women Entrepreneurs', 'Networking']
),
(
  'How to Build a Digital-First Business from Scratch',
  '<h2>The Digital Revolution</h2><p>In today''s digital age, building a business that thrives online is not just an option - it''s essential. Whether you''re starting a new venture or transforming an existing business, a digital-first approach can accelerate your growth and reach.</p><h3>Understanding Digital-First</h3><p>A digital-first business prioritizes online channels, tools, and strategies from the very beginning. This approach allows you to reach a global audience, operate efficiently, and scale quickly.</p><h3>Key Components of a Digital-First Business</h3><ul><li><strong>Online Presence:</strong> A professional website and social media profiles</li><li><strong>Digital Marketing:</strong> Content marketing, SEO, and social media marketing</li><li><strong>E-commerce:</strong> Online sales and payment processing</li><li><strong>Automation:</strong> Tools to streamline operations and customer service</li><li><strong>Data Analytics:</strong> Tracking and analyzing performance metrics</li></ul><h3>Getting Started</h3><p>Start by identifying your target audience and understanding their online behavior. Then, create a comprehensive digital strategy that includes your website, social media presence, and marketing campaigns.</p>',
  'Learn how to build a successful digital-first business from the ground up, including essential strategies and tools for online growth.',
  'build-digital-first-business',
  'Nikita Vora',
  true,
  'Business Strategy',
  ARRAY['Digital Business', 'Entrepreneurship', 'Online Marketing', 'Business Growth']
),
(
  'The Power of Authentic Storytelling in Business',
  '<h2>Why Stories Matter</h2><p>In a world saturated with marketing messages, authentic storytelling has become a powerful differentiator for businesses. Your story is what connects you with your audience on a deeper level and builds lasting relationships.</p><h3>What Makes a Story Authentic?</h3><p>Authentic storytelling is about being genuine, vulnerable, and relatable. It''s not about creating a perfect narrative, but about sharing your real experiences, challenges, and triumphs.</p><h3>Elements of Effective Business Storytelling</h3><ul><li><strong>Personal Connection:</strong> Share your journey and experiences</li><li><strong>Emotional Resonance:</strong> Connect with your audience''s emotions</li><li><strong>Relatability:</strong> Make your story accessible and relevant</li><li><strong>Consistency:</strong> Maintain your story across all platforms</li><li><strong>Purpose:</strong> Ensure your story serves your business goals</li></ul><h3>Implementing Storytelling in Your Business</h3><p>Start by identifying the key moments in your journey that shaped your business. Then, find ways to incorporate these stories into your marketing, social media, and customer interactions.</p>',
  'Discover how authentic storytelling can transform your business by creating deeper connections with your audience and building brand loyalty.',
  'authentic-storytelling-business',
  'Nikita Vora',
  true,
  'Branding',
  ARRAY['Storytelling', 'Branding', 'Marketing', 'Authenticity']
);

-- Create admin users table (optional - for managing multiple admins)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users
CREATE POLICY "Admins can manage admin users" ON admin_users
  FOR ALL USING (auth.role() = 'authenticated');
