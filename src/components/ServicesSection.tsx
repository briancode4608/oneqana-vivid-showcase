import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Cloud, Database, Zap } from "lucide-react";
import servicesIcon from "@/assets/services-icon.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Web Design",
      description: "Stunning, responsive designs that captivate your audience and drive conversions.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies and best practices.",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Integration",
      description: "Seamless cloud solutions that scale with your business and optimize performance.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Robust database architectures that ensure data integrity and lightning-fast queries.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tech Integration",
      description: "Connecting systems and automating workflows for maximum efficiency and productivity.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions 
            that transform your business and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:scale-105 transition-all duration-500 border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in delay-200">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="animate-scale-in delay-400">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="animate-scale-in delay-600">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="animate-scale-in delay-800">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;