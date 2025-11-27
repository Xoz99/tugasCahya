import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredMagazines = [
  {
    title: "Design Quarterly",
    description: "The latest in modern design trends and creativity",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    badge: "Editor's Pick"
  },
  {
    title: "Tech Innovation",
    description: "Exploring the future of technology and digital transformation",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    badge: "Trending"
  },
  {
    title: "Creative Minds",
    description: "Stories from the world's most creative professionals",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    badge: "Popular"
  },
  {
    title: "Innovation Weekly",
    description: "Weekly insights into innovation and entrepreneurship",
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=800&q=80",
    badge: "New"
  },
];

export const FeaturedMagazines = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMagazines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredMagazines.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredMagazines.length) % featuredMagazines.length);
  };

  const current = featuredMagazines[currentIndex];

  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-large">
        <div className="relative h-[400px] md:h-[500px]">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(${current.coverImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-8 md:px-12">
              <div className="max-w-2xl space-y-6">
                <div className="inline-block">
                  <span className="gradient-gold px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-medium">
                    {current.badge}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground leading-tight">
                  {current.title}
                </h2>
                
                <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                  {current.description}
                </p>

                <Button 
                  size="lg" 
                  className="gradient-gold text-primary font-semibold shadow-large hover:shadow-xl transition-all"
                >
                  Baca Sekarang
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full shadow-medium hover:shadow-large transition-all bg-background/90 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={goToNext}
              className="rounded-full shadow-medium hover:shadow-large transition-all bg-background/90 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredMagazines.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-8 bg-accent" 
                    : "w-2 bg-background/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
