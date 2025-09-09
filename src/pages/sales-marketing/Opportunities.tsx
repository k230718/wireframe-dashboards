import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Plus, Search } from "lucide-react";

const Opportunities = () => {
  const opportunities = [
    {
      id: "O001",
      leadCustomer: "David Brown",
      stage: "negotiation",
      expectedRevenue: 45000,
      closeDate: "2024-02-15",
      salesRep: "Jane Doe"
    },
    {
      id: "O002",
      leadCustomer: "Acme Corp",
      stage: "qualification",
      expectedRevenue: 30000,
      closeDate: "2024-03-01",
      salesRep: "John Smith"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "negotiation":
        return "bg-blue-100 text-blue-800";
      case "qualification":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Opportunities</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Opportunity
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search opportunities..." 
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Opportunity ID</TableHead>
                <TableHead>Lead/Customer</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Expected Revenue</TableHead>
                <TableHead>Close Date</TableHead>
                <TableHead>Sales Rep</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {opportunities.map((opportunity) => (
                <TableRow key={opportunity.id}>
                  <TableCell className="font-medium">{opportunity.id}</TableCell>
                  <TableCell>{opportunity.leadCustomer}</TableCell>
                  <TableCell>
                    <Badge className={getStageColor(opportunity.stage)}>
                      {opportunity.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>${opportunity.expectedRevenue.toLocaleString()}</TableCell>
                  <TableCell>{opportunity.closeDate}</TableCell>
                  <TableCell>{opportunity.salesRep}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Advance
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
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

export default Opportunities;