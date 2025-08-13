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
import Auth from "./pages/Auth";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            
            {/* Project Management Routes */}
            <Route path="/project-management" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/projects" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/milestones" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/tasks" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/analytics" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/reports" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/settings" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            
            {/* Procurement Routes */}
            <Route path="/procurement" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/vendors" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/orders" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/requisitions" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/contracts" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/invoices" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/analytics" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/reports" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/settings" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
