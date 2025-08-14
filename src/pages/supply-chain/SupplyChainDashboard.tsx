import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Users, Globe, Clock } from "lucide-react";

const SupplyChainDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Supply Chain & HR Dashboard</h1>
        <p className="text-muted-foreground">Monitor logistics operations and human resources</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">12 delivered today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">5 new hires this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Global Suppliers</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Across 15 countries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 days</div>
            <p className="text-xs text-muted-foreground">-0.5 days improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Shipments</CardTitle>
            <CardDescription>Latest logistics updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { shipment: "SH-2024-001", destination: "New York", status: "In Transit" },
                { shipment: "SH-2024-002", destination: "Los Angeles", status: "Delivered" },
                { shipment: "SH-2024-003", destination: "Chicago", status: "Processing" },
                { shipment: "SH-2024-004", destination: "Miami", status: "In Transit" },
              ].map((item) => (
                <div key={item.shipment} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.shipment}</p>
                    <p className="text-sm text-muted-foreground">To {item.destination}</p>
                  </div>
                  <Badge 
                    variant={item.status === "Delivered" ? "default" : 
                            item.status === "In Transit" ? "secondary" : "outline"}
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>HR Activities</CardTitle>
            <CardDescription>Recent employee activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { activity: "New Hire Onboarding", employee: "John Smith", type: "Recruitment" },
                { activity: "Performance Review", employee: "Sarah Johnson", type: "Review" },
                { activity: "Training Completion", employee: "Mike Wilson", type: "Training" },
                { activity: "Leave Request", employee: "Emily Davis", type: "Leave" },
              ].map((item) => (
                <div key={item.activity} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.activity}</p>
                    <p className="text-sm text-muted-foreground">{item.employee}</p>
                  </div>
                  <Badge variant="outline">{item.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplyChainDashboard;