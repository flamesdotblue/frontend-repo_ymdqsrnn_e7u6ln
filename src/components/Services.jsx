import { Hammer, Ruler, Paintbrush, Home } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Full Home Remodels',
    desc: 'Transform your entire space with cohesive design, structural updates, and premium finishes throughout.'
  },
  {
    icon: Ruler,
    title: 'Kitchen & Bath',
    desc: 'High-functioning, elegant kitchens and spa-like bathrooms designed for daily delight and durability.'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    desc: 'From material selection to lighting plans—balanced aesthetics that feel modern, warm, and timeless.'
  },
  {
    icon: Hammer,
    title: 'Additions & ADUs',
    desc: 'Seamless extensions and accessory dwelling units that add value, comfort, and flexibility to your home.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Design-led remodeling, built to last</h2>
          <p className="mt-3 text-neutral-300">We combine high-end design with precise execution so every detail feels intentional and every space functions beautifully.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs font-medium text-emerald-400/90 bg-emerald-500/10 border border-emerald-400/20 px-2 py-1 rounded-full">Premium</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-xs text-neutral-400">Design • Materials • Build • Project Management</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
