import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Download, Calendar, ArrowRight } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-green-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">Payment Successful!</h1>
              <p className="text-lg text-muted-foreground">
                Congratulations! Your enrollment has been confirmed.
              </p>
            </div>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Enrollment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Course:</span>
                  <span className="font-semibold">MERN Stack Internship</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Amount Paid:</span>
                  <span className="font-semibold text-green-600">₹2,499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-semibold">TXN123456789</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span className="font-semibold">July 26, 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold">45 Days</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-center">
                <Download className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Course Materials</h3>
                <p className="text-sm text-muted-foreground">Access your study materials and resources</p>
              </Card>
              
              <Card className="p-4 text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Schedule</h3>
                <p className="text-sm text-muted-foreground">View your class schedule and timings</p>
              </Card>
              
              <Card className="p-4 text-center">
                <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Certificate</h3>
                <p className="text-sm text-muted-foreground">Get MCA registered certificate</p>
              </Card>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              <div className="text-left bg-secondary/30 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Join the WhatsApp group for updates and announcements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Attend the orientation session on July 26, 2025</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Access your student dashboard for progress tracking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  Go to Dashboard
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/courses">
                  Explore More Courses
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Need Help?</strong> Contact our support team at{" "}
                <a href="tel:9630709988" className="underline">9630709988</a> or{" "}
                <a href="tel:9630547773" className="underline">9630547773</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;