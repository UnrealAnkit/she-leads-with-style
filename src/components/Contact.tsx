import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle, ArrowRight } from "lucide-react"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch("https://formspree.io/f/xblkpypa", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within 24 hours.",
        })
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or reach out directly via email.",
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-6">
            Let's Start a Conversation
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business or explore collaboration opportunities? 
            I'd love to hear about your vision and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6">
              <h3 className="font-montserrat font-semibold text-2xl text-foreground mb-6">
                Why Connect With Me?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-foreground">Strategic Business Growth</h4>
                    <p className="font-inter text-muted-foreground">8+ years of experience in scaling businesses and empowering entrepreneurs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-foreground">Women Empowerment Focus</h4>
                    <p className="font-inter text-muted-foreground">Dedicated to supporting women entrepreneurs in their digital transformation journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-foreground">Proven Results</h4>
                    <p className="font-inter text-muted-foreground">Track record of successful digital ecosystem implementations and business consultations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="font-inter text-foreground/80 text-center">
                <span className="font-semibold text-primary">Quick Response:</span> I typically respond within 24 hours
              </p>
            </div>

            {/* Book a Call Section */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center space-y-6">
              <div className="space-y-4">
                <h3 className="font-montserrat font-bold text-2xl text-foreground">
                  Book a Call with Nikita
                </h3>
                <p className="font-inter text-muted-foreground">
                  Ready for a personalized consultation? Book a call to discuss your business goals and get expert guidance.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for consultations
                </div>
                
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                  onClick={() => window.open('https://tidycal.com/nikitavora', '_blank')}
                >
                  Schedule Your Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-montserrat font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-montserrat font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-montserrat font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-montserrat font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  placeholder="Tell me about your project, goals, or how I can help you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold py-3 rounded-full transition-all duration-200 hover:shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent"></div>
                    <span>Sending...</span>
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Sent Successfully!</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact