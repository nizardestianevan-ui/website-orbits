import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PlanetSection from "./components/PlanetSection";
import Footer from "./components/Footer";
import { planets } from "./data/planets";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = planets.map((p) => p.id);

      for (const id of sections) {
        const element = document.getElementById(id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-space-darker text-space-light">
      {/* Cosmic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-space-darker to-black" />

        {/* Nebula Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-space-accent/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-space-cyan/10 blur-3xl rounded-full" />

        {/* Star field */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Floating Audio Player */}
      <div className="fixed top-24 right-6 z-50 hidden xl:block">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-4">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-accent/10 to-space-pink/10" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-space-accent to-space-pink shadow-[0_0_25px_rgba(139,92,246,0.45)]">
              <span className="text-white text-lg">🎵</span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-space-light/50 font-grotesk mb-2">
                Space Ambience
              </p>

              <audio
                controls
                loop
                className="w-56"
                style={{
                  filter: "brightness(1.15) contrast(1.05)",
                }}
              >
                <source src="/solar-system.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Video Section */}
        <section id="video" className="relative py-28 px-6">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-space-pink/10 blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <div className="w-2 h-2 rounded-full bg-space-cyan animate-pulse" />

                <span className="text-space-light/70 text-sm tracking-widest uppercase">
                  Multimedia Observatory
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-orbitron font-black text-white mb-6 tracking-wide">
                SOLAR SYSTEM
                <br />
                OVERVIEW
              </h2>

              <p className="max-w-3xl mx-auto text-lg text-space-light/70 font-grotesk leading-relaxed">
                Experience a cinematic journey through the planets, moons, and
                cosmic wonders orbiting our Sun.
              </p>
            </div>

            {/* Video Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              {/* YouTube */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-accent/10 to-space-pink/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      ▶
                    </div>

                    <div>
                      <h3 className="text-2xl font-orbitron text-white">
                        NASA Documentary
                      </h3>

                      <p className="text-space-light/50 text-sm">
                        National Geographic
                      </p>
                    </div>
                  </div>

                  <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/8kzsMfJlCGI"
                      title="Solar System Overview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Local Video */}
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-cyan/10 to-space-accent/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-space-cyan/20 flex items-center justify-center">
                      🎬
                    </div>

                    <div>
                      <h3 className="text-2xl font-orbitron text-white">
                        Local Documentary
                      </h3>

                      <p className="text-space-light/50 text-sm">
                        Offline Exploration
                      </p>
                    </div>
                  </div>

                  <video
                    controls
                    loop
                    className="w-full rounded-2xl border border-white/10 shadow-2xl"
                    style={{ maxHeight: "500px" }}
                  >
                    <source src="/solar-system.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planet Sections */}
        <section className="relative z-10">
          {planets.map((planet, index) => (
            <PlanetSection
              key={planet.id}
              planet={planet}
              isEven={index % 2 === 0}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      {scrollPosition > 300 && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="group fixed bottom-8 right-8 z-50"
          aria-label="Scroll to top"
        >
          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-110">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-space-accent to-space-pink opacity-80 group-hover:opacity-100" />

            <span className="relative z-10 text-white text-xl font-bold">
              ↑
            </span>
          </div>
        </button>
      )}
    </div>
  );
}

export default App;
