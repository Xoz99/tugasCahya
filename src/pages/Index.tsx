import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MagazineCard } from "@/components/dashboard/MagazineCard";
import { FeaturedMagazines } from "@/components/dashboard/FeaturedMagazines";
import { Pagination } from "@/components/dashboard/Pagination";
import { Footer } from "@/components/dashboard/Footer";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  const allMagazines = [
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
    {
      title: "Business Insight",
      issue: "Issue #20 - July 2024",
      date: "Jul 22, 2024",
      views: "1.9K",
      downloads: "823",
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80"
    },
    {
      title: "Art & Culture",
      issue: "Issue #19 - June 2024",
      date: "Jun 18, 2024",
      views: "2.3K",
      downloads: "967",
      coverImage: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=400&q=80"
    },
    {
      title: "Health & Wellness",
      issue: "Issue #18 - May 2024",
      date: "May 20, 2024",
      views: "2.7K",
      downloads: "1.3K",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80"
    },
    {
      title: "Travel Explorer",
      issue: "Issue #17 - April 2024",
      date: "Apr 15, 2024",
      views: "3.2K",
      downloads: "1.4K",
      coverImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80"
    },
    {
      title: "Fashion Forward",
      issue: "Issue #16 - March 2024",
      date: "Mar 22, 2024",
      views: "2.1K",
      downloads: "892",
      coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
    },
    {
      title: "Food & Dining",
      issue: "Issue #15 - February 2024",
      date: "Feb 18, 2024",
      views: "2.5K",
      downloads: "1.1K",
      coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
    },
    {
      title: "Photography Today",
      issue: "Issue #14 - January 2024",
      date: "Jan 20, 2024",
      views: "2.0K",
      downloads: "834",
      coverImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&q=80"
    },
    {
      title: "Music & Sound",
      issue: "Issue #13 - December 2023",
      date: "Dec 15, 2023",
      views: "1.8K",
      downloads: "756",
      coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80"
    },
    {
      title: "Architecture Review",
      issue: "Issue #12 - November 2023",
      date: "Nov 18, 2023",
      views: "2.2K",
      downloads: "923",
      coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80"
    },
    {
      title: "Science Monthly",
      issue: "Issue #11 - October 2023",
      date: "Oct 22, 2023",
      views: "2.6K",
      downloads: "1.2K",
      coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80"
    },
    {
      title: "Sports World",
      issue: "Issue #10 - September 2023",
      date: "Sep 15, 2023",
      views: "3.0K",
      downloads: "1.3K",
      coverImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80"
    },
    {
      title: "Education Today",
      issue: "Issue #9 - August 2023",
      date: "Aug 20, 2023",
      views: "1.7K",
      downloads: "712",
      coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
    },
  ];

  const totalPages = Math.ceil(allMagazines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMagazines = allMagazines.slice(startIndex, startIndex + itemsPerPage);

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

        {/* Featured Magazines Slider */}
        <FeaturedMagazines />

        {/* All Magazines Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Semua Majalah Digital
            </h2>
            <p className="text-sm text-muted-foreground">
              Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, allMagazines.length)} dari {allMagazines.length} majalah
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentMagazines.map((magazine, index) => (
              <MagazineCard key={index} {...magazine} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pt-8">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
