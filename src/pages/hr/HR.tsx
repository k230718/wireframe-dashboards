import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import HRDashboard from "./HRDashboard";

const HR = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/hr") {
    return (
      <ModuleLayout moduleType="hr">
        <HRDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/hr/employees":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
            <p className="text-muted-foreground">Manage employee records and information.</p>
          </div>
        );
      case "/hr/payroll":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Payroll</h1>
            <p className="text-muted-foreground">Payroll processing and salary management.</p>
          </div>
        );
      case "/hr/recruitment":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Recruitment</h1>
            <p className="text-muted-foreground">Job postings and candidate management.</p>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Page Not Implemented</h1>
            <p className="text-muted-foreground">This page is under development.</p>
          </div>
        );
    }
  };

  return (
    <ModuleLayout moduleType="hr">
      {renderContent()}
    </ModuleLayout>
  );
};

export default HR;