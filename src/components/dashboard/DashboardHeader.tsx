import { Button } from "@/components/ui/button";
import { PlusCircle, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search magazines, issues..." 
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-accent/10">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="gradient-gold text-primary-foreground font-medium shadow-medium hover:shadow-large transition-shadow">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Issue
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
