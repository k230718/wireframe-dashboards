import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users, Target } from "lucide-react";

const SalesDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sales, Marketing & Finance Dashboard</h1>
        <p className="text-muted-foreground">Track revenue, campaigns, and financial performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.5M</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23%</div>
            <p className="text-xs text-muted-foreground">Year over year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-muted-foreground">+180 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campaign ROI</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2x</div>
            <p className="text-xs text-muted-foreground">Average return</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { order: "SO-2024-001", customer: "ABC Pharma", amount: "$15,500" },
                { order: "SO-2024-002", customer: "MedCorp Inc", amount: "$8,200" },
                { order: "SO-2024-003", customer: "Health Plus", amount: "$12,750" },
                { order: "SO-2024-004", customer: "Care Systems", amount: "$6,800" },
              ].map((item) => (
                <div key={item.order} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.order}</p>
                    <p className="text-sm text-muted-foreground">{item.customer}</p>
                  </div>
                  <Badge variant="outline">{item.amount}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketing Campaigns</CardTitle>
            <CardDescription>Active campaign performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { campaign: "Spring Promotion", status: "Active", performance: "High" },
                { campaign: "Product Launch", status: "Active", performance: "Medium" },
                { campaign: "Email Campaign", status: "Completed", performance: "High" },
                { campaign: "Social Media", status: "Paused", performance: "Low" },
              ].map((item) => (
                <div key={item.campaign} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.campaign}</p>
                    <p className="text-sm text-muted-foreground">{item.performance} performance</p>
                  </div>
                  <Badge 
                    variant={item.status === "Active" ? "default" : 
                            item.status === "Completed" ? "secondary" : "outline"}
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesDashboard;