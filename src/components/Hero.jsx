import Spline from '@splinetool/react-spline';
import { Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full" aria-label="Luxury modern living interior hero">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white border border-white/20">
          <Star className="h-3.5 w-3.5 text-amber-400" /> Top-rated Remodeling Experts
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          Elevate Your Home with Modern, Luxury Remodeling
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-200 text-base sm:text-lg">
          Stunning interiors, meticulous craftsmanship, and an effortless experience from concept to completion.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 font-medium shadow-lg hover:bg-neutral-200 transition"
          >
            <Phone className="h-4 w-4" /> Book a Free Consultation
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900/70 border border-white/20 px-6 py-3 font-medium text-white hover:bg-neutral-800/80 transition"
          >
            View Projects
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-left w-full max-w-3xl">
          {[
            { label: 'Years Experience', value: '15+' },
            { label: 'Projects Delivered', value: '350+' },
            { label: 'Avg. Rating', value: '4.9/5' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-4">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-xs text-neutral-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
