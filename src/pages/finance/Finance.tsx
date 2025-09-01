/**
 * Financial Management Dashboard - Main Application Component
 * 
 * A comprehensive financial management system featuring:
 * - Responsive sidebar navigation with collapsible functionality
 * - Financial dashboard with key metrics and KPIs
 * - Chart of Accounts management
 * - Accounts Payable and Receivable tracking
 * - Budget management and monitoring
 * - Professional financial theming and responsive design
 * 
 * Architecture:
 * - Component-based modular design
 * - State management with React hooks
 * - TypeScript interfaces for type safety
 * - Responsive design with mobile-first approach
 * - Professional financial color scheme and branding
 */

"use client";

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  BarChart3,
  FileText,
  Bell,
  Search,
  HelpCircle,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plus,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Building2,
  CreditCard,
  Receipt,
  PieChart,
  Target
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// =====================================================
// TYPE DEFINITIONS - Financial Data Models
// =====================================================

/**
 * Navigation item interface for sidebar menu structure
 */
interface NavigationItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string; // For showing notification counts (e.g., pending invoices)
}

/**
 * Sidebar component props interface
 */
interface SidebarProps {
  className?: string;
  onNavigate?: (itemId: string) => void;
}

/**
 * Financial transaction data model
 * Represents individual accounting entries in the general ledger
 */
interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit'; // Standard accounting entry types
  account: string;
  module: string; // Which system module generated this transaction
}

/**
 * Chart of Accounts data model
 * Represents the account structure for financial categorization
 */
interface Account {
  id: string;
  code: string; // Account number (e.g., 1000, 2000)
  name: string;
  type: 'Asset' | 'Liability' | 'Revenue' | 'Expense' | 'Equity'; // Standard accounting categories
  isActive: boolean;
}

/**
 * Accounts Payable data model
 * Represents money owed to suppliers/vendors
 */
interface Payable {
  id: string;
  invoiceNumber: string;
  supplier: string;
  invoiceDate: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  status: 'Pending' | 'Paid' | 'Overdue';
}

/**
 * Accounts Receivable data model
 * Represents money owed by customers
 */
interface Receivable {
  id: string;
  invoiceNumber: string;
  customer: string;
  invoiceDate: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  status: 'Pending' | 'Paid' | 'Overdue';
}

/**
 * Budget data model
 * Represents budget vs actual financial planning
 */
interface Budget {
  id: string;
  account: string;
  period: string; // e.g., "2024-Q1"
  budgetedAmount: number;
  actualAmount: number;
  project?: string; // Optional project-based budgeting
}

// =====================================================
// NAVIGATION CONFIGURATION
// =====================================================

// =====================================================
// NAVIGATION CONFIGURATION - Grouped by Financial Categories
// =====================================================

/**
 * Navigation group interface for organized sidebar structure
 */
interface NavigationGroup {
  id: string;
  label: string;
  items: NavigationItem[];
}

/**
 * Organized navigation structure for the financial management system
 * Grouped by functional areas for better user experience and logical organization
 */
const navigationGroups: NavigationGroup[] = [
  {
    id: "overview",
    label: "Overview",
    items: [
      { 
        id: "dashboard", 
        name: "Dashboard", 
        icon: Home, 
        href: "/dashboard" 
      }
    ]
  },
  {
    id: "accounting",
    label: "Accounting",
    items: [
      { 
        id: "chart-of-accounts", 
        name: "Chart of Accounts", 
        icon: Building2, 
        href: "/accounts" 
      },
      { 
        id: "general-ledger", 
        name: "General Ledger", 
        icon: FileText, 
        href: "/ledger" 
      }
    ]
  },
  {
    id: "transactions",
    label: "Transactions",
    items: [
      { 
        id: "accounts-payable", 
        name: "Payables", 
        icon: CreditCard, 
        href: "/payables", 
        badge: "5" // Shows count of pending payable invoices
      },
      { 
        id: "accounts-receivable", 
        name: "Receivables", 
        icon: Receipt, 
        href: "/receivables", 
        badge: "8" // Shows count of pending receivable invoices
      }
    ]
  },
  {
    id: "planning",
    label: "Planning & Analytics",
    items: [
      { 
        id: "budgets", 
        name: "Budgets", 
        icon: Target, 
        href: "/budgets" 
      },
      { 
        id: "analytics", 
        name: "Analytics", 
        icon: BarChart3, 
        href: "/analytics" 
      }
    ]
  },
  {
    id: "system",
    label: "System",
    items: [
      { 
        id: "settings", 
        name: "Settings", 
        icon: Settings, 
        href: "/settings" 
      }
    ]
  }
];

// =====================================================
// SIDEBAR COMPONENT - Navigation and User Interface
// =====================================================

/**
 * Sidebar Component
 * 
 * Features:
 * - Responsive design (collapsible on mobile, sidebar on desktop)
 * - Collapsible navigation for space efficiency
 * - User profile section with status indicator
 * - Search functionality for quick navigation
 * - Professional branding and styling
 * - Badge support for notification counts
 */
function Sidebar({ className = "", onNavigate }: SidebarProps) {
  // ===== State Management =====
  const [isOpen, setIsOpen] = useState(false); // Mobile sidebar toggle
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop sidebar collapse
  const [activeItem, setActiveItem] = useState("dashboard"); // Current active navigation item

  // ===== Responsive Behavior Setup =====
  useEffect(() => {
    const handleResize = () => {
      // Auto-open sidebar on desktop, close on mobile
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ===== Event Handlers =====
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
    // Auto-close mobile sidebar after navigation
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-card shadow-card border border-border md:hidden hover:bg-accent transition-fast"
        aria-label="Toggle sidebar"
      >
        {isOpen ? 
          <X className="h-5 w-5 text-foreground" /> : 
          <Menu className="h-5 w-5 text-foreground" />
        }
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300" 
          onClick={toggleSidebar} 
        />
      )}

      {/* Main Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-sidebar border-r border-sidebar-border z-40 transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCollapsed ? "w-20" : "w-72"}
          md:translate-x-0 md:static md:z-auto
          ${className}
        `}
      >
        {/* Header Section - Logo and Collapse Toggle */}
        <div className="flex items-center justify-between p-5 border-b border-sidebar-border bg-sidebar-accent/30">
          {!isCollapsed && (
            <div className="flex items-center space-x-2.5">
              {/* Company Logo */}
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-card">
                <span className="text-primary-foreground font-bold text-base">F</span>
              </div>
              {/* Company Name and Tagline */}
              <div className="flex flex-col">
                <span className="font-semibold text-sidebar-foreground text-base">FinanceERP</span>
                <span className="text-xs text-sidebar-foreground/70">Financial Management</span>
              </div>
            </div>
          )}

          {/* Collapsed Logo */}
          {isCollapsed && (
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center mx-auto shadow-card">
              <span className="text-primary-foreground font-bold text-base">F</span>
            </div>
          )}

          {/* Collapse Toggle Button (Desktop Only) */}
          <button
            onClick={toggleCollapse}
            className="hidden md:flex p-1.5 rounded-md hover:bg-sidebar-accent transition-fast"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-sidebar-foreground/70" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-sidebar-foreground/70" />
            )}
          </button>
        </div>

        {/* Search Section */}
        {!isCollapsed && (
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-sidebar-foreground/70" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 bg-sidebar-accent/50 border-sidebar-border text-sm"
              />
            </div>
          </div>
        )}

        {/* Grouped Navigation Menu */}
        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          <div className="space-y-4">
            {navigationGroups.map((group) => (
              <div key={group.id}>
                {/* Group Label */}
                {!isCollapsed && (
                  <div className="px-3 mb-2">
                    <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                      {group.label}
                    </h3>
                  </div>
                )}
                
                {/* Group Items */}
                <ul className="space-y-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.id;

                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleItemClick(item.id)}
                          className={`
                            w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-left transition-fast group relative
                            ${isActive
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "text-sidebar-foreground hover:bg-sidebar-accent"
                            }
                            ${isCollapsed ? "justify-center px-2" : ""}
                          `}
                          title={isCollapsed ? item.name : undefined}
                        >
                          {/* Icon Container */}
                          <div className="flex items-center justify-center min-w-[24px]">
                            <Icon
                              className={`
                                h-4.5 w-4.5 flex-shrink-0
                                ${isActive 
                                  ? "text-primary" 
                                  : "text-sidebar-foreground/70 group-hover:text-sidebar-foreground"
                                }
                              `}
                            />
                          </div>
                          
                          {/* Menu Item Content */}
                          {!isCollapsed && (
                            <div className="flex items-center justify-between w-full">
                              <span className={`text-sm ${isActive ? "font-medium" : "font-normal"}`}>
                                {item.name}
                              </span>
                              {/* Notification Badge */}
                              {item.badge && (
                                <Badge variant={isActive ? "default" : "secondary"} className="text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                          )}

                          {/* Collapsed Badge Indicator */}
                          {isCollapsed && item.badge && (
                            <div className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center rounded-full bg-primary/20 border border-sidebar">
                              <span className="text-[10px] font-medium text-primary">
                                {parseInt(item.badge) > 9 ? '9+' : item.badge}
                              </span>
                            </div>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* User Profile and Logout Section */}
        <div className="mt-auto border-t border-sidebar-border">
          {/* User Profile */}
          <div className={`border-b border-sidebar-border bg-sidebar-accent/30 ${isCollapsed ? 'py-3 px-2' : 'p-3'}`}>
            {!isCollapsed ? (
              <div className="flex items-center px-3 py-2 rounded-md bg-sidebar hover:bg-sidebar-accent transition-fast">
                {/* User Avatar */}
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-sidebar-foreground font-medium text-sm">JD</span>
                </div>
                {/* User Info */}
                <div className="flex-1 min-w-0 ml-2.5">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
                  <p className="text-xs text-sidebar-foreground/70 truncate">Finance Manager</p>
                </div>
                {/* Online Status Indicator */}
                <div className="w-2 h-2 bg-success rounded-full ml-2" title="Online" />
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sidebar-foreground font-medium text-sm">JD</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-sidebar" />
                </div>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <div className="p-3">
            <button
              className={`
                w-full flex items-center rounded-md text-left transition-fast group
                text-destructive hover:bg-destructive/10 hover:text-destructive
                ${isCollapsed ? "justify-center p-2.5" : "space-x-2.5 px-3 py-2.5"}
              `}
              title={isCollapsed ? "Logout" : undefined}
            >
              <div className="flex items-center justify-center min-w-[24px]">
                <LogOut className="h-4.5 w-4.5 flex-shrink-0 text-destructive/80 group-hover:text-destructive" />
              </div>
              
              {!isCollapsed && (
                <span className="text-sm">Logout</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// =====================================================
// FINANCIAL DASHBOARD COMPONENT - Main Overview
// =====================================================

/**
 * Financial Dashboard Component
 * 
 * Provides an executive overview of financial health including:
 * - Key financial metrics (Revenue, Expenses, Receivables, Payables)
 * - Recent transaction history
 * - Budget vs actual performance tracking
 * - Quick action buttons for common tasks
 * - Professional financial data visualization
 */
function FinancialDashboard() {
  // ===== Sample Data - In real app, this would come from API calls =====
  
  /**
   * Recent transactions for general ledger preview
   * Shows latest financial entries across different modules
   */
  const [transactions] = useState<Transaction[]>([
    { 
      id: '1', 
      date: '2024-01-15', 
      description: 'Sales Revenue', 
      amount: 15000, 
      type: 'credit', 
      account: 'Revenue', 
      module: 'Sales' 
    },
    { 
      id: '2', 
      date: '2024-01-14', 
      description: 'Office Supplies', 
      amount: 250, 
      type: 'debit', 
      account: 'Expenses', 
      module: 'Procurement' 
    },
    { 
      id: '3', 
      date: '2024-01-13', 
      description: 'Customer Payment', 
      amount: 5000, 
      type: 'credit', 
      account: 'Cash', 
      module: 'Sales' 
    },
  ]);

  /**
   * Budget performance data
   * Compares budgeted amounts vs actual spending/revenue
   */
  const [budgets] = useState<Budget[]>([
    { 
      id: '1', 
      account: 'Revenue', 
      period: '2024-Q1', 
      budgetedAmount: 100000, 
      actualAmount: 85000 
    },
    { 
      id: '2', 
      account: 'Marketing', 
      period: '2024-Q1', 
      budgetedAmount: 25000, 
      actualAmount: 18000 
    },
    { 
      id: '3', 
      account: 'Operations', 
      period: '2024-Q1', 
      budgetedAmount: 50000, 
      actualAmount: 45000 
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Financial Dashboard</h1>
          <p className="text-muted-foreground">Overview of your financial health and key metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <Card className="border-primary/20 bg-revenue-bg shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-revenue-text">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-revenue-text">$124,500</div>
            <p className="text-xs text-success">+12.5% from last month</p>
          </CardContent>
        </Card>

        {/* Expenses Card */}
        <Card className="border-warning/20 bg-expense-bg shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-expense-text">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-expense-text">$45,200</div>
            <p className="text-xs text-success">-3.2% from last month</p>
          </CardContent>
        </Card>

        {/* Accounts Receivable Card */}
        <Card className="border-primary/20 bg-receivable-bg shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-receivable-text">Accounts Receivable</CardTitle>
            <Receipt className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-receivable-text">$32,400</div>
            <p className="text-xs text-primary">8 invoices pending</p>
          </CardContent>
        </Card>

        {/* Accounts Payable Card */}
        <Card className="border-warning/20 bg-payable-bg shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-payable-text">Accounts Payable</CardTitle>
            <CreditCard className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-payable-text">$18,750</div>
            <p className="text-xs text-warning">5 invoices due</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Latest entries in your general ledger</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border border-border rounded-lg bg-card">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date} • {transaction.module}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${transaction.type === 'credit' ? 'text-success' : 'text-warning'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">{transaction.account}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Budget Status */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Budget Status
            </CardTitle>
            <CardDescription>Budgeted vs actual amounts for key accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgets.map((budget) => {
                const percentage = (budget.actualAmount / budget.budgetedAmount) * 100;
                return (
                  <div key={budget.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{budget.account}</span>
                      <span className="text-sm text-muted-foreground">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          percentage > 90 ? 'bg-destructive' : 
                          percentage > 70 ? 'bg-warning' : 
                          'bg-success'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${budget.actualAmount.toLocaleString()} actual</span>
                      <span>${budget.budgetedAmount.toLocaleString()} budget</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common financial management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary/30">
              <Plus className="h-5 w-5" />
              Add Transaction
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary/30">
              <Receipt className="h-5 w-5" />
              Create Invoice
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary/30">
              <Eye className="h-5 w-5" />
              View Payables
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary/30">
              <Target className="h-5 w-5" />
              Manage Budgets
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// =====================================================
// CHART OF ACCOUNTS COMPONENT - Account Management
// =====================================================

/**
 * Chart of Accounts Component
 * 
 * Manages the company's account structure including:
 * - Account hierarchy and categorization
 * - Account creation and editing
 * - Active/inactive account status
 * - Search and filtering functionality
 * - Standard accounting categories (Assets, Liabilities, Revenue, Expenses, Equity)
 */
function ChartOfAccounts() {
  // ===== Sample Account Data =====
  const [accounts] = useState<Account[]>([
    { id: '1', code: '1000', name: 'Cash', type: 'Asset', isActive: true },
    { id: '2', code: '1100', name: 'Accounts Receivable', type: 'Asset', isActive: true },
    { id: '3', code: '2000', name: 'Accounts Payable', type: 'Liability', isActive: true },
    { id: '4', code: '3000', name: 'Revenue', type: 'Revenue', isActive: true },
    { id: '5', code: '4000', name: 'Expenses', type: 'Expense', isActive: true },
  ]);

  // ===== Filter State =====
  const [showInactive, setShowInactive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ===== Filtering Logic =====
  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         account.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = showInactive || account.isActive;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Chart of Accounts</h1>
          <p className="text-muted-foreground">Manage your account categories for financial tracking</p>
        </div>
        
        {/* Add Account Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Account</DialogTitle>
              <DialogDescription>Create a new account for your chart of accounts</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="accountCode">Account Code</Label>
                <Input id="accountCode" placeholder="e.g., 1200" />
              </div>
              <div>
                <Label htmlFor="accountName">Account Name</Label>
                <Input id="accountName" placeholder="e.g., Inventory" />
              </div>
              <div>
                <Label htmlFor="accountType">Account Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Asset">Asset</SelectItem>
                    <SelectItem value="Liability">Liability</SelectItem>
                    <SelectItem value="Revenue">Revenue</SelectItem>
                    <SelectItem value="Expense">Expense</SelectItem>
                    <SelectItem value="Equity">Equity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Create Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search by account code or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="showInactive"
            checked={showInactive}
            onChange={(e) => setShowInactive(e.target.checked)}
            className="rounded"
          />
          <Label htmlFor="showInactive">Show inactive accounts</Label>
        </div>
      </div>

      {/* Accounts Table */}
      <Card className="shadow-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account Code</TableHead>
              <TableHead>Account Name</TableHead>
              <TableHead>Account Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAccounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell className="font-medium">{account.code}</TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{account.type}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={account.isActive ? "default" : "secondary"}>
                    {account.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
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
      </Card>
    </div>
  );
}

// =====================================================
// ACCOUNTS PAYABLE COMPONENT - Supplier Invoice Management
// =====================================================

/**
 * Accounts Payable Component
 * 
 * Manages supplier invoices and payment tracking:
 * - Invoice entry and management
 * - Payment status tracking
 * - Due date monitoring and overdue alerts
 * - Supplier management
 * - Payment processing workflow
 */
function AccountsPayable() {
  // ===== Sample Payables Data =====
  const [payables] = useState<Payable[]>([
    { 
      id: '1', 
      invoiceNumber: 'INV-001', 
      supplier: 'Office Supplies Co.', 
      invoiceDate: '2024-01-10', 
      dueDate: '2024-02-10', 
      amount: 1500, 
      paidAmount: 0, 
      status: 'Pending' 
    },
    { 
      id: '2', 
      invoiceNumber: 'INV-002', 
      supplier: 'Tech Solutions Ltd.', 
      invoiceDate: '2024-01-05', 
      dueDate: '2024-01-20', 
      amount: 5000, 
      paidAmount: 0, 
      status: 'Overdue' 
    },
    { 
      id: '3', 
      invoiceNumber: 'INV-003', 
      supplier: 'Marketing Agency', 
      invoiceDate: '2024-01-15', 
      dueDate: '2024-02-15', 
      amount: 2500, 
      paidAmount: 2500, 
      status: 'Paid' 
    },
  ]);

  // ===== Filter State =====
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // ===== Filtering Logic =====
  const filteredPayables = payables.filter(payable => 
    statusFilter === 'all' || payable.status.toLowerCase() === statusFilter
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Accounts Payable</h1>
          <p className="text-muted-foreground">Manage supplier invoices and payments</p>
        </div>
        
        {/* Add Invoice Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Invoice
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Supplier Invoice</DialogTitle>
              <DialogDescription>Record a new supplier invoice</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="invoiceNumber">Invoice Number</Label>
                <Input id="invoiceNumber" placeholder="INV-004" />
              </div>
              <div>
                <Label htmlFor="supplier">Supplier</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supplier1">Office Supplies Co.</SelectItem>
                    <SelectItem value="supplier2">Tech Solutions Ltd.</SelectItem>
                    <SelectItem value="supplier3">Marketing Agency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="invoiceDate">Invoice Date</Label>
                  <Input id="invoiceDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input id="dueDate" type="date" />
                </div>
              </div>
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Create Invoice</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Search by invoice number or supplier..." className="max-w-sm" />
      </div>

      {/* Payables Table */}
      <Card className="shadow-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice Number</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Invoice Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Paid Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayables.map((payable) => (
              <TableRow key={payable.id}>
                <TableCell className="font-medium">{payable.invoiceNumber}</TableCell>
                <TableCell>{payable.supplier}</TableCell>
                <TableCell>{payable.invoiceDate}</TableCell>
                <TableCell>{payable.dueDate}</TableCell>
                <TableCell>${payable.amount.toLocaleString()}</TableCell>
                <TableCell>${payable.paidAmount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      payable.status === 'Paid' ? 'default' : 
                      payable.status === 'Overdue' ? 'destructive' : 
                      'secondary'
                    }
                  >
                    {payable.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {payable.status !== 'Paid' && (
                      <Button variant="outline" size="sm">
                        Mark as Paid
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// =====================================================
// MAIN APPLICATION COMPONENT - Layout and Navigation Controller
// =====================================================

/**
 * Financial Management - Main Application Component
 * 
 * Coordinates the entire application including:
 * - View navigation and routing
 * - Sidebar state management
 * - Layout structure and responsive design
 * - Component rendering based on selected navigation
 */
interface FinancialManagementProps {
  onSwitchToSales?: () => void;
}

function FinancialManagement({ onSwitchToSales }: FinancialManagementProps) {
  // ===== State Management =====
  const [currentView, setCurrentView] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // ===== Navigation Handler =====
  const handleNavigate = (itemId: string) => {
    setCurrentView(itemId);
  };

  // ===== View Rendering Logic =====
  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <FinancialDashboard />;
      case "chart-of-accounts":
        return <ChartOfAccounts />;
      case "accounts-payable":
        return <AccountsPayable />;
      // Additional views can be added here
      // case "accounts-receivable":
      //   return <AccountsReceivable />;
      // case "budgets":
      //   return <BudgetManagement />;
      // case "general-ledger":
      //   return <GeneralLedger />;
      // case "analytics":
      //   return <FinancialAnalytics />;
      default:
        return <FinancialDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Module Switch Button */}
      <button
        onClick={onSwitchToSales}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border hover:bg-secondary/80"
      >
        Switch to Sales
      </button>

      {/* Sidebar Navigation */}
      <Sidebar onNavigate={handleNavigate} />
      
      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-72"} md:ml-0`}>
        <main className="p-6 overflow-auto h-full">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}

export default FinancialManagement;