export default function Projects() {
  const projects = [
    {
      title: 'Skylight Penthouse Kitchen',
      location: 'Downtown LA',
      image:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Serene Spa Bathroom',
      location: 'Brentwood',
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Warm Minimalist Living',
      location: 'West Hollywood',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-24 bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Recent transformations</h2>
            <p className="mt-3 text-neutral-300">A glimpse at the spaces we’ve elevated—where contemporary design meets everyday living.</p>
          </div>
          <a href="#contact" className="self-start sm:self-auto inline-flex rounded-full bg-white text-neutral-900 px-5 py-2.5 font-medium hover:bg-neutral-200 transition">Start Your Project</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-neutral-400">{p.location}</p>
                </div>
                <span className="text-xs text-neutral-300 border border-white/15 px-2 py-1 rounded-full">Complete Remodel</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
