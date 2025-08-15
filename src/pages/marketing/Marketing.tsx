import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import MarketingDashboard from "./MarketingDashboard";

const Marketing = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/marketing") {
    return (
      <ModuleLayout moduleType="marketing">
        <MarketingDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/marketing/campaigns":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Marketing Campaigns</h1>
            <p className="text-muted-foreground">Create and manage marketing campaigns.</p>
          </div>
        );
      case "/marketing/analytics":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Marketing Analytics</h1>
            <p className="text-muted-foreground">Track campaign performance and ROI.</p>
          </div>
        );
      case "/marketing/leads":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Lead Management</h1>
            <p className="text-muted-foreground">Manage and nurture sales leads.</p>
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
    <ModuleLayout moduleType="marketing">
      {renderContent()}
    </ModuleLayout>
  );
};

export default Marketing;