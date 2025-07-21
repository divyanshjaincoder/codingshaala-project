import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mernCourse from "@/assets/mern-course.jpg";
import dataAnalytics from "@/assets/data-analytics-course.jpg";
import mobileApp from "@/assets/mobile-app-course.jpg";
import aiMl from "@/assets/ai-ml-course.jpg";
import pythonBackend from "@/assets/python-backend-course.jpg";
import nodejsBackend from "@/assets/nodejs-backend-course.jpg";

const AllCourses = () => {
  const courses = [
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
      title: "Backend Development (Python)",
      description: "Master backend development with Python, Django, Flask, and database management.",
      duration: "3-4 months",
      students: "350+",
      level: "Intermediate",
      price: "₹14,000",
      image: pythonBackend,
      slug: "python-backend"
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

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">All Courses</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Explore our comprehensive range of programming courses designed to make you industry-ready
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/internship">Join Our Internship Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {levels.map((level) => (
              <Badge key={level} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {level}
              </Badge>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/login">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/internship">Apply for Internship</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AllCourses;