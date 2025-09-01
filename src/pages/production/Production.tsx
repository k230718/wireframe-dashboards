import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import ProductionDashboard from "./ProductionDashboard";

const Production = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/production") {
    return (
      <ModuleLayout moduleType="production">
        <ProductionDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/production/planning":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Production Planning</h1>
            <p className="text-muted-foreground">Plan and schedule production activities.</p>
          </div>
        );
      case "/production/orders":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Production Orders</h1>
            <p className="text-muted-foreground">Manage production orders and workflows.</p>
          </div>
        );
      case "/production/quality":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Quality Control</h1>
            <p className="text-muted-foreground">Monitor quality control processes.</p>
          </div>
        );
      case "/production/maintenance":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Maintenance</h1>
            <p className="text-muted-foreground">Equipment maintenance and scheduling.</p>
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
    <ModuleLayout moduleType="production">
      {renderContent()}
    </ModuleLayout>
  );
};

export default Production;