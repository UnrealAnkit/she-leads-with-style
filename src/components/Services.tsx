import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Instagram, Globe, Zap, GraduationCap } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Linkedin,
      title: "LinkedIn Systems",
      description: "Transform your LinkedIn presence into a lead-generation powerhouse with proven content strategies and automation."
    },
    {
      icon: Instagram,
      title: "Instagram Automation", 
      description: "Scale your Instagram impact with smart automation systems that engage authentically while you focus on growth."
    },
    {
      icon: Globe,
      title: "Website & Funnel Revamps",
      description: "Convert visitors into customers with high-converting websites and sales funnels designed for women entrepreneurs."
    },
    {
      icon: Zap,
      title: "AI-powered Content Strategy",
      description: "Leverage cutting-edge AI tools to create compelling content that resonates with your audience and drives results."
    },
    {
      icon: GraduationCap,
      title: "Weekly Masterclasses",
      description: "Join exclusive weekly sessions where I share the latest digital marketing strategies and answer your burning questions."
    }
  ]

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground">
            Signature Services
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed specifically for ambitious women entrepreneurs 
            ready to scale their online presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-montserrat font-semibold text-xl text-foreground">
                  {service.title}
                </h3>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services