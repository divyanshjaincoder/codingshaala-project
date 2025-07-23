import React from 'react';
import axios from 'axios';
import { load } from "@cashfreepayments/cashfree-js";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Clock,
  Award,
  CreditCard,
  CheckCircle,
  XCircle,
  PlayCircle,
  FileText,
  LogOut,
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const loggedInUser = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  { console.log(loggedInUser) }
  if (!user) return null;

  // ✅ ADD createOrder FUNCTION
  const createOrder = async () => {
    try {
      const response = await axios.post('https://codingshaala-backend.onrender.com/api/payment/create-order', {
        email: loggedInUser.email,
        phone: loggedInUser.phone,
        name: loggedInUser.name,
      });

      const { paymentSessionId } = response.data;

      if (!paymentSessionId) {
        alert('Failed to create Cashfree order');
        return;
      }

      const cashfree = await load({
        mode: "sandbox", // or "production"
      });

      cashfree.checkout({
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self",
      });

    } catch (err) {
      console.error('Error in creating order:', err);
      alert('Something went wrong while initiating payment.');
    }
  };

  const getTestStatusBadge = () => {
    switch (loggedInUser.status) {
      case 'new':
        return <Badge variant="secondary" className="gap-1"><Clock className="h-3 w-3" />Not Started</Badge>;
      case 'in_progress':
        return <Badge variant="destructive" className="gap-1"><PlayCircle className="h-3 w-3" />In Progress</Badge>;
      case 'completed':
        return user.testResult === 'passed'
          ? <Badge className="bg-success hover:bg-success/80 gap-1"><CheckCircle className="h-3 w-3" />Passed</Badge>
          : <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" />Failed</Badge>;
      default:
        return null;
    }
  };

  const getPaymentStatusBadge = () => {
    return user.paymentStatus === 'completed'
      ? <Badge className="bg-success hover:bg-success/80 gap-1"><CheckCircle className="h-3 w-3" />Paid</Badge>
      : <Badge variant="secondary" className="gap-1"><CreditCard className="h-3 w-3" />Pending</Badge>;
  };

  const getProgressPercentage = () => {
    return Math.round(
      (user.internshipDetails.classesCompleted / user.internshipDetails.totalClasses) * 100
    );
  };

  const getNextAction = () => {
    if (loggedInUser.status === 'new') {
      return {
        title: 'Take Entrance Test',
        description: 'Complete the assessment to join our internship program',
        action: () => navigate('/testinterface'),
        buttonText: 'Start Test',
        variant: 'gradient' as const,
      };
    }

    if (loggedInUser.status === 'test_failed') {
      return {
        title: 'Test Results',
        description: 'Unfortunately, you did not pass the entrance test',
        action: () => navigate('/result'),
        buttonText: 'View Results',
        variant: 'outline' as const,
      };
    }

    if (
      loggedInUser.status === 'test_passed' &&
      loggedInUser.isPaid === false
    ) {
      return {
        title: 'Complete Payment',
        description: 'You passed! Complete payment to start your internship',
        action: createOrder, // ✅ USE createOrder function
        buttonText: 'Pay Now',
        variant: 'gradient' as const,
      };
    }

    if (user.paymentStatus === 'completed') {
      return {
        title: 'Continue Learning',
        description: 'Access your course materials and track progress',
        action: () => navigate('/program'),
        buttonText: 'View Program',
        variant: 'gradient' as const,
      };
    }

    return null;
  };

  const nextAction = getNextAction();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card border-b glass-effect sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold gradient-text">CodingShaala</h1>
            <Badge variant="outline">Student Portal</Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold">{loggedInUser.name}</p>
              <p className="text-sm text-muted-foreground">{loggedInUser.email}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Welcome back, {loggedInUser.name.split(' ')[0]}!</h2>
          <p className="text-muted-foreground">
            Track your progress and continue your coding journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Test Status */}
          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Test Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              {getTestStatusBadge()}
              {loggedInUser.status !== "new" && (
                <p className="text-sm text-muted-foreground mt-1">Score: {loggedInUser.testScore}%</p>
              )}
            </CardContent>
          </Card>

          {/* Payment */}
          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-accent" />
                Payment
              </CardTitle>
            </CardHeader>
            <CardContent>{getPaymentStatusBadge()}</CardContent>
          </Card>

          {/* Classes */}
          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-success" />
                Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{user.internshipDetails.classesCompleted}</p>
              <p className="text-sm text-muted-foreground">
                of {user.internshipDetails.totalClasses}
              </p>
            </CardContent>
          </Card>

          {/* Project */}
          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-warning" />
                Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge
                variant={user.internshipDetails.projectSubmitted ? 'default' : 'secondary'}
              >
                {user.internshipDetails.projectSubmitted ? 'Submitted' : 'Pending'}
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Action */}
        {nextAction && (
          <Card className="shadow-elegant border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                {nextAction.title}
              </CardTitle>
              <CardDescription>{nextAction.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                // variant={nextAction.variant}
                size="lg"
                onClick={nextAction.action}
                className="w-full sm:w-auto"
              >
                {nextAction.buttonText}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Internship Progress */}
        {user.paymentStatus === 'completed' && (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Internship Progress
              </CardTitle>
              <CardDescription>Your learning journey overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>{getProgressPercentage()}%</span>
                </div>
                <Progress value={getProgressPercentage()} className="h-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-primary">
                    {user.internshipDetails.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">Duration</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-accent">
                    {user.internshipDetails.totalClasses - user.internshipDetails.classesCompleted}
                  </p>
                  <p className="text-sm text-muted-foreground">Classes Remaining</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-success">
                    {user.internshipDetails.startDate
                      ? new Date(user.internshipDetails.startDate).toLocaleDateString()
                      : 'Not Started'}
                  </p>
                  <p className="text-sm text-muted-foreground">Start Date</p>
                </div>
              </div>

              <Button variant="outline" className="w-full" onClick={() => navigate('/program')}>
                View Full Program Details
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
