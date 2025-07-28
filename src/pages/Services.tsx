import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Perfect for small businesses and startups",
      features: [
        "Custom responsive website",
        "Mobile optimization",
        "Basic SEO setup", 
        "Contact form integration",
        "3 months support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Custom web application",
        "Database integration",
        "API development",
        "Advanced analytics",
        "6 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Professional",
        "Multi-platform development",
        "Cloud infrastructure",
        "Advanced security features",
        "Dedicated project manager",
        "12 months support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left delay-200">
            Comprehensive digital solutions designed to elevate your business 
            and drive sustainable growth in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <ServicesSection />

      {/* Pricing Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Package</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options to match your project requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name}
                className={`relative hover:scale-105 transition-all duration-500 animate-fade-in ${
                  pkg.popular 
                    ? 'border-primary glow-primary bg-card/80' 
                    : 'border-primary/20 bg-card/50'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold gradient-text py-4">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      pkg.popular ? 'glow-primary' : ''
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;