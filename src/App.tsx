import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Camps from "./pages/Camps";
import CampDetail from "./pages/CampDetail";
import About from "./pages/About";
import Auth from "./pages/Auth";
import PreSurvey from "./pages/PreSurvey";
import SurveyResults from "./pages/SurveyResults";
import Dashboard from "./pages/Dashboard";
import GrowthReport from "./pages/GrowthReport";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/camps/:id" element={<CampDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/survey/pre" element={<PreSurvey />} />
          <Route path="/survey/results" element={<SurveyResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/growth-report/:childId/:year" element={<GrowthReport />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
