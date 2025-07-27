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
  Download,
} from "lucide-react";
import mernCourse from "@/assets/mern-course.jpg";
import { useEffect } from "react";

const CourseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();

  // This would typically come from an API or database
  const courseData = JSON.parse(localStorage.getItem('courseDetail'))
  // const courseData = {
  //   title: "JavaScript Programming - 15 Days Live Program",
  //   description:
  //     "Learn JavaScript from scratch with live interactive classes. Focus on logic building, core concepts, and practical coding exercises designed for beginners.",
  //   image:
  //     "http://knowitgetit.com/wp-content/uploads/2023/05/javascripts-basics.png", // replace with actual image import or URL
  //   price: "₹2999",
  //   duration: "15 Days",
  //   students: "200+",
  //   level: "Beginner to Intermediate",
  //   rating: 4.7,
  //   reviews: 90,
  //   instructor: "Pradhumn Sir",
  //   instructorExp: "3.5+ years in web development & training",
  //   features: [
  //     "Live interactive sessions",
  //     "Daily coding challenges",
  //     "Certificate of completion",
  //     "Beginner-friendly content",
  //     "Logic building focus",
  //     "Live doubt-solving",
  //     "Hands-on practice",
  //     "Affordable pricing",
  //   ],
  //   curriculum: [
  //     {
  //       module: "Day 1: JavaScript Introduction",
  //       topics: ["JS History", "Setup & Syntax", "Variables & Data Types"],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 2: Operators & Expressions",
  //       topics: ["Arithmetic", "Assignment", "Comparison", "Logical Operators"],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 3: Control Flow",
  //       topics: ["if-else", "switch", "ternary operator"],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 4: Loops",
  //       topics: ["for", "while", "do-while", "nested loops"],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 5: Functions",
  //       topics: [
  //         "Function declaration",
  //         "Parameters",
  //         "Return values",
  //         "Arrow functions",
  //       ],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 6-7: Arrays",
  //       topics: [
  //         "Array basics",
  //         "Array methods (map, filter, reduce)",
  //         "Looping through arrays",
  //       ],
  //       duration: "2 days",
  //     },
  //     {
  //       module: "Day 8-9: Objects",
  //       topics: [
  //         "Object literals",
  //         "Accessing properties",
  //         "Nested objects",
  //         "Object methods",
  //       ],
  //       duration: "2 days",
  //     },
  //     {
  //       module: "Day 10: DOM Basics",
  //       topics: ["DOM selection", "DOM manipulation", "Event listeners"],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 11: Events & Form Handling",
  //       topics: ["click, input, submit events", "basic form validation"],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 12: Mini Project",
  //       topics: [
  //         "Build a small project using DOM & logic (e.g., To-Do app or Calculator)",
  //       ],
  //       duration: "1 day",
  //     },
  //     {
  //       module: "Day 13-14: Logic Building",
  //       topics: [
  //         "Practice logical questions",
  //         "Loops + conditions",
  //         "Interview-style problems",
  //       ],
  //       duration: "2 days",
  //     },
  //     {
  //       module: "Day 15: Final Test + Feedback",
  //       topics: ["Final assessment", "Feedback & Q&A"],
  //       duration: "1 day",
  //     },
  //   ],
  // };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">
                {courseData.level}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {courseData.title}
              </h1>
              <p className="text-lg mb-6 text-white/90">
                {courseData.description}
              </p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">
                    {courseData.rating} ({courseData.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">
                    {courseData.students} students
                  </span>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white  hover:bg-white text-primary"
                >
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
                        This 15-day live JavaScript course is crafted for
                        beginners and aspiring developers who want to build a
                        strong foundation in programming. Through daily
                        interactive sessions, logic-building exercises, and
                        real-world examples, you'll gain the skills needed to
                        kickstart your development journey.
                      </p>

                      <h3 className="font-semibold text-lg">
                        What You'll Learn
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {courseData.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="font-semibold text-lg">Prerequisites</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• No prior programming experience required</li>
                        <li>• Just basic computer knowledge</li>
                        <li>• A laptop/PC with internet connection</li>
                        <li>• Enthusiasm to learn and code daily</li>
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
                              <li
                                key={topicIndex}
                                className="flex items-center space-x-2"
                              >
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
                          <span className="text-2xl font-bold text-primary">
                            PS
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {courseData.instructor}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {courseData.instructorExp}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground">
                        Pradhumn is an experienced web development instructor
                        and full-stack developer. With a passion for teaching
                        and simplifying complex topics, he has guided hundreds
                        of students to kickstart their careers in tech. His
                        practical, hands-on approach makes coding fun and
                        effective.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            350+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Students Taught
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            4.7
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Average Rating
                          </div>
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
                  <div className="text-3xl font-bold text-primary">
                    {courseData.price}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Duration: {courseData.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {courseData.students} enrolled
                      </span>
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
                    <a
                      href="tel:9630709988"
                      className="block text-sm text-primary hover:underline"
                    >
                      📞 9630709988
                    </a>
                    <a
                      href="tel:9630547773"
                      className="block text-sm text-primary hover:underline"
                    >
                      📞 9630547773
                    </a>
                    <a
                      href="mailto:info@codingshaala.com"
                      className="block text-sm text-primary hover:underline"
                    >
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
