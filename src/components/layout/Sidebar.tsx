import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BarChart3, Home, FolderOpen, ShoppingCart, TrendingUp, Settings, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  moduleType: "project" | "procurement";
}

const Sidebar = ({ moduleType }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const projectItems = [
    { icon: Home, label: "Dashboard", path: "/project-management" },
    { icon: FolderOpen, label: "Project Management", path: "/project-management", active: true },
    { icon: TrendingUp, label: "Analytics", path: "/project-management/analytics" },
    { icon: Settings, label: "Settings", path: "/project-management/settings" },
  ];

  const procurementItems = [
    { icon: Home, label: "Dashboard", path: "/procurement" },
    { icon: ShoppingCart, label: "Procurement", path: "/procurement", active: true },
    { icon: TrendingUp, label: "Analytics", path: "/procurement/analytics" },
    { icon: Settings, label: "Settings", path: "/procurement/settings" },
  ];

  const menuItems = moduleType === "project" ? projectItems : procurementItems;

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-6 w-6 text-sidebar-primary" />
          <span className="font-semibold text-sidebar-foreground">PharmaERP</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modules
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Button
                key={item.path}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent",
                  isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => navigate(item.path)}
              >
                <IconComponent className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;