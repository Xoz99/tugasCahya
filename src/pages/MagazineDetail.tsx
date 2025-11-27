import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Download, Share2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MagazineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showReader, setShowReader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const allMagazines = [
    {
      id: "1",
      title: "Siswa Berprestasi",
      subtitle: "Sang Juara Azan",
      issue: "Issue #1 - 2024",
      date: "Nov 28, 2024",
      views: "2.4K",
      downloads: "892",
      coverImage: "/majalah/juaraAdzan.png",
      description: "Dokumentasi siswa berprestasi SMAN 36 Jakarta yang telah menunjukkan kinerja unggul di berbagai bidang.",
      pages: 25,
      category: "Student Achievement",
      publisher: "SMAN 36 Jakarta",
      publisherInfo: {
        name: "Yahya Aldia Putra",
        role: "Penanggung Jawab Kegiatan",
        photo: "/publisher/yahya.png",
        introduction: "Puji syukur kita panjatkan kehadirat Tuhan Yang Maha Esa. Saya Yahya Aldia Putra sebagai penanggung jawab kegiatan wawancara siswa berprestasi, ingin menyampaikan bahwa kegiatan ini diselenggarakan sebagai upaya untuk mendokumentasikan proses, motivasi, dan pencapaian para siswa SMAN 36 JAKARTA yang telah menunjukkan kinerja unggul di berbagai bidang.\n\nMelalui kinerja ini, diharapkan tercipta gambaran yang komprehensif mengenai kualitas, karakter, serta potensi peserta didik yang dapat menjadi contoh dan inspirasi bagi bagi para siswa lainnya. Selain itu, hasil kegiatan ini juga diharapkan dapat menjadi bahan evaluasi dan pengembangan program pembinaan prestasi di lingkungan sekolah SMAN NEGERI 36 JAKARTA."
      },
      studentInfo: {
        name: "Abrillah Shofa Saputra",
        class: "XII F.4.2",
        achievement: "Sang Juara Azan",
        photo: "/majalah/juaraAdzan.png",
        description: "Abrillah Shofa Saputra, siswa kelas XII F.4.2, merupakan salah satu siswa berprestasi yang berhasil menghantarkan nama sekolah dengan meraih Juara 3 Lomba Adzan Tingkat Provinsi DKI Jakarta. Prestasi ini menunjukkan bukunya kemampuan vokal dan ketepatan tajwid nya, tetapi juga dedikasi dan kedisiplinan dalam menjalani latihan secara konsisten."
      },
      tableOfContents: [
        { title: "Kata Pengantar", page: 2 },
        { title: "Profil Siswa", page: 3 },
        { title: "Pencapaian Prestasi", page: 5 },
        { title: "Testimoni Guru", page: 8 },
        { title: "Harapan dan Visi", page: 12 }
      ]
    },
    {
      id: "2",
      title: "Siswa Berprestasi",
      subtitle: "Juara Akademik",
      issue: "Issue #2 - 2024",
      date: "Nov 28, 2024",
      views: "1.8K",
      downloads: "756",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
      description: "Dokumentasi siswa berprestasi akademik SMAN 36 Jakarta.",
      pages: 25,
      category: "Student Achievement",
      publisher: "SMAN 36 Jakarta",
      publisherInfo: {
        name: "Yahya Aldia Putra",
        role: "Penanggung Jawab Kegiatan",
        photo: "/publisher/yahya.png",
        introduction: "Puji syukur kita panjatkan kehadirat Tuhan Yang Maha Esa. Saya Yahya Aldia Putra sebagai penanggung jawab kegiatan wawancara siswa berprestasi, ingin menyampaikan bahwa kegiatan ini diselenggarakan sebagai upaya untuk mendokumentasikan proses, motivasi, dan pencapaian para siswa SMAN 36 JAKARTA yang telah menunjukkan kinerja unggul di berbagai bidang.\n\nMelalui kinerja ini, diharapkan tercipta gambaran yang komprehensif mengenai kualitas, karakter, serta potensi peserta didik yang dapat menjadi contoh dan inspirasi bagi bagi para siswa lainnya. Selain itu, hasil kegiatan ini juga diharapkan dapat menjadi bahan evaluasi dan pengembangan program pembinaan prestasi di lingkungan sekolah SMAN NEGERI 36 JAKARTA."
      },
      studentInfo: {
        name: "Siti Nurhaliza",
        class: "XII IPA 1",
        achievement: "Juara 1 Olimpiade Matematika",
        photo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
        description: "Siti Nurhaliza adalah siswa berprestasi yang telah meraih berbagai penghargaan akademik. Dengan dedikasi tinggi terhadap studi, dia berhasil memenangkan Olimpiade Matematika tingkat provinsi dan konsisten mendapatkan nilai terbaik di kelasnya."
      },
      tableOfContents: [
        { title: "Kata Pengantar", page: 2 },
        { title: "Profil Siswa", page: 3 },
        { title: "Pencapaian Prestasi", page: 5 },
        { title: "Testimoni Guru", page: 8 },
        { title: "Harapan dan Visi", page: 12 }
      ]
    },
    {
      id: "3",
      title: "Biografi & Puisi",
      subtitle: "Kisah Hidup dan Inspirasi",
      issue: "Issue #3 - 2024",
      date: "Nov 28, 2024",
      views: "1.7K",
      downloads: "654",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      description: "Majalah kolaborasi yang berisi biografi B.J. Habibie dan Tan Malaka, serta puisi inspiratif dari siswa.",
      pages: 6,
      category: "Biografi & Puisi",
      publisher: "SMAN 36 Jakarta",
      publisherInfo: {
        name: "Aishafa Arya Kumala",
        role: "Penanggung Jawab Penyusunan",
        photo: "/publisher/Aishafa.png",
        introduction: "Puji syukur kami panjatkan kehadirat Tuhan Yang Maha Esa. Berkat rahmat dan karunia-Nya, majalah ini dapat kami selesaikan dengan baik dan tepat waktu. Sebagai salah satu Penanggung Jawab dalam penyusunan majalah ini, saya, Aishafa Arya Kumala, bersama seluruh anggota kelompok bekerja sama untuk menyusun karya biografi dan puisi.\n\nMajalah ini kami susun dengan tujuan untuk memberikan wawasan, inspirasi, serta hiburan kepada para pembaca melalui kisah biografi dan puisi yang kami tulis. Proses penyusunan majalah ini tentu memerlukan waktu dan pemikiran, namun berkat semangat dan kekompakan tim, tugas ini dapat terselesaikan dengan baik.\n\nSaya mengucapkan terima kasih kepada seluruh anggota kelompok yang telah memberikan kontribusi terbaiknya. Ucapan terima kasih juga kami sampaikan kepada guru-guru yang telah membimbing kami hingga akhir jalan. Kami menyadari bahwa masih banyak kekurangan dalam penyusunan majalah ini, sehingga kritik dan saran kami harapkan demi perbaikan di masa mendatang.\n\nSemoga majalah ini dapat bermanfaat dan memberi inspirasi bagi setiap pembaca.\n\nSalam hormat,\nAishafa Arya Kumala"
      },
      studentInfo: {
        name: "B.J. Habibie & Tan Malaka",
        class: "Tokoh Bersejarah Indonesia",
        achievement: "Biografi & Puisi Inspiratif",
        photo: "/publisher/Aishafa.png",
        description: "Majalah ini menampilkan kisah luar biasa B.J. Habibie, jenius Indonesia yang revolusioner dalam teknologi dan aerospace, serta Tan Malaka, tokoh visioner perjuangan nasional. Setiap cerita dilengkapi dengan puisi mendalam karya Pitri Rahmawati dan Aishafa Arya Kumala yang menggambarkan inspirasi dan dedikasi para tokoh tersebut."
      },
      tableOfContents: [
        { title: "Kata Pengantar", page: 2 },
        { title: "B.J. Habibie: Kisah Hidup dan Karier", page: 3 },
        { title: "Tan Malaka", page: 4 },
        { title: "Nadi di Tengah Badai (Puisi)", page: 6 }
      ]
    },
    {
      id: "4",
      title: "Active Generation",
      subtitle: "Pola Hidup Sehat dan Kebugaran Jasmani",
      issue: "Issue #4 - 2024",
      date: "Nov 28, 2024",
      views: "2.3K",
      downloads: "891",
      coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=800&q=80",
      description: "Majalah yang membahas pola hidup sehat dan kebugaran jasmani untuk generasi muda SMAN 36 Jakarta.",
      pages: 5,
      category: "Kesehatan & Kebugaran",
      publisher: "SMAN 36 Jakarta",
      publisherInfo: {
        name: "Briggita Estella Charista",
        role: "Penanggung Jawab",
        photo: "/publisher/briggita.png",
        introduction: "Puji dan syukur kami panjatkan kepada Tuhan yang Maha Esa atas segala rahmat, kesempatan dan kelancaran yang diberikan, sehingga majalah ini dapat terselesaikan dengan baik. Sebagai salah satu penanggung jawab dalam majalah ini saya Brigitta Estella Charista bersama tim redaksi menyusun majalah ini sebagai wadah kreativitas sekaligus sarana berbagi informasi yang relevan bagi para pembaca, khususnya siswa-siswi SMAN 36 Jakarta. Melalui berbagai artikel dan informasi yang disajikan, meliputi pendidikan, kesehatan, gaya hidup kami berkomitmen untuk menghadirkan konten yang tidak hanya informatif, tetapi juga mampu memperluas wawasan serta memberikan nilai tambah bagi pembacanya. Proses penyusunan ini merupakan hasil kerja sama, diskusi, serta dedikasi seluruh anggota tim yang telah berupaya memberikan yang terbaik.\n\nDalam penyusunan majalah ini, kami senantiasa berupaya menjaga kualitas isi serta ketepatan informasi yang disampaikan. Majalah ini diharapkan menjadi sarana edukatif yang mampu mendukung proses pembelajaran, sekaligus memperkaya wawasan para pembaca mengenai ilmu pengetahuan dan dinamika kehidupan di era modern. Kami meyakini bahwa keberadaan majalah ini dapat memberikan kontribusi positif bagi lingkungan sekolah, serta menjadi motivasi siswa-siswi untuk terus berkarya, berpikir kritis, dan mengembangkan potensi diri. Semoga majalah ini dapat menjadi pijakan awal menuju penerbitan selanjutnya yang semakin berkualitas dan bermanfaat.\n\nSalam hormat,\nBriggita Estella"
      },
      studentInfo: {
        name: "Generasi Aktif SMAN 36",
        class: "Siswa-siswi SMAN 36 Jakarta",
        achievement: "Gaya Hidup Sehat & Kebugaran",
        photo: "/publisher/briggita.png",
        description: "Majalah ini mengajak generasi muda untuk menjalani gaya hidup aktif dan sehat melalui berbagai tips kebugaran jasmani, nutrisi, dan motivasi. Dirancang khusus untuk siswa-siswi SMAN 36 Jakarta agar dapat menjaga kesehatan fisik dan mental dengan baik, mendukung produktivitas akademik dan prestasi mereka."
      },
      tableOfContents: [
        { title: "Kata Pengantar", page: 2 },
        { title: "Active Generation", page: 3 },
        { title: "Tips and Trick - Menjaga Tubuh Tetap Segar", page: 5 }
      ]
    },
    {
      id: "5",
      title: "Siswa Berprestasi",
      subtitle: "Juara Debat",
      issue: "Issue #5 - 2024",
      date: "Nov 28, 2024",
      views: "2.0K",
      downloads: "789",
      coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      description: "Dokumentasi siswa berprestasi debat SMAN 36 Jakarta.",
      pages: 25,
      category: "Student Achievement",
      publisher: "SMAN 36 Jakarta",
      publisherInfo: {
        name: "Yahya Aldia Putra",
        role: "Penanggung Jawab Kegiatan",
        photo: "/publisher/yahya.png",
        introduction: "Puji syukur kita panjatkan kehadirat Tuhan Yang Maha Esa. Saya Yahya Aldia Putra sebagai penanggung jawab kegiatan wawancara siswa berprestasi, ingin menyampaikan bahwa kegiatan ini diselenggarakan sebagai upaya untuk mendokumentasikan proses, motivasi, dan pencapaian para siswa SMAN 36 JAKARTA yang telah menunjukkan kinerja unggul di berbagai bidang.\n\nMelalui kinerja ini, diharapkan tercipta gambaran yang komprehensif mengenai kualitas, karakter, serta potensi peserta didik yang dapat menjadi contoh dan inspirasi bagi bagi para siswa lainnya. Selain itu, hasil kegiatan ini juga diharapkan dapat menjadi bahan evaluasi dan pengembangan program pembinaan prestasi di lingkungan sekolah SMAN NEGERI 36 JAKARTA."
      },
      studentInfo: {
        name: "Faisal Muhammad Ananda",
        class: "XII IPS 1",
        achievement: "Juara 1 Debat Nasional",
        photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
        description: "Faisal Muhammad Ananda adalah orator berbakat dan pemimpin debat yang telah membawa prestasi luar biasa. Dengan kemampuan argumentasi yang kuat, dia memimpin timnya meraih juara debat tingkat nasional."
      },
      tableOfContents: [
        { title: "Kata Pengantar", page: 2 },
        { title: "Profil Siswa", page: 3 },
        { title: "Pencapaian Prestasi", page: 5 },
        { title: "Testimoni Guru", page: 8 },
        { title: "Harapan dan Visi", page: 12 }
      ]
    },
    {
      id: "6",
      title: "Strategi & Solusi TKA Matematika",
      subtitle: "Meningkatkan Kesiapan Siswa",
      issue: "Issue #6 - 2024",
      date: "Nov 28, 2024",
      views: "3.2K",
      downloads: "1.1K",
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
      description: "Panduan komprehensif strategi dan tips mengerjakan soal TKA Matematika untuk meningkatkan kesiapan siswa.",
      pages: 9,
      category: "Study Guide",
      publisher: "SMAN 36 Jakarta",
      publisherInfo: {
        name: "Naomi Yolanda",
        role: "Tim Penyusun Majalah",
        photo: "/publisher/naomi.png",
        introduction: "Puji syukur kehadirat Allah SWT yang telah melimpahkan begitu banyak rahmat-Nya sehingga dapat terselesainya majalah ini. Kami juga mengucapkan banyak terimakasih kepada semua anggota tim yang telah bekerja keras dalam pembuatan majalah dan seluruh pihak yang telah membantu dan mendampingi kami.\n\nMungkin masih banyak kekurangan dan kesalahan dari pembuatan majalah ini. Maka dari itu, kritik dan saran yang membangun sangat kami harapkan untuk membenahi kekurangan dan kesalahan sehingga menjadikannya lebih baik.\n\nSemoga majalah ini dapat dipahami bagi siapapun yang membacanya. Akhir kata kami berharap semoga majalah ini dapat memberikan manfaat maupun inspirasi terhadap pembaca."
      },
      studentInfo: {
        name: "Kolaborasi Tim Penyusun",
        class: "Berbagai Kelas",
        achievement: "Strategi TKA Matematika",
        photo: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
        description: "Majalah ini merupakan hasil kolaborasi tim yang membahas strategi dan solusi meningkatkan kesiapan siswa dalam menghadapi TKA Matematika. Membahas 7 tips efektif mulai dari mengerjakan soal berbasis penalaran, teknik eliminasi, skimming soal, manajemen waktu, hingga pemahaman pola soal yang sering muncul. Sumber dari Modul TKA Zenius UTBK, Buku Strategi Sukses UTBK, dan best practice para tutor TKA."
      },
      tableOfContents: [
        { title: "Kata Pengantar", page: 2 },
        { title: "Latar Belakang Masalah", page: 3 },
        { title: "Strategi Meningkatkan Kesiapan", page: 5 },
        { title: "7 Tips & Trik TKA Matematika", page: 8 },
        { title: "Sumber Referensi", page: 28 }
      ]
    }
  ];

  const magazine = allMagazines.find(m => m.id === id) || allMagazines[0];

  const handleRead = () => {
    navigate(`/magazine/${id}/read`);
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

      <main className="container mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Cover & Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Cover Image */}
            <div className="flex items-center justify-center">
              <Card className="overflow-hidden shadow-large w-full max-w-sm">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={magazine.coverImage}
                    alt={magazine.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Title & Actions */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="space-y-3">
                <span className="inline-block gradient-gold px-4 py-2 rounded-full text-sm font-semibold text-primary">
                  {magazine.category}
                </span>
                <h1 className="text-5xl font-serif font-bold text-foreground">
                  {magazine.title}
                </h1>
                <p className="text-3xl text-accent font-semibold">
                  {magazine.subtitle}
                </p>
                <p className="text-lg text-muted-foreground">
                  {magazine.issue}
                </p>
              </div>

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

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-accent/10"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-accent/10"
                    onClick={handleShare}
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Bagikan
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Views</p>
                  <p className="text-2xl font-semibold text-foreground">{magazine.views}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-semibold text-foreground">{magazine.downloads}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Publisher Section */}
          <Card className="shadow-soft bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Kata Pengantar
              </h2>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={magazine.publisherInfo.photo}
                    alt={magazine.publisherInfo.name}
                    className="w-28 h-28 rounded-xl object-cover shadow-medium"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="font-semibold text-xl text-foreground">
                      {magazine.publisherInfo.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {magazine.publisherInfo.role}
                    </p>
                  </div>

                  <p className="text-base leading-relaxed text-foreground whitespace-pre-line">
                    {magazine.publisherInfo.introduction}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Student/Content Profile Section */}
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                {magazine.id === "1" ? "Profil Siswa Berprestasi" :
                 magazine.id === "3" ? "Konten Utama" :
                 magazine.id === "4" ? "Fokus Utama" :
                 magazine.id === "6" ? "Kolaborasi Tim" : "Informasi"}
              </h2>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <img
                    src={magazine.id === "1" ? "/majalah/juaraAdzan.png" :
                         magazine.id === "3" ? "/majalah/bjhabibie.png" :
                         magazine.id === "4" ? "/majalah/activeGen.png" :
                         magazine.id === "6" ? magazine.coverImage :
                         magazine.studentInfo.photo}
                    alt={magazine.studentInfo.name}
                    className="w-40 h-52 rounded-xl object-cover shadow-medium"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <p className="font-semibold text-3xl text-foreground">
                      {magazine.studentInfo.name}
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {magazine.id === "1" ? `Kelas ${magazine.studentInfo.class}` :
                       magazine.id === "3" ? magazine.studentInfo.class :
                       magazine.id === "4" ? magazine.studentInfo.class :
                       magazine.id === "6" ? magazine.studentInfo.class : ""}
                    </p>
                  </div>

                  <div>
                    <span className="inline-block gradient-gold px-4 py-2 rounded-full text-sm font-semibold text-primary mb-4">
                      {magazine.studentInfo.achievement}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-foreground">
                    {magazine.studentInfo.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* E-Book Reader Modal */}
      {showReader && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
            {/* Header */}
            <div className="border-b border-border p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  {magazine.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Halaman {currentPage} dari {magazine.pages}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowReader(false)}
                className="hover:bg-accent/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Reader Content */}
            <div className="flex-1 overflow-hidden flex items-center justify-center bg-muted/30 relative">
              <div className="bg-white dark:bg-slate-900 w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4 max-w-2xl">
                  {currentPage === 1 && (
                    <>
                      <img
                        src={magazine.coverImage}
                        alt="Cover"
                        className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto mb-6"
                      />
                      <h1 className="text-4xl font-serif font-bold text-foreground">
                        {magazine.title}
                      </h1>
                      <p className="text-2xl text-accent font-semibold">
                        {magazine.subtitle}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        {magazine.issue}
                      </p>
                    </>
                  )}

                  {currentPage === 2 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Kata Pengantar
                      </h2>
                      <div className="flex gap-6 items-start">
                        <img
                          src={magazine.publisherInfo.photo}
                          alt={magazine.publisherInfo.name}
                          className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="space-y-2">
                          <p className="font-semibold text-lg text-foreground">
                            {magazine.publisherInfo.name}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {magazine.publisherInfo.role}
                          </p>
                          <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                            {magazine.publisherInfo.introduction}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPage === 3 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Profil Siswa Berprestasi
                      </h2>
                      <div className="flex gap-6 items-start">
                        <img
                          src={magazine.studentInfo.photo}
                          alt={magazine.studentInfo.name}
                          className="w-32 h-40 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-2xl text-foreground">
                              {magazine.studentInfo.name}
                            </p>
                            <p className="text-muted-foreground">
                              Kelas {magazine.studentInfo.class}
                            </p>
                          </div>
                          <span className="inline-block gradient-gold px-3 py-1 rounded-full text-sm font-semibold text-primary">
                            {magazine.studentInfo.achievement}
                          </span>
                          <p className="text-sm leading-relaxed text-foreground">
                            {magazine.studentInfo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPage === 4 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Latar Belakang Masalah
                      </h2>
                      <div className="space-y-4 text-sm leading-relaxed text-foreground">
                        <p>
                          Anjloknya nilai TKA Matematika pada November lalu menjadi sorotan karena memengaruhi peluang dan pemilihan jurusan para calon mahasiswa. Banyak siswa yang menyebutkan terkait susahnya soal yang jauh lebih kompleks, membutuhkan penalaran logika serta kecepatan berpikir yang tinggi.
                        </p>
                        <p>
                          Dan juga perubahan pola belajar yang dinilai kurang efektif. Karena minimnya Latihan soal yang berbasis penalaran dan adanya tekanan psikologis menjelang ujian yang mempengaruhi turunnya performa.
                        </p>
                        <p>
                          Hal ini menunjukan bahwa bukan hanya materi yang harus terus diulang dan diperkuat, tetapi juga strategi belajar, manajemen waktu dan kesiapan mental pada siswa. Tanpa adanya perbaikan dari pemerintah atau pun siswa, penurunan nilai ini akan terus berlanjut sampai tahun tahun berikutnya.
                        </p>
                      </div>
                    </div>
                  )}

                  {currentPage === 5 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Strategi Meningkatkan Kesiapan
                      </h2>
                      <div className="space-y-4 text-sm leading-relaxed text-foreground">
                        <div>
                          <p className="font-semibold text-base mb-2">1. Biasakan Mengerjakan Soal Berbasis Penalaran</p>
                          <p>
                            TKA tidak hanya menguji hafalan rumus, tapi cara berpikir. Biasakan mengerjakan soal yang menuntut pemahaman konsep dan analisis beberapa langkah. Semakin sering kamu melatih soal penalaran, semakin otomatis pola berpikir logis kamu terbentuk saat ujian.
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-base mb-2">2. Gunakan Teknik Eliminasi</p>
                          <p>
                            Jangan langsung fokus ke penyelesaian panjang. Sering kali kamu bisa menghapus 2–3 opsi hanya dengan melihat pola, tanda positif/negatif, rentang nilai, atau substitusi cepat. Teknik eliminasi membuat peluang benar lebih besar meskipun kamu belum temukan jawaban pasti.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPage === 6 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Strategi Meningkatkan Kesiapan (Lanjutan)
                      </h2>
                      <div className="space-y-4 text-sm leading-relaxed text-foreground">
                        <div>
                          <p className="font-semibold text-base mb-2">3. Skimming Soal Terlebih Dahulu</p>
                          <p>
                            Sebelum masuk hitungan, baca cepat seluruh soal untuk melihat mana yang paling mudah kamu selesaikan dulu. Ini membantu mengatur energi, karena tidak semua soal butuh effort yang sama. Skimming juga memberi gambaran tipe soal apa yang paling banyak muncul.
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-base mb-2">4. Jangan Langsung Tenggelam di Soal Sulit</p>
                          <p>
                            Di TKA, waktu adalah musuh utama. Kalau kamu menemukan soal yang dari awal terlihat panjang atau membingungkan, tinggalkan dulu. Prioritaskan soal yang kamu tahu bisa kamu selesaikan dalam waktu singkat agar skor naik cepat sebelum masuk ke soal berat.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPage === 7 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Tips & Trik TKA Matematika
                      </h2>
                      <div className="space-y-4 text-sm leading-relaxed text-foreground">
                        <div>
                          <p className="font-semibold text-base mb-2">5. Gunakan Teknik Substitusi "Cek Jawaban Cepat"</p>
                          <p>
                            Untuk soal persamaan, fungsi, atau nilai variabel, langsung tes opsi jawaban ke soal. Cara ini sering lebih cepat daripada menyelesaikan persamaan secara penuh.
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-base mb-2">6. Latih Manajemen Waktu</p>
                          <p>
                            Targetkan 1–2 menit per soal. Kalau dalam 15 detik kamu belum menemukan arah penyelesaian, lebih baik pindah dulu. Sisakan 5 menit terakhir untuk pengecekan atau menjawab soal yang tadi tertunda.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPage === 8 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Tips & Trik TKA Matematika (Lanjutan)
                      </h2>
                      <div className="space-y-4 text-sm leading-relaxed text-foreground">
                        <div>
                          <p className="font-semibold text-base mb-2">7. Pahami Pola Soal yang Sering Muncul</p>
                          <p>
                            TKA cenderung mengulang pola yang sama: fungsi dasar, logaritma, aljabar manipulatif, peluang sederhana, dan geometri dasar. Dengan kenal polanya, kamu langsung tahu langkah awal tanpa berpikir lama.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentPage >= 4 && currentPage <= 7 && (
                    <div className="h-full flex items-center justify-center">
                      <img
                        src={`/majalah/startegyTKA${currentPage - 3}.png`}
                        alt={`Halaman ${currentPage}`}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  )}

                  {currentPage === 8 && (
                    <div className="h-full flex items-center justify-center">
                      <img
                        src="/majalah/startegyTKA4.png"
                        alt="Halaman 8"
                        className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  )}

                  {currentPage === 9 && (
                    <div className="space-y-4 text-left">
                      <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-6">
                        Sumber Referensi
                      </h2>
                      <div className="space-y-4 text-sm leading-relaxed text-foreground">
                        <div>
                          <p className="font-semibold text-base mb-3">Sumber Materi:</p>
                          <ol className="list-decimal list-inside space-y-2">
                            <li>Modul TKA Matematika Zenius UTBK</li>
                            <li>Buku "Strategi Sukses UTBK" – Tim Penulis Bimbel Prosus Inten</li>
                            <li>Best practice tutor TKA dalam menganalisis pola soal penalaran kuantitatif</li>
                          </ol>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="font-semibold text-base mb-2">Referensi Berita:</p>
                          <ul className="space-y-2 text-xs">
                            <li>
                              Hasil Nilai Matematika TKA 2025, Mendikdasmen Sebut Nilai Anak Jenjang SMA Jeblok - Lombok Post
                            </li>
                            <li>
                              Catat Ini 5 Tips Mengerjakan Soal-Soal TKA - Detik.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="border-t border-border p-6 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="hover:bg-accent/10"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Sebelumnya
              </Button>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max={magazine.pages}
                  value={currentPage}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= magazine.pages) {
                      setCurrentPage(page);
                    }
                  }}
                  className="w-16 px-2 py-1 border border-border rounded text-center text-foreground bg-card"
                />
                <span className="text-muted-foreground">
                  dari {magazine.pages}
                </span>
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.min(magazine.pages, currentPage + 1))}
                disabled={currentPage === magazine.pages}
                className="hover:bg-accent/10"
              >
                Selanjutnya
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazineDetail;
