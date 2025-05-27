
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Index"; // Renamed for clarity
import ResearchPage from "./pages/ResearchPage";
import TeamPage from "./pages/TeamPage";
// import CurrentMembersPage from "./pages/CurrentMembersPage"; // Removed
// import AlumniPage from "./pages/AlumniPage"; // Removed
import PublicationsPage from "./pages/PublicationsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/team" element={<TeamPage />} />
            {/* <Route path="/team/current" element={<CurrentMembersPage />} /> Removed route */}
            {/* <Route path="/team/alumni" element={<AlumniPage />} /> Removed route */}
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

