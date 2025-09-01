"use client";

import React, { useState, useEffect } from 'react';
import { 
  Home, Menu, X, ChevronLeft, ChevronRight, 
  Package, AlertTriangle, BarChart3, FileText, 
  Plus, Filter, Eye, Search, User, LogOut 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface NavigationItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  href: string;
  badge?: string;
}

interface SidebarProps {
  onNavigate: (itemId: string) => void;
  onLogout: () => void;
}

interface InventoryItem {
  id: string;
  name: string;
  location: string;
  quantity: number;
  reserved: number;
  expires: string;
}

interface ReorderAlert {
  id: string;
  item: string;
  threshold: number;
  current: number;
  status: string;
  date: string;
}

interface CycleCount {
  id: string;
  item: string;
  scheduled: string;
  actual: number;
  system: number;
  discrepancy: number;
}

interface AnalyticsData {
  id: string;
  item: string;
  period: string;
  turnover: number;
  obsolete: string;
}

interface BatchData {
  id: string;
  item: string;
  batch: string;
  manufactured: string;
  expires: string;
  status: string;
}

const navigationItems: NavigationItem[] = [
  { id: "stock-overview", name: "Stock Overview", icon: Home, href: "/inventory/stock" },
  { id: "reorder-alerts", name: "Reorder Alerts", icon: AlertTriangle, href: "/inventory/reorder", badge: "3" },
  { id: "cycle-counts", name: "Cycle Counts", icon: FileText, href: "/inventory/cycle" },
  { id: "inventory-analytics", name: "Analytics", icon: BarChart3, href: "/inventory/analytics" },
  { id: "batch-management", name: "Batch Management", icon: Package, href: "/inventory/batch" },
];

function Sidebar({ onNavigate, onLogout }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("stock-overview");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(true);
      else setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate(itemId);
    if (window.innerWidth < 768) setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-background shadow-md border border-border md:hidden hover:bg-accent transition-all duration-200"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300" 
          onClick={toggleSidebar} 
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full bg-background border-r border-border z-40 transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCollapsed ? "w-20" : "w-72"}
          md:translate-x-0 md:static md:z-auto
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-border bg-muted/30">
          {!isCollapsed && (
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">I</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-base">InventoryERP</span>
                <span className="text-xs text-muted-foreground">Inventory Management</span>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center mx-auto shadow-sm">
              <span className="text-white font-bold text-base">I</span>
            </div>
          )}
          <button
            onClick={toggleCollapse}
            className="hidden md:flex p-1.5 rounded-md hover:bg-accent transition-all duration-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4 text-muted-foreground" /> : <ChevronLeft className="h-4 w-4 text-muted-foreground" />}
          </button>
        </div>

        {!isCollapsed && (
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 bg-muted/50 border-border text-sm"
              />
            </div>
          </div>
        )}

        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-left transition-all duration-200 group relative
                      ${isActive
                        ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                        : "text-foreground hover:bg-accent"
                      }
                      ${isCollapsed ? "justify-center px-2" : ""}
                    `}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <div className="flex items-center justify-center min-w-[24px]">
                      <Icon
                        className={`
                          h-4.5 w-4.5 flex-shrink-0
                          ${isActive ? "text-green-600 dark:text-green-400" : "text-muted-foreground group-hover:text-foreground"}
                        `}
                      />
                    </div>
                    {!isCollapsed && (
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-sm ${isActive ? "font-medium" : "font-normal"}`}>{item.name}</span>
                        {item.badge && (
                          <Badge variant={isActive ? "default" : "secondary"} className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    )}
                    {isCollapsed && item.badge && (
                      <div className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center rounded-full bg-green-100 border border-background">
                        <span className="text-[10px] font-medium text-green-700">
                          {parseInt(item.badge) > 9 ? '9+' : item.badge}
                        </span>
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-border">
          <div className={`border-b border-border bg-muted/30 ${isCollapsed ? 'py-3 px-2' : 'p-3'}`}>
            {!isCollapsed ? (
              <div className="flex items-center px-3 py-2 rounded-md bg-background hover:bg-accent transition-colors duration-200">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-foreground font-medium text-sm">IM</span>
                </div>
                <div className="flex-1 min-w-0 ml-2.5">
                  <p className="text-sm font-medium text-foreground truncate">Inventory Manager</p>
                  <p className="text-xs text-muted-foreground truncate">Inventory Lead</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full ml-2" title="Online" />
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-foreground font-medium text-sm">IM</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                </div>
              </div>
            )}
          </div>
          <div className="p-3">
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-left transition-all duration-200 hover:bg-destructive/10 text-destructive hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
              {!isCollapsed && <span className="text-sm">Back to Dashboard Selection</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function InventoryDashboard() {
  const [items] = useState<InventoryItem[]>([
    { id: '1', name: 'Active Ingredient', location: 'Warehouse A', quantity: 500, reserved: 0, expires: '2026-08-06' },
    { id: '2', name: 'Tablet', location: 'Cold Storage', quantity: 300, reserved: 100, expires: '2026-07-15' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Dashboard</h1>
          <p className="text-muted-foreground">Overview of your inventory health and key metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" /> View Details
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Total Stock</CardTitle>
            <Package className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">1,200 Units</div>
            <p className="text-xs text-green-600 dark:text-green-400">+5% from last week</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Low Stock Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">4 Items</div>
            <p className="text-xs text-blue-600 dark:text-blue-400">3 pending reorders</p>
          </CardContent>
        </Card>
        <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Stock Turnover</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">1.8</div>
            <p className="text-xs text-purple-600 dark:text-purple-400">Stable turnover rate</p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">Expired Batches</CardTitle>
            <FileText className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">2 Batches</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Expiring this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" /> Stock Status
            </CardTitle>
            <CardDescription>Latest stock levels overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">{item.quantity} Units</p>
                    <p className="text-xs text-muted-foreground">Reserved: {item.reserved}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" /> Inventory Trends
            </CardTitle>
            <CardDescription>Mock trend overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-purple-500" style={{ width: "60%" }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1000 Units</span>
                <span>600 Units</span>
              </div>
              <p className="text-sm text-muted-foreground">Trend from July 1 to August 5</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common inventory management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="h-5 w-5" /> Add Item
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertTriangle className="h-5 w-5" /> Check Alerts
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Eye className="h-5 w-5" /> View Batches
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BarChart3 className="h-5 w-5" /> Analyze Stock
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ReorderAlerts() {
  const [alerts] = useState<ReorderAlert[]>([
    { id: '1', item: 'Active Ingredient', threshold: 100, current: 50, status: 'Pending', date: '2025-08-06 10:00' },
    { id: '2', item: 'Binder', threshold: 50, current: 20, status: 'Ordered', date: '2025-08-05 14:00' },
  ]);
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAlerts = alerts.filter(alert => 
    statusFilter === 'all' || alert.status.toLowerCase() === statusFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reorder Alerts</h1>
          <p className="text-muted-foreground">Manage items needing reordering</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Generate Order
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by item..." className="max-w-sm" />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="ordered">Ordered</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Threshold</TableHead>
              <TableHead>Current</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAlerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{alert.id}</TableCell>
                <TableCell>{alert.item}</TableCell>
                <TableCell>{alert.threshold}</TableCell>
                <TableCell>{alert.current}</TableCell>
                <TableCell><Badge variant={alert.status === 'Ordered' ? 'default' : 'secondary'}>{alert.status}</Badge></TableCell>
                <TableCell>{alert.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function CycleCounts() {
  const [counts] = useState<CycleCount[]>([
    { id: '1', item: 'Active Ingredient', scheduled: '2025-08-06', actual: 450, system: 500, discrepancy: -50 },
    { id: '2', item: 'Tablet', scheduled: '2025-08-07', actual: 290, system: 300, discrepancy: -10 },
  ]);
  const [dateFilter, setDateFilter] = useState('all');

  const filteredCounts = counts.filter(count => 
    dateFilter === 'all' || count.scheduled === dateFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Cycle Counts</h1>
          <p className="text-muted-foreground">Manage inventory cycle counts</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Start Count
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by item..." className="max-w-sm" />
        <Select value={dateFilter} onValueChange={setDateFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Dates</SelectItem>
            <SelectItem value="2025-08-06">Today</SelectItem>
            <SelectItem value="2025-08-07">Tomorrow</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
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
            {filteredCounts.map((count) => (
              <TableRow key={count.id}>
                <TableCell>{count.id}</TableCell>
                <TableCell>{count.item}</TableCell>
                <TableCell>{count.scheduled}</TableCell>
                <TableCell>{count.actual}</TableCell>
                <TableCell>{count.system}</TableCell>
                <TableCell className={count.discrepancy < 0 ? 'text-red-600' : ''}>{count.discrepancy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function InventoryAnalytics() {
  const [analytics] = useState<AnalyticsData[]>([
    { id: '1', item: 'Active Ingredient', period: 'August 2025', turnover: 1.8, obsolete: 'Yes' },
    { id: '2', item: 'Tablet', period: 'August 2025', turnover: 2.0, obsolete: 'No' },
  ]);
  const [periodFilter, setPeriodFilter] = useState('all');

  const filteredAnalytics = analytics.filter(analytic => 
    periodFilter === 'all' || analytic.period === periodFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Analytics</h1>
          <p className="text-muted-foreground">Analyze inventory performance</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Generate Report
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by item..." className="max-w-sm" />
        <Select value={periodFilter} onValueChange={setPeriodFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Periods</SelectItem>
            <SelectItem value="August 2025">This Month</SelectItem>
            <SelectItem value="2025">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardContent>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="h-2 rounded-full bg-blue-500" style={{ width: "70%" }} />
          </div>
          <p className="text-sm text-muted-foreground">Turnover Trend: 1.5 to 2.0 (July 1 - August 5)</p>
        </CardContent>
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
            {filteredAnalytics.map((analytic) => (
              <TableRow key={analytic.id}>
                <TableCell>{analytic.id}</TableCell>
                <TableCell>{analytic.item}</TableCell>
                <TableCell>{analytic.period}</TableCell>
                <TableCell>{analytic.turnover}</TableCell>
                <TableCell><Badge variant={analytic.obsolete === 'Yes' ? 'destructive' : 'default'}>{analytic.obsolete}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function BatchManagement() {
  const [batches] = useState<BatchData[]>([
    { id: '1', item: 'Active Ingredient', batch: 'B001', manufactured: '2025-08-01', expires: '2026-08-01', status: 'Active' },
    { id: '2', item: 'Tablet', batch: 'B002', manufactured: '2025-07-15', expires: '2025-08-06', status: 'Expired' },
  ]);
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredBatches = batches.filter(batch => 
    statusFilter === 'all' || batch.status.toLowerCase() === statusFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Batch Management</h1>
          <p className="text-muted-foreground">Manage batch details</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Update Status
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by batch..." className="max-w-sm" />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Number</TableHead>
              <TableHead>Manufactured</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBatches.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell>{batch.id}</TableCell>
                <TableCell>{batch.item}</TableCell>
                <TableCell>{batch.batch}</TableCell>
                <TableCell>{batch.manufactured}</TableCell>
                <TableCell>{batch.expires}</TableCell>
                <TableCell><Badge variant={batch.status === 'Expired' ? 'destructive' : 'default'}>{batch.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function InventoryManagement({ onLogout }: { onLogout: () => void }) {
  const [currentView, setCurrentView] = useState("stock-overview");

  const handleNavigate = (itemId: string) => {
    setCurrentView(itemId);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "stock-overview":
        return <InventoryDashboard />;
      case "reorder-alerts":
        return <ReorderAlerts />;
      case "cycle-counts":
        return <CycleCounts />;
      case "inventory-analytics":
        return <InventoryAnalytics />;
      case "batch-management":
        return <BatchManagement />;
      default:
        return <InventoryDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar onNavigate={handleNavigate} onLogout={onLogout} />
      <div className={`flex-1 transition-all duration-300 ${false ? "ml-20" : "ml-72"} md:ml-0`}>
        <main className="p-6 overflow-auto h-full">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}

export default InventoryManagement;