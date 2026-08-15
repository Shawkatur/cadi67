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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="group hover:opacity-90 transition-opacity">
          <Logo variant="horizontal" showTagline={false} className="h-11 w-auto" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-md shadow-cta/20"
        >
          Get a Free Quote
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-border ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground text-lg py-1 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-cta text-white font-semibold text-center py-3 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
