import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OrderFulfillment = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Order Fulfillment</h1>
          <p className="text-muted-foreground">Process customer orders from receipt to delivery</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + Create Order
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ORD-001</TableCell>
                <TableCell>Customer 1001</TableCell>
                <TableCell>8/4/2024</TableCell>
                <TableCell>2 Items</TableCell>
                <TableCell>$3500.00</TableCell>
                <TableCell>
                  <Badge variant="outline">Processing</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ORD-002</TableCell>
                <TableCell>Customer 1002</TableCell>
                <TableCell>8/3/2024</TableCell>
                <TableCell>1 Items</TableCell>
                <TableCell>$750.00</TableCell>
                <TableCell>
                  <Badge variant="default">Shipped</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ORD-003</TableCell>
                <TableCell>Customer 1003</TableCell>
                <TableCell>8/2/2024</TableCell>
                <TableCell>0 Items</TableCell>
                <TableCell>$1200.00</TableCell>
                <TableCell>
                  <Badge variant="secondary">Delivered</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderFulfillment;