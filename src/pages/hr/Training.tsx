import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Edit, Trash, Plus } from "lucide-react";

const Training = () => {
  const upcomingSessions = [
    {
      title: "Advanced React Techniques",
      date: "2023-07-05 - 2023-07-07",
      description: "Deep dive into React hooks and performance optimization",
      instructor: "Jane Doe",
      status: "Completed"
    },
    {
      title: "Digital Marketing Analytics",
      date: "2023-06-15 - 2023-06-16",
      description: "Learning to use analytics tools for marketing campaigns",
      instructor: "Alice Brown",
      status: "Completed"
    },
    {
      title: "Leadership Training",
      date: "2023-05-10 - 2023-05-12",
      description: "Advanced leadership skills for senior management",
      instructor: "John Smith",
      status: "Completed"
    }
  ];

  const previousSessions = [
    {
      title: "Project Management Fundamentals",
      date: "2023-04-20 - 2023-04-22",
      description: "Basic project management principles and methodologies",
      instructor: "Sarah Wilson",
      status: "Completed"
    },
    {
      title: "Communication Skills Workshop",
      date: "2023-03-15 - 2023-03-17",
      description: "Improving workplace communication and collaboration",
      instructor: "Mike Johnson",
      status: "Completed"
    }
  ];

  const SessionCard = ({ session, showActions = false }: { session: any, showActions?: boolean }) => (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-muted-foreground" />
            <div className="flex-1">
              <CardTitle className="text-lg">{session.title}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {session.date}
                </Badge>
              </div>
            </div>
          </div>
          <CardDescription className="mt-2">{session.description}</CardDescription>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-muted-foreground">Instructor: {session.instructor}</span>
            <Badge variant="default">{session.status}</Badge>
          </div>
        </div>
        {showActions && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardHeader>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Training & Development</h1>
          <p className="text-muted-foreground">Manage employee training programs and sessions.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Session
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="previous">Previous Sessions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingSessions.map((session, index) => (
              <SessionCard key={index} session={session} showActions={true} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="previous" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousSessions.map((session, index) => (
              <SessionCard key={index} session={session} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Training;