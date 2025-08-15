import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const MarketingDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Marketing Dashboard</h1>
        <p className="text-muted-foreground">Track marketing performance and campaigns</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Running campaigns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.4%</div>
            <p className="text-xs text-muted-foreground">+0.8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marketing ROI</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2x</div>
            <p className="text-xs text-muted-foreground">Return on investment</p>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Performance of current marketing campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Product Launch - New Antibiotic", type: "Digital", budget: "$50,000", spent: 75, leads: 124 },
              { name: "Healthcare Professional Outreach", type: "Email", budget: "$25,000", spent: 60, leads: 89 },
              { name: "Trade Show Participation", type: "Event", budget: "$100,000", spent: 45, leads: 156 },
              { name: "SEO & Content Marketing", type: "Content", budget: "$30,000", spent: 85, leads: 67 },
            ].map((campaign, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{campaign.name}</p>
                    <p className="text-sm text-muted-foreground">{campaign.type} • {campaign.budget}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{campaign.leads} leads</p>
                    <p className="text-sm text-muted-foreground">{campaign.spent}% spent</p>
                  </div>
                </div>
                <Progress value={campaign.spent} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads are coming from</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { source: "Website", leads: 89, conversion: "4.2%", trend: "up" },
              { source: "Email Campaigns", leads: 67, conversion: "3.8%", trend: "up" },
              { source: "Social Media", leads: 45, conversion: "2.1%", trend: "down" },
              { source: "Trade Shows", leads: 34, conversion: "6.7%", trend: "up" },
              { source: "Referrals", leads: 23, conversion: "8.1%", trend: "up" },
            ].map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{source.source}</p>
                  <p className="text-sm text-muted-foreground">{source.leads} leads</p>
                </div>
                <div className="text-right">
                  <Badge variant={source.trend === "up" ? "default" : "secondary"}>
                    {source.conversion}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketingDashboard;