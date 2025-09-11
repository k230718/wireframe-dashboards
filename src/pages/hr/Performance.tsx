import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Users, Target, FileText, MessageSquare } from "lucide-react";

const Performance = () => {
  const performanceReviews = [
    {
      name: "John Doe",
      date: "6/15/2023",
      reviewer: "Robert Johnson to John Doe",
      score: "85/100",
      avatar: "JD"
    },
    {
      name: "Jane Smith",
      date: "6/10/2023",
      reviewer: "John Doe to Jane Smith",
      score: "92/100",
      avatar: "JS"
    },
    {
      name: "Robert Johnson",
      date: "6/5/2023",
      reviewer: "Michael Wilson to Robert Johnson",
      score: "78/100",
      avatar: "RJ"
    },
    {
      name: "Emily Davis",
      date: "5/28/2023",
      reviewer: "John Doe to Emily Davis",
      score: "88/100",
      avatar: "ED"
    }
  ];

  const recentFeedback = [
    {
      from: "John Doe",
      to: "Jane Smith",
      message: "Great job leading the marketing campaign! The results exceeded expectations.",
      date: "6/18/2023"
    },
    {
      from: "Jane Smith",
      to: "John Doe",
      message: "The new UI design is excellent. Users have given very positive feedback.",
      date: "6/15/2023"
    },
    {
      from: "Robert Johnson",
      to: "John Doe",
      message: "The financial report needs more detailed analysis of the Q2 expenses.",
      date: "6/10/2023"
    }
  ];

  const teamGoals = [
    {
      title: "Implement new CRM system",
      department: "Marketing",
      progress: 75,
      status: "In Progress",
      dueDate: "9/30/2023"
    },
    {
      title: "Reduce operational costs",
      department: "Finance",
      progress: 90,
      status: "In Progress",
      dueDate: "8/15/2023"
    },
    {
      title: "Improve employee retention",
      department: "HR",
      progress: 60,
      status: "In Progress",
      dueDate: "12/31/2023"
    },
    {
      title: "Launch mobile app",
      department: "Engineering",
      progress: 40,
      status: "In Progress",
      dueDate: "10/15/2023"
    },
    {
      title: "Upgrade IT infrastructure",
      department: "Engineering",
      progress: 95,
      status: "Completed",
      dueDate: "6/30/2023"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Performance Management</h1>
          <p className="text-muted-foreground">Manage employee performance reviews and feedback.</p>
        </div>
        <Button>
          <Star className="h-4 w-4 mr-2" />
          View Teams
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">86.6</div>
            <p className="text-sm text-green-600">Based on 5 reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Reviews</CardTitle>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-sm text-green-600">All reviews this quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Goals</CardTitle>
            <Target className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4</div>
            <p className="text-sm text-orange-500">4 in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4</div>
            <p className="text-sm text-green-600">Rating ≥ 85</p>
          </CardContent>
        </Card>
      </div>

      {/* Goals Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Goals Overview</CardTitle>
          <CardDescription>20% Completed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Progress value={20} className="h-3" />
            <div className="flex justify-between mt-2 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                1 Completed
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                4 In Progress
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                0 Overdue
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <Button variant="outline">
                <Star className="h-4 w-4 mr-2" />
                Start Performance Review
              </Button>
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Give Feedback
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Review Timeline */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Performance Review Timeline</CardTitle>
              <CardDescription>Most recent performance reviews</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All →
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceReviews.map((review, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                    <p className="text-xs text-muted-foreground">{review.reviewer}</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">{review.score}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Feedback */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>Most recent employee feedback</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All →
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFeedback.map((feedback, index) => (
              <div key={index} className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">{feedback.from}</p>
                  <p className="text-xs text-muted-foreground">to {feedback.to}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{feedback.message}</p>
                <p className="text-xs text-muted-foreground">{feedback.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Team Goals Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Team Goals Progress</CardTitle>
          <CardDescription>Overview of active goals across different Teams.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {teamGoals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{goal.title}</p>
                  <p className="text-sm text-muted-foreground">{goal.department}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{goal.progress}%</p>
                  <Badge variant={goal.status === "Completed" ? "default" : "secondary"}>
                    {goal.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={goal.progress} className="flex-1 h-2" />
                <p className="text-sm text-muted-foreground">Due: {goal.dueDate}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Performance;