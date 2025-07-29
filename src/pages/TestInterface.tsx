import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/UserAuthContext";
import { testQuestions, mockAPI } from "@/data/SampleData";
import { useToast } from "@/hooks/use-toast";
import {
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface TestInterfaceProps {
  onNavigate: (page: string) => void;
}

const TestInterface: React.FC<TestInterfaceProps> = ({ onNavigate, setUserDetail }) => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 30 minutes
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  useEffect(() => {
    if (testStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmitTest(); // auto-submit on timeout
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [testStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartTest = () => {
    setTestStarted(true);
    updateUser({ ...user, testStatus: "in_progress" });
    toast({
      title: "Test Started",
      description: "You have 10 minutes to complete the test. Good luck!",
    });
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const handleSubmitTest = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const result = await mockAPI.submitTest(answers);
      console.log(result);
      const success = await axios.put(
        `https://codingshaala-backend.onrender.com/api/users/update-user/${loggedInUser._id}`,
        {
          status: result.result,
          testScore: result.score,
        }
      );
      console.log(success.data);
      updateUser(success.data); // ✅ now it updates React state and localStorage
      // localStorage.setItem('user', JSON.stringify(success.data))
      toast({
        title: "Test Submitted",
        description: "Your test has been submitted successfully!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your test. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAnsweredCount = () => Object.keys(answers).length;
  const getProgressPercentage = () =>
    (getAnsweredCount() / testQuestions.length) * 100;

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Internship Entrance Test</CardTitle>
            <CardDescription className="text-lg">
              Complete this assessment to qualify for our internship program
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Instructions */}
            <div className="grid gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Duration: 10 minutes</p>
                  <p className="text-sm text-muted-foreground">
                    Complete within the time limit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <div>
                  <p className="font-semibold">
                    Questions: {testQuestions.length}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Multiple choice questions
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                <AlertCircle className="h-5 w-5 text-warning" />
                <div>
                  <p className="font-semibold">Passing Score: 60%</p>
                  <p className="text-sm text-muted-foreground">
                    Minimum score required
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <h3 className="font-semibold text-accent mb-2">
                Test Instructions:
              </h3>
              <ul className="text-sm space-y-1 text-black">
                <li>
                  • Read each question carefully before selecting an answer
                </li>
                <li>• You can navigate between questions and change answers</li>
                <li>• Make sure to answer all questions before submitting</li>
                <li>• The test will auto-submit when time expires</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => onNavigate("dashboard")}
                className="flex-1"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
              </Button>
              <Button
                variant="gradient"
                onClick={handleStartTest}
                className="flex-1"
              >
                Start Test
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = testQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="bg-card border-b glass-effect sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">Entrance Test</h1>
              <Badge variant="outline">
                Question {currentQuestion + 1} of {testQuestions.length}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Time Remaining</p>
              <p
                className={`font-mono font-bold ${
                  timeLeft < 300 ? "text-destructive" : "text-foreground"
                }`}
              >
                {formatTime(timeLeft)}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>
                Progress: {getAnsweredCount()}/{testQuestions.length} answered
              </span>
              <span>{Math.round(getProgressPercentage())}%</span>
            </div>
            <Progress value={getProgressPercentage()} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Question {currentQuestion + 1}
              <Badge
                variant={
                  question.difficulty === "Easy"
                    ? "secondary"
                    : question.difficulty === "Medium"
                    ? "default"
                    : "destructive"
                }
              >
                {question.difficulty}
              </Badge>
            </CardTitle>
            <CardDescription className="text-lg">
              {question.question}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(question.id, index)}
                  className={`p-4 text-left rounded-lg border-2 transition-all ${
                    answers[question.id] === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[question.id] === index
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground"
                      }`}
                    >
                      {answers[question.id] === index && (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentQuestion((prev) => Math.max(0, prev - 1))
                }
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Previous
              </Button>

              {currentQuestion === testQuestions.length - 1 ? (
                <Button
                  variant="gradient"
                  onClick={handleSubmitTest}
                  disabled={
                    isSubmitting || getAnsweredCount() < testQuestions.length
                  }
                >
                  {isSubmitting ? "Submitting..." : "Submit Test"}
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={() =>
                    setCurrentQuestion((prev) =>
                      Math.min(testQuestions.length - 1, prev + 1)
                    )
                  }
                >
                  Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Question Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2">
              {testQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`aspect-square rounded-lg border-2 text-sm font-semibold transition-all ${
                    index === currentQuestion
                      ? "border-primary bg-primary text-primary-foreground"
                      : answers[testQuestions[index].id] !== undefined
                      ? "border-success bg-success/10 text-success"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestInterface;
