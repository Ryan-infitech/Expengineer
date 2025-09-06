import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Github, Linkedin, Mail } from "lucide-react";

const People = () => {
  const teamMembers = [
    {
      id: 1,
      name: "?",
      role: "hooh",
      image: "team/",
      description: "Passionate about software engineering and team leadership.",
      social: {
        github: "https://github.com/Ryan-infitech",
        linkedin: "https://www.linkedin.com/in/rian-septiawan/",
        email: "?",
      },
    }
  ];

  const achievements = [
    { label: "Tim Aktif", value: "16+" },
    { label: "Smester Completed", value: "4+" },
    { label: "Skill Dikuasai", value: "20+" },
    { label: "Workshop Diselenggarakan", value: "8+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="px-6 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tim Expenginer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bertemu dengan individu-individu luar biasa yang membentuk
              komunitas Expenginer. Setiap anggota membawa keunikan dan
              expertise yang berkontribusi pada kesuksesan bersama.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="px-6 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Anggota Tim
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative mb-6">
                      <img
                        src={`/images/${member.image}`}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {member.description}
                      </p>

                      <div className="flex justify-center gap-4">
                        <a
                          href={member.social.github}
                          className="p-2 rounded-lg hover:bg-muted transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="p-2 rounded-lg hover:bg-muted transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 rounded-lg hover:bg-muted transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Bergabung dengan Kami</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kami selalu terbuka untuk talenta-talenta baru yang ingin
              berkontribusi dan berkembang bersama komunitas Expenginer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Daftar Sekarang
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                Pelajari Persyaratan
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default People;
