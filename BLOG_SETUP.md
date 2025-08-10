# Blog Admin Panel Setup Guide

This guide will help you set up the blog admin panel with Supabase integration for your Nikita Vora website.

## 🚀 Quick Start

### 1. Supabase Database Setup

1. **Go to your Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**: `yvqgudgchdcoqdebeayx`
3. **Navigate to SQL Editor**
4. **Run the SQL script**: Copy and paste the contents of `supabase-setup.sql` into the SQL editor and execute it

### 2. Create Admin User

1. **Go to Authentication > Users** in your Supabase dashboard
2. **Click "Add User"**
3. **Enter admin credentials**:
   - Email: `admin@nikitavora.com` (or your preferred email)
   - Password: Create a strong password
4. **Save the user**

### 3. Test the Setup

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Access the admin panel**:
   - Go to: `http://localhost:5173/admin/login`
   - Login with your admin credentials

3. **Access the public blog**:
   - Go to: `http://localhost:5173/blog`

## 📁 File Structure

```
src/
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── components/
│   ├── admin/
│   │   ├── AdminLogin.tsx       # Admin login page
│   │   ├── AdminDashboard.tsx   # Admin dashboard
│   │   └── BlogEditor.tsx       # Blog post editor
│   ├── Blog.tsx                 # Public blog listing
│   └── BlogPost.tsx             # Individual blog post page
└── App.tsx                      # Updated with new routes
```

## 🔐 Admin Routes

- **Login**: `/admin/login`
- **Dashboard**: `/admin/dashboard`
- **New Post**: `/admin/posts/new`
- **Edit Post**: `/admin/posts/edit/:id`

## 📝 Public Routes

- **Blog List**: `/blog`
- **Individual Post**: `/blog/:slug`

## 🎨 Features

### Admin Panel
- ✅ Secure login with Supabase Auth
- ✅ Create, edit, and delete blog posts
- ✅ Draft and publish functionality
- ✅ Rich text editor for content
- ✅ Tag and category management
- ✅ Featured image support
- ✅ SEO-friendly URL slugs
- ✅ Post statistics dashboard

### Public Blog
- ✅ Responsive design matching your site's UI
- ✅ Search and filter functionality
- ✅ Category filtering
- ✅ Tag display
- ✅ Social media sharing
- ✅ Related posts
- ✅ Author information
- ✅ Newsletter signup integration

## 🛠️ Customization

### Colors & Styling
The blog uses your existing design system:
- **Primary Color**: Coral (`#F56565`)
- **Secondary Color**: Beige (`#F1EDE3`)
- **Text Color**: Charcoal (`#2A2F3A`)
- **Fonts**: Montserrat (headings), Inter (body)

### Adding New Features
1. **Comments**: Integrate with Supabase real-time subscriptions
2. **Newsletter**: Connect with your email service provider
3. **Analytics**: Add Google Analytics or Supabase analytics
4. **SEO**: Add meta tags and structured data
5. **Image Upload**: Integrate with Supabase Storage

## 🔧 Database Schema

### blog_posts Table
```sql
- id: UUID (Primary Key)
- title: TEXT (Required)
- content: TEXT (Required)
- excerpt: TEXT (Required)
- slug: TEXT (Unique, Required)
- featured_image: TEXT (Optional)
- author: TEXT (Default: 'Nikita Vora')
- published: BOOLEAN (Default: false)
- category: TEXT (Optional)
- tags: TEXT[] (Optional)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

## 🚨 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Public read access** only for published posts
- **Authenticated users** can manage posts
- **Secure authentication** via Supabase Auth
- **Input validation** on all forms

## 📱 Mobile Responsive

All components are fully responsive and work seamlessly on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Next Steps

1. **Customize the content** to match your brand voice
2. **Add your logo** to the admin panel
3. **Set up email notifications** for new posts
4. **Integrate with social media** for auto-posting
5. **Add analytics tracking** for post performance
6. **Create content categories** that align with your services

## 🆘 Troubleshooting

### Common Issues

1. **Login not working**:
   - Check if the user exists in Supabase Auth
   - Verify email and password
   - Check browser console for errors

2. **Posts not showing**:
   - Ensure posts are marked as `published: true`
   - Check RLS policies are correctly set
   - Verify Supabase connection

3. **Styling issues**:
   - Ensure Tailwind CSS is properly configured
   - Check if all UI components are imported
   - Verify CSS variables are defined

### Support
If you encounter any issues, check:
1. Supabase dashboard logs
2. Browser developer console
3. Network tab for API errors
4. Supabase documentation: https://supabase.com/docs

## 🎉 You're All Set!

Your blog admin panel is now ready to use. Start creating content and sharing your expertise with the world!

