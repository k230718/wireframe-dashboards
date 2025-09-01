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
      case "/finance/accounts":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Chart of Accounts</h1>
            <p className="text-muted-foreground">Manage your chart of accounts and financial structure.</p>
          </div>
        );
      case "/finance/transactions":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Transactions</h1>
            <p className="text-muted-foreground">View and manage financial transactions.</p>
          </div>
        );
      case "/finance/reports":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Financial Reports</h1>
            <p className="text-muted-foreground">Generate financial reports and statements.</p>
          </div>
        );
      case "/finance/budgets":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Budget Management</h1>
            <p className="text-muted-foreground">Create and monitor budgets.</p>
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