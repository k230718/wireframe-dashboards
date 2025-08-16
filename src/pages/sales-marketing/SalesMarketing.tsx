import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import SalesMarketingDashboard from "./SalesMarketingDashboard";

const SalesMarketing = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/sales-marketing") {
    return (
      <ModuleLayout moduleType="sales-marketing">
        <SalesMarketingDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/sales-marketing/sales":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Sales</h1>
            <p className="text-muted-foreground">Sales management and tracking.</p>
          </div>
        );
      case "/sales-marketing/marketing":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Marketing</h1>
            <p className="text-muted-foreground">Marketing campaigns and analytics.</p>
          </div>
        );
      case "/sales-marketing/leads":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Lead Management</h1>
            <p className="text-muted-foreground">Lead tracking and conversion.</p>
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
    <ModuleLayout moduleType="sales-marketing">
      {renderContent()}
    </ModuleLayout>
  );
};

export default SalesMarketing;