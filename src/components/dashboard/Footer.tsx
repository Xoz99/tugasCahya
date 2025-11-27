import { BookOpen } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-accent/10 p-2">
              <BookOpen className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="font-serif font-semibold text-foreground">Digital Magazine</p>
              <p className="text-xs text-muted-foreground">Platform Majalah Digital Terpercaya</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Digital Magazine. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Hak Cipta Dilindungi Undang-Undang
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
