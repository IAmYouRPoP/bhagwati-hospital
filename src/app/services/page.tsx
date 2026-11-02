import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Zap,
  Heart,
  ShieldAlert,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { SPECIALTIES } from "@/data/hospitalData";

export const metadata: Metadata = {
  title: "Specialties & Surgical Care | Laparoscopic, Laser & Maternity | Bhagwati Hospital Roorkee",
  description:
    "Comprehensive surgical and maternity treatments at Bhagwati Hospital Roorkee. Minimally invasive Laparoscopic Surgery, Painless Laser Proctology, and Women's Healthcare under senior specialists.",
  keywords: [
    "Laparoscopic Surgery Roorkee",
    "Gallbladder stone surgery Roorkee",
    "Hernia surgery Roorkee",
    "Appendix surgery Roorkee",
    "Laser piles treatment Roorkee",
    "Laser fistula treatment Roorkee",
    "Maternity hospital Roorkee",
    "Normal delivery Roorkee",
    "Cesarean section Roorkee",
    "Dr Sanjeev Agarwal Surgeon",
    "Dr Manisha Agarwal Gynecologist",
  ],
  openGraph: {
    title: "Specialties & Surgeries | Bhagwati Hospital Roorkee",
    description:
      "Advanced Laparoscopic Surgery, painless Laser Surgery for Piles/Fistula, and comprehensive Maternity care in Roorkee.",
    url: "https://bhagwati-hospital.vercel.app/services",
  },
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-8 h-8 text-blue-600" />;
      case "Zap":
        return <Zap className="w-8 h-8 text-red-600" />;
      case "Heart":
        return <Heart className="w-8 h-8 text-emerald-600" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-8 h-8 text-amber-600" />;
      default:
        return <Activity className="w-8 h-8 text-blue-600" />;
    }
  };

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
            <span className="text-red-400 font-semibold">Specialties &amp; Surgeries</span>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-red-600/30 text-red-300 rounded-full border border-red-500/30 mb-3">
            Clinical Centers of Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Specialized Surgical Care &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
              Maternal Health in Roorkee
            </span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Delivering precision healthcare through advanced <strong>minimally invasive laparoscopic surgery</strong>, cutting-edge <strong>painless laser treatments</strong>, and compassionate <strong>obstetrics and gynaecology</strong>.
          </p>
        </div>
      </section>

      {/* 2. SPECIALTIES DETAILED SECTIONS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SPECIALTIES.map((spec, index) => (
            <div
              key={spec.id}
              id={spec.id}
              className={`p-8 sm:p-10 rounded-3xl border border-slate-200 transition-all ${
                index % 2 === 0 ? "bg-slate-50" : "bg-white shadow-sm"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200">
                      {getIcon(spec.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                        {spec.doctorInCharge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                        {spec.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    {spec.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Procedures List */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Conditions Treated &amp; Surgeries Performed
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {spec.procedures.map((proc, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/80 text-xs sm:text-sm text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href="tel:+919627408441"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Consult Doctor for {spec.title}</span>
                    </a>
                  </div>
                </div>

                {/* Right Clinical Highlights Card */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                      Patient Benefits &amp; Technology
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-2">Key Clinical Advantages</h4>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {spec.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Strict NABH Sterility Standard</span>
                    </div>
                    <div>
                      Performed in our dedicated modular surgical theatre adhering to zero-compromise sterilization.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SURGERY PREPARATION & PATIENT GUIDELINES */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Planning Your Surgical Consultation
            </h2>
            <p className="text-slate-400 text-sm">
              Important information to help you prepare smoothly for OPD consultation and surgical procedures at Bhagwati Hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-base text-white">Bring Prior Records</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Please bring previous ultrasound reports, blood test results, prescriptions, and past medical history so our doctors can formulate an accurate diagnosis.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-base text-white">Clear Evaluation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dr. Sanjeev Agarwal and Dr. Manisha Agarwal provide honest clinical counseling, explaining both surgical and non-surgical options before recommending procedures.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-base text-white">Pre-Op Fasting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                For scheduled laparoscopic and laser surgeries, our staff will provide exact fasting (nil by mouth) instructions the evening prior to the procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY BANNER */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">
            Emergency Surgical or Obstetric Care Required?
          </h2>
          <p className="text-red-100 text-sm max-w-xl mx-auto">
            Our casualty team in Chaw Mandi, Roorkee is prepared 24 hours a day for immediate surgical triage and obstetric emergencies.
          </p>
          <div className="pt-2">
            <a
              href="tel:+919627408441"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-red-700 hover:bg-slate-100 font-black rounded-xl text-base shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 text-red-600" />
              <span>Call Emergency Hotline: +91 9627408441</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
