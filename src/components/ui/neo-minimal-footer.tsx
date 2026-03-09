'use client'

import React from 'react'
import { Github, Twitter, Linkedin, ArrowRight, Hexagon } from 'lucide-react'

const PRODUCT_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Enterprise', href: '#' },
]

const COMPANY_LINKS = [
  { label: 'About', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Blog', href: '#' },
]

const RESOURCES_LINKS = [
  { label: 'Documentation', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Status', href: '#' },
  { label: 'Changelog', href: '#' },
]

export function NeoMinimalFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="max-w-7xl mx-auto bg-card/20 border-t rounded-t-2xl border-white/10 flex flex-wrap pt-16 pb-10 relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_40%,transparent_70%)]"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2.5 w-fit group">
              <Hexagon className="text-violet-500 fill-violet-500/20 group-hover:fill-violet-500/30 transition-colors" size={26} aria-hidden />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Picolearn
              </h2>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Building the future of AI-driven sales intelligence for high-performing teams.
            </p>
            <form
              className="flex items-center gap-2 mt-1"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email for product updates
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Get product updates..."
                className="w-full max-w-xs bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-neutral-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                aria-label="Email for product updates"
              />
              <button
                type="submit"
                className="flex-shrink-0 p-3 bg-violet-600 rounded-lg text-white hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Link columns */}
          <div className="col-span-6 md:col-span-2 flex flex-col gap-5">
            <h4 className="text-[11px] font-semibold text-foreground uppercase tracking-widest">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-neutral-400 hover:text-violet-400 transition-colors flex items-center gap-2.5 group w-fit py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-violet-400 group-hover:w-2 group-hover:h-2 transition-all duration-200" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2 flex flex-col gap-5">
            <h4 className="text-[11px] font-semibold text-foreground uppercase tracking-widest">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-neutral-400 hover:text-violet-400 transition-colors flex items-center gap-2.5 group w-fit py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-violet-400 group-hover:w-2 group-hover:h-2 transition-all duration-200" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2 flex flex-col gap-5">
            <h4 className="text-[11px] font-semibold text-foreground uppercase tracking-widest">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {RESOURCES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-neutral-400 hover:text-violet-400 transition-colors flex items-center gap-2.5 group w-fit py-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-violet-400 group-hover:w-2 group-hover:h-2 transition-all duration-200" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-sm text-neutral-500">
            © {year} Picolearn AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider mr-3 hidden sm:inline">
                Follow us
              </span>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="p-2 -m-2 text-neutral-500 hover:text-foreground transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 -m-2 text-neutral-500 hover:text-foreground transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 -m-2 text-neutral-500 hover:text-foreground transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25" role="status" aria-label="System status">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
              <span className="text-xs font-medium text-emerald-400 tracking-wider">
                All systems normal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
