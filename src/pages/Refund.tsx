import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Return & Refund Policy</h1>
              <p className="text-muted-foreground">
                Our refund policy is designed to be fair and transparent for all students.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>CodingShaala Return & Refund Policy</CardTitle>
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Refund Eligibility</h3>
                  <p className="text-muted-foreground">
                    Refunds are available under specific circumstances and within certain timeframes as outlined in this policy.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Course Refunds</h3>
                  <p className="text-muted-foreground">
                    Full refunds are available if cancellation is requested at least 7 days before the course start date. After the course begins, refunds are subject to the following conditions:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Within 7 days of course start: 80% refund</li>
                    <li>Within 14 days of course start: 50% refund</li>
                    <li>After 14 days: No refund available</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Internship Program Refunds</h3>
                  <p className="text-muted-foreground">
                    For the MERN Stack Internship Program:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Before program start: Full refund (₹2,500)</li>
                    <li>Within first week: 70% refund (₹1,750)</li>
                    <li>After first week: No refund available</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">4. Refund Process</h3>
                  <p className="text-muted-foreground">
                    To request a refund:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 text-muted-foreground">
                    <li>Contact our support team via phone or email</li>
                    <li>Provide your enrollment details and reason for refund</li>
                    <li>Submit the refund request form</li>
                    <li>Wait for approval and processing</li>
                  </ol>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">5. Processing Time</h3>
                  <p className="text-muted-foreground">
                    Approved refunds will be processed within 7-10 business days. The refund will be credited to the original payment method.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">6. Non-Refundable Items</h3>
                  <p className="text-muted-foreground">
                    The following items are non-refundable:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Registration fees</li>
                    <li>Certificate processing fees</li>
                    <li>Downloaded course materials</li>
                    <li>Completed assignments and projects</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">7. Course Cancellation by CodingShaala</h3>
                  <p className="text-muted-foreground">
                    If we cancel a course due to insufficient enrollment or other reasons, students will receive a full refund or can transfer to another course.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">8. Exceptional Circumstances</h3>
                  <p className="text-muted-foreground">
                    In case of medical emergencies or other exceptional circumstances, refunds may be considered on a case-by-case basis.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">9. Contact for Refunds</h3>
                  <p className="text-muted-foreground">
                    To request a refund or ask questions about this policy:
                    <br />
                    Phone: 9630709988 | 9630547773
                    <br />
                    Email: www.codingshaala.com
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">10. Policy Updates</h3>
                  <p className="text-muted-foreground">
                    This refund policy may be updated from time to time. Students will be notified of any changes that affect their enrolled courses.
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

export default Refund;