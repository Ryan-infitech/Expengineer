import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Users, Lightbulb, Camera } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Fokus pada Kualitas",
      description:
        "Mengutamakan kualitas dalam setiap pembelajaran dan hasil karya yang dihasilkan.",
    },
    {
      icon: Users,
      title: "Kolaborasi",
      description:
        "Membangun sinergi melalui kerja sama tim yang solid dan saling mendukung.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description:
        "Mendorong pemikiran kreatif dan solusi inovatif dalam setiap tantangan.",
    },
    {
      icon: Camera,
      title: "Dokumentasi",
      description:
        "Mengabadikan setiap momen berharga dalam perjalanan pembelajaran.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="px-6 py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang Expenginer
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expenginer adalah komunitas pembelajar yang berdedikasi untuk
                mengeksplorasi teknologi, engineering, dan inovasi melalui
                pendekatan kreatif dan kolaboratif.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Cerita Kami
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Perjalanan Dimulai</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Expenginer lahir dari semangat sekelompok mahasiswa yang
                    ingin menciptakan ruang belajar yang lebih dinamis dan
                    engaging. Kami percaya bahwa pembelajaran terbaik terjadi
                    ketika teori bertemu dengan praktik nyata.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dengan fokus pada engineering dan teknologi, kami
                    mengembangkan berbagai proyek yang tidak hanya mengasah
                    kemampuan teknis, tetapi juga soft skills yang essential
                    untuk karir masa depan.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="/images/about/1.jpg"
                    alt="Tim Expenginer sedang berdiskusi"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nilai-Nilai Kami
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-border hover:bg-muted/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Misi Kami</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Menciptakan ekosistem pembelajaran yang mendorong mahasiswa
                untuk berpikir kritis, berkolaborasi efektif, dan menghasilkan
                solusi inovatif untuk tantangan dunia nyata.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Melalui dokumentasi visual dan sharing knowledge, kami membangun
                legacy pembelajaran yang dapat menginspirasi generasi
                selanjutnya.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
