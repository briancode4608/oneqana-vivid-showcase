import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-primary to-primary-glow",
      featured: true
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development", 
      description: "Patient management app with appointment scheduling, medical records, and telemedicine features.",
      tech: ["React Native", "Firebase", "WebRTC"],
      gradient: "from-secondary to-secondary-glow",
      featured: true
    },
    {
      title: "Financial Dashboard",
      category: "Web Application",
      description: "Real-time financial analytics platform with custom charts, reporting, and data visualization.",
      tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      gradient: "from-accent to-accent-glow",
      featured: false
    },
    {
      title: "Restaurant Management System",
      category: "Full Stack",
      description: "Complete restaurant solution with POS, inventory tracking, and customer management.",
      tech: ["Angular", "Express.js", "MySQL"],
      gradient: "from-primary to-secondary",
      featured: false
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing platform with advanced search, virtual tours, and agent management.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      gradient: "from-secondary to-accent",
      featured: false
    },
    {
      title: "Learning Management System",
      category: "Educational Platform",
      description: "Online learning platform with course creation, progress tracking, and interactive assessments.",
      tech: ["React", "Django", "Redis"],
      gradient: "from-accent to-primary",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Full Stack", "Web Application", "Educational Platform"];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left delay-200">
            Explore our collection of successful projects that showcase our expertise 
            in web development, mobile applications, and digital transformation.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-400">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  index === 0 ? "glow-primary" : "hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Featured</span> Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:scale-105 transition-all duration-500 border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl font-bold text-primary-foreground/20">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">{project.category}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            All <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:scale-105 transition-all duration-500 border-primary/20 bg-card/50 backdrop-blur-sm hover:glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className={`h-40 bg-gradient-to-r ${project.gradient} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-4xl font-bold text-primary-foreground/30">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">{project.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-8">
            Let's bring your vision to life with our proven expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;