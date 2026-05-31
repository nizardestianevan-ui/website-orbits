import { useState } from "react";

interface NavigationProps {
  onNavigate: (id: string) => void;
  activeSection: string;
}

const planets = [
  "Merkurius",
  "Venus",
  "Bumi",
  "Mars",
  "Jupiter",
  "Saturnus",
  "Uranus",
  "Neptunus",
];

export default function Navigation({
  onNavigate,
  activeSection,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getPlanetId = (name: string) => name.toLowerCase();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-space-darker/70 backdrop-blur-xl">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-space-cyan/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-space-accent to-space-pink flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.45)]">
              <span className="text-white font-bold font-orbitron">O</span>
            </div>

            <div>
              <h2 className="text-space-light font-orbitron font-bold tracking-widest text-lg">
                ORBITS
              </h2>

              <p className="text-xs text-space-light/50 font-grotesk">
                Solar Navigation System
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            {planets.map((planet) => {
              const isActive = activeSection === getPlanetId(planet);

              return (
                <li key={planet}>
                  <button
                    onClick={() => onNavigate(getPlanetId(planet))}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden
                    ${
                      isActive
                        ? "text-white bg-white/10 border border-space-accent/40 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                        : "text-space-light/70 hover:text-space-cyan hover:bg-white/5"
                    }`}
                  >
                    {/* Active glow */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-space-accent/20 to-space-pink/20" />
                    )}

                    <span className="relative z-10 font-grotesk">{planet}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-space-light hover:text-space-cyan transition-all duration-300"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <ul className="grid grid-cols-2 gap-3">
              {planets.map((planet) => {
                const isActive = activeSection === getPlanetId(planet);

                return (
                  <li key={planet}>
                    <button
                      onClick={() => {
                        onNavigate(getPlanetId(planet));
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-space-accent to-space-pink text-white shadow-lg"
                          : "bg-white/5 text-space-light/70 hover:bg-white/10 hover:text-space-cyan"
                      }`}
                    >
                      {planet}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
