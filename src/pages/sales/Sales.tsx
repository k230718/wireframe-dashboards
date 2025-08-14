import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import SalesDashboard from "./SalesDashboard";

const Sales = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/sales") {
    return (
      <ModuleLayout moduleType="sales">
        <SalesDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/sales/orders":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Sales Orders</h1>
            <p className="text-muted-foreground">Manage customer orders and sales pipeline.</p>
          </div>
        );
      case "/sales/marketing":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Marketing Campaigns</h1>
            <p className="text-muted-foreground">Campaign management and marketing analytics.</p>
          </div>
        );
      case "/sales/finance":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Financial Management</h1>
            <p className="text-muted-foreground">Accounting, invoicing, and financial reports.</p>
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
    <ModuleLayout moduleType="sales">
      {renderContent()}
    </ModuleLayout>
  );
};

export default Sales;