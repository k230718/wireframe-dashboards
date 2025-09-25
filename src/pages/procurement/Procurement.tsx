import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Plus, Search, Download, Eye, Edit, Trash2, FileText, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import ModuleLayout from "@/components/layout/ModuleLayout";
import ProcurementDashboard from "./ProcurementDashboard";
import Settings from "./Settings";

const Procurement = () => {
  const location = useLocation();

  // Sample data
  const vendors = [
    {
      name: "BioSupply Corp",
      contact: "contact@biosupply.com",
      phone: "+1-555-0123",
      compliance: "GMP Certified",
      performance: 95.5,
      contractPeriod: "1/1/2024 to 12/31/2024",
    },
    {
      name: "ChemTech Solutions",
      contact: "info@chemtech.com",
      phone: "+1-555-0456",
      compliance: "Pending Review",
      performance: 87.2,
      contractPeriod: "2/15/2024 to 2/14/2025",
    },
    {
      name: "MedEquip International",
      contact: "sales@medequip.com",
      phone: "+1-555-0789",
      compliance: "GMP Certified",
      performance: 92.8,
      contractPeriod: "12/1/2023 to 11/30/2024",
    },
  ];

  const purchaseOrders = [
    {
      orderId: "PO-0001",
      vendor: "BioSupply Corp",
      item: "Vaccine Vials",
      batch: "BCH001",
      quantity: 1000,
      unitPrice: "$25.50",
      total: "$25,500",
      status: "Delivered",
      deliveryDate: "3/25/2024",
    },
    {
      orderId: "PO-0002",
      vendor: "ChemTech Solutions",
      item: "Chemical Reagents",
      batch: "BCH002",
      quantity: 50,
      unitPrice: "$125.00",
      total: "$6,250",
      status: "In Transit",
      deliveryDate: "4/5/2024",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Delivered": "default",
      "In Transit": "secondary",
      "Pending": "outline",
      "GMP Certified": "default",
      "Pending Review": "outline",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  const getComplianceBadge = (compliance: string) => {
    return compliance === "GMP Certified" ? (
      <Badge variant="default">{compliance}</Badge>
    ) : (
      <Badge variant="outline">{compliance}</Badge>
    );
  };

  // Show dashboard for main route, specific content for sub-routes
  if (location.pathname === "/procurement") {
    return (
      <ModuleLayout moduleType="procurement">
        <ProcurementDashboard />
      </ModuleLayout>
    );
  }

  // Handle specific routes
  const renderContent = () => {
    if (location.pathname === "/procurement/vendors") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Vendors</h1>
              <p className="text-muted-foreground">Manage vendor information and compliance status</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Vendor
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Vendor Management</CardTitle>
                  <CardDescription>Manage vendor information and compliance status</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All Compliance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Compliance</SelectItem>
                      <SelectItem value="certified">GMP Certified</SelectItem>
                      <SelectItem value="pending">Pending Review</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search vendors..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>VENDOR NAME</TableHead>
                    <TableHead>CONTACT DETAILS</TableHead>
                    <TableHead>COMPLIANCE STATUS</TableHead>
                    <TableHead>PERFORMANCE SCORE</TableHead>
                    <TableHead>CONTRACT PERIOD</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendors.map((vendor, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{vendor.name}</TableCell>
                      <TableCell>
                        <div>
                          <div>{vendor.contact}</div>
                          <div className="text-sm text-muted-foreground">{vendor.phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getComplianceBadge(vendor.compliance)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={vendor.performance} className="w-16" />
                          <span className="text-sm font-medium">{vendor.performance}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{vendor.contractPeriod}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
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
    } else if (location.pathname === "/procurement/suppliers") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Supplier Management</h1>
              <p className="text-muted-foreground">Manage supplier relationships and performance</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Supplier
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">24</div>
                <p className="text-sm text-muted-foreground">+3 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Spend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">$1.2M</div>
                <p className="text-sm text-muted-foreground">Last 12 months</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Performer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">PharmaCorp Inc</div>
                <p className="text-sm text-muted-foreground">98% on-time delivery</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Supplier Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "PharmaCorp Inc", category: "Raw Materials", contact: "john@pharmacorp.com", performance: "98%", status: "Active" },
                    { name: "MedSupply Ltd", category: "Equipment", contact: "sarah@medsupply.com", performance: "95%", status: "Active" },
                    { name: "ChemSource Co", category: "Chemicals", contact: "mike@chemsource.com", performance: "92%", status: "Review" }
                  ].map((supplier, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>{supplier.category}</TableCell>
                      <TableCell>{supplier.contact}</TableCell>
                      <TableCell>
                        <Badge variant={parseInt(supplier.performance) > 95 ? "default" : "secondary"}>
                          {supplier.performance}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={supplier.status === "Active" ? "default" : "outline"}>
                          {supplier.status}
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
    } else if (location.pathname === "/procurement/contracts") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Contract Management</h1>
              <p className="text-muted-foreground">Track and manage supplier contracts</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Contract
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Active Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">18</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Expiring Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-500">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Under Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-500">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">$2.4M</div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Contract Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contract ID</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "CNT-001", supplier: "PharmaCorp Inc", value: "$500K", start: "2024-01-01", end: "2024-12-31", status: "Active" },
                    { id: "CNT-002", supplier: "MedSupply Ltd", value: "$300K", start: "2024-02-15", end: "2024-08-15", status: "Expiring" },
                    { id: "CNT-003", supplier: "ChemSource Co", value: "$200K", start: "2024-03-01", end: "2025-03-01", status: "Active" }
                  ].map((contract, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{contract.id}</TableCell>
                      <TableCell>{contract.supplier}</TableCell>
                      <TableCell>{contract.value}</TableCell>
                      <TableCell>{contract.start}</TableCell>
                      <TableCell>{contract.end}</TableCell>
                      <TableCell>
                        <Badge variant={contract.status === "Active" ? "default" : contract.status === "Expiring" ? "destructive" : "outline"}>
                          {contract.status}
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
    } else if (location.pathname === "/procurement/budget") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Budget Management</h1>
              <p className="text-muted-foreground">Track procurement budgets and spending</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Set Budget
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Total Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">$2.5M</div>
                <p className="text-sm text-muted-foreground">FY 2024</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-500">$1.8M</div>
                <p className="text-sm text-muted-foreground">72% utilized</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Remaining</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-500">$700K</div>
                <p className="text-sm text-muted-foreground">28% available</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Raw Materials", budget: "$1M", spent: "$750K", percentage: 75 },
                    { category: "Equipment", budget: "$800K", spent: "$600K", percentage: 75 },
                    { category: "Services", budget: "$400K", spent: "$280K", percentage: 70 },
                    { category: "Maintenance", budget: "$300K", spent: "$170K", percentage: 57 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-sm text-muted-foreground">{item.spent} / {item.budget}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.percentage > 80 ? 'bg-red-500' : item.percentage > 60 ? 'bg-orange-500' : 'bg-green-500'}`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { description: "Raw Material Purchase", amount: "$45,000", date: "Jul 10, 2024", category: "Raw Materials" },
                    { description: "Equipment Maintenance", amount: "$12,500", date: "Jul 08, 2024", category: "Services" },
                    { description: "New Packaging Machine", amount: "$85,000", date: "Jul 05, 2024", category: "Equipment" }
                  ].map((expense, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{expense.description}</p>
                        <p className="text-sm text-muted-foreground">{expense.category} • {expense.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{expense.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    } else if (location.pathname === "/procurement/orders") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Purchase Orders</h1>
              <p className="text-muted-foreground">Track and manage purchase orders</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Order
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Purchase Orders</CardTitle>
              <CardDescription>Track and manage purchase orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Unit Price</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Delivery Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchaseOrders.map((order, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{order.orderId}</TableCell>
                      <TableCell>{order.vendor}</TableCell>
                      <TableCell>
                        <div>
                          <div>{order.item}</div>
                          <div className="text-sm text-muted-foreground">Batch: {order.batch}</div>
                        </div>
                      </TableCell>
                      <TableCell>{order.quantity.toLocaleString()}</TableCell>
                      <TableCell>{order.unitPrice}</TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>{order.deliveryDate}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="h-2 bg-muted rounded-full w-32">
                  <div className="h-2 bg-primary rounded-full w-16"></div>
                </div>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      // Default placeholder for other routes
      return (
      <div className="p-6">
        <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Page Not Implemented</h3>
            <p className="text-muted-foreground">This page is under development.</p>
          </div>
        </div>
        </div>
      );
    }
  };

  return (
    <ModuleLayout moduleType="procurement">
      {renderContent()}
    </ModuleLayout>
  );
};

export default Procurement;