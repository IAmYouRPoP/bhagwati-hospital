import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Heart,
  Zap,
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Bed,
  Sparkles,
} from "lucide-react";
import { HOSPITAL_INFO, DOCTORS, FACILITIES } from "@/data/hospitalData";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badges Bar */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-slate-800/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 text-xs sm:text-sm">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  NABH Pre-Accredited
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 font-medium">Estd. 1994 (30+ Years Trust)</span>
                <span className="text-slate-500">•</span>
                <span className="text-red-400 font-semibold italic">Safe Surgery Saves Life</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Compassionate Healthcare &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
                  Precision Surgery
                </span>{" "}
                in Roorkee
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Welcome to <strong>Bhagwati Hospital</strong>. Serving Roorkee and Haridwar district with advanced minimally invasive <strong>Laparoscopic Surgery</strong>, modern <strong>Laser Treatments</strong>, and dedicated <strong>Maternity &amp; Women’s Health</strong>.
              </p>

              {/* Key Highlights Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Senior Specialists with 30+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>NABH Patient Safety &amp; Sterile OT Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Stitchless &amp; Painless Laser Procedures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7 Emergency &amp; Casualty Services</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="tel:+919627408441"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-base shadow-lg shadow-red-900/30 transition-all transform active:scale-95"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>Emergency: +91 9627408441</span>
                </a>
                <Link
                  href="/doctors"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-base border border-slate-700 transition-all"
                >
                  <UserCheck className="w-5 h-5 text-blue-400" />
                  <span>Meet Our Doctors</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold rounded-xl text-base border border-emerald-500/30 transition-all"
                >
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>Hospital Directions</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Card / Visual */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">OPD &amp; Emergency Desk</h3>
                    <p className="text-xs text-slate-400">Bhagwati Hospitals Pvt. Ltd.</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Open Today
                  </span>
                </div>

                {/* Doctor 1 snippet */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-blue-900/40 border border-blue-700/50">
                    <Image
                      src="/images/doctors/dr-sanjeev-agarwal.svg"
                      alt="Dr. Sanjeev Agarwal Surgeon Roorkee"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">Dr. Sanjeev Agarwal</h4>
                    <p className="text-xs text-slate-300 font-medium">M.B.B.S, M.S. (Lko.) &bull; Reg: 913</p>
                    <p className="text-xs text-emerald-400 mt-0.5">Laparoscopic &amp; Laser Surgeon</p>
                  </div>
                </div>

                {/* Doctor 2 snippet */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-emerald-900/40 border border-emerald-700/50">
                    <Image
                      src="/images/doctors/dr-manisha-agarwal.svg"
                      alt="Dr. Manisha Agarwal Gynecologist Roorkee"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">Dr. Manisha Agarwal</h4>
                    <p className="text-xs text-slate-300 font-medium">M.B.B.S, D.G.O. (Lko.) &bull; Reg: 914</p>
                    <p className="text-xs text-emerald-400 mt-0.5">Gynaecologist &amp; Obstetrician</p>
                  </div>
                </div>

                {/* Quick Schedule */}
                <div className="bg-slate-900/80 rounded-xl p-4 text-xs space-y-2 border border-slate-800">
                  <div className="space-y-1 pb-1 border-b border-slate-800">
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400" /> Morning OPD: Both Doctors
                      </span>
                      <span className="font-bold text-white">10:00 AM – 2:00 PM</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Dr. Sanjeev Agarwal &amp; Dr. Manisha Agarwal
                    </div>
                  </div>
                  <div className="space-y-1 pb-1 border-b border-slate-800">
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-400" /> Evening OPD: Dr. Sanjeev
                      </span>
                      <span className="font-bold text-white">6:00 PM – 8:00 PM</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Surgeon Dr. Sanjeev Agarwal only
                    </div>
                  </div>
                  <div className="pt-1 flex justify-between items-center font-bold text-emerald-400">
                    <span>Emergency &amp; Casualty</span>
                    <span>24 Hours Open</span>
                  </div>
                </div>

                <a
                  href="tel:+919627408441"
                  className="block text-center w-full py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg text-sm transition-all"
                >
                  Call for Appointment: 9627408441
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & CREDIBILITY BAR */}
      <section className="bg-white border-b border-slate-100 py-10 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-blue-900">30+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Years of Trust (Estd. 1994)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-red-600">NABH</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Pre-Accredited Quality</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Patient Safety Focus</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-3xl sm:text-4xl font-black text-slate-900">24/7</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Emergency Medical Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CLINICAL SPECIALTIES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Specialized Healthcare
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Clinical Centers of Excellence
            </h2>
            <p className="text-slate-600 text-base">
              Providing cutting-edge surgical precision and dedicated maternity care with the latest medical equipment and compassionate doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Specialty 1: Laparoscopy */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  Advanced Laparoscopic Surgery
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Minimally invasive keyhole procedures for gallbladder stones, hernia, and appendix. Minimal pain, tiny incisions, and rapid recovery.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Laparoscopic Cholecystectomy (Gallbladder)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Laparoscopic Hernia Repair</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Laparoscopic Appendectomy</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>By Dr. Sanjeev Agarwal (M.S.)</span>
                <Link href="/services" className="flex items-center gap-1 text-red-600 hover:text-red-700">
                  Read More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Specialty 2: Laser Surgery */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  Modern Laser Surgery Unit
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Stitchless, painless, and bloodless outpatient laser procedures for piles, fissure, fistula, and varicose veins with same-day discharge.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Laser Piles Treatment (LHP)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Laser Fistula &amp; Fissure Repair</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Laser Varicose Vein Treatment</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Painless &amp; Fast Recovery</span>
                <Link href="/services" className="flex items-center gap-1 text-red-600 hover:text-red-700">
                  Read More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Specialty 3: Obstetrics & Gynaecology */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Obstetrics &amp; Gynaecology
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Comprehensive care for women at every stage of life. High-risk pregnancy, normal delivery, cesarean section, and infertility care.
                </p>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-2">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Antenatal Care &amp; Normal Delivery</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>High-Risk Pregnancy Management</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Infertility &amp; Women&apos;s Health</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                <span>By Dr. Manisha Agarwal (D.G.O.)</span>
                <Link href="/services" className="flex items-center gap-1 text-red-600 hover:text-red-700">
                  Read More <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl text-sm transition-all shadow-sm"
            >
              <span>View All Surgical Specialties &amp; Treatments</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR SENIOR DOCTORS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Medical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Consult Our Senior Specialists
            </h2>
            <p className="text-slate-600 text-base">
              Headed by seasoned doctors with over three decades of clinical dedication, surgical expertise, and ethical care in Roorkee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-32 h-36 sm:w-40 sm:h-44 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-slate-300 shadow-inner">
                  <Image
                    src={doc.image}
                    alt={`${doc.name} - ${doc.title}`}
                    width={160}
                    height={176}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 flex-1 text-center sm:text-left">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-bold text-red-700 bg-red-100 rounded mb-1">
                      Reg. No: {doc.registrationNumber}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{doc.name}</h3>
                    <p className="text-sm font-bold text-blue-900">{doc.qualifications}</p>
                    <p className="text-xs font-semibold text-slate-600">{doc.title}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="pt-2 text-xs font-medium text-slate-700 space-y-1 bg-white p-3 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-900 font-bold">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>OPD: {doc.opdTimings}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <a
                      href="tel:+919627408441"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs shadow-sm transition-all"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Book Appointment</span>
                    </a>
                    <Link
                      href="/doctors"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold rounded-lg text-xs border border-slate-300 transition-all"
                    >
                      <span>Full Bio &amp; Expertise</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE BHAGWATI HOSPITAL (NABH QUALITY FOCUS) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                Safe Surgery Saves Life
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Why Families in Roorkee &amp; Haridwar Choose Bhagwati Hospital
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Since our inception in 1994, our priority has remained constant: providing ethical, transparent, and patient-first healthcare. As a NABH Pre-Accredited institution, we adhere to the highest clinical protocols in surgical hygiene and maternal safety.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">NABH Pre-Accreditation Standards</h4>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Rigorous quality benchmarks for infection control, sterile surgical suites, and comprehensive patient rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400 mt-1">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Pioneers in Minimally Invasive Surgeries</h4>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Decades of focus in laparoscopic and laser treatments, reducing hospital stay and enabling faster return to routine life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-1">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">24/7 Patient Care &amp; Inpatient Comfort</h4>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Round-the-clock nursing supervision, private deluxe rooms, and dedicated emergency doctors available at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Institutional Credentials */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 space-y-6 shadow-2xl">
                <div className="flex items-center gap-4 border-b border-slate-700 pb-6">
                  <div className="w-16 h-14 relative flex-shrink-0 bg-white p-1 rounded-lg">
                    <Image
                      src="/images/branding/nabh-badge.svg"
                      alt="NABH Pre-Accredited Badge"
                      width={64}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Accredited Healthcare
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      National Accreditation Board for Hospitals &amp; Healthcare Providers
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-400">Legal Entity</span>
                    <span className="font-semibold text-white">Bhagwati Hospitals Pvt. Ltd.</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-400">Corporate Identity (CIN)</span>
                    <span className="font-mono text-xs text-amber-300">{HOSPITAL_INFO.cin}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-400">Year Established</span>
                    <span className="font-semibold text-white">1994 (Roorkee, Uttarakhand)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/60">
                    <span className="text-slate-400">Dr. Sanjeev Agarwal Reg.</span>
                    <span className="font-semibold text-white">913 (Uttarakhand)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Dr. Manisha Agarwal Reg.</span>
                    <span className="font-semibold text-white">914 (Uttarakhand)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all"
                  >
                    <span>Read Full Hospital History &amp; Safety Protocols</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FACILITIES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Modern Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Hospital Facilities &amp; Amenities
            </h2>
            <p className="text-slate-600 text-base">
              Designed with sterile infection controls, modern medical apparatus, and welcoming inpatient suites for patient recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="h-44 w-full relative bg-slate-900">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    width={400}
                    height={220}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-base text-slate-900">{facility.name}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                  <Link
                    href="/facilities"
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 pt-2 border-t border-slate-200"
                  >
                    <span>View Facility Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT & EMERGENCY LOCATION CALLOUT */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white">
                Emergency &amp; Casualty Available 24 Hours
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">
                Need Immediate Medical Consultation or Surgery Advice?
              </h2>
              <p className="text-red-100 text-base max-w-2xl">
                Our surgical and gynaecological team in Roorkee is available to guide you. Speak directly with our reception or emergency desk.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="tel:+919627408441"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-red-700 hover:bg-slate-100 font-black rounded-xl text-base shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span>Call: +91 9627408441</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-900/60 hover:bg-red-900 text-white font-bold rounded-xl text-base border border-white/30 transition-all"
              >
                <MapPin className="w-5 h-5 text-amber-300" />
                <span>Directions to Chaw Mandi</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
