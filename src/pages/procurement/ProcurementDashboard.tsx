import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, DollarSign, ShoppingCart, AlertTriangle, Bell, TrendingUp, Users, Package } from "lucide-react";

const ProcurementDashboard = () => {
  const recentOrders = [
    {
      orderId: "PO-0001",
      vendor: "BioSupply Corp",
      item: "Vaccine Vials",
      amount: "$25,500",
      status: "Delivered",
      deliveryDate: "3/25/2024",
    },
    {
      orderId: "PO-0002", 
      vendor: "ChemTech Solutions",
      item: "Chemical Reagents",
      amount: "$6,250",
      status: "In Transit",
      deliveryDate: "4/5/2024",
    },
    {
      orderId: "PO-0003",
      vendor: "MedEquip International",
      item: "Laboratory Equipment",
      amount: "$15,000",
      status: "Pending Approval",
      deliveryDate: "4/15/2024",
    },
  ];

  const vendorPerformance = [
    {
      name: "BioSupply Corp",
      compliance: "GMP Certified",
      performance: 95.5,
      orders: 12,
      onTimeDelivery: 98,
    },
    {
      name: "ChemTech Solutions",
      compliance: "Pending Review",
      performance: 87.2,
      orders: 8,
      onTimeDelivery: 85,
    },
    {
      name: "MedEquip International",
      compliance: "GMP Certified", 
      performance: 92.8,
      orders: 6,
      onTimeDelivery: 95,
    },
  ];

  const procurementAlerts = [
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
    {
      type: "warning",
      title: "Compliance Review Required",
      description: "ChemTech Solutions requires compliance review",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Delivered": "default",
      "In Transit": "secondary",
      "Pending Approval": "outline",
      "GMP Certified": "default",
      "Pending Review": "outline",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Procurement Dashboard</h1>
        <p className="text-muted-foreground">Overview of procurement activities and vendor management</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 GMP certified</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Purchase Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 pending approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">awaiting matching</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$46.7K</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Purchase Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Purchase Orders</CardTitle>
            <CardDescription>Latest procurement activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{order.orderId}</div>
                  <div className="text-sm text-muted-foreground">{order.vendor}</div>
                  <div className="text-xs text-muted-foreground">{order.item}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{order.amount}</div>
                  {getStatusBadge(order.status)}
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar className="h-3 w-3" />
                    {order.deliveryDate}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Vendor Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Vendor Performance</CardTitle>
            <CardDescription>Vendor compliance and delivery metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {vendorPerformance.map((vendor, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{vendor.name}</div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(vendor.compliance)}
                      <span className="text-xs text-muted-foreground">{vendor.orders} orders</span>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium">{vendor.performance}%</div>
                    <div className="text-muted-foreground">{vendor.onTimeDelivery}% on-time</div>
                  </div>
                </div>
                <Progress value={vendor.performance} className="w-full" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Procurement Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Procurement Alerts</CardTitle>
          <CardDescription>Important notifications and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {procurementAlerts.map((alert, index) => (
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
  );
};

export default ProcurementDashboard;