import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Work Samples', href: '#work-samples' },
    { label: 'Tools', href: '#tools' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#DDE2E8] transition-colors">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone: Clean single text wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-[#14315C] hover:text-[#2A64B0] transition-colors whitespace-nowrap"
        >
          ANGELICA MAE ESTEBAN
        </a>

        {/* Desktop Nav Zone: Clean unboxed text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5B6370]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#14315C] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Zone */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#2A64B0] hover:bg-[#14315C] transition-colors rounded-sm shadow-sm"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#14315C] hover:bg-[#F4F6F9] rounded-sm transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DDE2E8] bg-white px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#5B6370] hover:text-[#14315C] py-1 border-b border-[#DDE2E8]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#2A64B0] hover:bg-[#14315C] transition-colors rounded-sm"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
