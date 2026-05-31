export default function Header() {
  return (
    <header
      id="judul"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-space-darker/70 to-space-darker" />

      {/* Glow effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-space-accent/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-space-cyan/10 blur-3xl rounded-full" />

      {/* Tiny stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full" />
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-space-pink rounded-full" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-space-cyan rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-space-light text-sm font-grotesk">
          <span className="w-2 h-2 rounded-full bg-space-pink animate-pulse" />
          Exploring the Cosmic Neighborhood
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-orbitron font-black tracking-widest text-white mb-6 leading-none">
          ORBITS
        </h1>

        {/* Gradient subtitle */}
        <p className="text-2xl md:text-4xl font-grotesk font-light bg-gradient-to-r from-space-accent via-space-pink to-space-cyan bg-clip-text text-transparent mb-8">
          A Journey Through the Solar System
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-space-light/80 leading-relaxed font-grotesk mb-10">
          Discover the eight wandering worlds orbiting our Sun, from scorched
          Mercury to icy Neptune, inside an interactive cosmic atlas.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#planets"
            className="px-8 py-4 rounded-2xl bg-space-accent hover:bg-space-pink transition-all duration-300 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:scale-105"
          >
            Explore Planets
          </a>

          <a
            href="#about"
            className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-space-light"
          >
            Learn More
          </a>
        </div>

        {/* Creator card */}
        <div className="mt-16 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-space-accent to-space-pink flex items-center justify-center font-bold text-white">
            E
          </div>

          <div className="text-left">
            <p className="text-space-light/60 text-sm font-grotesk">
              Created by
            </p>
            <p className="text-space-light font-semibold font-orbitron tracking-wide">
              Evan Nizar Destian
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-space-darker to-transparent" />
    </header>
  );
}
