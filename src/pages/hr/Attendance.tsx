import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserCheck, Calendar, Archive, RotateCcw, Search } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Attendance = () => {
  const attendanceData = [
    { name: "Present", value: 60, color: "#10b981" },
    { name: "Absent", value: 20, color: "#ef4444" },
    { name: "On Leave", value: 20, color: "#f59e0b" }
  ];

  const employeeAttendance = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      department: "Engineering",
      position: "Senior Frontend Developer",
      status: "Present",
      checkIn: "09:00",
      checkOut: "17:30",
      hours: "8.50"
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      department: "Marketing",
      position: "Marketing Manager",
      status: "Present",
      checkIn: "08:45",
      checkOut: "17:15",
      hours: "8.50"
    },
    {
      name: "Robert Johnson",
      email: "robert.j@example.com",
      department: "Finance",
      position: "Finance Controller",
      status: "On Leave",
      checkIn: "-",
      checkOut: "-",
      hours: "0.00"
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      department: "Engineering",
      position: "UI Designer",
      status: "Absent",
      checkIn: "-",
      checkOut: "-",
      hours: "0.00"
    },
    {
      name: "Michael Wilson",
      email: "michael.w@example.com",
      department: "HR",
      position: "HR Specialist",
      status: "Present",
      checkIn: "09:15",
      checkOut: "18:00",
      hours: "8.75"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Present": return <Badge className="bg-blue-100 text-blue-800">Present</Badge>;
      case "Absent": return <Badge variant="destructive">Absent</Badge>;
      case "On Leave": return <Badge className="bg-orange-100 text-orange-800">On Leave</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
          <p className="text-muted-foreground">Manage and track employee attendance.</p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          View Archived Records
        </Button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Attendance Overview (Today)</CardTitle>
            <CardDescription>Today's attendance summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <div className="text-3xl font-bold">60%</div>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {attendanceData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
              <p className="text-sm text-muted-foreground">Active workforce</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              <UserCheck className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-sm text-green-600">Employee present today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">On Leave</CardTitle>
              <Calendar className="h-5 w-5 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1</div>
              <p className="text-sm text-orange-500">Employee on leave</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Employee Attendance Details */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Attendance Details</CardTitle>
          <CardDescription>Detailed attendance information for all employees</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search employees..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="present">Present</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
                <SelectItem value="leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Archive className="h-4 w-4 mr-2" />
              Archive All
            </Button>
            <Button variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Initialize
            </Button>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeAttendance.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{getStatusBadge(employee.status)}</TableCell>
                  <TableCell>{employee.checkIn}</TableCell>
                  <TableCell>{employee.checkOut}</TableCell>
                  <TableCell>{employee.hours}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;