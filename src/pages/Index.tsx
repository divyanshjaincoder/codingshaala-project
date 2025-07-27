import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle, 
  Star,
  Code,
  Database,
  Smartphone,
  Brain,
  Server,
  BarChart,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import heroImage from "@/assets/hero-image.jpg";
import mernCourse from "@/assets/mern-course.jpg";
import dataAnalytics from "@/assets/data-analytics-course.jpg";
import mobileApp from "@/assets/mobile-app-course.jpg";
import aiMl from "@/assets/ai-ml-course.jpg";
import nodejsBackend from "@/assets/nodejs-backend-course.jpg";
import codingshaalLogo from "@/assets/codingshaala-logo.png";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const courses = [
    {
  title: "JavaScript Programming - 15 Days Live Program",
  description: "Master core JavaScript concepts, logic building, and practical coding with live sessions in just 15 days.",
  duration: "15 Days",
  students: "200+",
  level: "Online Live Classes",
  price: "₹2,999",
  image: 'http://knowitgetit.com/wp-content/uploads/2023/05/javascripts-basics.png', // Replace with your actual image import or URL
  slug: "javascript-15days"
},
    {
      title: "MERN Stack Development",
      description: "Master full-stack development with MongoDB, Express.js, React, and Node.js. Build modern web applications from scratch.",
      duration: "4-6 months",
      students: "500+",
      level: "Beginner",
      price: "₹15,000",
      image: mernCourse,
      slug: "mern-stack"
    },
    {
      title: "Data Analytics & Visualization",
      description: "Learn to analyze data and create powerful visualizations using Python, Pandas, and modern BI tools.",
      duration: "3-4 months",
      students: "300+",
      level: "Intermediate",
      price: "₹12,000",
      image: dataAnalytics,
      slug: "data-analytics"
    },
    {
      title: "Mobile App Development (React Native)",
      description: "Build cross-platform mobile applications using React Native. Deploy to both iOS and Android.",
      duration: "4-5 months",
      students: "400+",
      level: "Intermediate",
      price: "₹18,000",
      image: mobileApp,
      slug: "mobile-app"
    },
    {
      title: "AI & Machine Learning",
      description: "Dive into artificial intelligence and machine learning with Python. Learn neural networks and deep learning.",
      duration: "5-6 months",
      students: "250+",
      level: "Advanced",
      price: "₹20,000",
      image: aiMl,
      slug: "ai-ml"
    },
    
    {
      title: "Backend Development (Node.js)",
      description: "Build scalable backend systems with Node.js, Express, and modern database technologies.",
      duration: "3-4 months",
      students: "380+",
      level: "Intermediate",
      price: "₹14,000",
      image: nodejsBackend,
      slug: "nodejs-backend"
    }
  ];

  const whyUsFeatures = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Small Batch Size",
      description: "Personalized attention with limited students per batch for better learning"
    },
    {
      icon: <img src={codingshaalLogo} alt="CodingShaala Logo" className="h-8 w-8 object-contain mx-auto" />,
      title: "Industry Recognized Certificate",
      description: "Get MCA registered certificates that are valued by employers"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Schedule",
      description: "Weekend classes designed for working professionals and students"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Placement Assistance",
      description: "Comprehensive placement support with interview preparation"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Live Projects",
      description: "Work on real industry projects to build your portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Master the Future of
                <span className="block text-yellow-300">Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Join thousands of students learning cutting-edge programming skills with industry experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary" asChild>
                  <Link to="/internship">Join Internship</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students learning coding" 
                className="rounded-lg shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses and Internship Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of programming courses designed to make you industry-ready
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* Special Internship Program */}
          <div className="bg-gradient-card rounded-lg p-8 md:p-12 shadow-card">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">Special Offer</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">MERN Stack Internship Program</h3>
              <p className="text-lg text-muted-foreground">
                Transform your career with our comprehensive 45-day internship program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Duration</h4>
                <p className="text-sm text-muted-foreground">45 Days Intensive</p>
              </div>
              <div className="text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Projects</h4>
                <p className="text-sm text-muted-foreground">2 Industry Level Projects</p>
              </div>
              <div className="text-center">
                <img src={codingshaalLogo} alt="CodingShaala Logo" className="h-8 w-8 object-contain mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Certificate</h4>
                <p className="text-sm text-muted-foreground">MCA Registered</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Program Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">One-on-one training sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Placement assistance guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">1 hour daily doubt clearing sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Weekend classes (Saturday & Sunday)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Top 2 performers get stipend</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-6 mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">₹2,500</div>
                  <p className="text-sm text-muted-foreground">Complete Program Fee</p>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <Link to="/internship">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CodingShaala?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive training that combines theoretical knowledge with practical skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your coding journey? Contact us today for more information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-card transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="tel:9630709988" className="block text-primary hover:underline font-medium">
                    9630709988
                  </a>
                  <a href="tel:9630547773" className="block text-primary hover:underline font-medium">
                    9630547773
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@codingshaala.com" className="text-primary hover:underline font-medium">
                  www.codingshaala.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle>Working Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/login">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
