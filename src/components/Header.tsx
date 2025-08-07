import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-montserrat font-bold text-xl text-foreground">
            Nikita Vora
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-inter text-foreground hover:text-primary transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="font-inter text-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#services" className="font-inter text-foreground hover:text-primary transition-colors duration-200">
              Portfolio
            </a>
            <a href="#contact" className="font-inter text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header