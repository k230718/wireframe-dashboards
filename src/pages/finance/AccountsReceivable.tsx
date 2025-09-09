import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Plus } from "lucide-react";

const AccountsReceivable = () => {
  const receivables = [
    {
      invoiceId: "INV-R001",
      customerId: "CUST-001",
      invoiceDate: "2024-01-10",
      dueDate: "2024-02-10",
      amount: 3500,
      amountPaid: 1500,
      outstandingAmount: 2000,
      status: "Pending",
      paymentDate: "N/A"
    },
    {
      invoiceId: "INV-R002",
      customerId: "CUST-002",
      invoiceDate: "2024-01-05",
      dueDate: "2024-01-20",
      amount: 7500,
      amountPaid: 0,
      outstandingAmount: 7500,
      status: "Overdue",
      paymentDate: "N/A"
    },
    {
      invoiceId: "INV-R003",
      customerId: "CUST-001",
      invoiceDate: "2024-01-15",
      dueDate: "2024-02-15",
      amount: 4200,
      amountPaid: 4200,
      outstandingAmount: 0,
      status: "Paid",
      paymentDate: "2024-01-25"
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
          <h1 className="text-3xl font-bold text-foreground">Accounts Receivable</h1>
          <p className="text-muted-foreground">Manage customer invoices and payments</p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-4">
            <Input 
              placeholder="Search by invoice ID or customer..." 
              className="max-w-sm"
            />
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Invoice
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer ID</TableHead>
                <TableHead>Invoice Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Outstanding Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {receivables.map((receivable) => (
                <TableRow key={receivable.invoiceId}>
                  <TableCell className="font-medium">{receivable.invoiceId}</TableCell>
                  <TableCell>{receivable.customerId}</TableCell>
                  <TableCell>{receivable.invoiceDate}</TableCell>
                  <TableCell>{receivable.dueDate}</TableCell>
                  <TableCell>${receivable.amount.toLocaleString()}</TableCell>
                  <TableCell>${receivable.amountPaid.toLocaleString()}</TableCell>
                  <TableCell>${receivable.outstandingAmount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(receivable.status)}>
                      {receivable.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{receivable.paymentDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {receivable.status !== "Paid" && (
                        <Button variant="outline" size="sm">
                          Record Payment
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

export default AccountsReceivable;