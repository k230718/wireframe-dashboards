import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Factory, Users, AlertTriangle, TrendingUp } from "lucide-react";

const ProductionDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Production Dashboard</h1>
        <p className="text-muted-foreground">Monitor production operations and performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Production Lines</CardTitle>
            <Factory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/12</div>
            <p className="text-xs text-muted-foreground">Lines Active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Output</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Units Produced</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Staff on Duty</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Production Staff</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quality Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active Issues</p>
          </CardContent>
        </Card>
      </div>

      {/* Production Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Production Lines Status</CardTitle>
            <CardDescription>Current status of all production lines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { line: "Line A", product: "Tablet Production", status: "active", progress: 78 },
              { line: "Line B", product: "Capsule Manufacturing", status: "active", progress: 92 },
              { line: "Line C", product: "Syrup Production", status: "maintenance", progress: 0 },
              { line: "Line D", product: "Injection Filling", status: "active", progress: 45 },
            ].map((line) => (
              <div key={line.line} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{line.line}</p>
                    <p className="text-sm text-muted-foreground">{line.product}</p>
                  </div>
                  <Badge variant={line.status === "active" ? "default" : "secondary"}>
                    {line.status}
                  </Badge>
                </div>
                {line.status === "active" && (
                  <Progress value={line.progress} className="h-2" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Control</CardTitle>
            <CardDescription>Recent quality checks and compliance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { test: "Tablet Hardness Test", batch: "TBL-2024-001", result: "Passed", time: "2 hours ago" },
              { test: "Dissolution Test", batch: "CAP-2024-045", result: "Passed", time: "4 hours ago" },
              { test: "Sterility Test", batch: "INJ-2024-012", result: "In Progress", time: "6 hours ago" },
              { test: "Assay Test", batch: "SYR-2024-023", result: "Failed", time: "8 hours ago" },
            ].map((test, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{test.test}</p>
                  <p className="text-sm text-muted-foreground">{test.batch}</p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={
                      test.result === "Passed" ? "default" : 
                      test.result === "Failed" ? "destructive" : "secondary"
                    }
                  >
                    {test.result}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{test.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductionDashboard;