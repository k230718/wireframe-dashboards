import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Plus } from "lucide-react";

const BudgetManagement = () => {
  const budgets = [
    {
      departmentName: "Marketing",
      projectName: "Q1 Campaign",
      budgetAmount: 50000,
      month: "January 2024",
      expectedRevenue: 150000,
      roiProjection: "200.0%"
    },
    {
      departmentName: "IT",
      projectName: "System Upgrade",
      budgetAmount: 75000,
      month: "February 2024",
      expectedRevenue: 200000,
      roiProjection: "166.7%"
    },
    {
      departmentName: "Sales",
      projectName: "Product Launch",
      budgetAmount: 30000,
      month: "March 2024",
      expectedRevenue: 120000,
      roiProjection: "300.0%"
    }
  ];

  const getRoiColor = (roi: string) => {
    const percentage = parseFloat(roi);
    if (percentage >= 200) return "bg-blue-100 text-blue-800";
    if (percentage >= 150) return "bg-green-100 text-green-800";
    return "bg-yellow-100 text-yellow-800";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Budget Management</h1>
          <p className="text-muted-foreground">Plan and track departmental and project budgets</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Switch to Sales Module
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-4">
            <Input 
              placeholder="Search budgets..." 
              className="max-w-sm"
            />
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Budget
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department Name</TableHead>
                <TableHead>Project Name</TableHead>
                <TableHead>Budget Amount</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Expected Revenue</TableHead>
                <TableHead>ROI Projection</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgets.map((budget, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{budget.departmentName}</TableCell>
                  <TableCell>{budget.projectName}</TableCell>
                  <TableCell>${budget.budgetAmount.toLocaleString()}</TableCell>
                  <TableCell>{budget.month}</TableCell>
                  <TableCell>${budget.expectedRevenue.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getRoiColor(budget.roiProjection)}>
                      {budget.roiProjection}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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

export default BudgetManagement;