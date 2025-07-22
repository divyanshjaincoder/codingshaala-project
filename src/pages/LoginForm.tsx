
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- NEW
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Code2, Users } from 'lucide-react';
import axios from 'axios'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate(); // <-- NEW

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  // Normalize the phone number
  const normalizedPhone = phone.replace(/^(\+91|91|0)/, '');

  try {
    const success = await axios.post('https://codingshaala-backend.onrender.com/api/users/login', {
      phone: normalizedPhone,
      password: password
    });

    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome to CodingShaala!",
      });
      localStorage.setItem('user', JSON.stringify(success.data.user));
      navigate('/dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsLoading(false);
  }
};


  const fillSampleCredentials = (userIndex: number) => {
    const sampleEmails = [
      'student1@example.com',
      'student2@example.com', 
      'student3@example.com'
    ];
    setEmail(sampleEmails[userIndex]);
    setPassword('password123');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
              CodingShaala
            </h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
              Transform your coding skills with our comprehensive internship program
            </p>
          </div>

          <div className="grid gap-6 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border glass-effect">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Live Projects</h3>
                <p className="text-sm text-muted-foreground">Work on real-world applications</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border glass-effect">
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Expert Mentorship</h3>
                <p className="text-sm text-muted-foreground">One-on-one guidance from industry experts</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border glass-effect">
              <div className="p-2 rounded-lg bg-success/10">
                <BookOpen className="h-6 w-6 text-success" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Certification</h3>
                <p className="text-sm text-muted-foreground">Industry-recognized certificate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <Card className="w-full max-w-md mx-auto shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Student Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div> */}
               <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-3 text-center">
                Test with sample accounts:
              </p>
              <div className="grid gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fillSampleCredentials(0)}
                  className="justify-start text-xs"
                >
                  Student 1 (Test Not Taken)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fillSampleCredentials(1)}
                  className="justify-start text-xs"
                >
                  Student 2 (Test Passed, Paid)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fillSampleCredentials(2)}
                  className="justify-start text-xs"
                >
                  Student 3 (Test Failed)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;