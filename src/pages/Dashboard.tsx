import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, DollarSign, FileText, AlertTriangle, Bell, TrendingUp } from "lucide-react";
import ModuleLayout from "@/components/layout/ModuleLayout";

const Dashboard = () => {
  const recentProjects = [
    {
      name: "COVID-19 Vaccine Development",
      manager: "Dr. Sarah Johnson",
      status: "In Progress",
    },
    {
      name: "Diabetes Treatment Research",
      manager: "Dr. Michael Chen",
      status: "Planned",
    },
    {
      name: "Cancer Immunotherapy",
      manager: "Dr. Emily Rodriguez",
      status: "Completed",
    },
  ];

  const recentOrders = [
    {
      item: "Vaccine Vials",
      vendor: "BioSupply Corp",
      amount: "$25,500",
      status: "Delivered",
    },
    {
      item: "Chemical Reagents",
      vendor: "ChemTech Solutions",
      amount: "$6,250",
      status: "In Transit",
    },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Overdue Milestone",
      description: "Phase I Clinical Trials milestone is overdue by 5 days",
    },
    {
      type: "warning",
      title: "Vendor Contract Expiring",
      description: "MedEquip International contract expires in 30 days",
    },
    {
      type: "info",
      title: "New Purchase Order",
      description: "PO-0003 has been created and awaiting approval",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Completed": "default",
      "In Progress": "secondary",
      "Delivered": "default",
      "In Transit": "secondary",
      "Planned": "outline",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to PharmaERP - Project Management & Procurement Overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">of 3 total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GMP Certified Vendors</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">of 3 total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">of 2 total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$7.5M</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-muted-foreground">{project.manager}</div>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Purchase Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Purchase Orders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{order.item}</div>
                    <div className="text-sm text-muted-foreground">{order.vendor}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{order.amount}</div>
                    {getStatusBadge(order.status)}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <Alert key={index} variant={alert.type === "warning" ? "destructive" : "default"}>
                {alert.type === "warning" ? (
                  <AlertTriangle className="h-4 w-4" />
                ) : (
                  <Bell className="h-4 w-4" />
                )}
                <div>
                  <div className="font-medium">{alert.title}</div>
                  <AlertDescription>{alert.description}</AlertDescription>
                </div>
              </Alert>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;