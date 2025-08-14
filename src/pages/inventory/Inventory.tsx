import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import InventoryDashboard from "./InventoryDashboard";

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
      case "/inventory/warehouse":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Warehouse Management</h1>
            <p className="text-muted-foreground">Warehouse operations and management.</p>
          </div>
        );
      case "/inventory/production":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Production Planning</h1>
            <p className="text-muted-foreground">Production workflows and planning.</p>
          </div>
        );
      case "/inventory/stock":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
            <p className="text-muted-foreground">Inventory tracking and stock levels.</p>
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