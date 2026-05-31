import type { Planet } from "../data/planets";

interface PlanetSectionProps {
  planet: Planet;
  isEven: boolean;
}

export default function PlanetSection({ planet, isEven }: PlanetSectionProps) {
  return (
    <section
      id={planet.id}
      className="relative overflow-hidden py-24 px-6 border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-space-accent/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-space-cyan/10 blur-3xl rounded-full" />
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
        ${
          !isEven
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        {/* Text Content */}
        <div>
          {/* Planet Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-space-pink animate-pulse" />

            <span className="text-space-light/70 text-sm tracking-widest uppercase font-grotesk">
              Planetary Archive
            </span>
          </div>

          {/* Planet Title */}
          <h2 className="text-5xl md:text-6xl font-black font-orbitron text-white mb-6 tracking-wide">
            {planet.name}
          </h2>

          {/* Description */}
          <p className="text-space-light/75 text-lg leading-relaxed font-grotesk max-w-2xl mb-10">
            {planet.description}
          </p>

          {/* Fact Panel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-space-accent/10 to-space-pink/5 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-space-accent font-orbitron mb-6">
                Key Facts
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {planet.facts.map((fact, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 hover:border-space-accent/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="text-space-pink text-xs uppercase tracking-widest mb-2 font-semibold">
                      {fact.label}
                    </p>

                    <p className="text-space-light text-base font-medium">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          {planet.additionalInfo && (
            <div className="mt-8 relative overflow-hidden rounded-2xl border border-space-cyan/20 bg-space-cyan/5 p-6 backdrop-blur-md">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-space-cyan/60 to-transparent" />

              <p className="text-space-light/80 italic leading-relaxed font-grotesk">
                {planet.additionalInfo}
              </p>
            </div>
          )}
        </div>

        {/* Planet Image */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Planet Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-space-pink/30 via-space-accent/20 to-space-cyan/30 rounded-full blur-3xl scale-110 opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

            {/* Orbit Ring */}
            <div className="absolute inset-0 border border-white/10 rounded-full scale-125 animate-pulse" />

            {/* Image */}
            <img
              src={planet.image}
              alt={planet.name}
              className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_0_45px_rgba(139,92,246,0.35)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />

            {/* Floating particles */}
            <div className="absolute top-10 left-0 w-2 h-2 bg-space-pink rounded-full animate-ping" />
            <div className="absolute bottom-10 right-6 w-2 h-2 bg-space-cyan rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
