import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  Navigation,
} from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export const metadata: Metadata = {
  title: "Contact Us & Emergency Directions | 325 Chaw Mandi Roorkee | Bhagwati Hospital",
  description:
    "Get in touch with Bhagwati Hospital Roorkee. Emergency Hotline: +91 9627408441, Reception: +91 9557966896. Address: 325, Chaw Mandi, Roorkee, Haridwar, Uttarakhand – 247667.",
  keywords: [
    "Contact Bhagwati Hospital Roorkee",
    "Bhagwati Hospital Phone Number",
    "Bhagwati Hospital Roorkee Address",
    "Chaw Mandi Hospital Roorkee",
    "Emergency Contact Hospital Roorkee",
    "Dr Sanjeev Agarwal Appointment",
    "Dr Manisha Agarwal Appointment",
  ],
  openGraph: {
    title: "Contact Bhagwati Hospital Roorkee | 24/7 Emergency",
    description:
      "Direct emergency phone numbers, OPD timings, and location directions for Bhagwati Hospital in Chaw Mandi, Roorkee.",
    url: "https://bhagwati-hospital.vercel.app/contact",
  },
};

export default function ContactPage() {
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
            <span className="text-red-400 font-semibold">Contact &amp; Emergency</span>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-red-600/30 text-red-300 rounded-full border border-red-500/30 mb-3">
            24/7 Emergency &amp; Outpatient Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            We Are Here When <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400">
              You Need Us Most
            </span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Reach out for emergency medical assistance, surgical consultations with Dr. Sanjeev Agarwal, or gynecological care with Dr. Manisha Agarwal.
          </p>
        </div>
      </section>

      {/* 2. EMERGENCY RED BANNER */}
      <section className="bg-red-600 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 rounded-full flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-red-100">
                Medical Emergency or Urgent Surgery?
              </div>
              <div className="text-lg sm:text-xl font-black">
                Call Our 24/7 Immediate Casualty Hotline
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <a
              href="tel:+919627408441"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-700 hover:bg-slate-100 font-black rounded-xl text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>+91 9627408441</span>
            </a>
            <a
              href="tel:+919557966896"
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9557966896</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. CONTACT INFORMATION & FORM GRID */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Hospital Location
                </span>
                <h2 className="text-3xl font-black text-slate-900 mt-3">
                  Visit Bhagwati Hospital in Roorkee
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Conveniently situated in Chaw Mandi, Roorkee, easily accessible via road and public transit across Haridwar district.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-100 text-red-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base">Full Postal Address</h3>
                  <p className="text-sm text-slate-700 leading-snug">
                    {HOSPITAL_INFO.address.full}
                  </p>
                  <p className="text-xs text-slate-500 pt-1">
                    Landmark: Near Chow Mandi / Nehru Nagar, Haridwar Road
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=Bhagwati+Hospital+325+Chaw+Mandi+Roorkee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps Application</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-sm text-slate-700">
                  <h3 className="font-bold text-slate-900 text-base">Hospital Operating Hours</h3>
                  <div className="pt-1 space-y-1">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="font-medium text-slate-500">Morning OPD:</span>
                      <span className="font-semibold text-slate-900">10:00 AM – 2:00 PM (Both Doctors)</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="font-medium text-slate-500">Evening OPD:</span>
                      <span className="font-semibold text-slate-900">6:00 PM – 8:00 PM (Dr. Sanjeev Agarwal)</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm pt-1 border-t border-slate-200">
                      <span className="font-bold text-emerald-700">Emergency &amp; Casualty:</span>
                      <span className="font-bold text-emerald-700">24 Hours / 365 Days</span>
                    </div>
                    <div className="text-[11px] text-slate-500 pt-1">
                      * OPD Timings apply Monday to Saturday. Sunday consultations by prior appointment or emergency.
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Phone Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-bold text-slate-900 text-base">Direct Contact Details</h3>
                  <div className="text-slate-600">
                    Email:{" "}
                    <a
                      href={`mailto:${HOSPITAL_INFO.email}`}
                      className="font-medium text-blue-700 hover:underline"
                    >
                      {HOSPITAL_INFO.email}
                    </a>
                  </div>
                  <div className="text-slate-600">
                    Appointments:{" "}
                    <a href="tel:+919627408441" className="font-bold text-slate-900 hover:underline">
                      +91 9627408441
                    </a>
                    ,{" "}
                    <a href="tel:+919557966896" className="font-bold text-slate-900 hover:underline">
                      +91 9557966896
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Static Patient Inquiry Note & Pre-filled Email Action */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
                  General Patient Inquiries
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Reach Out Before Your Visit
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For surgical inquiries, maternity planning, or checking doctor availability, please call us directly for immediate response, or click below to compose an inquiry email to our hospital desk.
                </p>

                <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-bold text-sm text-slate-900">Recommended Steps for Fast Care:</h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">1</span>
                      <span><strong>Immediate Emergencies:</strong> Please call <strong>9627408441</strong> immediately so our casualty team can prepare before your arrival.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">2</span>
                      <span><strong>OPD Appointments:</strong> Call <strong>9557966896</strong> between 9:30 AM and 7:00 PM for doctor consultation tokens.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">3</span>
                      <span><strong>Document Check:</strong> Remember to carry previous ultrasound, MRI, or blood test reports.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <a
                  href={`mailto:${HOSPITAL_INFO.email}?subject=Patient%20Consultation%20Inquiry%20-%20Bhagwati%20Hospital&body=Hello%20Bhagwati%20Hospital,%0D%0A%0D%0AMy%20Name:%20%0D%0AContact%20Number:%20%0D%0AConsultation%20Required%20For%20(Surgery%20/%20Maternity%20/%20General):%20%0D%0APreferred%20Date:%20%0D%0A%0D%0AThank%20you.`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Send Pre-Filled Email to Hospital Desk</span>
                </a>

                <a
                  href="tel:+919627408441"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hospital Reception Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMBEDDED GOOGLE MAP */}
      <section className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Interactive Hospital Map Location
              </h2>
              <p className="text-xs text-slate-600">
                325, Chaw Mandi, Roorkee, Distt: Haridwar, Uttarakhand – 247667
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Bhagwati+Hospital+325+Chaw+Mandi+Roorkee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-lg text-xs border border-slate-300 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-red-600" />
              <span>Get Driving Directions</span>
            </a>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-inner border border-slate-300 relative bg-slate-200">
            <iframe
              title="Bhagwati Hospital Roorkee Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.038481358327!2d77.8920!3d29.8660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3638c4d28ad%3A0x2db4855a43588975!2sBhagwati%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
