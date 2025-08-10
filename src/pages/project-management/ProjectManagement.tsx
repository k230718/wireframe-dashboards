import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Download, Eye, Edit, Trash2, Calendar, User, BarChart3 } from "lucide-react";
import ModuleLayout from "@/components/layout/ModuleLayout";
import ProjectDashboard from "./ProjectDashboard";

const ProjectManagement = () => {
  const location = useLocation();

  // Sample data
  const projects = [
    {
      name: "COVID-19 Vaccine Development",
      description: "Development of mRNA-based COVID-19 vaccine",
      manager: "Dr. Sarah Johnson",
      status: "In Progress",
      budget: "$2,500,000",
      endDate: "12/15/2024",
    },
    {
      name: "Diabetes Treatment Research",
      description: "Novel insulin delivery system research",
      manager: "Dr. Michael Chen",
      status: "Planned",
      budget: "$1,800,000",
      endDate: "11/30/2024",
    },
    {
      name: "Cancer Immunotherapy",
      description: "CAR-T cell therapy development",
      manager: "Dr. Emily Rodriguez",
      status: "Completed",
      budget: "$3,200,000",
      endDate: "5/31/2024",
    },
  ];

  const milestones = [
    {
      milestone: "Phase I Clinical Trials",
      project: "COVID-19 Vaccine Development",
      dueDate: "6/15/2024",
      status: "In Progress",
    },
    {
      milestone: "FDA Submission",
      project: "COVID-19 Vaccine Development",
      dueDate: "9/30/2024",
      status: "Pending",
    },
    {
      milestone: "Preclinical Testing",
      project: "Diabetes Treatment Research",
      dueDate: "5/15/2024",
      status: "Completed",
    },
  ];

  const tasks = [
    {
      task: "Patient Recruitment",
      description: "Recruit 100 patients for Phase I trials",
      assignedTo: "Dr. James Wilson",
      equipment: "EQ001",
      status: "In Progress",
      hours: "240h",
      endDate: "5/31/2024",
    },
    {
      task: "Safety Monitoring",
      description: "Monitor patient safety during trials",
      assignedTo: "Dr. Lisa Anderson",
      equipment: "EQ002",
      status: "Not Started",
      hours: "320h",
      endDate: "7/31/2024",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      "Completed": "default",
      "In Progress": "secondary",
      "Pending": "outline",
      "Planned": "outline",
      "Not Started": "destructive",
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  // Show dashboard for main route, specific content for sub-routes
  if (location.pathname === "/project-management") {
    return (
      <ModuleLayout moduleType="project">
        <ProjectDashboard />
      </ModuleLayout>
    );
  }

  // Handle specific routes
  const renderContent = () => {
    if (location.pathname === "/project-management/projects") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Projects</h1>
              <p className="text-muted-foreground">Manage and track all your projects</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Projects Overview</CardTitle>
                  <CardDescription>Manage and track all your projects</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="pl-9" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PROJECT NAME</TableHead>
                    <TableHead>MANAGER</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>BUDGET</TableHead>
                    <TableHead>END DATE</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{project.name}</div>
                          <div className="text-sm text-muted-foreground">{project.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {project.manager}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(project.status)}</TableCell>
                      <TableCell>{project.budget}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.endDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
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
            </CardContent>
          </Card>
        </div>
      );
    }

    if (location.pathname === "/project-management/milestones") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Milestones</h1>
              <p className="text-muted-foreground">Track important project milestones and deadlines</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Milestone
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Milestones</CardTitle>
              <CardDescription>Track important project milestones and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Milestone</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {milestones.map((milestone, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{milestone.milestone}</TableCell>
                      <TableCell>{milestone.project}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {milestone.dueDate}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(milestone.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
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
            </CardContent>
          </Card>
        </div>
      );
    }

    if (location.pathname === "/project-management/tasks") {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Tasks</h1>
              <p className="text-muted-foreground">Manage individual tasks and assignments</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Tasks</CardTitle>
              <CardDescription>Manage individual tasks and assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>TASK</TableHead>
                    <TableHead>ASSIGNED TO</TableHead>
                    <TableHead>EQUIPMENT</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>HOURS</TableHead>
                    <TableHead>END DATE</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{task.task}</div>
                          <div className="text-sm text-muted-foreground">{task.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {task.assignedTo}
                        </div>
                      </TableCell>
                      <TableCell>{task.equipment}</TableCell>
                      <TableCell>{getStatusBadge(task.status)}</TableCell>
                      <TableCell>{task.hours}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {task.endDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
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
            </CardContent>
          </Card>
        </div>
      );
    }

    // Settings page placeholder
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Page Not Implemented</h3>
            <p className="text-muted-foreground">This page is under development.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ModuleLayout moduleType="project">
      {renderContent()}
    </ModuleLayout>
  );
};

export default ProjectManagement;