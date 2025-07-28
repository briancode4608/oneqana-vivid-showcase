import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Cloud } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-float delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">ONEQANA</span>
            <br />
            <span className="text-foreground">Digital Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-left delay-200">
            We craft exceptional digital experiences through cutting-edge web design, 
            software development, and seamless tech integration solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-right delay-400">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 glow-primary animate-glow-pulse"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
            >
              View Our Work
            </Button>
          </div>

          {/* Service icons */}
          <div className="flex justify-center items-center gap-8 md:gap-12 animate-scale-in delay-600">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Development</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-300 group-hover:scale-110">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">Mobile Apps</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                <Cloud className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Cloud Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;