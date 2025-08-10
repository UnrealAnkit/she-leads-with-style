import { Button } from "@/components/ui/button"
import { useState } from "react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
            <a href="/blog" className="font-inter text-foreground hover:text-primary transition-colors duration-200">
              Blog
            </a>
            <a href="#contact" className="font-inter text-foreground hover:text-primary transition-colors duration-200">
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg"
              onClick={() => window.open('https://tidycal.com/nikitavora', '_blank')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a 
                href="#home" 
                className="block font-inter text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block font-inter text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block font-inter text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
              <a 
                href="/blog" 
                className="block font-inter text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="block font-inter text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                onClick={() => {
                  closeMobileMenu()
                  window.open('https://tidycal.com/nikitavora', '_blank')
                }}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header