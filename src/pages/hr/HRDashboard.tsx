import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Star, UserPlus } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const HRDashboard = () => {
  const departmentData = [
    { name: "Engineering", value: 25, color: "#3b82f6" },
    { name: "Marketing", value: 25, color: "#10b981" },
    { name: "Finance", value: 25, color: "#f59e0b" },
    { name: "HR", value: 12.5, color: "#8b5cf6" },
    { name: "Sales", value: 12.5, color: "#ef4444" },
  ];

  const attendanceData = [
    { status: "Present", count: 3, color: "#10b981" },
    { status: "Absent", count: 1, color: "#ef4444" },
    { status: "On Leave", count: 1, color: "#f59e0b" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">HR Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening in your organization.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-sm text-orange-500">0 new employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
            <Briefcase className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-sm text-orange-500">0 new positions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Applications</CardTitle>
            <UserPlus className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-sm text-orange-500">0 new applications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Employee Rating</CardTitle>
            <Star className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.2</div>
            <p className="text-sm text-muted-foreground">Out of 5</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Employee Distribution by Department</CardTitle>
            <CardDescription>Breakdown of employees across different departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {departmentData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-medium">{item.value}</span>
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg">Payroll Summary</CardTitle>
                <CardDescription>10/15/2025</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$0.0k</div>
                <p className="text-sm text-muted-foreground">Monthly trends (in thousands)</p>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg">Upcoming Training</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No upcoming training sessions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Today's Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">Current status</div>
                  <div className="flex justify-center gap-8 mt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">5</div>
                      <div className="text-sm text-muted-foreground">Present</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">2</div>
                      <div className="text-sm text-muted-foreground">Late</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">1</div>
                      <div className="text-sm text-muted-foreground">Absent</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium">Attendance Rate</div>
                  <div className="text-3xl font-bold">63%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;