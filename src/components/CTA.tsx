import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Join thousands of women entrepreneurs who've scaled their businesses with proven digital strategies. 
              Your success story starts with a single conversation.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <span className="font-montserrat font-semibold text-2xl text-foreground">
                Get Your Strategy Snapshot
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="font-inter text-lg text-muted-foreground">
                Send me a DM with "<strong className="text-primary">GROW</strong>" and receive a personalized 
                strategy snapshot tailored to your business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 group"
                >
                  Connect with Nikita
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Usually responds within 2 hours
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="font-montserrat font-bold text-2xl text-primary">24h</div>
              <div className="font-inter text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="font-montserrat font-bold text-2xl text-primary">95%</div>
              <div className="font-inter text-sm text-muted-foreground">Client Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="font-montserrat font-bold text-2xl text-primary">5★</div>
              <div className="font-inter text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA