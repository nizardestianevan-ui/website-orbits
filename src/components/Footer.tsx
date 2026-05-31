export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden mt-24 border-t border-white/10"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker/95 via-black/80 to-black/95" />

      {/* Cosmic glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-space-accent/15 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-space-cyan/10 blur-3xl rounded-full" />

      {/* Tiny stars */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-16 left-16 w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-28 right-32 w-2 h-2 bg-space-pink rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-white rounded-full" />
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-space-cyan rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Top label */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-space-pink animate-pulse" />

          <span className="text-space-light/70 text-sm tracking-widest uppercase font-grotesk">
            End of Transmission
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-black font-orbitron text-white tracking-wider mb-6">
          THANK YOU,
          <br />
          SPACE TRAVELER
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-space-light/75 leading-relaxed font-grotesk mb-12">
          The Solar System is only the first chapter of a much larger cosmic
          story. Beyond Neptune lies an ocean of stars waiting to be explored.
        </p>

        {/* Glass Card */}
        <div className="relative overflow-hidden max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          {/* Gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-space-accent/10 via-transparent to-space-pink/10" />

          <div className="relative z-10">
            <p className="text-space-light/60 uppercase tracking-[0.3em] text-xs mb-3 font-grotesk">
              Created By
            </p>

            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Evan Nizar Destian
            </h3>

            <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-space-pink to-transparent mb-4" />

            <p className="text-space-light/60 text-sm font-grotesk">
              © {currentYear} Orbits • A Guide to the Solar System
            </p>
          </div>
        </div>

        {/* Decorative orbit dots */}
        <div className="mt-12 flex justify-center items-center gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className={`rounded-full transition-all duration-500 hover:scale-150
              ${
                item === 3
                  ? "w-4 h-4 bg-space-accent shadow-[0_0_20px_rgba(139,92,246,0.7)]"
                  : "w-2 h-2 bg-space-pink/70"
              }`}
            />
          ))}
        </div>

        {/* Bottom quote */}
        <p className="mt-12 text-space-light/40 italic font-grotesk text-sm tracking-wide">
          “Ad astra per aspera.”
        </p>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-space-accent/50 to-transparent" />
    </footer>
  );
}
