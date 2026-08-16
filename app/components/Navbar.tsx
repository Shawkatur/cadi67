"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Mobile: logo + CTA + hamburger. Desktop: full nav. */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group hover:opacity-90 transition-opacity min-h-0 min-w-0">
          <Logo variant="horizontal" showTagline={false} className="h-9 sm:h-11 w-auto" />
        </a>

        {/* Desktop Nav — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA — always visible, even on mobile */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-cta hover:bg-cta-dark text-white font-semibold text-sm px-4 py-2.5 sm:px-5 rounded-lg transition-all duration-200 shadow-md shadow-cta/20 min-h-[44px]"
          >
            <span className="hidden sm:inline">Get a Free Quote</span>
            <span className="sm:hidden">Free Quote</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 min-h-[44px] min-w-[44px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu — fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-white transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground text-lg font-medium py-3 px-2 rounded-lg hover:bg-surface transition-colors min-h-[48px] flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 bg-cta text-white font-semibold text-center py-4 rounded-lg text-lg min-h-[52px] flex items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
