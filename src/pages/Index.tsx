import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Experience from "@/components/Experience"
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
      <Footer />
    </div>
  );
};

export default Index;
