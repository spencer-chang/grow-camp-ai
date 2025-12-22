import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Camps from "./pages/Camps";
import CampDetail from "./pages/CampDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import PreSurvey from "./pages/PreSurvey";
import SurveyResults from "./pages/SurveyResults";
import Dashboard from "./pages/Dashboard";
import GrowthReport from "./pages/GrowthReport";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// English pages
import HomeEN from "./pages/en/Home";
import CampsEN from "./pages/en/Camps";
import CampDetailEN from "./pages/en/CampDetail";
import AboutEN from "./pages/en/About";
import ContactEN from "./pages/en/Contact";
import PreSurveyEN from "./pages/en/PreSurvey";
import SurveyResultsEN from "./pages/en/SurveyResults";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
        <Routes>
          {/* Chinese Routes (Default) */}
          <Route path="/" element={<Index />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/camps/:id" element={<CampDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/survey/pre" element={<PreSurvey />} />
          <Route path="/survey/results" element={<SurveyResults />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/growth-report/:childId/:year" element={<GrowthReport />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* English Routes */}
          <Route path="/en/home" element={<HomeEN />} />
          <Route path="/en/camps" element={<CampsEN />} />
          <Route path="/en/camp/:id" element={<CampDetailEN />} />
          <Route path="/en/about" element={<AboutEN />} />
          <Route path="/en/contact" element={<ContactEN />} />
          <Route path="/en/survey/pre" element={<PreSurveyEN />} />
          <Route path="/en/survey/results" element={<SurveyResultsEN />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
