import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
              <p className="text-muted-foreground">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>CodingShaala Terms of Service</CardTitle>
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground">
                    By accessing and using CodingShaala's services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Course Enrollment</h3>
                  <p className="text-muted-foreground">
                    Students must complete the enrollment process and pay the required fees to access course materials and attend classes.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Payment Terms</h3>
                  <p className="text-muted-foreground">
                    Course fees must be paid in full before the start of the program. Payment methods accepted include online transfers, cards, and other specified methods.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">4. Refund Policy</h3>
                  <p className="text-muted-foreground">
                    Refunds are processed according to our refund policy. Please refer to our Return & Refund page for detailed information.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">5. Attendance Policy</h3>
                  <p className="text-muted-foreground">
                    Students are expected to maintain regular attendance. Missing more than 25% of classes may result in course termination.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">6. Intellectual Property</h3>
                  <p className="text-muted-foreground">
                    All course materials, including videos, documents, and code examples, are the intellectual property of CodingShaala and are protected by copyright.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">7. Code of Conduct</h3>
                  <p className="text-muted-foreground">
                    Students must maintain professional behavior during classes and interactions. Harassment, plagiarism, or disruptive behavior may result in immediate termination.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">8. Certificates</h3>
                  <p className="text-muted-foreground">
                    Certificates are issued upon successful completion of courses. Students must complete all assignments and meet attendance requirements.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">9. Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    CodingShaala shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">10. Contact Information</h3>
                  <p className="text-muted-foreground">
                    For any questions regarding these terms, please contact us at:
                    <br />
                    Phone: 9630709988 | 9630547773
                    <br />
                    Email: www.codingshaala.com
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;