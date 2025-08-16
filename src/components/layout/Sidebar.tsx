import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BarChart3, 
  Home, 
  FolderOpen, 
  ShoppingCart, 
  TrendingUp, 
  Settings, 
  ArrowLeft,
  Search,
  Users,
  FileText,
  Package,
  HandCoins,
  Calendar,
  BarChart,
  Cog,
  LogOut,
  ChevronLeft,
  Calculator,
  Truck,
  Target,
  Building,
  CheckSquare,
  MapPin,
  ClipboardList,
  Shield,
  Megaphone,
  PieChart,
  Receipt,
  UserPlus,
  DollarSign,
  LayoutDashboard
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  moduleType: "project" | "procurement" | "inventory" | "production" | "sales-marketing" | "finance" | "supply-chain" | "hr";
}

const Sidebar = ({ moduleType }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getModuleConfig = () => {
    switch (moduleType) {
      case "project":
        return {
          title: "Project Management",
          items: [
            { href: "/project-management", icon: LayoutDashboard, label: "Dashboard" },
            { href: "/project-management/projects", icon: FolderOpen, label: "Projects" },
            { href: "/project-management/tasks", icon: CheckSquare, label: "Tasks" },
            { href: "/project-management/calendar", icon: Calendar, label: "Calendar" },
            { href: "/project-management/team", icon: Users, label: "Team" },
          ]
        };
      case "procurement":
        return {
          title: "Procurement",
          items: [
            { href: "/procurement", icon: Home, label: "Dashboard" },
            { href: "/procurement/suppliers", icon: Building, label: "Suppliers" },
            { href: "/procurement/orders", icon: ShoppingCart, label: "Purchase Orders" },
            { href: "/procurement/contracts", icon: FileText, label: "Contracts" },
            { href: "/procurement/budget", icon: DollarSign, label: "Budget" },
          ]
        };
      case "inventory":
        return {
          title: "Inventory",
          items: [
            { href: "/inventory", icon: Home, label: "Dashboard" },
            { href: "/inventory/items", icon: Package, label: "Items" },
            { href: "/inventory/stock", icon: BarChart3, label: "Stock Levels" },
            { href: "/inventory/locations", icon: MapPin, label: "Locations" },
            { href: "/inventory/movements", icon: TrendingUp, label: "Stock Movements" },
          ]
        };
      case "production":
        return {
          title: "Production",
          items: [
            { href: "/production", icon: Home, label: "Dashboard" },
            { href: "/production/planning", icon: Calendar, label: "Production Planning" },
            { href: "/production/orders", icon: ClipboardList, label: "Work Orders" },
            { href: "/production/quality", icon: Shield, label: "Quality Control" },
            { href: "/production/equipment", icon: Settings, label: "Equipment" },
          ]
        };
      case "sales-marketing":
        return {
          title: "Sales & Marketing",
          items: [
            { href: "/sales-marketing", icon: Home, label: "Dashboard" },
            { href: "/sales-marketing/sales", icon: TrendingUp, label: "Sales" },
            { href: "/sales-marketing/marketing", icon: Megaphone, label: "Marketing" },
            { href: "/sales-marketing/leads", icon: Users, label: "Lead Management" },
            { href: "/sales-marketing/campaigns", icon: Target, label: "Campaigns" },
          ]
        };
      case "finance":
        return {
          title: "Finance",
          items: [
            { href: "/finance", icon: Home, label: "Dashboard" },
            { href: "/finance/accounting", icon: Calculator, label: "Accounting" },
            { href: "/finance/budgeting", icon: PieChart, label: "Budgeting" },
            { href: "/finance/reporting", icon: FileText, label: "Financial Reporting" },
            { href: "/finance/invoicing", icon: Receipt, label: "Invoicing" },
          ]
        };
      case "supply-chain":
        return {
          title: "Supply Chain",
          items: [
            { href: "/supply-chain", icon: Home, label: "Dashboard" },
            { href: "/supply-chain/logistics", icon: Truck, label: "Logistics" },
            { href: "/supply-chain/planning", icon: Calendar, label: "Planning" },
            { href: "/supply-chain/tracking", icon: MapPin, label: "Shipment Tracking" },
            { href: "/supply-chain/analytics", icon: BarChart3, label: "Analytics" },
          ]
        };
      case "hr":
        return {
          title: "Human Resources",
          items: [
            { href: "/hr", icon: Home, label: "Dashboard" },
            { href: "/hr/employees", icon: Users, label: "Employee Management" },
            { href: "/hr/recruitment", icon: UserPlus, label: "Recruitment" },
            { href: "/hr/payroll", icon: DollarSign, label: "Payroll" },
            { href: "/hr/performance", icon: Target, label: "Performance" },
          ]
        };
      default:
        return { title: "Dashboard", items: [] };
    }
  };

  const config = getModuleConfig();

  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-sidebar-foreground">PharmaERP</div>
            <div className="text-sm text-sidebar-foreground/70">{config.title}</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-sidebar-foreground hover:bg-sidebar-accent p-1"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sidebar-foreground/50" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/50"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {config.items.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent rounded-lg h-10",
                  isActive && "bg-blue-50 text-blue-600 hover:bg-blue-50"
                )}
                onClick={() => navigate(item.href)}
              >
                <IconComponent className="h-5 w-5 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-sidebar-foreground">John Doe</div>
            <div className="text-xs text-sidebar-foreground/60">Manager</div>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600 mt-2"
          onClick={() => {
            // Add logout logic here
            console.log("Logout clicked");
          }}
        >
          <LogOut className="h-4 w-4 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;