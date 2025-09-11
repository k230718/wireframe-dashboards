import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Production Settings</h1>
          <p className="text-muted-foreground">Configure production module settings and preferences.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="quality">Quality Control</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Production Configuration</CardTitle>
              <CardDescription>Basic production settings and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shift-duration">Standard Shift Duration (hours)</Label>
                  <Input id="shift-duration" defaultValue="8" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shifts-per-day">Shifts per Day</Label>
                  <Input id="shifts-per-day" defaultValue="3" type="number" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-scheduling">Enable automatic scheduling</Label>
                <Switch id="auto-scheduling" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="efficiency-target">Target Efficiency (%)</Label>
                <Input id="efficiency-target" defaultValue="85" type="number" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quality Control Settings</CardTitle>
              <CardDescription>Configure quality control parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sample-size">Default Sample Size (%)</Label>
                <Input id="sample-size" defaultValue="5" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-reject">Auto-reject failed batches</Label>
                <Switch id="auto-reject" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Settings</CardTitle>
              <CardDescription>Configure maintenance schedules and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="maintenance-interval">Default Maintenance Interval (days)</Label>
                <Input id="maintenance-interval" defaultValue="30" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="preventive-maintenance">Enable preventive maintenance alerts</Label>
                <Switch id="preventive-maintenance" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure production alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="production-alerts">Production line alerts</Label>
                <Switch id="production-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="quality-alerts">Quality control alerts</Label>
                <Switch id="quality-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="maintenance-alerts">Maintenance alerts</Label>
                <Switch id="maintenance-alerts" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;