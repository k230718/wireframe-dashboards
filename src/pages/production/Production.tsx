import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import ProductionDashboard from "./ProductionDashboard";
import ProductionPlanning from "./ProductionPlanning";
import BillOfMaterials from "./BillOfMaterials";
import ShopFloorControl from "./ShopFloorControl";
import QualityControl from "./QualityControl";
import MaintenanceManagement from "./MaintenanceManagement";
import ProductionOrders from "./ProductionOrders";

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
        return <ProductionPlanning />;
      case "/production/bom":
        return <BillOfMaterials />;
      case "/production/shopfloor":
        return <ShopFloorControl />;
      case "/production/quality":
        return <QualityControl />;
      case "/production/maintenance":
        return <MaintenanceManagement />;
      case "/production/orders":
        return <ProductionOrders />;
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