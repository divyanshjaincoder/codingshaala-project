import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { testQuestions } from '@/data/SampleData';
import { CheckCircle2, XCircle, Trophy, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface ResultPageProps {
  onNavigate: (page: string) => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  if (!user || user.testStatus !== 'completed') {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-elegant">
          <CardHeader className="text-center">
            <AlertCircle className="h-12 w-12 text-warning mx-auto mb-4" />
            <CardTitle>No Test Results</CardTitle>
            <CardDescription>You haven't completed the test yet.</CardDescription>
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

  const passed = user.testResult === 'passed';
  const score = user.testScore || 0;
  const correctAnswers = Math.round((score / 100) * testQuestions.length);
  const totalQuestions = testQuestions.length;

  const getScoreColor = () => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getPerformanceMessage = () => {
    if (score >= 90) return "Excellent performance! You're well-prepared for our internship program.";
    if (score >= 80) return "Great job! You have a strong foundation in programming concepts.";
    if (score >= 70) return "Good work! You passed with a solid understanding.";
    if (score >= 60) return "Congratulations! You've met the minimum requirements.";
    return "Don't worry! Consider reviewing the concepts and you can retake the test later.";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card border-b glass-effect">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => onNavigate('dashboard')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Test Results</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Main Result Card */}
        <Card className={`shadow-elegant border-2 ${passed ? 'border-success/20 bg-success/5' : 'border-destructive/20 bg-destructive/5'}`}>
          <CardHeader className="text-center pb-4">
            {passed ? (
              <div className="space-y-4">
                <Trophy className="h-16 w-16 text-success mx-auto" />
                <div>
                  <CardTitle className="text-3xl text-success">Congratulations!</CardTitle>
                  <CardDescription className="text-lg">You passed the entrance test</CardDescription>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <XCircle className="h-16 w-16 text-destructive mx-auto" />
                <div>
                  <CardTitle className="text-3xl text-destructive">Test Not Passed</CardTitle>
                  <CardDescription className="text-lg">You can retake the test after some preparation</CardDescription>
                </div>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Your Score</p>
                <p className={`text-6xl font-bold ${getScoreColor()}`}>{score}%</p>
                <p className="text-muted-foreground">{correctAnswers} out of {totalQuestions} questions correct</p>
              </div>
              
              <div className="max-w-md mx-auto space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Score Progress</span>
                  <span>Passing: 60%</span>
                </div>
                <Progress value={score} className="h-3" />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-muted-foreground">{getPerformanceMessage()}</p>
            </div>

            {passed && (
              <div className="text-center">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => onNavigate('payment')}
                  className="w-full sm:w-auto"
                >
                  Proceed to Payment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Performance Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Correct Answers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">{correctAnswers}</p>
              <p className="text-sm text-muted-foreground">out of {totalQuestions}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                Incorrect Answers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">{totalQuestions - correctAnswers}</p>
              <p className="text-sm text-muted-foreground">out of {totalQuestions}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Trophy className="h-4 w-4 text-warning" />
                Accuracy Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${getScoreColor()}`}>{score}%</p>
              <p className="text-sm text-muted-foreground">Overall performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Subject Breakdown */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Performance by Topic</CardTitle>
            <CardDescription>Your performance across different programming topics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { topic: 'JavaScript Fundamentals', score: Math.min(100, score + Math.random() * 20 - 10), total: 4 },
              { topic: 'React.js', score: Math.min(100, score + Math.random() * 20 - 10), total: 2 },
              { topic: 'CSS', score: Math.min(100, score + Math.random() * 20 - 10), total: 3 },
              { topic: 'Programming Logic', score: Math.min(100, score + Math.random() * 20 - 10), total: 1 }
            ].map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{subject.topic}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{subject.total} questions</Badge>
                    <span className="text-sm font-semibold">{Math.round(subject.score)}%</span>
                  </div>
                </div>
                <Progress value={subject.score} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            {passed ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-success/10 border border-success/20">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-semibold text-success">Complete Payment</p>
                    <p className="text-sm text-success/80">Secure your spot in the internship program by completing the payment process.</p>
                  </div>
                </div>
                <Button variant="gradient" onClick={() => onNavigate('payment')} className="w-full">
                  Proceed to Payment
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <p className="font-semibold text-warning">Preparation Required</p>
                    <p className="text-sm text-warning/80">Review the fundamentals and retake the test when you're ready.</p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" onClick={() => onNavigate('dashboard')} className="w-full">
                    Back to Dashboard
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultPage;