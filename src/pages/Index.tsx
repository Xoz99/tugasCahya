import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MagazineCard } from "@/components/dashboard/MagazineCard";
import { FeaturedMagazines } from "@/components/dashboard/FeaturedMagazines";
import { Footer } from "@/components/dashboard/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const allMagazines = [
    {
      id: "1",
      title: "Siswa Berprestasi",
      issue: "Sang Juara Azan",
      date: "Nov 28, 2024",
      views: "2.4K",
      downloads: "892",
      coverImage: "/majalah/juaraAdzan.png"
    },
    {
      id: "3",
      title: "Biografi & Puisi",
      issue: "Kisah Hidup dan Inspirasi",
      date: "Nov 28, 2024",
      views: "1.7K",
      downloads: "654",
      coverImage: "/majalah/bjhabibie.png"
    },
    {
      id: "4",
      title: "Active Generation",
      issue: "Pola Hidup Sehat dan Kebugaran Jasmani",
      date: "Nov 28, 2024",
      views: "2.3K",
      downloads: "891",
      coverImage: "/majalah/activeGen.png"
    },
    {
      id: "6",
      title: "Strategi & Solusi TKA Matematika",
      issue: "Meningkatkan Kesiapan Siswa",
      date: "Nov 28, 2024",
      views: "3.2K",
      downloads: "1.1K",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80"
    }
  ];

  const filteredMagazines = allMagazines.filter((magazine) => {
    const query = searchQuery.toLowerCase();
    return (
      magazine.title.toLowerCase().includes(query) ||
      magazine.issue.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-paper">
      <DashboardHeader onSearch={setSearchQuery} />

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Featured Magazines Slider */}
        <FeaturedMagazines />

        {/* All Magazines Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-semibold text-foreground">
            Semua Majalah Digital
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMagazines.length > 0 ? (
              filteredMagazines.map((magazine, index) => (
                <MagazineCard key={index} {...magazine} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Tidak ada majalah yang ditemukan</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
