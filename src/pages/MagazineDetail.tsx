import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Eye, Download, Calendar, BookOpen, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MagazineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Sample data - nanti bisa diganti dengan data dari database
  const magazine = {
    id: id || "1",
    title: "Design Quarterly",
    issue: "Issue #24 - November 2024",
    date: "Nov 15, 2024",
    views: "2.4K",
    downloads: "892",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
    description: "Eksplorasi mendalam tentang tren desain terkini, dari UI/UX modern hingga branding kreatif. Edisi ini menampilkan wawancara eksklusif dengan desainer terkemuka dan studi kasus dari proyek-proyek inspiratif.",
    pages: 120,
    category: "Design",
    publisher: "Digital Magazine Publishing",
    tableOfContents: [
      { title: "Editor's Note", page: 4 },
      { title: "Modern UI/UX Trends 2024", page: 12 },
      { title: "Interview: Leading Designers", page: 28 },
      { title: "Brand Identity Case Studies", page: 45 },
      { title: "Typography in Digital Age", page: 68 },
      { title: "Color Theory Masterclass", page: 89 },
      { title: "Tools & Resources", page: 108 }
    ]
  };

  const handleRead = () => {
    toast({
      title: "Membuka Majalah",
      description: "Magazine reader akan segera dibuka...",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Dimulai",
      description: `${magazine.title} sedang didownload...`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Link Disalin",
      description: "Link majalah telah disalin ke clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-paper">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="hover:bg-accent/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Cover & Actions */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden shadow-large">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={magazine.coverImage} 
                  alt={magazine.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full gradient-gold text-primary font-semibold shadow-medium hover:shadow-large transition-all"
                onClick={handleRead}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Baca Sekarang
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full hover:bg-accent/10"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="w-full hover:bg-accent/10"
                onClick={handleShare}
              >
                <Share2 className="mr-2 h-5 w-5" />
                Bagikan
              </Button>
            </div>

            {/* Stats */}
            <Card className="shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="font-semibold text-foreground">{magazine.views}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">Downloads</span>
                  </div>
                  <span className="font-semibold text-foreground">{magazine.downloads}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Published</span>
                  </div>
                  <span className="font-semibold text-foreground">{magazine.date}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-sm">Pages</span>
                  </div>
                  <span className="font-semibold text-foreground">{magazine.pages}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Info */}
            <div className="space-y-4">
              <div>
                <span className="inline-block gradient-gold px-4 py-1.5 rounded-full text-sm font-semibold text-primary mb-4">
                  {magazine.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  {magazine.title}
                </h1>
                <p className="text-xl text-muted-foreground">{magazine.issue}</p>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                {magazine.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Publisher:</span>
                <span className="font-medium text-foreground">{magazine.publisher}</span>
              </div>
            </div>

            {/* Table of Contents */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Daftar Isi
                </h2>
                
                <div className="space-y-4">
                  {magazine.tableOfContents.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between py-3 border-b last:border-0 border-border hover:bg-muted/50 transition-colors px-3 rounded"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-accent w-8">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Hal. {item.page}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Preview Halaman
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((page) => (
                    <div 
                      key={page}
                      className="aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow cursor-pointer group"
                    >
                      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 group-hover:from-accent/10 group-hover:to-accent/5 transition-colors">
                        <span className="text-4xl font-serif font-bold text-muted-foreground/30 group-hover:text-accent/50 transition-colors">
                          {page}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-6">
                  Preview terbatas. Baca atau download untuk melihat semua halaman.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MagazineDetail;
