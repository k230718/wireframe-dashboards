import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  Target, 
  TrendingUp, 
  Megaphone,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Bell,
  Settings,
  User,
  LogOut,
  FileText,
  HelpCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Types
interface Customer {
  id: string;
  name: string;
  email: string;
  creditLimit: number;
  salesRep: string;
  isActive: boolean;
}

interface SalesOrder {
  id: string;
  customerId: string;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  shipmentStatus?: string;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  salesRep: string;
  campaignId?: string;
}

interface Opportunity {
  id: string;
  leadId: string;
  leadName: string;
  customerId?: string;
  customerName?: string;
  stage: 'prospecting' | 'qualification' | 'negotiation' | 'closed';
  expectedRevenue: number;
  closeDate: string;
  salesRep: string;
}

interface Campaign {
  id: string;
  name: string;
  type: string;
  startDate: string;
  endDate?: string;
  budget: number;
  actualSpend: number;
  roi: number;
}

// Mock Data
const mockCustomers: Customer[] = [
  { id: '1', name: 'Acme Corp', email: 'contact@acme.com', creditLimit: 50000, salesRep: 'John Smith', isActive: true },
  { id: '2', name: 'TechStart Inc', email: 'hello@techstart.com', creditLimit: 25000, salesRep: 'Jane Doe', isActive: true },
  { id: '3', name: 'Global Solutions', email: 'info@global.com', creditLimit: 75000, salesRep: 'Mike Johnson', isActive: false },
];

const mockSalesOrders: SalesOrder[] = [
  { id: 'SO001', customerId: '1', customerName: 'Acme Corp', orderDate: '2024-01-15', totalAmount: 15000, status: 'confirmed', shipmentStatus: 'In Transit' },
  { id: 'SO002', customerId: '2', customerName: 'TechStart Inc', orderDate: '2024-01-14', totalAmount: 8500, status: 'pending' },
  { id: 'SO003', customerId: '1', customerName: 'Acme Corp', orderDate: '2024-01-13', totalAmount: 22000, status: 'shipped', shipmentStatus: 'Delivered' },
];

const mockLeads: Lead[] = [
  { id: 'L001', name: 'Sarah Wilson', email: 'sarah@example.com', source: 'Website', status: 'new', salesRep: 'John Smith' },
  { id: 'L002', name: 'David Brown', email: 'david@example.com', source: 'Referral', status: 'qualified', salesRep: 'Jane Doe', campaignId: 'C001' },
  { id: 'L003', name: 'Lisa Garcia', email: 'lisa@example.com', source: 'Social Media', status: 'contacted', salesRep: 'Mike Johnson' },
];

const mockOpportunities: Opportunity[] = [
  { id: 'O001', leadId: 'L002', leadName: 'David Brown', stage: 'negotiation', expectedRevenue: 45000, closeDate: '2024-02-15', salesRep: 'Jane Doe' },
  { id: 'O002', leadId: 'L001', leadName: 'Sarah Wilson', customerId: '1', customerName: 'Acme Corp', stage: 'qualification', expectedRevenue: 30000, closeDate: '2024-03-01', salesRep: 'John Smith' },
];

const mockCampaigns: Campaign[] = [
  { id: 'C001', name: 'Q1 Product Launch', type: 'Digital', startDate: '2024-01-01', endDate: '2024-03-31', budget: 50000, actualSpend: 35000, roi: 2.5 },
  { id: 'C002', name: 'Email Marketing', type: 'Email', startDate: '2024-01-15', budget: 15000, actualSpend: 12000, roi: 1.8 },
];

// Dashboard Component
const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,500</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Opportunities</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              +3 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
              -2 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">2 ending this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Sales Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sales Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSalesOrders.slice(0, 3).map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>${order.totalAmount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'confirmed' ? 'default' : order.status === 'shipped' ? 'secondary' : 'outline'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex flex-col space-y-2">
              <ShoppingCart className="h-6 w-6" />
              <span>Create Order</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Add Lead</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Target className="h-6 w-6" />
              <span>New Opportunity</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Megaphone className="h-6 w-6" />
              <span>Launch Campaign</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Customers Component
const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterActive, setFilterActive] = useState<string>('all');

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterActive === 'all' || 
                         (filterActive === 'active' && customer.isActive) ||
                         (filterActive === 'inactive' && !customer.isActive);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Customers</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Customer</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="customerName">Customer Name</Label>
                <Input id="customerName" placeholder="Enter customer name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div>
                <Label htmlFor="creditLimit">Credit Limit</Label>
                <Input id="creditLimit" type="number" placeholder="Enter credit limit" />
              </div>
              <div>
                <Label htmlFor="salesRep">Sales Representative</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sales rep" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Smith</SelectItem>
                    <SelectItem value="jane">Jane Doe</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Add Customer</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterActive} onValueChange={setFilterActive}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Customers</SelectItem>
            <SelectItem value="active">Active Only</SelectItem>
            <SelectItem value="inactive">Inactive Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Credit Limit</TableHead>
                <TableHead>Sales Rep</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>${customer.creditLimit.toLocaleString()}</TableCell>
                  <TableCell>{customer.salesRep}</TableCell>
                  <TableCell>
                    <Badge variant={customer.isActive ? 'default' : 'secondary'}>
                      {customer.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
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
};

// Sales Orders Component
const SalesOrders: React.FC = () => {
  const [orders, setOrders] = useState<SalesOrder[]>(mockSalesOrders);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sales Orders</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Order
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Shipment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>${order.totalAmount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'confirmed' ? 'default' : order.status === 'shipped' ? 'secondary' : 'outline'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.shipmentStatus || 'N/A'}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
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
        </CardContent>
      </Card>
    </div>
  );
};

// Leads Component
const Leads: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Leads</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search leads..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Lead Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sales Rep</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.source}</TableCell>
                  <TableCell>
                    <Badge variant={lead.status === 'qualified' ? 'default' : lead.status === 'new' ? 'secondary' : 'outline'}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{lead.salesRep}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Convert</Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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

// Opportunities Component
const Opportunities: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(mockOpportunities);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Opportunities</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Opportunity
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
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
                  <TableCell>{opportunity.customerName || opportunity.leadName}</TableCell>
                  <TableCell>
                    <Badge variant={opportunity.stage === 'negotiation' ? 'default' : 'outline'}>
                      {opportunity.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>${opportunity.expectedRevenue.toLocaleString()}</TableCell>
                  <TableCell>{opportunity.closeDate}</TableCell>
                  <TableCell>{opportunity.salesRep}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Advance</Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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

// Campaigns Component
const Campaigns: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Actual Spend</TableHead>
                <TableHead>ROI</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>{campaign.type}</TableCell>
                  <TableCell>{campaign.startDate}</TableCell>
                  <TableCell>{campaign.endDate || 'Ongoing'}</TableCell>
                  <TableCell>${campaign.budget.toLocaleString()}</TableCell>
                  <TableCell>${campaign.actualSpend.toLocaleString()}</TableCell>
                  <TableCell>{campaign.roi}x</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
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
        </CardContent>
      </Card>
    </div>
  );
};

// Sidebar Component for Sales/Marketing
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SalesMarketingSidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'customers', name: 'Customers', icon: Users },
    { id: 'sales-orders', name: 'Sales Orders', icon: ShoppingCart },
    { id: 'leads', name: 'Leads', icon: Target },
    { id: 'opportunities', name: 'Opportunities', icon: TrendingUp },
    { id: 'campaigns', name: 'Campaigns', icon: Megaphone },
  ];

  const bottomItems = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'help', name: 'Help', icon: HelpCircle },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-card border-r border-border z-40 transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        ${isCollapsed ? "w-20" : "w-64"}
        md:translate-x-0
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Sales CRM</span>
                <p className="text-xs text-muted-foreground">Enterprise</p>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex p-1.5 rounded-md hover:bg-accent"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 overflow-y-auto">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      if (window.innerWidth < 768) setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}
                      ${isCollapsed ? "justify-center" : ""}
                    `}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && <span className="text-sm">{item.name}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="border-t border-border p-3">
          <ul className="space-y-1">
            {bottomItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <button className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-muted-foreground hover:bg-accent hover:text-accent-foreground
                    ${isCollapsed ? "justify-center" : ""}
                  `}>
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && <span className="text-sm">{item.name}</span>}
                  </button>
                </li>
              );
            })}
            <li>
              <button className={`
                w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-destructive hover:bg-destructive/10
                ${isCollapsed ? "justify-center" : ""}
              `}>
                <LogOut className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span className="text-sm">Logout</span>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

// Main Component
interface SalesMarketingModuleProps {
  onSwitchToFinancial: () => void;
}

const SalesMarketingModule: React.FC<SalesMarketingModuleProps> = ({ onSwitchToFinancial }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'customers':
        return <Customers />;
      case 'sales-orders':
        return <SalesOrders />;
      case 'leads':
        return <Leads />;
      case 'opportunities':
        return <Opportunities />;
      case 'campaigns':
        return <Campaigns />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile hamburger button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-background border border-border md:hidden"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Module Switch Button */}
      <button
        onClick={onSwitchToFinancial}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border hover:bg-secondary/80"
      >
        Switch to Financial
      </button>

      <SalesMarketingSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main content */}
      <div className="md:ml-64 transition-all duration-300">
        <main className="p-6 ml-16 md:ml-0">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default SalesMarketingModule;