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
      case "/inventory/stock":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Stock Management</h1>
            <p className="text-muted-foreground">Track and manage inventory levels.</p>
          </div>
        );
      case "/inventory/warehouses":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Warehouse Management</h1>
            <p className="text-muted-foreground">Manage warehouse operations and locations.</p>
          </div>
        );
      case "/inventory/transfers":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Stock Transfers</h1>
            <p className="text-muted-foreground">Handle stock transfers between locations.</p>
          </div>
        );
      case "/inventory/adjustments":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Inventory Adjustments</h1>
            <p className="text-muted-foreground">Make inventory adjustments and reconciliations.</p>
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