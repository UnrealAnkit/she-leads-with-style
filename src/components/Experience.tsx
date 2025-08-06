const Experience = () => {
  const experiences = [
    {
      year: "2020 - Present",
      role: "Founder & CEO",
      company: "SHELeadsIndia",
      achievements: [
        "Empowered 10,000+ women entrepreneurs across 22 countries",
        "Built a community of ambitious female business leaders",
        "Created comprehensive digital marketing training programs"
      ]
    },
    {
      year: "2018 - Present", 
      role: "Founder",
      company: "SMM Unleashed",
      achievements: [
        "Developed cutting-edge social media marketing strategies",
        "Helped 500+ businesses scale their online presence",
        "Generated over $10M in revenue for clients"
      ]
    },
    {
      year: "2019 - Present",
      role: "Co-Founder",
      company: "Women Wave",
      achievements: [
        "Created the largest women's networking platform in Asia",
        "Organized 100+ networking events and workshops",
        "Facilitated partnerships worth over $5M"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground">
            Leadership Journey
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building platforms and movements that empower women to achieve their entrepreneurial dreams.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block transform -translate-x-0.5"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                const isLast = index === experiences.length - 1;
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 w-8 h-8 bg-primary rounded-full hidden md:flex items-center justify-center transform -translate-x-1/2 z-10">
                      <div className="w-3 h-3 bg-background rounded-full"></div>
                    </div>
                    
                    {/* Connecting line to card */}
                    <div className={`absolute top-4 w-16 h-0.5 bg-primary/50 hidden md:block ${
                      isEven 
                        ? 'left-1/2 ml-4' 
                        : 'right-1/2 mr-4'
                    }`}></div>
                    
                    <div className={`flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <div className={`w-full md:w-5/12 bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                        isEven ? 'md:mr-auto md:ml-20' : 'md:ml-auto md:mr-20'
                      }`}>
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                              <h3 className="font-montserrat font-bold text-xl text-foreground">
                                {exp.role}
                              </h3>
                              <p className="font-montserrat font-semibold text-primary">
                                {exp.company}
                              </p>
                            </div>
                            <span className="font-inter text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                              {exp.year}
                            </span>
                          </div>
                          
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="font-inter text-muted-foreground flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience