import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Activity,
  CheckCircle2,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FACILITIES } from "@/data/hospitalData";

export const metadata: Metadata = {
  title: "Facilities & Infrastructure | Modular OT & Inpatient Care | Bhagwati Hospital Roorkee",
  description:
    "Explore the clinical infrastructure at Bhagwati Hospital Roorkee: Advanced Modular Operation Theatres, Maternity Suites, Deluxe Inpatient Rooms, and 24/7 Emergency Care under NABH safety standards.",
  keywords: [
    "Hospital Facilities Roorkee",
    "Modular Operation Theatre Roorkee",
    "Labor Room Roorkee",
    "Inpatient Hospital Rooms Roorkee",
    "24 Hours Emergency Hospital Roorkee",
    "NABH Hospital Infrastructure Roorkee",
  ],
  openGraph: {
    title: "Hospital Facilities & Infrastructure | Bhagwati Hospital Roorkee",
    description:
      "Modern surgical theatres, comfortable inpatient accommodations, and 24/7 emergency response in Roorkee.",
    url: "https://bhagwati-hospital.vercel.app/facilities",
  },
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. PAGE HEADER */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-400 font-semibold">Facilities &amp; Infrastructure</span>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30 mb-3">
            Sterile &amp; Patient-Centric Environment
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Advanced Clinical Infrastructure <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
              Built for Safety &amp; Healing
            </span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            At Bhagwati Hospital, patient well-being is safeguarded by strict infection control, sterile surgical suites, hygienic inpatient rooms, and 24-hour emergency triage.
          </p>
        </div>
      </section>

      {/* 2. DETAILED FACILITIES GRID */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {FACILITIES.map((facility, index) => (
            <div
              key={facility.id}
              id={facility.id}
              className={`p-8 sm:p-12 rounded-3xl border border-slate-200 transition-all ${
                index % 2 === 0 ? "bg-slate-50" : "bg-white shadow-sm"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Preview */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-md border border-slate-300 bg-slate-900 h-64 sm:h-80 w-full relative">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      width={500}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Facility Details */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    NABH Quality Benchmark
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {facility.name}
                  </h2>
                  <p className="text-base text-red-700 font-semibold italic">
                    {facility.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Infrastructure Highlights &amp; Equipment
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {facility.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INFECTION CONTROL & STERILITY STANDARDS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Hospital Safety System
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Uncompromising Standards of Sterility
            </h2>
            <p className="text-slate-400 text-sm">
              Under our NABH Pre-Accredited protocols, we execute rigorous multi-tier disinfection and infection containment across all hospital wings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Autoclaving &amp; Instrument Sterilization</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hospital instruments undergo validated high-pressure steam autoclaving and chemical sterilization cycles before every surgical intervention.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Biomedical Waste Segregation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict adherence to national bio-medical waste regulations with color-coded disposal containers to eliminate cross-contamination hazards.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="p-3 w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">24/7 Nursing Supervision</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trained nursing professionals monitor post-operative vitals, administer medications, and assist new mothers through every recovery hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISITATION & INPATIENT INFO */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Have Questions About Hospital Admission or Facilities?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Our administration desk can guide you regarding bed availability, surgery booking, and patient admission procedures.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919627408441"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception: 9627408441</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Location &amp; Visiting Guidelines</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
