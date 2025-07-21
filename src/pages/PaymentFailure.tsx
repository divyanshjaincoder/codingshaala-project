import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { XCircle, RefreshCw, Phone, Mail, ArrowLeft } from "lucide-react";

const PaymentFailure = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-red-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <XCircle className="h-20 w-20 text-red-500 mx-auto mb-6" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">Payment Failed</h1>
              <p className="text-lg text-muted-foreground">
                We encountered an issue processing your payment. Don't worry, no amount has been deducted.
              </p>
            </div>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Common Reasons for Payment Failure</CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-sm">Insufficient balance in your account</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-sm">Card expired or blocked</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-sm">Incorrect card details entered</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-sm">Bank server temporarily unavailable</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-sm">Transaction limits exceeded</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">What You Can Do</h2>
              <div className="text-left bg-secondary/30 p-6 rounded-lg">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <RefreshCw className="h-4 w-4 text-primary" />
                    <span>Try the payment again with correct details</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <RefreshCw className="h-4 w-4 text-primary" />
                    <span>Use a different payment method or card</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <RefreshCw className="h-4 w-4 text-primary" />
                    <span>Check your internet connection and try again</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <RefreshCw className="h-4 w-4 text-primary" />
                    <span>Contact your bank if the issue persists</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/booking">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/courses">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="p-4 text-center">
                <Phone className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Call Support</h3>
                <div className="space-y-1">
                  <a href="tel:9630709988" className="block text-sm text-primary hover:underline">
                    9630709988
                  </a>
                  <a href="tel:9630547773" className="block text-sm text-primary hover:underline">
                    9630547773
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 text-center">
                <Mail className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <a href="mailto:info@codingshaala.com" className="text-sm text-primary hover:underline">
                  www.codingshaala.com
                </a>
              </Card>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Your course seat is still reserved for the next 24 hours. 
                Complete your payment within this time to secure your enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PaymentFailure;