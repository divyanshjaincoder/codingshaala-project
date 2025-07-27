import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- NEW
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Code2, Users } from "lucide-react";
import axios from "axios";
import { useAuth } from "@/contexts/UserAuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate(); // <-- NEW
  const { updateUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Normalize the phone number
    const normalizedPhone = phone.replace(/^(\+91|91|0)/, "");

    try {
      const success = await axios.post(
        "https://codingshaala-backend.onrender.com/api/users/login",
        {
          phone: normalizedPhone,
          password: password,
        }
      );

      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome to CodingShaala!",
        });

        console.log(success.data.user);
        updateUser(success.data.user); // ✅ now it updates React state and localStorage
        navigate("/dashboard");
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

  return (
    <div className="bg-gradient-subtle flex flex-col">
      <Header ></Header>
      <div className="w-full py-10 flex items-center">
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
                
                className="w-full bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginForm;
