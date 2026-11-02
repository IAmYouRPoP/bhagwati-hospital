import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  Phone,
  CheckCircle2,
  Target,
  Eye,
  UserCheck,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export const metadata: Metadata = {
  title: "About Us | Bhagwati Hospital Roorkee | 30+ Years Medical Legacy",
  description:
    "Discover the history, leadership, and NABH Pre-Accreditation standards of Bhagwati Hospitals Pvt Ltd, established in 1994 in Roorkee by Dr. Sanjeev Agarwal and Dr. Manisha Agarwal.",
  keywords: [
    "About Bhagwati Hospital Roorkee",
    "History of Bhagwati Hospital Roorkee",
    "NABH Pre-Accredited Hospital Roorkee",
    "Dr Sanjeev Agarwal Surgeon Roorkee",
    "Dr Manisha Agarwal Gynecologist Roorkee",
    "Safe Surgery Saves Life",
    "Hospital in Chaw Mandi Roorkee",
  ],
  openGraph: {
    title: "About Bhagwati Hospital Roorkee | 30+ Years Medical Legacy",
    description:
      "Delivering safe, ethical, and advanced surgical & maternity care to Roorkee families since 1994 under NABH quality guidelines.",
    url: "https://bhagwati-hospital.vercel.app/about",
  },
};

export default function AboutPage() {
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
            <span className="text-red-400 font-semibold">About Us</span>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30 mb-3">
            NABH Pre-Accredited &bull; Estd. 1994
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Over Three Decades of <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
              Trusted Surgical &amp; Maternal Care
            </span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Founded in 1994, <strong>Bhagwati Hospitals Pvt. Ltd.</strong> stands as one of Roorkee’s most respected healthcare institutions, guided by the steadfast principle: <em>&ldquo;Safe Surgery Saves Life&rdquo;</em>.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & LEGACY */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Our Journey Since 1994
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Pioneering Precision Surgery and Compassionate Women’s Health in Roorkee
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In 1994, <strong>Dr. Sanjeev Agarwal</strong> (General &amp; Laparoscopic Surgeon) and <strong>Dr. Manisha Agarwal</strong> (Gynaecologist &amp; Obstetrician) established Bhagwati Hospital with a shared mission: to provide the community of Roorkee, Haridwar district, and neighboring areas with modern, ethical, and patient-centered medical treatment.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Over the past 30+ years, Bhagwati Hospital has grown from a visionary surgical center into a NABH Pre-Accredited healthcare landmark. It was among the first private surgical centers in the region to introduce minimally invasive <strong>laparoscopic (keyhole) surgery</strong> and later advanced <strong>laser proctology</strong>, minimizing recovery time and surgical stress for patients.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Simultaneously, the Department of Obstetrics &amp; Gynaecology has safely guided thousands of childbirths, supporting mothers through high-risk pregnancies and complex gynecological conditions with utmost dignity and empathy.
              </p>

              {/* Core Tenet Callout */}
              <div className="p-5 rounded-xl bg-red-50 border-l-4 border-red-600 space-y-1">
                <div className="font-bold text-red-900 text-sm">Our Guiding Principle</div>
                <div className="text-red-700 italic text-base font-semibold">
                  &ldquo;Safe Surgery Saves Life&rdquo;
                </div>
                <div className="text-xs text-red-600 pt-1">
                  Every surgical decision, sterilization cycle, and nursing action is anchored on safeguarding human life through uncompromising safety.
                </div>
              </div>
            </div>

            {/* Right Card: Institutional Snapshot */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                  <div className="w-14 h-14 relative flex-shrink-0 bg-white p-1 rounded-lg border border-slate-200">
                    <Image
                      src="/images/branding/logo.svg"
                      alt="Bhagwati Hospital Logo"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Bhagwati Hospitals Pvt. Ltd.</h3>
                    <p className="text-xs text-slate-500">Corporate &amp; Regulatory Identity</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Corporate Identification (CIN)</span>
                    <span className="font-mono font-bold text-slate-900">{HOSPITAL_INFO.cin}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Accreditation</span>
                    <span className="font-bold text-emerald-700">{HOSPITAL_INFO.accreditation}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Established</span>
                    <span className="font-semibold text-slate-900">Year 1994</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Surgeon Reg.</span>
                    <span className="font-semibold text-slate-900">Dr. Sanjeev Agarwal (Reg: 913 U.K.)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Gynaecologist Reg.</span>
                    <span className="font-semibold text-slate-900">Dr. Manisha Agarwal (Reg: 914 U.K.)</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500 font-medium">Location</span>
                    <span className="font-semibold text-slate-900">325, Chaw Mandi, Roorkee</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:+919627408441"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Emergency Helpline: 9627408441</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NABH ACCREDITATION FOCUS */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Badge visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center max-w-sm w-full space-y-4">
                <div className="w-32 h-28 mx-auto relative">
                  <Image
                    src="/images/branding/nabh-badge.svg"
                    alt="NABH Pre-Accreditation Seal"
                    width={128}
                    height={112}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">NABH PRE-ACCREDITED</h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-0.5">
                    Patient Safety &amp; Quality of Care
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Recognized by the National Accreditation Board for Hospitals &amp; Healthcare Providers for maintaining rigorous clinical protocols and safety standards.
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Quality &amp; Patient Safety
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                What NABH Pre-Accreditation Means For You
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                NABH accreditation is India’s highest national recognition for quality hospital care. For our patients and their families, it provides verifiable proof that Bhagwati Hospital adheres to stringent medical guidelines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Infection Control Protocols</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Hospital-wide sanitization, sterile modular OT air handling, and biomedical waste segregation to minimize infection risks.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Safe Medication Administration</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Dual-check verification for every prescribed drug and dosage to prevent medical and pharmacological errors.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <HeartHandshake className="w-4 h-4 text-emerald-600" />
                    <span>Patient Rights &amp; Transparency</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Clear communication regarding diagnoses, surgical options, transparent estimates, and patient consent.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Rapid Emergency Readiness</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Emergency response plans, crash carts, oxygen support, and ready surgical backup 24 hours a day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-400/30">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Our Vision</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                To be the most trusted surgical and maternal healthcare center in Roorkee and Uttarakhand, setting benchmarks in safe laparoscopic surgery, laser procedures, and compassionate obstetric care accessible to all segments of society.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950 text-white space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Our Mission</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                To safeguard every patient who enters our doors through ethical medical practice, clinical expertise, advanced minimally invasive technology, and continuous quality improvement under NABH standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEDICAL LEADERSHIP BANNER */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Consult Our Senior Specialists Today
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mt-2">
            Dr. Sanjeev Agarwal (Surgeon) and Dr. Manisha Agarwal (Gynecologist) are available for outpatient consultations Monday through Saturday.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-xl text-sm transition-all shadow-sm"
            >
              <UserCheck className="w-4 h-4" />
              <span>View Doctor Qualifications &amp; Timings</span>
            </Link>
            <a
              href="tel:+919627408441"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception: 9627408441</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
