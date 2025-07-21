import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Code, 
  Award, 
  CheckCircle, 
  Star, 
  Users, 
  GraduationCap,
  TrendingUp,
  Phone,
  Mail
} from "lucide-react";

const Internship = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "45 Days Duration",
      description: "Intensive training program designed to make you industry-ready"
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "2 Major Projects",
      description: "Work on real industry-level projects to build your portfolio"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "MCA Registered Certificate",
      description: "Get a certificate that is recognized by employers"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "One-on-One Training",
      description: "Personalized attention to ensure your success"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Placement Assistance",
      description: "Comprehensive job placement support after completion"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Weekend Classes",
      description: "Saturday and Sunday classes for working professionals"
    }
  ];

  const syllabus = [
    {
      week: "Week 1-2",
      topics: ["JavaScript Fundamentals", "ES6+ Features", "Asynchronous Programming", "DOM Manipulation"]
    },
    {
      week: "Week 3-4",
      topics: ["React.js Basics", "Components & Props", "State Management", "Hooks"]
    },
    {
      week: "Week 5-6",
      topics: ["Node.js & Express", "RESTful APIs", "Database Integration", "Authentication"]
    },
    {
      week: "Week 7-8",
      topics: ["MongoDB", "Full-Stack Integration", "Deployment", "Project Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4">Special Offer</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MERN Stack Internship</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              45-day intensive program to transform you into a full-stack developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/booking">Apply Now - ₹2,500</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive 45-day journey to master the MERN stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Syllabus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of what you'll learn each week
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabus.map((week, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{week.week}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Internship?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unique benefits that set us apart from other programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Program Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>1 hour daily doubt clearing sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Weekend classes (Saturday & Sunday)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Comprehensive placement assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Top 2 performers get stipend</span>
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Investment</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">₹2,500</div>
                  <p className="text-muted-foreground mb-4">Complete Program Fee</p>
                  <Badge variant="secondary" className="mb-4">Limited Time Offer</Badge>
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/booking">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for more information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="text-center p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <div className="space-y-2">
                <a href="tel:9630709988" className="block text-primary hover:underline">
                  9630709988
                </a>
                <a href="tel:9630547773" className="block text-primary hover:underline">
                  9630547773
                </a>
              </div>
            </Card>
            
            <Card className="text-center p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@codingshaala.com" className="text-primary hover:underline">
                www.codingshaala.com
              </a>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Internship;