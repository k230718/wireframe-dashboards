import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, DollarSign, Target, BarChart3, Download, Calendar } from "lucide-react";

const FinancialAnalytics = () => {
  const kpis = [
    {
      title: "Net Profit",
      value: "$79,300",
      change: "+18.2% from last month",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Profit Margin",
      value: "51.2%",
      description: "Industry avg: 45%",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Cash Flow",
      value: "$156,800",
      description: "Positive trend",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "ROI",
      value: "24.8%",
      description: "Exceeding targets",
      icon: BarChart3,
      color: "text-blue-600"
    }
  ];

  const revenueExpenses = [
    { month: "Jan", revenue: 120000, expenses: 45000 },
    { month: "Feb", revenue: 135000, expenses: 48000 },
    { month: "Mar", revenue: 142000, expenses: 52000 },
    { month: "Apr", revenue: 155000, expenses: 55000 },
    { month: "May", revenue: 148000, expenses: 53000 },
    { month: "Jun", revenue: 162000, expenses: 58000 }
  ];

  const departmentExpenses = [
    { department: "Marketing", amount: 45000, percentage: 35 },
    { department: "Operations", amount: 38000, percentage: 30 },
    { department: "IT", amount: 25000, percentage: 20 },
    { department: "HR", amount: 19000, percentage: 15 }
  ];

  const detailedAnalysis = [
    { metric: "Gross Revenue", current: 162000, previous: 148000, change: "+9.5%", trend: "up" },
    { metric: "Operating Expenses", current: 58000, previous: 53000, change: "+9.4%", trend: "up" },
    { metric: "Net Profit", current: 104000, previous: 95000, change: "+9.5%", trend: "up" },
    { metric: "Cash Flow", current: 156800, previous: 142300, change: "+10.2%", trend: "up" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Analytics</h1>
          <p className="text-muted-foreground">Comprehensive financial insights and data visualization</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs ${kpi.change ? 'text-green-600' : 'text-muted-foreground'}`}>
                {kpi.change || kpi.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Expenses */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Revenue vs Expenses
              </CardTitle>
              <CardDescription>Monthly comparison over the last 6 months</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {revenueExpenses.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{data.month}</span>
                  <span>Revenue: ${data.revenue.toLocaleString()} | Expenses: ${data.expenses.toLocaleString()}</span>
                </div>
                <div className="flex gap-1">
                  <div className="h-2 bg-blue-500 rounded" style={{ width: `${(data.revenue / 200000) * 100}%` }} />
                  <div className="h-2 bg-orange-500 rounded" style={{ width: `${(data.expenses / 200000) * 60}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Department Expenses */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Department Expenses
              </CardTitle>
              <CardDescription>Current month expense breakdown by department</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {departmentExpenses.map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{dept.department}</span>
                  <span className="text-sm">${dept.amount.toLocaleString()} ({dept.percentage}%)</span>
                </div>
                <Progress value={dept.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Financial Analysis</CardTitle>
          <CardDescription>Key performance indicators and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead>Current Period</TableHead>
                <TableHead>Previous Period</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {detailedAnalysis.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.metric}</TableCell>
                  <TableCell>${item.current.toLocaleString()}</TableCell>
                  <TableCell>${item.previous.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className="text-green-600 font-medium">{item.change}</span>
                  </TableCell>
                  <TableCell>
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialAnalytics;