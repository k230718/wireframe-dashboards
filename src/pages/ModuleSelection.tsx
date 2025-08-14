import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, ShoppingCart, BarChart3, LogOut, Package, TrendingUp, Truck } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useModulePermissions } from "@/hooks/useModulePermissions";

const ModuleSelection = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { hasAccess } = useModulePermissions();

  // Redirect to auth if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const modules = [
    {
      id: "project-management",
      title: "Project Management",
      description: "Manage projects, milestones, tasks, and track progress with Gantt charts",
      icon: FolderOpen,
      path: "/project-management",
      color: "bg-blue-500",
    },
    {
      id: "procurement",
      title: "Procurement Management", 
      description: "Handle vendors, purchase orders, requisitions, contracts, and invoice matching",
      icon: ShoppingCart,
      path: "/procurement",
      color: "bg-green-500",
    },
    {
      id: "inventory",
      title: "Inventory & Production",
      description: "Manage warehouse operations, inventory tracking, and production workflows",
      icon: Package,
      path: "/inventory",
      color: "bg-purple-500",
    },
    {
      id: "sales",
      title: "Sales, Marketing & Finance",
      description: "Handle sales operations, marketing campaigns, and financial management",
      icon: TrendingUp,
      path: "/sales",
      color: "bg-orange-500",
    },
    {
      id: "supply-chain",
      title: "Supply Chain & HR",
      description: "Manage supply chain operations and human resources management",
      icon: Truck,
      path: "/supply-chain",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">PharmaERP</h1>
                <p className="text-muted-foreground">Enterprise Resource Planning System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Welcome, {user?.email}</span>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Module Selection */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Select Module</h2>
          <p className="text-muted-foreground text-lg">Choose a module to access its dashboard and features</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module) => {
            const IconComponent = module.icon;
            const moduleKey = module.path.replace('/', '');
            const hasModuleAccess = hasAccess(moduleKey);
            
            return (
              <Card key={module.id} className={`group transition-all duration-300 cursor-pointer ${hasModuleAccess ? 'hover:shadow-lg' : 'opacity-60'}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${module.color} rounded-full flex items-center justify-center mx-auto mb-4 ${hasModuleAccess ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => navigate(module.path)}
                    className="w-full"
                    size="lg"
                    disabled={!hasModuleAccess}
                  >
                    {hasModuleAccess ? `Access ${module.title}` : 'Access Restricted'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">45</div>
              <div className="text-sm text-muted-foreground">Registered Vendors</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-1">$2.5M</div>
              <div className="text-sm text-muted-foreground">Total Budget</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModuleSelection;