import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const ShopFloorControl = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Shop Floor Control</h1>
          <p className="text-muted-foreground">Monitor shop floor activities</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Log Activity
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Input placeholder="Search by order..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="running">Running</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Record ID</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Machine</TableHead>
                <TableHead>Output</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Delay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">001</TableCell>
                <TableCell>001</TableCell>
                <TableCell>Mixer-01</TableCell>
                <TableCell>200</TableCell>
                <TableCell>2025-07-24 09:00</TableCell>
                <TableCell>No</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">002</TableCell>
                <TableCell>002</TableCell>
                <TableCell>Press-01</TableCell>
                <TableCell>150</TableCell>
                <TableCell>2025-07-24 10:00</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopFloorControl;