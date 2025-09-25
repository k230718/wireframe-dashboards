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
          <h1 className="text-3xl font-bold text-foreground">Finance Settings</h1>
          <p className="text-muted-foreground">Configure finance module settings and accounting preferences.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="accounting">Accounting</TabsTrigger>
          <TabsTrigger value="taxation">Taxation</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Financial Information</CardTitle>
              <CardDescription>Basic financial setup and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Legal Entity Name</Label>
                  <Input id="company-name" defaultValue="PharmaERP Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Tax Identification Number</Label>
                  <Input id="tax-id" defaultValue="XX-XXXXXXX" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fiscal-year">Fiscal Year End</Label>
                  <Select defaultValue="december">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January 31st</SelectItem>
                      <SelectItem value="march">March 31st</SelectItem>
                      <SelectItem value="june">June 30th</SelectItem>
                      <SelectItem value="december">December 31st</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="base-currency">Base Currency</Label>
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
              </div>
              <div className="space-y-2">
                <Label htmlFor="decimal-places">Decimal Places for Currency</Label>
                <Select defaultValue="2">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Default account configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-numbering">Enable auto-numbering for invoices</Label>
                <Switch id="auto-numbering" defaultChecked />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                  <Input id="invoice-prefix" defaultValue="INV" className="w-32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="starting-number">Starting Number</Label>
                  <Input id="starting-number" defaultValue="1000" className="w-32" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-terms">Default Payment Terms (days)</Label>
                <Input id="payment-terms" defaultValue="30" className="w-32" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accounting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chart of Accounts</CardTitle>
              <CardDescription>Configure accounting structure and categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="account-structure">Account Number Structure</Label>
                <Select defaultValue="4digit">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4digit">4-Digit (1000-9999)</SelectItem>
                    <SelectItem value="5digit">5-Digit (10000-99999)</SelectItem>
                    <SelectItem value="6digit">6-Digit (100000-999999)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="default-cash">Default Cash Account</Label>
                  <Select defaultValue="1000">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">1000 - Cash</SelectItem>
                      <SelectItem value="1010">1010 - Petty Cash</SelectItem>
                      <SelectItem value="1020">1020 - Bank Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-ar">Default Accounts Receivable</Label>
                  <Select defaultValue="1200">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1200">1200 - Accounts Receivable</SelectItem>
                      <SelectItem value="1210">1210 - Trade Receivables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="require-departments">Require department codes</Label>
                <Switch id="require-departments" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="multi-currency">Enable multi-currency support</Label>
                <Switch id="multi-currency" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Journal Entry Settings</CardTitle>
              <CardDescription>Configure journal entry approval and posting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="require-approval">Require approval for journal entries</Label>
                <Switch id="require-approval" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="approval-limit">Auto-approval limit ($)</Label>
                <Input id="approval-limit" defaultValue="5000" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-reverse">Allow automatic reversing entries</Label>
                <Switch id="auto-reverse" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="taxation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tax Configuration</CardTitle>
              <CardDescription>Configure tax rates and reporting requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="default-tax-rate">Default Sales Tax Rate (%)</Label>
                  <Input id="default-tax-rate" defaultValue="8.25" type="number" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-jurisdiction">Tax Jurisdiction</Label>
                  <Input id="tax-jurisdiction" defaultValue="California, USA" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax-id-customer">Customer Tax ID Requirements</Label>
                <Select defaultValue="optional">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="required">Required</SelectItem>
                    <SelectItem value="optional">Optional</SelectItem>
                    <SelectItem value="none">Not Required</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="tax-inclusive">Display prices tax-inclusive</Label>
                <Switch id="tax-inclusive" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="vat-registered">VAT Registered Entity</Label>
                <Switch id="vat-registered" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reporting</CardTitle>
              <CardDescription>Configure reporting periods and formats</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reporting-period">Default Reporting Period</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="comparative-reports">Include comparative periods in reports</Label>
                <Switch id="comparative-reports" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="zero-balance">Show zero balance accounts</Label>
                <Switch id="zero-balance" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-format">Default Report Format</Label>
                <Select defaultValue="pdf">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Automated Reports</CardTitle>
              <CardDescription>Schedule automatic report generation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-monthly">Generate monthly P&L automatically</Label>
                <Switch id="auto-monthly" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-balance">Generate monthly balance sheet automatically</Label>
                <Switch id="auto-balance" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-recipients">Report Recipients (comma-separated emails)</Label>
                <Textarea id="report-recipients" defaultValue="cfo@pharmaerp.com, accounting@pharmaerp.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Configure connections with external systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="bank-integration">Enable bank feed integration</Label>
                <Switch id="bank-integration" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="payroll-sync">Sync with payroll system</Label>
                <Switch id="payroll-sync" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="inventory-integration">Auto-post inventory transactions</Label>
                <Switch id="inventory-integration" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-endpoint">External API Endpoint</Label>
                <Input id="api-endpoint" placeholder="https://api.example.com/finance" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sync-frequency">Data Sync Frequency</Label>
                <Select defaultValue="hourly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Settings</CardTitle>
              <CardDescription>Configure API access and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="api-access">Enable API access</Label>
                <Switch id="api-access" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rate-limit">Rate Limit (requests per minute)</Label>
                <Input id="rate-limit" defaultValue="100" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="audit-logging">Enable API audit logging</Label>
                <Switch id="audit-logging" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;