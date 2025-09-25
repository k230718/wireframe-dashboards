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
          <h1 className="text-3xl font-bold text-foreground">Project Management Settings</h1>
          <p className="text-muted-foreground">Configure project management workflows and preferences.</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="workflow">Workflow</TabsTrigger>
          <TabsTrigger value="time-tracking">Time Tracking</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Settings</CardTitle>
              <CardDescription>Configure default project settings and numbering</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-project-id">Auto-generate Project IDs</Label>
                <Switch id="auto-project-id" defaultChecked />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-prefix">Project ID Prefix</Label>
                  <Input id="project-prefix" defaultValue="PROJ" className="w-32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="starting-number">Starting Number</Label>
                  <Input id="starting-number" defaultValue="1000" className="w-32" type="number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-duration">Default Project Duration (days)</Label>
                <Input id="default-duration" defaultValue="90" className="w-32" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-phases">Default Project Phases</Label>
                <Textarea 
                  id="project-phases" 
                  defaultValue="Initiation, Planning, Execution, Monitoring, Closure"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Configure task creation and assignment defaults</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-task-id">Auto-generate Task IDs</Label>
                <Switch id="auto-task-id" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="task-prefix">Task ID Prefix</Label>
                <Input id="task-prefix" defaultValue="TSK" className="w-32" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-priority">Default Task Priority</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="task-dependencies">Enable task dependencies</Label>
                <Switch id="task-dependencies" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflow" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Approval Workflow</CardTitle>
              <CardDescription>Configure project approval and gate review process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="require-approval">Require approval for new projects</Label>
                <Switch id="require-approval" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="approval-stages">Approval Stages</Label>
                <Textarea 
                  id="approval-stages" 
                  defaultValue="Project Proposal, Technical Review, Budget Approval, Final Authorization"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget-threshold">Budget Approval Threshold ($)</Label>
                <Input id="budget-threshold" defaultValue="50000" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="gate-reviews">Enable project gate reviews</Label>
                <Switch id="gate-reviews" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gate-criteria">Gate Review Criteria</Label>
                <Textarea 
                  id="gate-criteria" 
                  defaultValue="Milestone completion, Budget variance < 10%, Quality metrics met, Risk assessment updated"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Change Management</CardTitle>
              <CardDescription>Configure change request and approval process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="change-control">Enable change control process</Label>
                <Switch id="change-control" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="change-approval-limit">Change approval limit ($)</Label>
                <Input id="change-approval-limit" defaultValue="5000" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="impact-assessment">Require impact assessment for changes</Label>
                <Switch id="impact-assessment" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="change-categories">Change Categories</Label>
                <Textarea 
                  id="change-categories" 
                  defaultValue="Scope Change, Schedule Change, Budget Change, Resource Change, Quality Change"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="time-tracking" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Time Tracking Configuration</CardTitle>
              <CardDescription>Configure time tracking and billing settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="enable-time-tracking">Enable time tracking</Label>
                <Switch id="enable-time-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time-increment">Time Entry Increment (minutes)</Label>
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
              <div className="flex items-center justify-between">
                <Label htmlFor="require-timesheet">Require timesheet approval</Label>
                <Switch id="require-timesheet" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overtime-threshold">Overtime Threshold (hours/day)</Label>
                <Input id="overtime-threshold" defaultValue="8" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="billable-tracking">Track billable vs non-billable hours</Label>
                <Switch id="billable-tracking" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing and Rates</CardTitle>
              <CardDescription>Configure billing rates and invoicing settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-rate">Default Hourly Rate ($)</Label>
                <Input id="default-rate" defaultValue="150" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing-frequency">Billing Frequency</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="project-end">Project End</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-invoicing">Enable automatic invoicing</Label>
                <Switch id="auto-invoicing" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expense-categories">Expense Categories</Label>
                <Textarea 
                  id="expense-categories" 
                  defaultValue="Travel, Materials, Equipment, Software, Training"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resource Management</CardTitle>
              <CardDescription>Configure resource allocation and scheduling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="resource-scheduling">Enable resource scheduling</Label>
                <Switch id="resource-scheduling" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity-planning">Resource Capacity Planning Period</Label>
                <Select defaultValue="quarterly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="utilization-target">Target Resource Utilization (%)</Label>
                <Input id="utilization-target" defaultValue="85" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="conflict-detection">Enable resource conflict detection</Label>
                <Switch id="conflict-detection" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resource-types">Resource Types</Label>
                <Textarea 
                  id="resource-types" 
                  defaultValue="Human Resources, Equipment, Laboratory Space, Software Licenses"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Equipment and Facilities</CardTitle>
              <CardDescription>Configure equipment and facility management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="equipment-tracking">Enable equipment tracking</Label>
                <Switch id="equipment-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maintenance-schedule">Maintenance Schedule Frequency</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="calibration-tracking">Track equipment calibration</Label>
                <Switch id="calibration-tracking" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facility-categories">Facility Categories</Label>
                <Textarea 
                  id="facility-categories" 
                  defaultValue="Clean Rooms, Laboratories, Storage Areas, Office Space"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Notifications</CardTitle>
              <CardDescription>Configure project-related notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="milestone-notifications">Milestone completion notifications</Label>
                <Switch id="milestone-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="deadline-alerts">Project deadline alerts</Label>
                <Switch id="deadline-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline-warning">Deadline warning period (days)</Label>
                <Input id="deadline-warning" defaultValue="7" type="number" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="budget-alerts">Budget variance alerts</Label>
                <Switch id="budget-alerts" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget-threshold">Budget alert threshold (%)</Label>
                <Input id="budget-threshold" defaultValue="10" type="number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Notifications</CardTitle>
              <CardDescription>Configure team communication and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="task-assignments">Task assignment notifications</Label>
                <Switch id="task-assignments" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="status-updates">Daily status update reminders</Label>
                <Switch id="status-updates" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="meeting-reminders">Meeting reminders</Label>
                <Switch id="meeting-reminders" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reminder-timing">Meeting reminder timing (minutes)</Label>
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
              <div className="space-y-2">
                <Label htmlFor="notification-email">Primary Notification Email</Label>
                <Input id="notification-email" defaultValue="pm@pharmaerp.com" type="email" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;