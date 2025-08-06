const About = () => {
  const stats = [
    { number: "15+", label: "Years in Digital Marketing" },
    { number: "22", label: "Countries Traveled" },
    { number: "350+", label: "Women Mentored" },
    { number: "10K+", label: "Entrepreneurs Empowered" }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground">
                About Nikita
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>
            
            <div className="space-y-6">
              <blockquote className="text-xl lg:text-2xl font-montserrat font-medium text-foreground italic border-l-4 border-primary pl-6">
                "I have the skills, but I don't know how to grow my brand online. That's where I come in."
              </blockquote>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                As a seasoned digital strategist and serial entrepreneur, I've dedicated my career to bridging 
                the gap between talented women and digital success. My journey spans over 15 years in the 
                digital marketing landscape, working with businesses across 22 countries.
              </p>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                Through SHELeadsIndia, I've created a movement that empowers women entrepreneurs to harness 
                the power of digital platforms, transforming their expertise into profitable online businesses. 
                Every strategy I share is born from real-world experience and proven results.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-2xl p-6 text-center hover:bg-secondary transition-colors duration-200 hover:shadow-lg"
              >
                <div className="font-montserrat font-bold text-3xl lg:text-4xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-sm lg:text-base text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About