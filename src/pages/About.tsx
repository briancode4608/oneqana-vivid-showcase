import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that make a real impact on your business success."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships through exceptional service."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, from conception to delivery."
    }
  ];

  const team = [
    {
      name: "Brian kiplagat",
      role: "Founder & CEO",
      bio: "10+ years in tech leadership, passionate about digital transformation.",
      gradient: "from-primary to-primary-glow",
      image:""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">ONEQANA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left delay-200">
              We're a passionate team of digital innovators dedicated to transforming 
              businesses through exceptional technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left delay-400">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, ONEQANA emerged from a simple belief: every business 
                  deserves access to world-class digital solutions that drive real results.
                </p>
                <p>
                  What started as a passionate developers ambition has grown into 
                  a full-service digital agency, serving clients across industries with 
                  innovative web design, software development, and tech integration services.
                </p>
                <p>
                  Today, we've helped 5+ businesses with 100+ on the way and looking to  transform their digital presence, 
                  streamline operations, and achieve sustainable growth in an increasingly 
                  connected world.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right delay-600">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-primary rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="text-6xl font-bold mb-4">5+</div>
                    <div className="text-xl">Years of Excellence</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-secondary rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-accent rounded-full opacity-60 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center border-primary/20 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented individuals behind ONEQANA's success, bringing diverse expertise 
              and unwavering commitment to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="text-center border-primary/20 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-32 h-32 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
                       <img
                          src={member.image}
                           alt={member.name}
                           className="w-full h-full object-cover"
                        />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
            <button className="border border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
