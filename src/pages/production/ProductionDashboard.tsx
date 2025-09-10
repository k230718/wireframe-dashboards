import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Factory, Users, AlertTriangle, TrendingUp, Plus, Eye, Calendar, BarChart3 } from "lucide-react";

const ProductionDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manufacturing Dashboard</h1>
          <p className="text-muted-foreground">Overview of your manufacturing operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Order
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary">Total Production</CardTitle>
            <Factory className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,500 Units</div>
            <p className="text-xs text-green-600">+8% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-600">Active Orders</CardTitle>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Orders</div>
            <p className="text-xs text-muted-foreground">2 in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-600">Quality Issues</CardTitle>
            <AlertTriangle className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 Cases</div>
            <p className="text-xs text-muted-foreground">3 resolved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1 Machine</div>
            <p className="text-xs text-muted-foreground">Due tomorrow</p>
          </CardContent>
        </Card>
      </div>

      {/* Production Schedule and Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Production Schedule
            </CardTitle>
            <CardDescription>Latest production plans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { order: "Order 001", product: "Paracetamol", units: "500 Units", status: "In Progress", color: "text-blue-600" },
              { order: "Order 002", product: "Aspirin", units: "300 Units", status: "Completed", color: "text-green-600" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{item.order}</p>
                  <p className="text-sm text-muted-foreground">{item.product}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.units}</p>
                  <p className={`text-sm ${item.color}`}>{item.status}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Production Trends
            </CardTitle>
            <CardDescription>Mock trend overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-4 bg-gradient-to-r from-purple-500 to-purple-300 rounded"></div>
              <div className="flex justify-between text-sm">
                <span>1000 Units</span>
                <span>650 Units</span>
              </div>
              <p className="text-sm text-muted-foreground">Trend from July 1 to July 24</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common manufacturing tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
              <Plus className="h-6 w-6" />
              <span>Create Order</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              <span>Check Quality</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Maintenance</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
              <BarChart3 className="h-6 w-6" />
              <span>Analyze Production</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductionDashboard;