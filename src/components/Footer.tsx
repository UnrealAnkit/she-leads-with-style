import { Linkedin, Instagram, Twitter, Youtube, Mail } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nikitavora/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/sheleadsofficial2023/?hl=en", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@asknikita", label: "YouTube" },
    { icon: Mail, href: "mailto:hello@nikitavora.com", label: "Email" }
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-montserrat font-bold text-2xl text-primary">
                SHELeadsIndia
              </h3>
              <p className="font-inter text-background/80 leading-relaxed">
                Empowering women entrepreneurs to build bold, digital-first businesses 
                through proven strategies and authentic mentorship.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-montserrat font-semibold text-lg">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
                { name: 'Portfolio', href: '#portfolio' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block font-inter text-background/80 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-montserrat font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <p className="font-inter text-background/80">
                Ready to transform your business? Let's connect and discuss your digital growth strategy.
              </p>
              <a
                href="mailto:hello@nikitavora.com"
                className="inline-block font-inter text-primary hover:underline"
              >
                hello@nikitavora.com
              </a>
              <div className="pt-2">
                <a
                  href="https://tidycal.com/nikitavora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-inter text-primary hover:underline font-semibold"
                >
                  Book a Call with Nikita →
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-inter text-background/60">
            © 2024 Nikita Vora. All rights reserved. Built with passion for empowering women entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer