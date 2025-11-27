import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const MagazineReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Magazine data - sync dengan MagazineDetail
  const allMagazines = [
    {
      id: "1",
      title: "Siswa Berprestasi",
      subtitle: "Sang Juara Azan",
      pages: 3,
      coverImage: "/majalah/juaraAdzan.png",
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
      }
    },
    {
      id: "2",
      title: "Tech Today",
      pages: 3,
      coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      publisherInfo: { name: "Editor", role: "Publisher", photo: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80", introduction: "Magazine content" },
      studentInfo: { name: "Author", class: "Staff", achievement: "Tech Magazine", photo: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80", description: "Tech magazine" }
    },
    {
      id: "3",
      title: "Biografi & Puisi",
      subtitle: "Kisah Hidup dan Inspirasi",
      pages: 6,
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      publisherInfo: {
        name: "Aishafa Arya Kumala",
        role: "Penanggung Jawab Penyusunan",
        photo: "/publisher/Aishafa.png",
        introduction: "Puji syukur kami panjatkan kehadirat Tuhan Yang Maha Esa. Berkat rahmat dan karunia-Nya, majalah ini dapat kami selesaikan dengan baik dan tepat waktu. Sebagai salah satu Penanggung Jawab dalam penyusunan majalah ini, saya, Aishafa Arya Kumala, bersama seluruh anggota kelompok bekerja sama untuk menyusun karya biografi dan puisi.\n\nMajalah ini kami susun dengan tujuan untuk memberikan wawasan, inspirasi, serta hiburan kepada para pembaca melalui kisah biografi dan puisi yang kami tulis. Proses penyusunan majalah ini tentu memerlukan waktu dan pemikiran, namun berkat semangat dan kekompakan tim, tugas ini dapat terselesaikan dengan baik.\n\nSaya mengucapkan terima kasih kepada seluruh anggota kelompok yang telah memberikan kontribusi terbaiknya. Ucapan terima kasih juga kami sampaikan kepada guru-guru yang telah membimbing kami hingga akhir jalan. Kami menyadari bahwa masih banyak kekurangan dalam penyusunan majalah ini, sehingga kritik dan saran kami harapkan demi perbaikan di masa mendatang.\n\nSemoga majalah ini dapat bermanfaat dan memberi inspirasi bagi setiap pembaca.\n\nSalam hormat,\nAishafa Arya Kumala"
      },
      studentInfo: {
        name: "Tim Penyusun",
        class: "Berbagai Kelas",
        achievement: "Biografi & Puisi",
        photo: "/publisher/aishafa.png",
        description: "Majalah kolaborasi yang berisi biografi B.J. Habibie dan Tan Malaka, serta puisi karya Pitri Rahmawati dan Aishafa Arya Kumala."
      }
    },
    {
      id: "4",
      title: "Active Generation",
      subtitle: "Pola Hidup Sehat dan Kebugaran Jasmani",
      pages: 5,
      coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=800&q=80",
      publisherInfo: {
        name: "Briggita Estella Charista",
        role: "Penanggung Jawab",
        photo: "/publisher/briggita.png",
        introduction: "Puji dan syukur kami panjatkan kepada Tuhan yang Maha Esa atas segala rahmat, kesempatan dan kelancaran yang diberikan, sehingga majalah ini dapat terselesaikan dengan baik. Sebagai salah satu penanggung jawab dalam majalah ini saya Brigitta Estella Charista bersama tim redaksi menyusun majalah ini sebagai wadah kreativitas sekaligus sarana berbagi informasi yang relevan bagi para pembaca, khususnya siswa-siswi SMAN 36 Jakarta. Melalui berbagai artikel dan informasi yang disajikan, meliputi pendidikan, kesehatan, gaya hidup kami berkomitmen untuk menghadirkan konten yang tidak hanya informatif, tetapi juga mampu memperluas wawasan serta memberikan nilai tambah bagi pembacanya. Proses penyusunan ini merupakan hasil kerja sama, diskusi, serta dedikasi seluruh anggota tim yang telah berupaya memberikan yang terbaik.\n\nDalam penyusunan majalah ini, kami senantiasa berupaya menjaga kualitas isi serta ketepatan informasi yang disampaikan. Majalah ini diharapkan menjadi sarana edukatif yang mampu mendukung proses pembelajaran, sekaligus memperkaya wawasan para pembaca mengenai ilmu pengetahuan dan dinamika kehidupan di era modern. Kami meyakini bahwa keberadaan majalah ini dapat memberikan kontribusi positif bagi lingkungan sekolah, serta menjadi motivasi siswa-siswi untuk terus berkarya, berpikir kritis, dan mengembangkan potensi diri. Semoga majalah ini dapat menjadi pijakan awal menuju penerbitan selanjutnya yang semakin berkualitas dan bermanfaat.\n\nSalam hormat,\nBriggita Estella"
      },
      studentInfo: {
        name: "Tim Redaksi",
        class: "Berbagai Kelas",
        achievement: "Majalah Edukasi",
        photo: "/publisher/briggita.png",
        description: "Majalah yang menghadirkan konten pendidikan, kesehatan, dan gaya hidup yang relevan bagi siswa SMAN 36 Jakarta."
      }
    },
    {
      id: "5",
      title: "Business Insight",
      pages: 3,
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      publisherInfo: { name: "Editor", role: "Publisher", photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80", introduction: "Magazine content" },
      studentInfo: { name: "Author", class: "Staff", achievement: "Business Magazine", photo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80", description: "Business magazine" }
    },
    {
      id: "6",
      title: "Strategi & Solusi TKA Matematika",
      subtitle: "Meningkatkan Kesiapan Siswa",
      pages: 9,
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
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
        description: "Majalah ini merupakan hasil kolaborasi tim yang membahas strategi dan solusi meningkatkan kesiapan siswa dalam menghadapi TKA Matematika."
      }
    }
  ];

  const magazine = allMagazines.find(m => m.id === id) || allMagazines[0];

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next page
      if (currentPage < magazine.pages) {
        setCurrentPage(currentPage + 1);
      }
    }
    if (touchEnd - touchStart > 50) {
      // Swipe right - prev page
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  // Handle keyboard
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentPage < magazine.pages) {
        setCurrentPage(currentPage + 1);
      }
      if (e.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      if (e.key === "Escape") {
        navigate(`/magazine/${id}`);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPage, magazine.pages, id, navigate]);

  const renderPage = () => {
    if (currentPage === 1) {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <img
            src={magazine.coverImage}
            alt="Cover"
            className="max-h-96 object-contain"
          />
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-serif font-bold text-foreground">
              {magazine.title}
            </h1>
            <p className="text-2xl text-accent font-semibold">
              {magazine.subtitle}
            </p>
          </div>
        </div>
      );
    }

    if (currentPage === 2) {
      return (
        <div className="space-y-6 h-full overflow-y-auto pb-8">
          <h2 className="text-4xl font-serif font-bold text-foreground sticky top-0 bg-background py-4">
            Kata Pengantar
          </h2>
          <div className="flex gap-6">
            <img
              src={magazine.publisherInfo.photo}
              alt={magazine.publisherInfo.name}
              className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <p className="font-semibold text-xl text-foreground">
                {magazine.publisherInfo.name}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {magazine.publisherInfo.role}
              </p>
              <p className="text-sm leading-relaxed text-foreground whitespace-pre-line">
                {magazine.publisherInfo.introduction}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage === 3) {
      // For magazine ID 1, show full page image
      if (magazine.id === "1") {
        return (
          <img
            src="/majalah/juaraAdzan.png"
            alt="Halaman 3"
            className="w-full h-full object-cover"
          />
        );
      }

      // For magazine ID 3, show B.J. Habibie image
      if (magazine.id === "3") {
        return (
          <img
            src="/majalah/bjhabibie.png"
            alt="Halaman 3"
            className="w-full h-full object-cover"
          />
        );
      }

      // For magazine ID 4, show activeGen image
      if (magazine.id === "4") {
        return (
          <img
            src="/majalah/activeGen.png"
            alt="Halaman 3"
            className="w-full h-full object-cover"
          />
        );
      }

      // For other magazines, show student profile
      return (
        <div className="space-y-6 h-full overflow-y-auto pb-8">
          <h2 className="text-4xl font-serif font-bold text-foreground sticky top-0 bg-background py-4">
            Profil Siswa Berprestasi
          </h2>
          <div className="flex gap-6">
            <img
              src={magazine.studentInfo.photo}
              alt={magazine.studentInfo.name}
              className="w-40 h-52 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <p className="font-semibold text-3xl text-foreground">
                {magazine.studentInfo.name}
              </p>
              <p className="text-lg text-muted-foreground">
                Kelas {magazine.studentInfo.class}
              </p>
              <span className="inline-block gradient-gold px-4 py-2 rounded-full text-sm font-semibold text-primary my-4">
                {magazine.studentInfo.achievement}
              </span>
              <p className="text-base leading-relaxed text-foreground">
                {magazine.studentInfo.description}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (currentPage >= 4 && currentPage <= 5) {
      // For magazine ID 4, show image pages (halaman 4-5)
      if (magazine.id === "4") {
        const imageMap: { [key: number]: string } = {
          4: "activeGen2",
          5: "tipsntrick"
        };
        return (
          <img
            src={`/majalah/${imageMap[currentPage]}.png`}
            alt={`Halaman ${currentPage}`}
            className="w-full h-full object-cover"
          />
        );
      }
    }

    if (currentPage >= 4 && currentPage <= 6) {
      // For magazine ID 3, show image pages (halaman 4-6)
      if (magazine.id === "3") {
        const imageMap: { [key: number]: string } = {
          4: "tanmalaka",
          5: "tanmalaka2",
          6: "nadi"
        };
        return (
          <img
            src={`/majalah/${imageMap[currentPage]}.png`}
            alt={`Halaman ${currentPage}`}
            className="w-full h-full object-cover"
          />
        );
      }

      // For magazine ID 6, show strategy images
      if (magazine.id === "6") {
        return (
          <img
            src={`/majalah/startegyTKA${currentPage - 3}.png`}
            alt={`Halaman ${currentPage}`}
            className="w-full h-full object-cover"
          />
        );
      }
    }

    if (currentPage === 7) {
      // For magazine ID 6 (TKA Matematika)
      if (magazine.id === "6") {
        return (
          <img
            src="/majalah/startegyTKA4.png"
            alt="Halaman 7"
            className="w-full h-full object-cover"
          />
        );
      }
    }

    if (currentPage === 8) {
      // For magazine ID 6 (TKA Matematika)
      if (magazine.id === "6") {
        return (
          <img
            src="/majalah/startegyTKA4.png"
            alt="Halaman 8"
            className="w-full h-full object-cover"
          />
        );
      }
    }

    if (currentPage === 9) {
      return (
        <div className="space-y-6 h-full overflow-y-auto pb-8">
          <h2 className="text-4xl font-serif font-bold text-foreground sticky top-0 bg-background py-4">
            Sumber Referensi
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-foreground">
            <div>
              <p className="font-semibold text-lg mb-3">Sumber Materi:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Modul TKA Matematika Zenius UTBK</li>
                <li>Buku "Strategi Sukses UTBK" – Tim Penulis Bimbel Prosus Inten</li>
                <li>Best practice tutor TKA dalam menganalisis pola soal penalaran kuantitatif</li>
              </ol>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-semibold text-lg mb-3">Referensi Berita:</p>
              <ul className="space-y-2">
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
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate(`/magazine/${id}`)}
            className="hover:bg-accent/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>

          <div className="text-center">
            <h2 className="font-serif font-bold text-foreground">
              {magazine.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Halaman {currentPage} dari {magazine.pages}
            </p>
          </div>

          <div className="w-20" /> {/* Spacer untuk balance */}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8 overflow-auto bg-muted/20">
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl" style={{ width: '600px', aspectRatio: '9/12' }}>
          <div className="h-full overflow-y-auto" style={{ padding: (currentPage >= 4 && currentPage <= 8) ? '0' : '24px 32px' }}>
            {renderPage()}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 z-40 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
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
              className="w-16 px-3 py-2 border border-border rounded text-center text-foreground bg-card"
            />
            <span className="text-muted-foreground">
              / {magazine.pages}
            </span>
          </div>

          <Button
            variant="outline"
            onClick={() => currentPage < magazine.pages && setCurrentPage(currentPage + 1)}
            disabled={currentPage === magazine.pages}
            className="hover:bg-accent/10"
          >
            Selanjutnya
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MagazineReader;
