import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import InventoryDashboard from "./InventoryDashboard";
import ReorderAlerts from "./ReorderAlerts";
import CycleCounts from "./CycleCounts";
import InventoryAnalytics from "./InventoryAnalytics";
import BatchManagement from "./BatchManagement";

const Inventory = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/inventory") {
    return (
      <ModuleLayout moduleType="inventory">
        <InventoryDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/inventory/alerts":
        return <ReorderAlerts />;
      case "/inventory/cycle-counts":
        return <CycleCounts />;
      case "/inventory/analytics":
        return <InventoryAnalytics />;
      case "/inventory/batches":
        return <BatchManagement />;
      case "/inventory/stock":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Stock Overview</h1>
            <p className="text-muted-foreground">View and manage stock levels.</p>
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
    <ModuleLayout moduleType="inventory">
      {renderContent()}
    </ModuleLayout>
  );
};

export default Inventory;