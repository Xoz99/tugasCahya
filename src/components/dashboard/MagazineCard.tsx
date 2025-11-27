import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MagazineCardProps {
  title: string;
  issue: string;
  date: string;
  views: string;
  downloads: string;
  coverImage: string;
  id?: string;
}

export const MagazineCard = ({ title, issue, date, views, downloads, coverImage, id }: MagazineCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/magazine/${id || '1'}`);
  };
  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 group">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={coverImage} 
          alt={`${title} - ${issue}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-serif font-semibold text-lg text-foreground line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{issue}</p>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{downloads}</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
