import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>CodingShaala Privacy Policy</CardTitle>
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, enroll in a course, or contact us for support.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">2. How We Use Your Information</h3>
                  <p className="text-muted-foreground">
                    We use the information we collect to provide, maintain, and improve our services, process payments, and communicate with you about your courses.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Information Sharing</h3>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">4. Data Security</h3>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">5. Cookies</h3>
                  <p className="text-muted-foreground">
                    We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">6. Third-Party Services</h3>
                  <p className="text-muted-foreground">
                    We may use third-party services for analytics, payments, and other functionalities. These services have their own privacy policies.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">7. Your Rights</h3>
                  <p className="text-muted-foreground">
                    You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">8. Children's Privacy</h3>
                  <p className="text-muted-foreground">
                    Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">9. Changes to This Policy</h3>
                  <p className="text-muted-foreground">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-3">10. Contact Us</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about this privacy policy, please contact us at:
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

export default Privacy;