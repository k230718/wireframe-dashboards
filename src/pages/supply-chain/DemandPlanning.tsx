import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DemandPlanning = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Demand Planning</h1>
          <p className="text-muted-foreground">Forecast future demand based on historical data</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          + Create Forecast
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sale ID</TableHead>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Sale Date</TableHead>
                <TableHead>Customer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">SALE-001</TableCell>
                <TableCell>Wireless Headphones</TableCell>
                <TableCell>5</TableCell>
                <TableCell>7/15/2024</TableCell>
                <TableCell>Customer 1001</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SALE-002</TableCell>
                <TableCell>Smartphone Case</TableCell>
                <TableCell>12</TableCell>
                <TableCell>7/20/2024</TableCell>
                <TableCell>Customer 1002</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SALE-003</TableCell>
                <TableCell>USB-C Cable</TableCell>
                <TableCell>100</TableCell>
                <TableCell>7/25/2024</TableCell>
                <TableCell>Customer 1003</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SALE-004</TableCell>
                <TableCell>Wireless Mouse</TableCell>
                <TableCell>25</TableCell>
                <TableCell>7/30/2024</TableCell>
                <TableCell>Customer 1004</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SALE-005</TableCell>
                <TableCell>Unknown</TableCell>
                <TableCell>8</TableCell>
                <TableCell>8/2/2024</TableCell>
                <TableCell>Customer 1005</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Demand Forecasts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Historical Sales</TableHead>
                <TableHead>Forecast Quantity</TableHead>
                <TableHead>Confidence Level</TableHead>
                <TableHead>Forecast Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Wireless Headphones</TableCell>
                <TableCell className="text-blue-600">5 units (1 sales)</TableCell>
                <TableCell>35</TableCell>
                <TableCell>85.5%</TableCell>
                <TableCell>2024-08-15</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Smartphone Case</TableCell>
                <TableCell className="text-blue-600">12 units (1 sales)</TableCell>
                <TableCell>20</TableCell>
                <TableCell>78.2%</TableCell>
                <TableCell>2024-08-15</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">USB-C Cable</TableCell>
                <TableCell className="text-blue-600">100 units (1 sales)</TableCell>
                <TableCell>450</TableCell>
                <TableCell>92.1%</TableCell>
                <TableCell>2024-08-15</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Wireless Mouse</TableCell>
                <TableCell className="text-blue-600">25 units (1 sales)</TableCell>
                <TableCell>60</TableCell>
                <TableCell>81.3%</TableCell>
                <TableCell>2024-08-15</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Unknown</TableCell>
                <TableCell className="text-blue-600">8 units (1 sales)</TableCell>
                <TableCell>15</TableCell>
                <TableCell>73.8%</TableCell>
                <TableCell>2024-08-15</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
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

export default DemandPlanning;