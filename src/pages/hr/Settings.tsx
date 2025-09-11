import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Settings as SettingsIcon, Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR Settings</h1>
          <p className="text-muted-foreground">Configure HR module settings and preferences.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Basic company details and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="PharmaERP Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-code">Company Code</Label>
                  <Input id="company-code" defaultValue="PERP" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-address">Address</Label>
                <Textarea id="company-address" defaultValue="123 Business St, Suite 100, City, State 12345" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fiscal-year">Fiscal Year Start</Label>
                  <Select defaultValue="january">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                      <SelectItem value="april">April</SelectItem>
                      <SelectItem value="july">July</SelectItem>
                      <SelectItem value="october">October</SelectItem>
                    </SelectContent>
                  </Select>
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
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employee Management</CardTitle>
              <CardDescription>Employee-related settings and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-employee-id">Auto-generate Employee IDs</Label>
                <Switch id="auto-employee-id" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employee-id-prefix">Employee ID Prefix</Label>
                <Input id="employee-id-prefix" defaultValue="EMP" className="w-32" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="probation-period">Default Probation Period (months)</Label>
                <Input id="probation-period" defaultValue="3" className="w-20" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Configuration</CardTitle>
              <CardDescription>Configure payroll processing settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pay-frequency">Pay Frequency</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="default-tax-rate">Default Tax Rate (%)</Label>
                  <Input id="default-tax-rate" defaultValue="15" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payroll-cutoff">Payroll Cutoff Day</Label>
                <Input id="payroll-cutoff" defaultValue="25" type="number" min="1" max="31" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-calculate">Auto-calculate overtime</Label>
                <Switch id="auto-calculate" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overtime-rate">Overtime Rate Multiplier</Label>
                <Input id="overtime-rate" defaultValue="1.5" type="number" step="0.1" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Settings</CardTitle>
              <CardDescription>Configure attendance tracking and policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="work-hours">Standard Work Hours per Day</Label>
                  <Input id="work-hours" defaultValue="8" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="work-days">Work Days per Week</Label>
                  <Input id="work-days" defaultValue="5" type="number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Standard Start Time</Label>
                  <Input id="start-time" defaultValue="09:00" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">Standard End Time</Label>
                  <Input id="end-time" defaultValue="17:00" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="late-threshold">Late Arrival Threshold (minutes)</Label>
                <Input id="late-threshold" defaultValue="15" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="track-location">Track GPS location for check-in</Label>
                <Switch id="track-location" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Management</CardTitle>
              <CardDescription>Configure performance review settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="review-cycle">Review Cycle</Label>
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
                <Label htmlFor="rating-scale">Rating Scale</Label>
                <Select defaultValue="1-5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 Scale</SelectItem>
                    <SelectItem value="1-10">1-10 Scale</SelectItem>
                    <SelectItem value="percentage">Percentage (0-100%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="self-review">Enable self-reviews</Label>
                <Switch id="self-review" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="peer-review">Enable peer reviews</Label>
                <Switch id="peer-review" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-deadline">Default Goal Deadline (days)</Label>
                <Input id="goal-deadline" defaultValue="90" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure email and system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-employee">New employee notifications</Label>
                  <Switch id="new-employee" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="payroll-notifications">Payroll processing notifications</Label>
                  <Switch id="payroll-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="attendance-alerts">Attendance alerts</Label>
                  <Switch id="attendance-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="performance-reminders">Performance review reminders</Label>
                  <Switch id="performance-reminders" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="training-notifications">Training session notifications</Label>
                  <Switch id="training-notifications" defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" defaultValue="hr@pharmaerp.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reminder-days">Review reminder (days before due)</Label>
                <Input id="reminder-days" defaultValue="7" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;