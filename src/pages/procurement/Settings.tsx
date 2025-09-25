import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Procurement Settings</h1>
          <p className="text-muted-foreground">Configure procurement module settings and vendor management preferences.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="approval">Approval</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Order Settings</CardTitle>
              <CardDescription>Configure purchase order numbering and workflow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-po-numbering">Auto-generate PO numbers</Label>
                <Switch id="auto-po-numbering" defaultChecked />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="po-prefix">PO Number Prefix</Label>
                  <Input id="po-prefix" defaultValue="PO" className="w-32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="starting-po-number">Starting Number</Label>
                  <Input id="starting-po-number" defaultValue="10000" className="w-32" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-payment-terms">Default Payment Terms (days)</Label>
                <Input id="default-payment-terms" defaultValue="30" className="w-32" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="cad">CAD (C$)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Requisition Settings</CardTitle>
              <CardDescription>Configure purchase requisition workflow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="require-requisition">Require requisitions for all purchases</Label>
                <Switch id="require-requisition" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requisition-prefix">Requisition Number Prefix</Label>
                <Input id="requisition-prefix" defaultValue="REQ" className="w-32" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="auto-convert">Auto-convert approved requisitions to POs</Label>
                <Switch id="auto-convert" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget-check">Enable budget checking</Label>
                <Switch id="budget-check" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Management</CardTitle>
              <CardDescription>Configure vendor registration and evaluation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="vendor-approval">Require approval for new vendors</Label>
                <Switch id="vendor-approval" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendor-id-format">Vendor ID Format</Label>
                <Select defaultValue="auto">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-generated</SelectItem>
                    <SelectItem value="manual">Manual Entry</SelectItem>
                    <SelectItem value="name-based">Name-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vendor-prefix">Vendor ID Prefix</Label>
                <Input id="vendor-prefix" defaultValue="VEN" className="w-32" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="duplicate-check">Check for duplicate vendors</Label>
                <Switch id="duplicate-check" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="evaluation-frequency">Vendor Evaluation Frequency</Label>
                <Select defaultValue="quarterly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="semiannual">Semi-annual</SelectItem>
                    <SelectItem value="annual">Annual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendor Categories</CardTitle>
              <CardDescription>Configure vendor classification and requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="required-categories">Required Vendor Categories</Label>
                <Textarea 
                  id="required-categories" 
                  defaultValue="Raw Materials, Equipment, Services, Packaging, API Suppliers"
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="category-restrictions">Restrict POs by vendor category</Label>
                <Switch id="category-restrictions" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimum-score">Minimum Performance Score (%)</Label>
                <Input id="minimum-score" defaultValue="85" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approval" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Approval Workflow</CardTitle>
              <CardDescription>Configure purchase approval limits and workflow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="enable-approval">Enable approval workflow</Label>
                <Switch id="enable-approval" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level1-limit">Level 1 Approval Limit ($)</Label>
                <Input id="level1-limit" defaultValue="5000" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level2-limit">Level 2 Approval Limit ($)</Label>
                <Input id="level2-limit" defaultValue="25000" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level3-limit">Level 3 Approval Limit ($)</Label>
                <Input id="level3-limit" defaultValue="100000" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="parallel-approval">Allow parallel approvals</Label>
                <Switch id="parallel-approval" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="approval-timeout">Approval Timeout (hours)</Label>
                <Input id="approval-timeout" defaultValue="48" type="number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Purchases</CardTitle>
              <CardDescription>Configure emergency purchase procedures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="emergency-purchases">Allow emergency purchases</Label>
                <Switch id="emergency-purchases" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency-limit">Emergency Purchase Limit ($)</Label>
                <Input id="emergency-limit" defaultValue="10000" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="post-approval">Require post-approval for emergency purchases</Label>
                <Switch id="post-approval" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergency-notification">Emergency Purchase Notification List</Label>
                <Textarea id="emergency-notification" defaultValue="ceo@pharmaerp.com, procurement@pharmaerp.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Compliance</CardTitle>
              <CardDescription>Configure compliance requirements and documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="gmp-required">Require GMP certification for suppliers</Label>
                <Switch id="gmp-required" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="fda-registration">Require FDA registration</Label>
                <Switch id="fda-registration" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cert-expiry-warning">Certificate Expiry Warning (days)</Label>
                <Input id="cert-expiry-warning" defaultValue="30" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="required-docs">Required Documentation</Label>
                <Textarea 
                  id="required-docs" 
                  defaultValue="Certificate of Analysis, Material Safety Data Sheet, GMP Certificate, Supplier Qualification"
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="audit-trail">Maintain full audit trail</Label>
                <Switch id="audit-trail" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality Assurance</CardTitle>
              <CardDescription>Configure quality control requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="incoming-inspection">Require incoming inspection</Label>
                <Switch id="incoming-inspection" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sampling-rate">Default Sampling Rate (%)</Label>
                <Input id="sampling-rate" defaultValue="10" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="quarantine">Auto-quarantine incoming materials</Label>
                <Switch id="quarantine" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="release-criteria">Quality Release Criteria</Label>
                <Textarea id="release-criteria" defaultValue="Certificate of Analysis verified, Visual inspection passed, Sampling completed" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure automated email notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="po-notifications">Purchase order notifications</Label>
                <Switch id="po-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="approval-notifications">Approval request notifications</Label>
                <Switch id="approval-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="delivery-notifications">Delivery confirmation notifications</Label>
                <Switch id="delivery-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="budget-alerts">Budget threshold alerts</Label>
                <Switch id="budget-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">Primary Notification Email</Label>
                <Input id="notification-email" defaultValue="procurement@pharmaerp.com" type="email" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Configure system-generated alerts and reminders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="contract-expiry">Contract expiry alerts</Label>
                <Switch id="contract-expiry" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry-warning-days">Contract expiry warning (days)</Label>
                <Input id="expiry-warning-days" defaultValue="60" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="performance-alerts">Vendor performance alerts</Label>
                <Switch id="performance-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="performance-threshold">Performance alert threshold (%)</Label>
                <Input id="performance-threshold" defaultValue="80" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="compliance-alerts">Compliance issue alerts</Label>
                <Switch id="compliance-alerts" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;