import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Plus } from "lucide-react";

const AccountsPayable = () => {
  const payables = [
    {
      invoiceNumber: "INV-001",
      supplier: "Office Supplies Co.",
      invoiceDate: "2024-01-10",
      dueDate: "2024-02-10",
      amount: 1500,
      paidAmount: 0,
      status: "Pending"
    },
    {
      invoiceNumber: "INV-002",
      supplier: "Tech Solutions Ltd.",
      invoiceDate: "2024-01-05",
      dueDate: "2024-01-20",
      amount: 5000,
      paidAmount: 0,
      status: "Overdue"
    },
    {
      invoiceNumber: "INV-003",
      supplier: "Marketing Agency",
      invoiceDate: "2024-01-15",
      dueDate: "2024-02-15",
      amount: 2500,
      paidAmount: 2500,
      status: "Paid"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Overdue":
        return "bg-red-100 text-red-800";
      case "Paid":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Accounts Payable</h1>
          <p className="text-muted-foreground">Manage supplier invoices and payments</p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              placeholder="Search by invoice number or supplier..." 
              className="max-w-sm"
            />
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Invoice
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Invoice Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payables.map((payable) => (
                <TableRow key={payable.invoiceNumber}>
                  <TableCell className="font-medium">{payable.invoiceNumber}</TableCell>
                  <TableCell>{payable.supplier}</TableCell>
                  <TableCell>{payable.invoiceDate}</TableCell>
                  <TableCell>{payable.dueDate}</TableCell>
                  <TableCell>${payable.amount.toLocaleString()}</TableCell>
                  <TableCell>${payable.paidAmount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(payable.status)}>
                      {payable.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {payable.status !== "Paid" && (
                        <Button variant="outline" size="sm">
                          Mark as Paid
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
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

export default AccountsPayable;