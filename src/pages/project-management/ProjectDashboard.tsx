import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, DollarSign, FileText, AlertTriangle, Bell, TrendingUp, User, CheckCircle } from "lucide-react";

const ProjectDashboard = () => {
  const recentProjects = [
    {
      name: "COVID-19 Vaccine Development",
      manager: "Dr. Sarah Johnson",
      status: "In Progress",
      progress: 65,
      budget: "$2,500,000",
      endDate: "12/15/2024",
    },
    {
      name: "Diabetes Treatment Research",
      manager: "Dr. Michael Chen",
      status: "Planned",
      progress: 15,
      budget: "$1,800,000", 
      endDate: "11/30/2024",
    },
    {
      name: "Cancer Immunotherapy",
      manager: "Dr. Emily Rodriguez",
      status: "Completed",
      progress: 100,
      budget: "$3,200,000",
      endDate: "5/31/2024",
    },
  ];

  const upcomingMilestones = [
    {
      milestone: "Phase I Clinical Trials",
      project: "COVID-19 Vaccine Development",
      dueDate: "6/15/2024",
      daysLeft: 5,
      status: "In Progress",
    },
    {
      milestone: "FDA Submission",
      project: "COVID-19 Vaccine Development", 
      dueDate: "9/30/2024",
      daysLeft: 45,
      status: "Pending",
    },
  ];

  const projectAlerts = [
    {
      type: "warning",
      title: "Overdue Milestone",
      description: "Phase I Clinical Trials milestone is overdue by 5 days",
    },
    {
      type: "info",
      title: "Budget Review",
      description: "COVID-19 project budget review scheduled for next week",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Completed": "default",
      "In Progress": "secondary",
      "Planned": "outline",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Project Management Dashboard</h1>
        <p className="text-muted-foreground">Overview of all project activities and progress</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">of 3 total projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">out of 45 total tasks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Milestones</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">in next 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Project Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$7.5M</div>
            <p className="text-xs text-muted-foreground">across all projects</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Active Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Current project status and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {project.manager}
                    </div>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="w-20" />
                    <span>{project.progress}%</span>
                  </div>
                  <div className="text-muted-foreground">{project.budget}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Important project deadlines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingMilestones.map((milestone, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{milestone.milestone}</div>
                  <div className="text-sm text-muted-foreground">{milestone.project}</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-3 w-3" />
                    {milestone.dueDate}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {milestone.daysLeft} days left
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Project Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Project Alerts</CardTitle>
          <CardDescription>Important notifications and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {projectAlerts.map((alert, index) => (
            <Alert key={index} variant={alert.type === "warning" ? "destructive" : "default"}>
              {alert.type === "warning" ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <Bell className="h-4 w-4" />
              )}
              <div>
                <div className="font-medium">{alert.title}</div>
                <AlertDescription>{alert.description}</AlertDescription>
              </div>
            </Alert>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDashboard;