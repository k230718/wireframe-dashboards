import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectManagement from "./pages/project-management/ProjectManagement";
import Procurement from "./pages/procurement/Procurement";
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
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Project Management Routes */}
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/project-management/projects" element={<ProjectManagement />} />
          <Route path="/project-management/milestones" element={<ProjectManagement />} />
          <Route path="/project-management/tasks" element={<ProjectManagement />} />
          <Route path="/project-management/analytics" element={<ProjectManagement />} />
          <Route path="/project-management/reports" element={<ProjectManagement />} />
          <Route path="/project-management/settings" element={<ProjectManagement />} />
          
          {/* Procurement Routes */}
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/procurement/vendors" element={<Procurement />} />
          <Route path="/procurement/orders" element={<Procurement />} />
          <Route path="/procurement/requisitions" element={<Procurement />} />
          <Route path="/procurement/contracts" element={<Procurement />} />
          <Route path="/procurement/invoices" element={<Procurement />} />
          <Route path="/procurement/analytics" element={<Procurement />} />
          <Route path="/procurement/reports" element={<Procurement />} />
          <Route path="/procurement/settings" element={<Procurement />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
