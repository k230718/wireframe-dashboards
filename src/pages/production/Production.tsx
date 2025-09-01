// Manufacturing Management System
"use client";

import React, { useState } from 'react';
import { 
  Home, Menu, X, ChevronLeft, ChevronRight, 
  Factory, Calendar, Shield, Wrench, BarChart3, 
  Plus, Filter, Eye, Search, User, LogOut 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const navigationItems = [
  { id: "dashboard", name: "Manufacturing Dashboard", icon: Home, href: "/manufacturing/dashboard" },
  { id: "production-planning", name: "Production Planning", icon: Calendar, href: "/manufacturing/planning" },
  { id: "bill-of-materials", name: "Bill of Materials", icon: Factory, href: "/manufacturing/bom", badge: "2" },
  { id: "shop-floor-control", name: "Shop Floor Control", icon: Shield, href: "/manufacturing/shop" },
  { id: "quality-control", name: "Quality Control", icon: Wrench, href: "/manufacturing/quality" },
  { id: "maintenance-management", name: "Maintenance Management", icon: Factory, href: "/manufacturing/maintenance" },
  { id: "production-orders", name: "Production Orders", icon: BarChart3, href: "/manufacturing/orders" },
];

function Sidebar({ activeItem, setActiveItem, isCollapsed, setIsCollapsed, onLogout }: {
  activeItem: string;
  setActiveItem: (item: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  onLogout?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-white shadow-md border border-border md:hidden hover:bg-accent transition-all duration-200"
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
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-base">ManufacturingERP</span>
                <span className="text-xs text-muted-foreground">Manufacturing Management</span>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center mx-auto shadow-sm">
              <span className="text-white font-bold text-base">M</span>
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
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-left transition-all duration-200 group relative
                      ${isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
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
                          ${isActive ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground group-hover:text-foreground"}
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
                      <div className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center rounded-full bg-blue-100 border border-background">
                        <span className="text-[10px] font-medium text-blue-700">
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
                  <span className="text-foreground font-medium text-sm">PM</span>
                </div>
                <div className="flex-1 min-w-0 ml-2.5">
                  <p className="text-sm font-medium text-foreground truncate">Production Manager</p>
                  <p className="text-xs text-muted-foreground truncate">Manufacturing Lead</p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full ml-2" title="Online" />
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-foreground font-medium text-sm">PM</span>
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

function ManufacturingDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manufacturing Dashboard</h1>
          <p className="text-muted-foreground">Overview of your manufacturing operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Production</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">1,500 Units</div>
            <p className="text-xs text-blue-600 dark:text-blue-400">+8% from last week</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">Active Orders</CardTitle>
            <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">3 Orders</div>
            <p className="text-xs text-green-600 dark:text-green-400">2 in progress</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">Quality Issues</CardTitle>
            <Wrench className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">5 Cases</div>
            <p className="text-xs text-purple-600 dark:text-purple-400">3 resolved</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-300">Maintenance Due</CardTitle>
            <Factory className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">1 Machine</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Due tomorrow</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Production Schedule
            </CardTitle>
            <CardDescription>Latest production plans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">Order 001</p>
                  <p className="text-xs text-muted-foreground">Paracetamol</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-blue-600">500 Units</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">Order 002</p>
                  <p className="text-xs text-muted-foreground">Aspirin</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">300 Units</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Production Trends
            </CardTitle>
            <CardDescription>Mock trend overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div className="h-2 rounded-full bg-purple-500" style={{ width: "65%" }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1000 Units</span>
                <span>650 Units</span>
              </div>
              <p className="text-sm text-muted-foreground">Trend from July 1 to July 24</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common manufacturing tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="h-5 w-5" />
              Create Order
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Shield className="h-5 w-5" />
              Check Quality
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Wrench className="h-5 w-5" />
              Schedule Maintenance
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BarChart3 className="h-5 w-5" />
              Analyze Production
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ProductionPlanning() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Production Planning</h1>
          <p className="text-muted-foreground">Manage production schedules</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Create Plan
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by plan..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="planned">Planned</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Paracetamol</TableCell>
              <TableCell>1000</TableCell>
              <TableCell><Badge variant="secondary">Planned</Badge></TableCell>
              <TableCell>2025-07-25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Aspirin</TableCell>
              <TableCell>800</TableCell>
              <TableCell><Badge variant="default">Completed</Badge></TableCell>
              <TableCell>2025-07-24</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function BillOfMaterials() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bill of Materials</h1>
          <p className="text-muted-foreground">Manage material requirements</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add BOM
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by product..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="tablet">Tablet</SelectItem>
            <SelectItem value="syrup">Syrup</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
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
              <TableCell>001</TableCell>
              <TableCell>Tablet</TableCell>
              <TableCell>Active Ingredient</TableCell>
              <TableCell>500mg</TableCell>
              <TableCell>1.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Syrup</TableCell>
              <TableCell>Sweetener</TableCell>
              <TableCell>200ml</TableCell>
              <TableCell>1.1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function ShopFloorControl() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Shop Floor Control</h1>
          <p className="text-muted-foreground">Monitor shop floor activities</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Log Activity
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by order..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
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
              <TableCell>001</TableCell>
              <TableCell>001</TableCell>
              <TableCell>Mixer-01</TableCell>
              <TableCell>200</TableCell>
              <TableCell>2025-07-24 09:00</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>002</TableCell>
              <TableCell>Press-01</TableCell>
              <TableCell>150</TableCell>
              <TableCell>2025-07-24 10:00</TableCell>
              <TableCell>Yes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function QualityControl() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quality Control</h1>
          <p className="text-muted-foreground">Manage quality inspections</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Log Inspection
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by order..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pass">Pass</SelectItem>
            <SelectItem value="fail">Fail</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Record ID</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Defect</TableHead>
              <TableHead>Count</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>001</TableCell>
              <TableCell>Contamination</TableCell>
              <TableCell>2</TableCell>
              <TableCell><Badge variant="destructive">Fail</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>002</TableCell>
              <TableCell>None</TableCell>
              <TableCell>0</TableCell>
              <TableCell><Badge variant="default">Pass</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function MaintenanceManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Maintenance Management</h1>
          <p className="text-muted-foreground">Schedule and track maintenance</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Maintenance
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by equipment..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Schedule ID</TableHead>
              <TableHead>Equipment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Mixer-01</TableCell>
              <TableCell>2025-07-26</TableCell>
              <TableCell><Badge variant="secondary">Scheduled</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Press-01</TableCell>
              <TableCell>2025-07-25</TableCell>
              <TableCell><Badge variant="default">Completed</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

function ProductionOrders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Production Orders</h1>
          <p className="text-muted-foreground">Track production orders</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Create Order
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Input placeholder="Search by order..." className="max-w-sm" />
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start</TableHead>
              <TableHead>End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Paracetamol</TableCell>
              <TableCell>B001</TableCell>
              <TableCell>500</TableCell>
              <TableCell><Badge variant="secondary">Running</Badge></TableCell>
              <TableCell>2025-07-24 08:00</TableCell>
              <TableCell>2025-07-24 10:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Aspirin</TableCell>
              <TableCell>B002</TableCell>
              <TableCell>300</TableCell>
              <TableCell><Badge variant="default">Completed</Badge></TableCell>
              <TableCell>2025-07-24 07:00</TableCell>
              <TableCell>2025-07-24 09:00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default function ManufacturingManagement({ onLogout }: { onLogout: () => void }) {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <ManufacturingDashboard />;
      case "production-planning":
        return <ProductionPlanning />;
      case "bill-of-materials":
        return <BillOfMaterials />;
      case "shop-floor-control":
        return <ShopFloorControl />;
      case "quality-control":
        return <QualityControl />;
      case "maintenance-management":
        return <MaintenanceManagement />;
      case "production-orders":
        return <ProductionOrders />;
      default:
        return <ManufacturingDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeItem={currentView}
        setActiveItem={setCurrentView}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        onLogout={onLogout}
      />
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-72"} md:ml-0`}>
        <main className="p-6 overflow-auto h-full">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}