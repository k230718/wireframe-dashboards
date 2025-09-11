import { useLocation } from "react-router-dom";
import ModuleLayout from "@/components/layout/ModuleLayout";
import HRDashboard from "./HRDashboard";
import Recruitment from "./Recruitment";
import EmployeeRecords from "./EmployeeRecords";
import Payroll from "./Payroll";
import Attendance from "./Attendance";
import Performance from "./Performance";
import Training from "./Training";
import Settings from "./Settings";

const HR = () => {
  const location = useLocation();

  // Show dashboard for the main route
  if (location.pathname === "/hr") {
    return (
      <ModuleLayout moduleType="hr">
        <HRDashboard />
      </ModuleLayout>
    );
  }

  // Handle sub-routes
  const renderContent = () => {
    switch (location.pathname) {
      case "/hr/employees":
        return <EmployeeRecords />;
      case "/hr/recruitment":
        return <Recruitment />;
      case "/hr/payroll":
        return <Payroll />;
      case "/hr/attendance":
        return <Attendance />;
      case "/hr/performance":
        return <Performance />;
      case "/hr/training":
        return <Training />;
      case "/hr/settings":
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
    <ModuleLayout moduleType="hr">
      {renderContent()}
    </ModuleLayout>
  );
};

export default HR;