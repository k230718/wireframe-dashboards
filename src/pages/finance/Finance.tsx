import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import FinanceDashboard from "./FinanceDashboard";
import ChartOfAccounts from "./ChartOfAccounts";
import AccountsPayable from "./AccountsPayable";
import AccountsReceivable from "./AccountsReceivable";
import BudgetManagement from "./BudgetManagement";
import FinancialAnalytics from "./FinancialAnalytics";

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
        return <ChartOfAccounts />;
      case "/finance/payables":
        return <AccountsPayable />;
      case "/finance/receivables":
        return <AccountsReceivable />;
      case "/finance/budgets":
        return <BudgetManagement />;
      case "/finance/reports":
        return <FinancialAnalytics />;
      case "/finance/transactions":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Transactions</h1>
            <p className="text-muted-foreground">View and manage financial transactions.</p>
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