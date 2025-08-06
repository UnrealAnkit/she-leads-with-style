import { Button } from "@/components/ui/button"
import nikitaHeadshot from "@/assets/nikita-headshot.jpg"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-secondary/30 flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Nikita Vora
              </h1>
              <p className="font-montserrat font-medium text-xl lg:text-2xl text-muted-foreground">
                Digital Strategist | Serial Entrepreneur | Trainer | Founder
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-montserrat font-semibold text-2xl lg:text-3xl text-foreground leading-relaxed">
                Empowering Women to Build Bold, Digital-First Businesses.
              </h2>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-2xl">
                With 15+ years in digital marketing and 350+ women mentored across 22 countries, 
                I help ambitious entrepreneurs transform their ideas into thriving online empires.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat font-semibold px-8 py-3 rounded-full transition-all duration-200"
              >
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary rounded-full transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src={nikitaHeadshot}
                alt="Nikita Vora - Digital Strategist and Entrepreneur" 
                className="relative w-full h-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero