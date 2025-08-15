import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useModulePermissions } from "@/hooks/useModulePermissions";
import { Loader2 } from "lucide-react";
import ModuleSelection from "./ModuleSelection";
import DepartmentRequest from "./DepartmentRequest";

const Index = () => {
  const { user, loading } = useAuth();
  const { permissions, loading: permissionsLoading } = useModulePermissions();

  if (loading || permissionsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // If user has no module permissions, redirect to department request
  if (permissions.length === 0 || !permissions.some(p => p.has_access)) {
    return <Navigate to="/department-request" replace />;
  }

  return <ModuleSelection />;
};

export default Index;
