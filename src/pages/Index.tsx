import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
