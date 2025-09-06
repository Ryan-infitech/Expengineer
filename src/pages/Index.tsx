import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhotoGrid from "../components/PhotoGrid";
import { Camera, Users, Award } from "lucide-react";

const Index = () => {
  const featuredPhotos = [
    {
      id: "1",
      src: "gallery/1.jpg",
      alt: "y",
    },
    {
      id: "2",
      src: "gallery/2.jpg",
      alt: "?",
    },
    {
      id: "3",
      src: "gallery/3.jpg",
      alt: "GG",
    },
    {
      id: "4",
      src: "gallery/4.jpg",
      alt: "Workspace modern",
    },
    {
      id: "5",
      src: "gallery/5.jpg",
      alt: "Produktivitas tinggi",
    },
    {
      id: "6",
      src: "gallery/6.jpg",
      alt: "Pencapaian tinggi",
    },
    {
      id: "7",
      src: "gallery/7.jpg",
      alt: "Dinamika pembelajaran",
    },
    {
      id: "8",
      src: "gallery/8.jpg",
      alt: "Visi jauh ke depan",
    },
    {
      id: "9",
      src: "gallery/9.jpg",
      alt: "",
    },
    {
      id: "10",
      src: "gallery/10.jpg",
      alt: "apa? ",
    },
    {
      id: "11",
      src: "gallery/11.jpg",
      alt: "",
    },
    {
      id: "12",
      src: "gallery/12.jpg",
      alt: "",
    },
    {
      id: "13",
      src: "gallery/13.jpg",
      alt: "",
    },
    {
      id: "14",
      src: "gallery/14.jpg",
      alt: "C",
    },
    {
      id: "15",
      src: "gallery/15.jpg",
      alt: "",
    },
    {
      id: "16",
      src: "gallery/16.jpg",
      alt: "",
    },
    {
      id: "17",
      src: "gallery/17.jpg",
      alt: "",
    },
    {
      id: "18",
      src: "gallery/18.jpg",
      alt: "",
    },
    {
      id: "19",
      src: "gallery/19.jpg",
      alt: "",
    },
    {
      id: "20",
      src: "gallery/20.jpg",
      alt: "",
    },
    {
      id: "21",
      src: "gallery/21.jpg",
      alt: "",
    },
    {
      id: "22",
      src: "gallery/22.jpg",
      alt: "",
    },
    {
      id: "23",
      src: "gallery/23.jpg",
      alt: "",
    },
    {
      id: "24",
      src: "gallery/24.jpg",
      alt: "",
    },
  ];

  const stats = [
    { icon: Users, label: "Anggota Aktif", value: "16+" },
    { icon: Camera, label: "Foto Terkumpul", value: "500+" },
    { icon: Award, label: "Semester Selesai", value: "4+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - adjusted top padding to account for smaller header */}
      <section className="pt-14 sm:pt-16 md:pt-24 pb-6 sm:pb-8 md:pb-12 px-3 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Expenginer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Mengabadikan perjalanan pembelajaran dan inovasi melalui lensa
            kreatif
          </p>

          {/* Stats section - improved for mobile with custom layout */}
          <div className="mt-6 sm:mt-8 md:mt-12 max-w-2xl mx-auto">
            {/* Mobile layout: 2 top, 1 center bottom */}
            <div className="grid grid-cols-2 gap-4 sm:hidden">
              {/* First row - first two items */}
              <div className="text-center p-2">
                <div className="flex justify-center mb-2">
                  {React.createElement(stats[0].icon, { className: "w-5 h-5 text-primary" })}
                </div>
                <div className="text-lg font-bold text-primary">
                  {stats[0].value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stats[0].label}
                </div>
              </div>
              <div className="text-center p-2">
                <div className="flex justify-center mb-2">
                  {React.createElement(stats[1].icon, { className: "w-5 h-5 text-primary" })}
                </div>
                <div className="text-lg font-bold text-primary">
                  {stats[1].value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stats[1].label}
                </div>
              </div>
            </div>
            {/* Second row - third item centered */}
            <div className="flex justify-center mt-4 sm:hidden">
              <div className="text-center p-2">
                <div className="flex justify-center mb-2">
                  {React.createElement(stats[2].icon, { className: "w-5 h-5 text-primary" })}
                </div>
                <div className="text-lg font-bold text-primary">
                  {stats[2].value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stats[2].label}
                </div>
              </div>
            </div>
            
            {/* Desktop layout: 3 columns */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery - improved spacing for mobile */}
      <section className="px-3 sm:px-6 pb-6 sm:pb-8 md:pb-12">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-5 sm:mb-8 md:mb-12">
            Galeri Unggulan
          </h2>
          <PhotoGrid photos={featuredPhotos} />
        </div>
      </section>

      {/* CTA Section - improved for mobile */}
      <section className="px-3 sm:px-6 py-8 sm:py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Bergabung dengan Komunitas Kami
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Eksplorasi, belajar, dan berkembang bersama dalam lingkungan yang
            mendukung kreativitas dan inovasi
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
            <button className="px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm sm:text-base">
              Lihat Anggota
            </button>
            <button className="px-4 sm:px-6 md:px-8 py-2 md:py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors text-sm sm:text-base">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
