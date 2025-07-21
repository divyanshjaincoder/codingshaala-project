import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Star, 
  Calendar,
  Globe,
  Download
} from "lucide-react";
import mernCourse from "@/assets/mern-course.jpg";

const CourseDetail = () => {
  const { slug } = useParams();
  
  // This would typically come from an API or database
  const courseData = {
    title: "MERN Stack Development",
    description: "Master full-stack web development with MongoDB, Express.js, React, and Node.js. Build modern, scalable web applications from scratch.",
    image: mernCourse,
    price: "₹15,000",
    duration: "4-6 months",
    students: "500+",
    level: "Beginner to Advanced",
    rating: 4.8,
    reviews: 120,
    instructor: "Rahul Sharma",
    instructorExp: "5+ years in web development",
    features: [
      "Live interactive sessions",
      "Real-world projects",
      "Placement assistance",
      "Industry-recognized certificate",
      "Lifetime access to materials",
      "1-on-1 mentoring",
      "Job interview preparation",
      "Community support"
    ],
    curriculum: [
      {
        module: "Module 1: JavaScript Fundamentals",
        topics: ["ES6+ Features", "Async/Await", "Promises", "DOM Manipulation"],
        duration: "2 weeks"
      },
      {
        module: "Module 2: React.js",
        topics: ["Components", "State Management", "Hooks", "Router"],
        duration: "3 weeks"
      },
      {
        module: "Module 3: Node.js & Express",
        topics: ["Server Setup", "REST APIs", "Middleware", "Authentication"],
        duration: "3 weeks"
      },
      {
        module: "Module 4: MongoDB",
        topics: ["Database Design", "CRUD Operations", "Mongoose", "Aggregation"],
        duration: "2 weeks"
      },
      {
        module: "Module 5: Full-Stack Integration",
        topics: ["Frontend-Backend Integration", "State Management", "Error Handling"],
        duration: "2 weeks"
      },
      {
        module: "Module 6: Deployment & Production",
        topics: ["Heroku", "AWS", "CI/CD", "Performance Optimization"],
        duration: "2 weeks"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">{courseData.level}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseData.title}</h1>
              <p className="text-lg mb-6 text-white/90">{courseData.description}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{courseData.rating} ({courseData.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{courseData.students} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{courseData.duration}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/booking">Enroll Now - {courseData.price}</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Download Syllabus
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={courseData.image} 
                alt={courseData.title}
                className="rounded-lg shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        This comprehensive MERN Stack course is designed to take you from beginner to advanced level. 
                        You'll learn to build modern, scalable web applications using the most in-demand technologies.
                      </p>
                      
                      <h3 className="font-semibold text-lg">What You'll Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {courseData.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-semibold text-lg">Prerequisites</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Basic understanding of HTML, CSS, and JavaScript</li>
                        <li>• Familiarity with programming concepts</li>
                        <li>• Computer with internet connection</li>
                        <li>• Willingness to learn and practice</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="curriculum" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Curriculum</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {courseData.curriculum.map((module, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{module.module}</h3>
                            <Badge variant="outline">{module.duration}</Badge>
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center space-x-2">
                                <BookOpen className="h-3 w-3" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meet Your Instructor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">RS</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{courseData.instructor}</h3>
                          <p className="text-sm text-muted-foreground">{courseData.instructorExp}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">
                        Rahul is a seasoned full-stack developer with extensive experience in building 
                        scalable web applications. He has worked with leading tech companies and has 
                        mentored hundreds of students successfully.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">500+</div>
                          <div className="text-sm text-muted-foreground">Students Taught</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">4.9</div>
                          <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">{courseData.price}</div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Duration: {courseData.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{courseData.students} enrolled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Certificate included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Online classes</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button asChild>
                      <Link to="/booking">Enroll Now</Link>
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Have questions about this course? Our team is here to help!
                  </p>
                  <div className="space-y-2">
                    <a href="tel:9630709988" className="block text-sm text-primary hover:underline">
                      📞 9630709988
                    </a>
                    <a href="tel:9630547773" className="block text-sm text-primary hover:underline">
                      📞 9630547773
                    </a>
                    <a href="mailto:info@codingshaala.com" className="block text-sm text-primary hover:underline">
                      ✉️ www.codingshaala.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;