import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Plus, FileText, Eye, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinanceDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">General Ledger</h1>
          <p className="text-muted-foreground">Overview of your financial health and key metrics</p>
        </div>
        <Button>
          <DollarSign className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Financial Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">$124,500</div>
            <p className="text-xs text-green-600">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-700">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800">$45,200</div>
            <p className="text-xs text-red-600">-3.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Accounts Receivable</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">$32,400</div>
            <p className="text-xs text-blue-600">8 invoices pending</p>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Accounts Payable</CardTitle>
            <CreditCard className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-800">$18,750</div>
            <p className="text-xs text-orange-600">5 invoices due</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Recent Transactions
              </CardTitle>
              <CardDescription>Latest entries in your general ledger</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { description: "Sales Revenue", date: "2024-01-15", category: "Sales", amount: 15000, type: "revenue" },
              { description: "Office Supplies", date: "2024-01-14", category: "Procurement", amount: -250, type: "expense" },
              { description: "Customer Payment", date: "2024-01-13", category: "Sales", amount: 5000, type: "cash" }
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date} • {transaction.category}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">{transaction.type}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Budget Status */}
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Budget Status
              </CardTitle>
              <CardDescription>Budgeted vs actual amounts for key accounts</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { category: "Revenue", actual: 85000, budget: 100000, percentage: 85 },
              { category: "Marketing", actual: 18000, budget: 25000, percentage: 72 },
              { category: "Operations", actual: 45000, budget: 50000, percentage: 90 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
                <Progress value={item.percentage} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${item.actual.toLocaleString()} actual</span>
                  <span>${item.budget.toLocaleString()} budget</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common financial management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate('/finance/transactions')}
            >
              <Plus className="w-5 h-5" />
              Add Transaction
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate('/finance/invoices')}
            >
              <FileText className="w-5 h-5" />
              Create Invoice
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate('/finance/payables')}
            >
              <Eye className="w-5 h-5" />
              View Payables
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate('/finance/budgets')}
            >
              <Target className="w-5 h-5" />
              Manage Budgets
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceDashboard;