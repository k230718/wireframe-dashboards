import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import SupplyChainDashboard from "./SupplyChainDashboard";
import InventoryManagement from "./InventoryManagement";
import ProcurementManagement from "./ProcurementManagement";
import OrderFulfillment from "./OrderFulfillment";
import LogisticsTransportation from "./LogisticsTransportation";
import DemandPlanning from "./DemandPlanning";
import Settings from "./Settings";

const SupplyChain = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/supply-chain") {
    return (
      <ModuleLayout moduleType="supply-chain">
        <SupplyChainDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/supply-chain/inventory":
        return <InventoryManagement />;
      case "/supply-chain/procurement":
        return <ProcurementManagement />;
      case "/supply-chain/order-fulfillment":
        return <OrderFulfillment />;
      case "/supply-chain/logistics":
        return <LogisticsTransportation />;
      case "/supply-chain/planning":
        return <DemandPlanning />;
      case "/supply-chain/settings":
        return <Settings />;
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
    <ModuleLayout moduleType="supply-chain">
      {renderContent()}
    </ModuleLayout>
  );
};

export default SupplyChain;