import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllCourses from "./pages/AllCourses";
import Internship from "./pages/Internship";
import CourseDetail from "./pages/CourseDetail";
import Booking from "./pages/Booking";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import TestInterface from "./pages/TestInterface";
import PaymentPage from "./pages/PaymentPage";
import LoginForm from "./pages/LoginForm";
import ResultPage from "./pages/ResultPage";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment-status" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/ResultPage" element={<ResultPage />} />
          <Route path="/TestInterface" element={<TestInterface />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
