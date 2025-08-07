import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { supabase, BlogPost } from '@/lib/supabase'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      fetchPost()
    }
  }, [slug])

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (error) throw error
      
      setPost(data)
      fetchRelatedPosts(data.category, data.id)
    } catch (error) {
      console.error('Error fetching post:', error)
      navigate('/blog')
    } finally {
      setLoading(false)
    }
  }

  const fetchRelatedPosts = async (category: string, currentPostId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .eq('category', category)
        .neq('id', currentPostId)
        .order('created_at', { ascending: false })
        .limit(3)

      if (!error && data) {
        setRelatedPosts(data)
      }
    } catch (error) {
      console.error('Error fetching related posts:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const sharePost = (platform: string) => {
    const url = window.location.href
    const title = post?.title || ''
    const text = post?.excerpt || ''

    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="font-inter text-muted-foreground mt-4">Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">
            Post not found
          </h2>
          <Button
            onClick={() => navigate('/blog')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-6 py-2 rounded-full"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="outline"
            onClick={() => navigate('/blog')}
            className="font-inter"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="space-y-8">
              {/* Featured Image */}
              {post.featured_image && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Post Header */}
              <div className="space-y-4">
                {post.category && (
                  <Badge variant="secondary" className="font-inter">
                    {post.category}
                  </Badge>
                )}
                
                <h1 className="font-montserrat font-bold text-3xl lg:text-4xl text-foreground leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="font-inter text-foreground leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center space-x-2 pt-6 border-t border-border">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="font-inter">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <span className="font-inter font-medium text-foreground">Share:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sharePost('facebook')}
                  className="font-inter"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sharePost('twitter')}
                  className="font-inter"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sharePost('linkedin')}
                  className="font-inter"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Info */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4">
                  About the Author
                </h3>
                <div className="space-y-3">
                  <p className="font-inter text-muted-foreground">
                    {post.author} is a digital strategist and women's empowerment leader 
                    with over 15 years of experience in digital marketing.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full font-inter"
                    onClick={() => navigate('/#about')}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4">
                    Related Posts
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div
                        key={relatedPost.id}
                        className="cursor-pointer group"
                        onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                      >
                        <h4 className="font-montserrat font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {relatedPost.title}
                        </h4>
                        <p className="font-inter text-sm text-muted-foreground mt-1">
                          {formatDate(relatedPost.created_at)}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4">
                  Stay Updated
                </h3>
                <p className="font-inter text-muted-foreground mb-4">
                  Get the latest insights and strategies delivered to your inbox.
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold rounded-full"
                  onClick={() => navigate('/#contact')}
                >
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
