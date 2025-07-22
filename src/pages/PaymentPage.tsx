import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { paymentPlans, mockAPI } from '@/data/SampleData';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, CreditCard, Shield, Clock, ArrowLeft, Star } from 'lucide-react';

interface PaymentPageProps {
  onNavigate: (page: string) => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate }) => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState(paymentPlans[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  if (!user || user.testResult !== 'passed') {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-elegant">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 text-warning mx-auto mb-4" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You need to pass the entrance test to access this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" onClick={() => onNavigate('dashboard')} className="w-full">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const selectedPlanDetails = paymentPlans.find(plan => plan.id === selectedPlan);

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const result = await mockAPI.processPayment(selectedPlan, paymentDetails);
      
      if (result.success) {
        updateUser({ 
          paymentStatus: 'completed',
          internshipDetails: {
            ...user.internshipDetails,
            startDate: new Date().toISOString().split('T')[0]
          }
        });

        toast({
          title: "Payment Successful!",
          description: `Payment completed successfully. Transaction ID: ${result.transactionId}`,
        });

        onNavigate('program');
      } else {
        toast({
          title: "Payment Failed",
          description: "There was an issue processing your payment. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card border-b glass-effect">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => onNavigate('result')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Complete Your Payment</h1>
              <p className="text-muted-foreground">Secure your spot in the internship program</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Plans */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Choose Your Payment Plan</h2>
              <p className="text-muted-foreground">Select the payment option that works best for you</p>
            </div>

            <div className="space-y-4">
              {paymentPlans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan.id 
                      ? 'border-primary shadow-elegant ring-2 ring-primary/20' 
                      : 'hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {plan.name}
                        {plan.recommended && (
                          <Badge className="bg-gradient-primary">
                            <Star className="h-3 w-3 mr-1" />
                            Recommended
                          </Badge>
                        )}
                      </CardTitle>
                      <div className="text-right">
                        <p className="text-2xl font-bold">₹{plan.price.toLocaleString()}</p>
                        {plan.originalPrice > plan.price && (
                          <p className="text-sm text-muted-foreground line-through">
                            ₹{plan.originalPrice.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                    {plan.discount > 0 && (
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          {plan.discount}% OFF
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Save ₹{(plan.originalPrice - plan.price).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Details
                </CardTitle>
                <CardDescription>Your payment information is secure and encrypted</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input
                      id="cardholderName"
                      value={paymentDetails.cardholderName}
                      onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardholderName: e.target.value }))}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, expiryDate: e.target.value }))}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        value={paymentDetails.cvv}
                        onChange={(e) => setPaymentDetails(prev => ({ ...prev, cvv: e.target.value }))}
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Plan:</span>
                        <span className="font-semibold">{selectedPlanDetails?.name}</span>
                      </div>
                      {selectedPlanDetails && selectedPlanDetails.originalPrice > selectedPlanDetails.price && (
                        <div className="flex justify-between text-success">
                          <span>Discount ({selectedPlanDetails.discount}%):</span>
                          <span>-₹{(selectedPlanDetails.originalPrice - selectedPlanDetails.price).toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span>₹{selectedPlanDetails?.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing Payment..." : "Complete Payment"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Your payment is secured with 256-bit SSL encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Why Choose CodingShaala?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-semibold">Industry-Recognized Certification</p>
                    <p className="text-sm text-muted-foreground">Get certified by leading tech companies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">6-Month Comprehensive Program</p>
                    <p className="text-sm text-muted-foreground">Complete full-stack development training</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-warning" />
                  <div>
                    <p className="font-semibold">Job Placement Assistance</p>
                    <p className="text-sm text-muted-foreground">Get help finding your dream job</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;