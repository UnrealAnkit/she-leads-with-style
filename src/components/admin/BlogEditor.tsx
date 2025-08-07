import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { supabase, BlogPost } from '@/lib/supabase'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Save, Eye, EyeOff } from 'lucide-react'

const BlogEditor = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    excerpt: '',
    slug: '',
    author: 'Nikita Vora',
    published: false,
    category: '',
    tags: []
  })
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [newTag, setNewTag] = useState('')
  const { toast } = useToast()
  const navigate = useNavigate()

  useEffect(() => {
    if (id && id !== 'new') {
      fetchPost()
    }
  }, [id])

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      setPost(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch post",
        variant: "destructive",
      })
      navigate('/admin/dashboard')
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-')
  }

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const addTag = () => {
    if (newTag.trim() && !post.tags?.includes(newTag.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }))
  }

  const handleSave = async (publish = false) => {
    if (!post.title || !post.content || !post.excerpt) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setSaving(true)
    try {
      const postData = {
        ...post,
        published: publish ? true : post.published,
        updated_at: new Date().toISOString()
      }

      let result
      if (id && id !== 'new') {
        // Update existing post
        result = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id)
      } else {
        // Create new post
        result = await supabase
          .from('blog_posts')
          .insert([{
            ...postData,
            created_at: new Date().toISOString()
          }])
      }

      if (result.error) throw result.error

      toast({
        title: "Success",
        description: `Post ${publish ? 'published' : 'saved'} successfully`,
      })
      navigate('/admin/dashboard')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save post",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/admin/dashboard')}
                className="font-inter"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="font-montserrat font-bold text-2xl text-foreground">
                {id === 'new' ? 'Create New Post' : 'Edit Post'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => handleSave(false)}
                disabled={saving}
                className="font-inter"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Saving...' : 'Save Draft'}
              </Button>
              <Button
                onClick={() => handleSave(true)}
                disabled={saving}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg"
              >
                {post.published ? <Eye className="w-4 h-4 mr-2" /> : <EyeOff className="w-4 h-4 mr-2" />}
                {saving ? 'Publishing...' : (post.published ? 'Update' : 'Publish')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Title *
                </label>
                <Input
                  value={post.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title..."
                  className="font-montserrat text-xl"
                />
              </CardContent>
            </Card>

            {/* Content */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Content *
                </label>
                <Textarea
                  value={post.content}
                  onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Write your blog post content here..."
                  className="font-inter min-h-[400px] resize-none"
                />
              </CardContent>
            </Card>

            {/* Excerpt */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Excerpt *
                </label>
                <Textarea
                  value={post.excerpt}
                  onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief summary of the post..."
                  className="font-inter min-h-[100px] resize-none"
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Slug */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  URL Slug
                </label>
                <Input
                  value={post.slug}
                  onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  className="font-inter"
                />
              </CardContent>
            </Card>

            {/* Author */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Author
                </label>
                <Input
                  value={post.author}
                  onChange={(e) => setPost(prev => ({ ...prev, author: e.target.value }))}
                  placeholder="Author name"
                  className="font-inter"
                />
              </CardContent>
            </Card>

            {/* Category */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Category
                </label>
                <Input
                  value={post.category}
                  onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="e.g., Digital Marketing, Leadership"
                  className="font-inter"
                />
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Tags
                </label>
                <div className="flex space-x-2 mb-3">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag..."
                    className="font-inter"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button
                    onClick={addTag}
                    variant="outline"
                    size="sm"
                    className="font-inter"
                  >
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="font-inter cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                    >
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Featured Image URL
                </label>
                <Input
                  value={post.featured_image}
                  onChange={(e) => setPost(prev => ({ ...prev, featured_image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                  className="font-inter"
                />
              </CardContent>
            </Card>

            {/* Status */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <label className="font-inter font-medium text-foreground mb-2 block">
                  Status
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={post.published}
                    onChange={(e) => setPost(prev => ({ ...prev, published: e.target.checked }))}
                    className="rounded border-border"
                  />
                  <label htmlFor="published" className="font-inter text-foreground">
                    Published
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogEditor
