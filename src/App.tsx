import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectManagement from "./pages/project-management/ProjectManagement";
import Procurement from "./pages/procurement/Procurement";
import Inventory from "./pages/inventory/Inventory";
import Production from "./pages/production/Production";
import SalesMarketing from "./pages/sales-marketing/SalesMarketing";
import Finance from "./pages/finance/Finance";
import SupplyChain from "./pages/supply-chain/SupplyChain";
import HR from "./pages/hr/HR";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import DepartmentRequest from "./pages/DepartmentRequest";
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
            <Route path="/department-request" element={<DepartmentRequest />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            
            {/* Module Routes - 8 Core Modules */}
            
            {/* 1. Project Management */}
            <Route path="/project-management" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            <Route path="/project-management/*" element={<ProtectedRoute requiredModule="project-management"><ProjectManagement /></ProtectedRoute>} />
            
            {/* 2. Procurement */}
            <Route path="/procurement" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            <Route path="/procurement/*" element={<ProtectedRoute requiredModule="procurement"><Procurement /></ProtectedRoute>} />
            
            {/* 3. Inventory */}
            <Route path="/inventory" element={<ProtectedRoute requiredModule="inventory"><Inventory /></ProtectedRoute>} />
            <Route path="/inventory/*" element={<ProtectedRoute requiredModule="inventory"><Inventory /></ProtectedRoute>} />
            
            {/* 4. Production */}
            <Route path="/production" element={<ProtectedRoute requiredModule="production"><Production /></ProtectedRoute>} />
            <Route path="/production/*" element={<ProtectedRoute requiredModule="production"><Production /></ProtectedRoute>} />
            
            {/* 5. Sales & Marketing */}
            <Route path="/sales-marketing" element={<ProtectedRoute requiredModule="sales-marketing"><SalesMarketing /></ProtectedRoute>} />
            <Route path="/sales-marketing/*" element={<ProtectedRoute requiredModule="sales-marketing"><SalesMarketing /></ProtectedRoute>} />
            
            {/* 6. Finance */}
            <Route path="/finance" element={<ProtectedRoute requiredModule="finance"><Finance /></ProtectedRoute>} />
            <Route path="/finance/*" element={<ProtectedRoute requiredModule="finance"><Finance /></ProtectedRoute>} />
            
            {/* 7. Supply Chain */}
            <Route path="/supply-chain" element={<ProtectedRoute requiredModule="supply-chain"><SupplyChain /></ProtectedRoute>} />
            <Route path="/supply-chain/*" element={<ProtectedRoute requiredModule="supply-chain"><SupplyChain /></ProtectedRoute>} />
            
            {/* 8. Human Resources */}
            <Route path="/hr" element={<ProtectedRoute requiredModule="hr"><HR /></ProtectedRoute>} />
            <Route path="/hr/*" element={<ProtectedRoute requiredModule="hr"><HR /></ProtectedRoute>} />
            
            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
