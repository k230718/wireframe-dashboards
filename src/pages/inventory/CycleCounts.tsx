import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const CycleCounts = () => {
  const cycleCounts = [
    {
      id: 1,
      name: "Active Ingredient",
      scheduled: "2025-08-06",
      actual: 450,
      system: 500,
      discrepancy: -50
    },
    {
      id: 2,
      name: "Tablet", 
      scheduled: "2025-08-07",
      actual: 290,
      system: 300,
      discrepancy: -10
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Cycle Counts</h1>
          <p className="text-muted-foreground">Manage inventory cycle counts</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Start Count
        </Button>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search by item..." className="max-w-sm" />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Dates" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Dates</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Count ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Scheduled</TableHead>
                <TableHead>Actual</TableHead>
                <TableHead>System</TableHead>
                <TableHead>Discrepancy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cycleCounts.map((count) => (
                <TableRow key={count.id}>
                  <TableCell>{count.id}</TableCell>
                  <TableCell className="font-medium">{count.name}</TableCell>
                  <TableCell>{count.scheduled}</TableCell>
                  <TableCell>{count.actual}</TableCell>
                  <TableCell>{count.system}</TableCell>
                  <TableCell>
                    <span className={count.discrepancy < 0 ? "text-red-600" : "text-green-600"}>
                      {count.discrepancy}
                    </span>
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

export default CycleCounts;