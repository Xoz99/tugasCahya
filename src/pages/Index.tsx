import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { MagazineCard } from "@/components/dashboard/MagazineCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { BookOpen, Users, Eye, Download } from "lucide-react";

const Index = () => {
  const stats = [
    { title: "Total Issues", value: "24", change: "+2 this month", icon: BookOpen, trend: "up" as const },
    { title: "Active Readers", value: "12.5K", change: "+18% from last month", icon: Users, trend: "up" as const },
    { title: "Total Views", value: "45.2K", change: "+24% from last month", icon: Eye, trend: "up" as const },
    { title: "Downloads", value: "8.9K", change: "+12% from last month", icon: Download, trend: "up" as const },
  ];

  const magazines = [
    {
      title: "Design Quarterly",
      issue: "Issue #24 - November 2024",
      date: "Nov 15, 2024",
      views: "2.4K",
      downloads: "892",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80"
    },
    {
      title: "Tech Today",
      issue: "Issue #23 - October 2024",
      date: "Oct 20, 2024",
      views: "3.1K",
      downloads: "1.2K",
      coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80"
    },
    {
      title: "Creative Minds",
      issue: "Issue #22 - September 2024",
      date: "Sep 18, 2024",
      views: "2.8K",
      downloads: "1.1K",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80"
    },
    {
      title: "Innovation Weekly",
      issue: "Issue #21 - August 2024",
      date: "Aug 25, 2024",
      views: "2.2K",
      downloads: "945",
      coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-paper">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold text-foreground">
            Digital Magazine Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage and monitor your digital publications
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Magazine Issues */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Recent Issues
              </h2>
              <button className="text-sm text-accent hover:text-accent/80 font-medium transition-colors">
                View All →
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {magazines.map((magazine, index) => (
                <MagazineCard key={index} {...magazine} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
