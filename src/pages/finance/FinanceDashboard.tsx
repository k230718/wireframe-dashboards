import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp, TrendingDown, CreditCard } from "lucide-react";

const FinanceDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Finance Dashboard</h1>
        <p className="text-muted-foreground">Monitor financial performance and metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.4M</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Operating Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.8M</div>
            <p className="text-xs text-muted-foreground">-3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$587K</div>
            <p className="text-xs text-muted-foreground">+24% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$892K</div>
            <p className="text-xs text-muted-foreground">Available cash</p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Budget vs Actual</CardTitle>
            <CardDescription>Department budget performance this quarter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { department: "R&D", budget: 500000, actual: 475000, variance: -5 },
              { department: "Manufacturing", budget: 800000, actual: 820000, variance: 2.5 },
              { department: "Sales & Marketing", budget: 300000, actual: 285000, variance: -5 },
              { department: "Operations", budget: 200000, actual: 195000, variance: -2.5 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.department}</p>
                    <p className="text-sm text-muted-foreground">
                      Budget: ${(item.budget / 1000).toFixed(0)}K | Actual: ${(item.actual / 1000).toFixed(0)}K
                    </p>
                  </div>
                  <Badge variant={item.variance < 0 ? "default" : "destructive"}>
                    {item.variance > 0 ? "+" : ""}{item.variance}%
                  </Badge>
                </div>
                <Progress value={(item.actual / item.budget) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest financial transactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { description: "Raw Material Purchase", amount: -125000, type: "Expense", date: "Today" },
              { description: "Product Sales - Hospital Chain", amount: 340000, type: "Revenue", date: "Yesterday" },
              { description: "Equipment Maintenance", amount: -8500, type: "Expense", date: "2 days ago" },
              { description: "Insurance Payment", amount: -25000, type: "Expense", date: "3 days ago" },
              { description: "Product Sales - Pharmacy", amount: 89000, type: "Revenue", date: "4 days ago" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.type} • {transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinanceDashboard;