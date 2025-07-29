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
    title: "JavaScript Programming - 15 Days Live Program",
    slug: "javascript-15days",
    description:
      "Learn JavaScript from scratch with live interactive classes. Focus on logic building, core concepts, and practical coding exercises designed for beginners.",
    duration: "15 Days",
    students: "200+",
    level: "Beginner to Intermediate",
    price: "₹2,999",
    rating: 4.7,
    reviews: 90,
    instructor: "Pradhumn Sir",
    instructorExp: "3.5+ years in web development & training",
    image:
      "http://knowitgetit.com/wp-content/uploads/2023/05/javascripts-basics.png",
    features: [
      "Live interactive sessions",
      "Daily coding challenges",
      "Certificate of completion",
      "Beginner-friendly content",
      "Logic building focus",
      "Live doubt-solving",
      "Hands-on practice",
      "Affordable pricing",
    ],
    curriculum: [
      {
        module: "Day 1: JavaScript Introduction",
        topics: ["JS History", "Setup & Syntax", "Variables & Data Types"],
        duration: "1 day",
      },
      {
        module: "Day 2: Operators & Expressions",
        topics: ["Arithmetic", "Assignment", "Comparison", "Logical Operators"],
        duration: "1 day",
      },
      {
        module: "Day 3: Control Flow",
        topics: ["if-else", "switch", "ternary operator"],
        duration: "1 day",
      },
      {
        module: "Day 4: Loops",
        topics: ["for", "while", "do-while", "nested loops"],
        duration: "1 day",
      },
      {
        module: "Day 5: Functions",
        topics: [
          "Function declaration",
          "Parameters",
          "Return values",
          "Arrow functions",
        ],
        duration: "1 day",
      },
      {
        module: "Day 6-7: Arrays",
        topics: [
          "Array basics",
          "Array methods (map, filter, reduce)",
          "Looping through arrays",
        ],
        duration: "2 days",
      },
      {
        module: "Day 8-9: Objects",
        topics: [
          "Object literals",
          "Accessing properties",
          "Nested objects",
          "Object methods",
        ],
        duration: "2 days",
      },
      {
        module: "Day 10: DOM Basics",
        topics: ["DOM selection", "DOM manipulation", "Event listeners"],
        duration: "1 day",
      },
      {
        module: "Day 11: Events & Form Handling",
        topics: ["click, input, submit events", "basic form validation"],
        duration: "1 day",
      },
      {
        module: "Day 12: Mini Project",
        topics: [
          "Build a small project using DOM & logic (e.g., To-Do app or Calculator)",
        ],
        duration: "1 day",
      },
      {
        module: "Day 13-14: Logic Building",
        topics: [
          "Practice logical questions",
          "Loops + conditions",
          "Interview-style problems",
        ],
        duration: "2 days",
      },
      {
        module: "Day 15: Final Test + Feedback",
        topics: ["Final assessment", "Feedback & Q&A"],
        duration: "1 day",
      },
    ],
  },
  {
    title: "MERN Stack Development",
    slug: "mern-stack",
    description:
      "Master full-stack development with MongoDB, Express.js, React, and Node.js. Build modern web applications from scratch.",
    duration: "4-6 months",
    students: "500+",
    level: "Beginner",
    price: "₹15,000",
    image: mernCourse,
    rating: 4.8,
    reviews: 120,
    instructor: "Pradhumn Sir",
    instructorExp: "3.5+ years in full-stack web development",
    features: [
      "Live full-stack training",
      "Daily assignments & live projects",
      "MongoDB, Express, React, Node.js",
      "Authentication & REST APIs",
      "Deployment training",
      "Certificate & internship letter",
    ],
    curriculum: [], // Add if needed
  },
  {
    title: "Data Analytics & Visualization",
    slug: "data-analytics",
    description:
      "Learn to analyze data and create powerful visualizations using Python, Pandas, and modern BI tools.",
    duration: "3-4 months",
    students: "300+",
    level: "Intermediate",
    price: "₹12,000",
    image: dataAnalytics,
    rating: 4.6,
    reviews: 85,
    instructor: "Pradhumn Sir",
    instructorExp: "3+ years in Python & data analysis",
    features: [
      "Python for data analysis",
      "Pandas, NumPy, Matplotlib, Seaborn",
      "Excel + SQL basics",
      "Mini data projects",
      "BI tool overview (Power BI/Tableau)",
      "Internship project + certificate",
    ],
    curriculum: [],
  },
  {
    title: "Mobile App Development (React Native)",
    slug: "mobile-app",
    description:
      "Build cross-platform mobile applications using React Native. Deploy to both iOS and Android.",
    duration: "4-5 months",
    students: "400+",
    level: "Intermediate",
    price: "₹18,000",
    image: mobileApp,
    rating: 4.5,
    reviews: 70,
    instructor: "Pradhumn Sir",
    instructorExp: "3.5+ years in React Native",
    features: [
      "React Native core concepts",
      "Reusable components",
      "Navigation & State",
      "Integration with APIs",
      "Firebase & notifications",
      "Live project + internship",
    ],
    curriculum: [],
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-ml",
    description:
      "Dive into artificial intelligence and machine learning with Python. Learn neural networks and deep learning.",
    duration: "5-6 months",
    students: "250+",
    level: "Advanced",
    price: "₹20,000",
    image: aiMl,
    rating: 4.9,
    reviews: 65,
    instructor: "Pradhumn Sir",
    instructorExp: "3.5+ years in AI/ML & research",
    features: [
      "Python for ML",
      "Supervised & unsupervised learning",
      "Model evaluation",
      "NLP & Computer Vision basics",
      "Project-based learning",
      "Certificate of completion",
    ],
    curriculum: [],
  },
  {
    title: "Backend Development (Node.js)",
    slug: "nodejs-backend",
    description:
      "Build scalable backend systems with Node.js, Express, and modern database technologies.",
    duration: "3-4 months",
    students: "380+",
    level: "Intermediate",
    price: "₹14,000",
    image: nodejsBackend,
    rating: 4.6,
    reviews: 90,
    instructor: "Pradhumn Sir",
    instructorExp: "3.5+ years in backend development",
    features: [
      "Node.js & Express.js",
      "MongoDB with Mongoose",
      "Authentication (JWT)",
      "REST API Design",
      "Error handling",
      "Backend deployment",
    ],
    curriculum: [],
  },
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
            {/* {levels.map((level) => (
              <Badge key={level} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                {level}
              </Badge>
            ))} */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard course={course} key={index} {...course} />
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