import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, BarChart3 } from "lucide-react";

const InventoryAnalytics = () => {
  const analyticsData = [
    {
      id: 1,
      name: "Active Ingredient",
      period: "August 2025",
      turnover: 1.8,
      obsolete: "Yes"
    },
    {
      id: 2,
      name: "Tablet",
      period: "August 2025", 
      turnover: 2.0,
      obsolete: "No"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Inventory Analytics</h1>
          <p className="text-muted-foreground">Analyze inventory performance</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search by item..." className="max-w-sm" />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Periods" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Periods</SelectItem>
            <SelectItem value="current">Current Month</SelectItem>
            <SelectItem value="last">Last Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Turnover Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Turnover Trend: 1.5 to 2.0 (July 1 - August 5)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-blue-100 rounded-full h-4">
            <div className="bg-blue-600 h-4 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Turnover</TableHead>
                <TableHead>Obsolete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analyticsData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.period}</TableCell>
                  <TableCell>{item.turnover}</TableCell>
                  <TableCell>
                    <Badge variant={item.obsolete === "Yes" ? "destructive" : "default"}>
                      {item.obsolete}
                    </Badge>
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

export default InventoryAnalytics;