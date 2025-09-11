import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LogisticsTransportation = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Logistics & Transportation</h1>
          <p className="text-muted-foreground">Track shipments and manage carriers</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + Create Shipment
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Shipment Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tracking Number</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Carrier</TableHead>
                <TableHead>Ship Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">FT123456789</TableCell>
                <TableCell>ORD-001</TableCell>
                <TableCell>FastTrack Logistics</TableCell>
                <TableCell>8/4/2024</TableCell>
                <TableCell>
                  <Badge variant="secondary">In Transit</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GE987654321</TableCell>
                <TableCell>ORD-002</TableCell>
                <TableCell>Global Express</TableCell>
                <TableCell>8/2/2024</TableCell>
                <TableCell>
                  <Badge variant="default">Delivered</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">RF456789123</TableCell>
                <TableCell>ORD-003</TableCell>
                <TableCell>Regional Freight</TableCell>
                <TableCell>8/1/2024</TableCell>
                <TableCell>
                  <Badge variant="destructive">Delayed</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <RotateCcw className="h-4 w-4" />
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

export default LogisticsTransportation;