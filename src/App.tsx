
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import Layout from "./components/Layout";
import HomePage from "./pages/Index";
import ResearchPage from "./pages/ResearchPage";
import TeamPage from "./pages/TeamPage";
import PublicationsPage from "./pages/PublicationsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import LabLifePage from "./pages/LabLifePage";
import ResourcesPage from "./pages/ResourcesPage";
import StudentsPage from "./pages/resources/StudentsPage";
import ProtocolsPage from "./pages/resources/ProtocolsPage";
import DataCodePage from "./pages/resources/DataCodePage";
import FundingPage from "./pages/resources/FundingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/lab-life" element={<LabLifePage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/students" element={<StudentsPage />} />
              <Route path="/resources/protocols" element={<ProtocolsPage />} />
              <Route path="/resources/data-code" element={<DataCodePage />} />
              <Route path="/resources/funding" element={<FundingPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
