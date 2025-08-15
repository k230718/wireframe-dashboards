import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import FinanceDashboard from "./FinanceDashboard";

const Finance = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/finance") {
    return (
      <ModuleLayout moduleType="finance">
        <FinanceDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/finance/accounting":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Accounting</h1>
            <p className="text-muted-foreground">General ledger and financial accounting.</p>
          </div>
        );
      case "/finance/budgeting":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Budgeting</h1>
            <p className="text-muted-foreground">Budget planning and expense management.</p>
          </div>
        );
      case "/finance/reporting":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Financial Reporting</h1>
            <p className="text-muted-foreground">Financial statements and reports.</p>
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
    <ModuleLayout moduleType="finance">
      {renderContent()}
    </ModuleLayout>
  );
};

export default Finance;