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
          <h1 className="text-3xl font-bold text-foreground">Inventory Settings</h1>
          <p className="text-muted-foreground">Configure inventory management settings and warehouse preferences.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="warehouse">Warehouse</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Item Management</CardTitle>
              <CardDescription>Configure item numbering and classification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-item-numbering">Auto-generate Item Numbers</Label>
                <Switch id="auto-item-numbering" defaultChecked />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="item-prefix">Item Number Prefix</Label>
                  <Input id="item-prefix" defaultValue="ITM" className="w-32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="starting-number">Starting Number</Label>
                  <Input id="starting-number" defaultValue="10000" className="w-32" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-uom">Default Unit of Measure</Label>
                <Select defaultValue="each">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="each">Each</SelectItem>
                    <SelectItem value="kg">Kilogram</SelectItem>
                    <SelectItem value="liter">Liter</SelectItem>
                    <SelectItem value="box">Box</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="item-categories">Item Categories</Label>
                <Textarea 
                  id="item-categories" 
                  defaultValue="Raw Materials, Finished Goods, Work in Progress, Packaging, Consumables"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stock Valuation</CardTitle>
              <CardDescription>Configure inventory valuation methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="valuation-method">Inventory Valuation Method</Label>
                <Select defaultValue="fifo">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fifo">FIFO (First In, First Out)</SelectItem>
                    <SelectItem value="lifo">LIFO (Last In, First Out)</SelectItem>
                    <SelectItem value="weighted-average">Weighted Average</SelectItem>
                    <SelectItem value="specific-identification">Specific Identification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cost-calculation">Cost Calculation Method</Label>
                <Select defaultValue="standard">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Cost</SelectItem>
                    <SelectItem value="actual">Actual Cost</SelectItem>
                    <SelectItem value="moving-average">Moving Average</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="negative-inventory">Allow negative inventory</Label>
                <Switch id="negative-inventory" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Inventory Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warehouse" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Configuration</CardTitle>
              <CardDescription>Configure warehouse locations and storage settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="multi-location">Enable multi-location inventory</Label>
                <Switch id="multi-location" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-warehouse">Default Warehouse</Label>
                <Select defaultValue="main">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main">Main Warehouse</SelectItem>
                    <SelectItem value="raw-materials">Raw Materials Storage</SelectItem>
                    <SelectItem value="finished-goods">Finished Goods</SelectItem>
                    <SelectItem value="quarantine">Quarantine Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location-format">Location Numbering Format</Label>
                <Select defaultValue="alphanumeric">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alphanumeric">Alphanumeric (A1-01)</SelectItem>
                    <SelectItem value="numeric">Numeric (001-001)</SelectItem>
                    <SelectItem value="zone-based">Zone-based (Z1-R1-S1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="bin-locations">Enable bin locations</Label>
                <Switch id="bin-locations" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storage-zones">Storage Zones</Label>
                <Textarea 
                  id="storage-zones" 
                  defaultValue="Ambient, Refrigerated, Controlled, Hazardous, Quarantine"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Receiving and Shipping</CardTitle>
              <CardDescription>Configure receiving and shipping processes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="require-receipt">Require receipt confirmation</Label>
                <Switch id="require-receipt" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="quality-inspection">Require quality inspection on receipt</Label>
                <Switch id="quality-inspection" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inspection-sampling">Inspection Sampling Rate (%)</Label>
                <Input id="inspection-sampling" defaultValue="10" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-putaway">Enable automatic put-away</Label>
                <Switch id="auto-putaway" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="putaway-strategy">Put-away Strategy</Label>
                <Select defaultValue="fixed-location">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixed-location">Fixed Location</SelectItem>
                    <SelectItem value="random">Random Location</SelectItem>
                    <SelectItem value="directed">Directed Put-away</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lot and Serial Tracking</CardTitle>
              <CardDescription>Configure lot and serial number management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="lot-tracking">Enable lot tracking</Label>
                <Switch id="lot-tracking" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="serial-tracking">Enable serial number tracking</Label>
                <Switch id="serial-tracking" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lot-format">Lot Number Format</Label>
                <Select defaultValue="date-seq">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-seq">Date + Sequence (YYYYMMDD-001)</SelectItem>
                    <SelectItem value="manual">Manual Entry</SelectItem>
                    <SelectItem value="supplier">Supplier Lot Number</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="expiry-tracking">Track expiry dates</Label>
                <Switch id="expiry-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry-warning">Expiry Warning Period (days)</Label>
                <Input id="expiry-warning" defaultValue="30" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="fifo-enforcement">Enforce FIFO for lot picking</Label>
                <Switch id="fifo-enforcement" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Batch Management</CardTitle>
              <CardDescription>Configure batch processing and genealogy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="batch-genealogy">Enable batch genealogy tracking</Label>
                <Switch id="batch-genealogy" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="batch-numbering">Batch Numbering Format</Label>
                <Input id="batch-numbering" defaultValue="BCH{YYYYMMDD}-{###}" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="component-tracking">Track component consumption</Label>
                <Switch id="component-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="batch-status">Batch Status Levels</Label>
                <Textarea 
                  id="batch-status" 
                  defaultValue="Planned, In Progress, Quality Testing, Approved, Released, Rejected"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Stock Level Alerts</CardTitle>
              <CardDescription>Configure inventory level monitoring and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="reorder-alerts">Enable reorder point alerts</Label>
                <Switch id="reorder-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-reorder-point">Default Reorder Point (days of supply)</Label>
                <Input id="default-reorder-point" defaultValue="30" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="safety-stock">Default Safety Stock (days)</Label>
                <Input id="safety-stock" defaultValue="7" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="overstock-alerts">Enable overstock alerts</Label>
                <Switch id="overstock-alerts" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overstock-threshold">Overstock Threshold (months of supply)</Label>
                <Input id="overstock-threshold" defaultValue="6" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="stockout-alerts">Enable stockout alerts</Label>
                <Switch id="stockout-alerts" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quality and Compliance Alerts</CardTitle>
              <CardDescription>Configure quality-related monitoring and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="expiry-alerts">Enable expiry date alerts</Label>
                <Switch id="expiry-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry-warning-days">Expiry Warning Period (days)</Label>
                <Input id="expiry-warning-days" defaultValue="30" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="hold-alerts">Enable quality hold alerts</Label>
                <Switch id="hold-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="temperature-alerts">Enable temperature excursion alerts</Label>
                <Switch id="temperature-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-recipients">Alert Recipients</Label>
                <Textarea id="notification-recipients" defaultValue="inventory@pharmaerp.com, quality@pharmaerp.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Automated Replenishment</CardTitle>
              <CardDescription>Configure automatic reorder and replenishment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-reorder">Enable automatic reorder</Label>
                <Switch id="auto-reorder" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reorder-calculation">Reorder Calculation Method</Label>
                <Select defaultValue="min-max">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="min-max">Min-Max</SelectItem>
                    <SelectItem value="economic-order">Economic Order Quantity</SelectItem>
                    <SelectItem value="demand-based">Demand-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lead-time">Default Lead Time (days)</Label>
                <Input id="lead-time" defaultValue="14" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="seasonal-adjustment">Apply seasonal adjustments</Label>
                <Switch id="seasonal-adjustment" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="forecast-period">Demand Forecast Period (months)</Label>
                <Input id="forecast-period" defaultValue="12" type="number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cycle Counting</CardTitle>
              <CardDescription>Configure automated cycle counting schedules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-cycle-counting">Enable automatic cycle counting</Label>
                <Switch id="auto-cycle-counting" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cycle-frequency">Default Cycle Count Frequency</Label>
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
              <div className="space-y-2">
                <Label htmlFor="abc-classification">ABC Classification Thresholds</Label>
                <Textarea 
                  id="abc-classification" 
                  defaultValue="A: Top 80% of value - Monthly, B: Next 15% - Quarterly, C: Bottom 5% - Annual"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="variance-threshold">Variance Investigation Threshold (%)</Label>
                <Input id="variance-threshold" defaultValue="5" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;