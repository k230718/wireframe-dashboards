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
          <h1 className="text-3xl font-bold text-foreground">Sales & Marketing Settings</h1>
          <p className="text-muted-foreground">Configure sales and marketing module preferences and workflows.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="crm">CRM</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Organization</CardTitle>
              <CardDescription>Configure basic sales organization settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="PharmaERP Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sales-region">Primary Sales Region</Label>
                  <Select defaultValue="north-america">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north-america">North America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                      <SelectItem value="global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fiscal-year">Sales Fiscal Year</Label>
                <Select defaultValue="calendar">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="calendar">Calendar Year (Jan-Dec)</SelectItem>
                    <SelectItem value="april">April - March</SelectItem>
                    <SelectItem value="july">July - June</SelectItem>
                    <SelectItem value="october">October - September</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-currency">Default Currency</Label>
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
              <CardTitle>Territory Management</CardTitle>
              <CardDescription>Configure sales territories and assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="territory-management">Enable territory management</Label>
                <Switch id="territory-management" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="territory-assignment">Territory Assignment Method</Label>
                <Select defaultValue="geographic">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="geographic">Geographic</SelectItem>
                    <SelectItem value="industry">Industry-based</SelectItem>
                    <SelectItem value="account-size">Account Size</SelectItem>
                    <SelectItem value="product">Product-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="overlap-territories">Allow overlapping territories</Label>
                <Switch id="overlap-territories" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="territory-regions">Sales Regions</Label>
                <Textarea 
                  id="territory-regions" 
                  defaultValue="East Coast, West Coast, Midwest, South, International"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Process Configuration</CardTitle>
              <CardDescription>Configure sales pipeline and opportunity management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sales-stages">Sales Pipeline Stages</Label>
                <Textarea 
                  id="sales-stages" 
                  defaultValue="Prospecting, Qualification, Proposal, Negotiation, Closed Won, Closed Lost"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stage-probabilities">Stage Probabilities (%)</Label>
                <Textarea 
                  id="stage-probabilities" 
                  defaultValue="Prospecting: 10%, Qualification: 25%, Proposal: 50%, Negotiation: 75%"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-close-date">Default Close Date (days from now)</Label>
                <Input id="default-close-date" defaultValue="90" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="require-close-reason">Require close reason for lost opportunities</Label>
                <Switch id="require-close-reason" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quotation and Pricing</CardTitle>
              <CardDescription>Configure quotation workflow and pricing rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-quote-numbering">Auto-generate quote numbers</Label>
                <Switch id="auto-quote-numbering" defaultChecked />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quote-prefix">Quote Number Prefix</Label>
                  <Input id="quote-prefix" defaultValue="QT" className="w-32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-validity">Default Quote Validity (days)</Label>
                  <Input id="quote-validity" defaultValue="30" className="w-32" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount-approval-limit">Discount Approval Limit (%)</Label>
                <Input id="discount-approval-limit" defaultValue="15" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="pricing-approval">Require approval for custom pricing</Label>
                <Switch id="pricing-approval" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-terms">Default Payment Terms</Label>
                <Select defaultValue="net30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="net15">Net 15 Days</SelectItem>
                    <SelectItem value="net30">Net 30 Days</SelectItem>
                    <SelectItem value="net60">Net 60 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Management</CardTitle>
              <CardDescription>Configure marketing campaign settings and tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="campaign-tracking">Enable campaign tracking</Label>
                <Switch id="campaign-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="campaign-types">Campaign Types</Label>
                <Textarea 
                  id="campaign-types" 
                  defaultValue="Email Marketing, Trade Shows, Webinars, Digital Advertising, Content Marketing"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-budget">Default Campaign Budget ($)</Label>
                <Input id="default-budget" defaultValue="10000" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roi-calculation">ROI Calculation Method</Label>
                <Select defaultValue="revenue-based">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="revenue-based">Revenue-based</SelectItem>
                    <SelectItem value="lead-based">Lead-based</SelectItem>
                    <SelectItem value="conversion-based">Conversion-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="attribution-tracking">Enable multi-touch attribution</Label>
                <Switch id="attribution-tracking" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lead Generation</CardTitle>
              <CardDescription>Configure lead capture and qualification settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-lead-assignment">Auto-assign leads to sales reps</Label>
                <Switch id="auto-lead-assignment" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lead-assignment-method">Lead Assignment Method</Label>
                <Select defaultValue="round-robin">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="round-robin">Round Robin</SelectItem>
                    <SelectItem value="territory">Territory-based</SelectItem>
                    <SelectItem value="skills">Skills-based</SelectItem>
                    <SelectItem value="workload">Workload-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lead-scoring">Lead Scoring Model</Label>
                <Textarea 
                  id="lead-scoring" 
                  defaultValue="Company Size: 25 pts, Industry Match: 20 pts, Job Title: 15 pts, Engagement: 40 pts"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualification-threshold">Lead Qualification Threshold</Label>
                <Input id="qualification-threshold" defaultValue="75" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="follow-up-timeline">Default Follow-up Timeline (hours)</Label>
                <Input id="follow-up-timeline" defaultValue="24" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crm" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>Configure customer account and contact management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-account-numbering">Auto-generate account numbers</Label>
                <Switch id="auto-account-numbering" defaultChecked />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="account-prefix">Account Number Prefix</Label>
                  <Input id="account-prefix" defaultValue="ACC" className="w-32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-prefix">Contact ID Prefix</Label>
                  <Input id="contact-prefix" defaultValue="CON" className="w-32" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-types">Account Types</Label>
                <Textarea 
                  id="account-types" 
                  defaultValue="Prospect, Customer, Partner, Competitor, Former Customer"
                  rows={2}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="duplicate-detection">Enable duplicate contact detection</Label>
                <Switch id="duplicate-detection" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="data-retention">Customer Data Retention (years)</Label>
                <Input id="data-retention" defaultValue="7" type="number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Tracking</CardTitle>
              <CardDescription>Configure activity logging and follow-up management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-activity-logging">Auto-log email and call activities</Label>
                <Switch id="auto-activity-logging" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activity-types">Activity Types</Label>
                <Textarea 
                  id="activity-types" 
                  defaultValue="Phone Call, Email, Meeting, Presentation, Proposal, Follow-up"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mandatory-fields">Mandatory Activity Fields</Label>
                <Textarea 
                  id="mandatory-fields" 
                  defaultValue="Subject, Date, Duration, Outcome, Next Steps"
                  rows={2}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="activity-reminders">Enable activity reminders</Label>
                <Switch id="activity-reminders" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reminder-timing">Default Reminder Timing (minutes)</Label>
                <Select defaultValue="15">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Notifications</CardTitle>
              <CardDescription>Configure sales-related notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="deal-notifications">Deal stage change notifications</Label>
                <Switch id="deal-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="quota-alerts">Sales quota alerts</Label>
                <Switch id="quota-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quota-threshold">Quota alert threshold (%)</Label>
                <Input id="quota-threshold" defaultValue="80" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="forecast-notifications">Forecast update notifications</Label>
                <Switch id="forecast-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="opportunity-alerts">Stale opportunity alerts</Label>
                <Switch id="opportunity-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stale-period">Stale opportunity period (days)</Label>
                <Input id="stale-period" defaultValue="30" type="number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Notifications</CardTitle>
              <CardDescription>Configure marketing campaign and lead notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="campaign-notifications">Campaign performance notifications</Label>
                <Switch id="campaign-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="lead-notifications">New lead notifications</Label>
                <Switch id="lead-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="mql-notifications">Marketing qualified lead notifications</Label>
                <Switch id="mql-notifications" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="campaign-frequency">Campaign report frequency</Label>
                <Select defaultValue="weekly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">Primary Notification Email</Label>
                <Input id="notification-email" defaultValue="sales@pharmaerp.com" type="email" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;