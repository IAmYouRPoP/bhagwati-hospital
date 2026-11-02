"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Clock, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Specialties & Surgeries" },
    { href: "/doctors", label: "Our Doctors" },
    { href: "/facilities", label: "Facilities" },
    { href: "/contact", label: "Contact & Location" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-white">
      {/* Top Emergency & Info Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Emergency Hotline */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Emergency Care</span>
            </div>
            <a
              href="tel:+919627408441"
              className="flex items-center gap-1 text-white hover:text-red-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>+91 9627408441</span>
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <a
              href="tel:+919557966896"
              className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 9557966896</span>
            </a>
          </div>

          {/* Location & Timings */}
          <div className="hidden lg:flex items-center gap-4 text-slate-300 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>OPD: 10:00 AM – 2:00 PM &bull; Evening: 6:00 PM – 8:00 PM</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>325, Chaw Mandi, Roorkee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Hospital Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/branding/logo.svg"
                alt="Bhagwati Hospital Logo"
                width={48}
                height={48}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                  BHAGWATI HOSPITAL
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded border border-emerald-300">
                  NABH
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-red-600 italic">Safe Surgery Saves Life</span>
                <span>•</span>
                <span>Estd. 1994</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 border-b-2 ${
                    isActive
                      ? "text-blue-900 border-red-600"
                      : "text-slate-600 border-transparent hover:text-blue-900 hover:border-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919627408441"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-all transform active:scale-95"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Call Hospital</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="p-3 bg-slate-50 rounded-lg mb-2 border border-slate-100">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              NABH Pre-Accredited Healthcare
            </div>
            <div className="text-sm font-bold text-slate-800">
              Dr. Sanjeev Agarwal &bull; Dr. Manisha Agarwal
            </div>
            <div className="text-xs text-slate-600 mt-1">
              325, Chaw Mandi, Roorkee, Uttarakhand
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-900 font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-2">
            <a
              href="tel:+919627408441"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 text-white font-bold rounded-lg text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency Call: 9627408441</span>
            </a>
            <a
              href="tel:+919557966896"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 text-slate-800 font-semibold rounded-lg text-sm hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Reception: 9557966896</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
