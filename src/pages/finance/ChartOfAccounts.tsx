import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Trash2, Plus } from "lucide-react";

const ChartOfAccounts = () => {
  const accounts = [
    { code: "1000", name: "Cash", type: "Asset", status: "Active" },
    { code: "1100", name: "Accounts Receivable", type: "Asset", status: "Active" },
    { code: "2000", name: "Accounts Payable", type: "Liability", status: "Active" },
    { code: "3000", name: "Revenue", type: "Revenue", status: "Active" },
    { code: "4000", name: "Expenses", type: "Expense", status: "Active" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Chart of Accounts</h1>
          <p className="text-muted-foreground">Manage your account categories for financial tracking</p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <Input 
                placeholder="Search by account code or name..." 
                className="max-w-sm"
              />
              <div className="flex items-center space-x-2">
                <Checkbox id="inactive" />
                <label htmlFor="inactive" className="text-sm font-medium">
                  Show inactive accounts
                </label>
              </div>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Account
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Code</TableHead>
                <TableHead>Account Name</TableHead>
                <TableHead>Account Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.code}>
                  <TableCell className="font-medium">{account.code}</TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.type}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {account.status}
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

export default ChartOfAccounts;