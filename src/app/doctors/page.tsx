import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Phone,
  CheckCircle2,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { DOCTORS } from "@/data/hospitalData";

export const metadata: Metadata = {
  title: "Our Senior Doctors | Dr. Sanjeev Agarwal & Dr. Manisha Agarwal | Bhagwati Hospital Roorkee",
  description:
    "Meet our chief medical specialists at Bhagwati Hospital Roorkee: Dr. Sanjeev Agarwal (M.S., Laparoscopic & Laser Surgeon, Reg. 913) and Dr. Manisha Agarwal (D.G.O., Gynaecologist & Obstetrician, Reg. 914).",
  keywords: [
    "Dr Sanjeev Agarwal Roorkee",
    "Dr Sanjeev Agarwal Surgeon",
    "Dr Manisha Agarwal Roorkee",
    "Dr Manisha Agarwal Gynecologist",
    "Best Surgeon in Roorkee",
    "Best Gynecologist in Roorkee",
    "Laparoscopic Surgeon Roorkee Haridwar",
    "Bhagwati Hospital Doctors",
    "Doctor OPD Timings Bhagwati Hospital",
  ],
  openGraph: {
    title: "Our Senior Doctors | Bhagwati Hospital Roorkee",
    description:
      "Consult Dr. Sanjeev Agarwal (Surgeon) & Dr. Manisha Agarwal (Gynecologist) at Bhagwati Hospital, Chaw Mandi, Roorkee.",
    url: "https://bhagwati-hospital.vercel.app/doctors",
  },
};

export default function DoctorsPage() {
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
            <span className="text-red-400 font-semibold">Our Doctors</span>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 mb-3">
            Verified Medical Practitioners
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Consult Our Senior Specialists <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
              In Roorkee, Uttarakhand
            </span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Led by <strong>Dr. Sanjeev Agarwal</strong> and <strong>Dr. Manisha Agarwal</strong>, bringing over 30 years of surgical expertise, clinical integrity, and devoted patient care to the people of Roorkee.
          </p>
        </div>
      </section>

      {/* 2. DOCTOR PROFILES */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {DOCTORS.map((doc, idx) => (
            <div
              key={doc.id}
              id={doc.id}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Doctor Photo & Quick Details */}
                <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                  <div className="w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden bg-white border-2 border-slate-300 shadow-md relative">
                    <Image
                      src={doc.image}
                      alt={`${doc.name} - ${doc.title}`}
                      width={256}
                      height={288}
                      priority={idx === 0}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1 w-full">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-red-700 bg-red-100 rounded-full">
                      Medical Reg: {doc.registrationNumber}
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 pt-1">{doc.name}</h2>
                    <p className="text-sm font-bold text-blue-900">{doc.qualifications}</p>
                    <p className="text-xs text-slate-600 font-medium">{doc.department}</p>
                  </div>

                  {/* Schedule Card */}
                  <div className="w-full bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2 text-left">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>Consultation Schedule</span>
                    </div>
                    <div className="text-slate-700 font-medium">
                      {doc.opdTimings}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Sunday: By Emergency / Appointment
                    </div>
                  </div>

                  <a
                    href="tel:+919627408441"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call for Consultation</span>
                  </a>
                </div>

                {/* Doctor Bio & Expertise */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                      {doc.experience}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">
                      Specialization: {doc.specialization}
                    </p>
                  </div>

                  <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                    <p>{doc.bio}</p>
                    <p>
                      Dr. {doc.name.replace("Dr. ", "")} has been pivotal in elevating clinical standards at Bhagwati Hospital since 1994, championing NABH patient safety protocols, rigorous infection control, and evidence-based medicine.
                    </p>
                  </div>

                  {/* Clinical Expertise Grid */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Core Clinical Focus &amp; Surgical Expertise
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {doc.expertise.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Patient Reassurance */}
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-900 leading-relaxed">
                      <strong>Transparent Clinical Counseling:</strong> Consultation at Bhagwati Hospital begins with thorough diagnostic assessment. Surgical interventions are recommended only when medically indicated and beneficial for the patient.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW TO CONSULT */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Scheduling Your Doctor Consultation
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              OPD consultations with Dr. Sanjeev Agarwal and Dr. Manisha Agarwal operate on walk-in token allocation as well as pre-booked telephone appointments. For priority slots and to avoid peak waiting times, we advise contacting reception before visiting.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919627408441"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Appointment Desk: 9627408441</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-xl text-sm border border-slate-300 transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Hospital Location &amp; Directions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
