import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const BillOfMaterials = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bill of Materials</h1>
          <p className="text-muted-foreground">Manage material requirements</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add BOM
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Input placeholder="Search by product..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="syrup">Syrup</SelectItem>
                <SelectItem value="capsule">Capsule</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>BOM ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Component</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Version</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">001</TableCell>
                <TableCell>Tablet</TableCell>
                <TableCell>Active Ingredient</TableCell>
                <TableCell>500mg</TableCell>
                <TableCell>1.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">002</TableCell>
                <TableCell>Syrup</TableCell>
                <TableCell>Sweetener</TableCell>
                <TableCell>200ml</TableCell>
                <TableCell>1.1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillOfMaterials;