import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  Download,
  PlayCircle,
  FileText,
  User
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const enrolledCourses = [
    {
      id: 1,
      title: "MERN Stack Development",
      progress: 75,
      status: "In Progress",
      nextClass: "2024-01-20",
      totalLessons: 40,
      completedLessons: 30
    },
    {
      id: 2,
      title: "MERN Stack Internship",
      progress: 45,
      status: "Active",
      nextClass: "2024-01-21",
      totalLessons: 20,
      completedLessons: 9
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a React Todo App",
      dueDate: "2024-01-25",
      status: "Pending",
      course: "MERN Stack Development"
    },
    {
      id: 2,
      title: "Create REST API with Node.js",
      dueDate: "2024-01-28",
      status: "In Progress",
      course: "MERN Stack Internship"
    }
  ];

  const achievements = [
    {
      title: "Quick Learner",
      description: "Completed 10 lessons in a week",
      date: "2024-01-15",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Perfect Attendance",
      description: "Attended all classes this month",
      date: "2024-01-10",
      icon: <Calendar className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Student Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Track your progress and manage your courses.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                    <p className="text-xs text-muted-foreground">Currently enrolled</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
                    <PlayCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">39</div>
                    <p className="text-xs text-muted-foreground">Total lessons completed</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{assignments.filter(a => a.status === "Pending").length}</div>
                    <p className="text-xs text-muted-foreground">Due this week</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-full">
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{achievement.title}</h4>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                          <Badge variant="secondary">{achievement.date}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Classes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-sm">{course.title}</h4>
                            <p className="text-xs text-muted-foreground">Next class: {course.nextClass}</p>
                          </div>
                          <Badge variant="outline">{course.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <Badge variant={course.status === "Active" ? "default" : "secondary"}>
                          {course.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          {course.completedLessons} of {course.totalLessons} lessons completed
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Continue Learning
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Resources
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="assignments" className="mt-6">
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <Card key={assignment.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">Course: {assignment.course}</p>
                          <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant={assignment.status === "Pending" ? "destructive" : "default"}>
                            {assignment.status}
                          </Badge>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                        <p className="text-sm text-muted-foreground">+91 9876543210</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button>Edit Profile</Button>
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;