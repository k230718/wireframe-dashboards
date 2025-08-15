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
      case "/production/manufacturing":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Manufacturing</h1>
            <p className="text-muted-foreground">Production planning and manufacturing operations.</p>
          </div>
        );
      case "/production/quality":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Quality Control</h1>
            <p className="text-muted-foreground">Quality assurance and testing procedures.</p>
          </div>
        );
      case "/production/maintenance":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Maintenance</h1>
            <p className="text-muted-foreground">Equipment maintenance and facility management.</p>
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