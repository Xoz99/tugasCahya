import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, UserPlus, Download } from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "New issue published",
    description: "Edition November 2024 is now live",
    time: "2 hours ago",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Milestone reached",
    description: "10,000 total readers this month",
    time: "5 hours ago",
    color: "text-green-600"
  },
  {
    icon: UserPlus,
    title: "New subscribers",
    description: "245 new subscribers today",
    time: "1 day ago",
    color: "text-purple-600"
  },
  {
    icon: Download,
    title: "Download spike",
    description: "October issue trending",
    time: "2 days ago",
    color: "text-accent"
  }
];

export const RecentActivity = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="font-serif text-xl">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-0 border-border">
            <div className={`rounded-lg bg-muted p-2 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="font-medium text-sm text-foreground">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
