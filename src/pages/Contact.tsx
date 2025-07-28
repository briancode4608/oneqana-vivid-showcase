import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "hello@oneqana.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      content: "123 Tech Street, Digital City",
      description: "Visit our headquarters"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-left delay-200">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="text-center border-primary/20 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {info.icon}
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm animate-slide-in-left delay-400">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company"
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="software-development">Software Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="tech-integration">Tech Integration</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <select 
                    id="budget"
                    className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-foreground"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..."
                    className="min-h-32 bg-background/50"
                  />
                </div>
                
                <Button className="w-full glow-primary" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8 animate-slide-in-right delay-600">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Let's Build Something <span className="gradient-text">Amazing</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're a startup looking to make your mark or an established 
                  business ready to innovate, we're here to help turn your ideas into reality.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Discovery Call</h4>
                      <p className="text-sm text-muted-foreground">
                        We start with a conversation to understand your goals and requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Proposal & Planning</h4>
                      <p className="text-sm text-muted-foreground">
                        We create a detailed proposal and project roadmap tailored to your needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Development & Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        We bring your vision to life with regular updates and transparent communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-primary/20 bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">Quick Response Guarantee</h4>
                  <p className="text-primary-foreground/80">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent projects, don't hesitate to call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of the tech district, we're always ready to meet in person.
            </p>
          </div>
          
          <div className="w-full h-64 bg-gradient-secondary rounded-2xl flex items-center justify-center">
            <div className="text-center text-secondary-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map Coming Soon</p>
              <p className="text-secondary-foreground/70">123 Tech Street, Digital City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;