const Experience = () => {
  const experiences = [
    {
      year: "Jun 2023 - Present",
      role: "Founder",
      company: "SHELeads India",
      achievements: [
        "Built the only online digital platform for women to do business",
        "Expertise in Strategic Thinking & Start-up Leadership",
        "Providing Management Consulting & Marketing Consulting services",
        "Focused on Business Strategy & Business Ownership guidance"
      ]
    },
    {
      year: "Feb 2017 - Present", 
      role: "Founder",
      company: "SMM Unleashed",
      achievements: [
        "Providing Digital ecosystem to Business Owners with DIY guidance",
        "Digital Automation Consultation & Training (Online & Offline)",
        "Recognition & Reward Programs for Women Entrepreneurs",
        "Creating Free Resources and bridging Social Media Agencies with Business owners",
        "Managing & Training teams for Marketing with Strategic B2B focus"
      ]
    },
    {
      year: "Nov 2016 - Present",
      role: "Founder",
      company: "Women Wave",
      achievements: [
        "Empowering women entrepreneurs through mentoring and hand-holding",
        "Guiding through intensive building and mentoring programs",
        "Panel of domain experts providing guidance across business facets",
        "Making businesses stronger, more profitable, and resilient",
        "Helping produce better quality products and scale up operations"
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
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block transform -translate-x-0.5"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 w-8 h-8 bg-primary rounded-full hidden md:flex items-center justify-center transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-background rounded-full"></div>
                    </div>
                    
                    <div className={`flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <div className={`w-full md:w-5/12 bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
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