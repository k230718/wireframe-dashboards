import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useModulePermissions } from '@/hooks/useModulePermissions';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredModule?: string;
}

const ProtectedRoute = ({ children, requiredModule }: ProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const { hasAccess, loading: permissionsLoading } = useModulePermissions();

  // Show loading while checking authentication
  if (authLoading || permissionsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Redirect to auth if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // If a specific module is required, check permissions
  if (requiredModule && !hasAccess(requiredModule)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">
            You don't have permission to access the {requiredModule} module.
          </p>
          <button
            onClick={() => window.history.back()}
            className="text-primary hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;