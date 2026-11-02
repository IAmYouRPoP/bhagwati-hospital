import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { HOSPITAL_INFO } from "@/data/hospitalData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Hospital Overview & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white p-1 rounded-md">
                <Image
                  src="/images/branding/logo.svg"
                  alt="Bhagwati Hospital Emblem"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-black tracking-tight">BHAGWATI HOSPITAL</h3>
                <p className="text-xs text-red-400 font-semibold italic">Safe Surgery Saves Life</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Established in 1994, Bhagwati Hospitals Pvt. Ltd. is a NABH Pre-Accredited hospital delivering excellence in advanced laparoscopic surgery, laser procedures, and women’s maternal health in Roorkee.
            </p>

            {/* NABH Badge Display */}
            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-3 rounded-lg">
              <div className="w-12 h-10 relative flex-shrink-0">
                <Image
                  src="/images/branding/nabh-badge.svg"
                  alt="NABH Pre-Accredited Badge"
                  width={48}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-xs">
                <div className="font-bold text-emerald-400">NABH PRE-ACCREDITED</div>
                <div className="text-slate-400">Patient Safety &amp; Quality Care</div>
              </div>
            </div>

            <div className="text-xs text-slate-500 pt-1 space-y-1">
              <div><strong className="text-slate-400">CIN:</strong> {HOSPITAL_INFO.cin}</div>
              <div><strong className="text-slate-400">Doctors Reg:</strong> No. 913 &amp; 914 (U.K.)</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500">&rsaquo;</span> Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500">&rsaquo;</span> About Bhagwati Hospital
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500">&rsaquo;</span> Specialties &amp; Surgeries
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500">&rsaquo;</span> Senior Doctors &amp; Specialists
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500">&rsaquo;</span> Hospital Facilities &amp; OT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-red-500">&rsaquo;</span> Contact &amp; Emergency Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Specialties */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Medical Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-white transition-colors">
                • Laparoscopic Gallbladder Stone Surgery
              </li>
              <li className="hover:text-white transition-colors">
                • Laparoscopic Hernia &amp; Appendix Repair
              </li>
              <li className="hover:text-white transition-colors">
                • Painless Laser Piles, Fistula &amp; Fissure
              </li>
              <li className="hover:text-white transition-colors">
                • Normal &amp; Cesarean Delivery (LSCS)
              </li>
              <li className="hover:text-white transition-colors">
                • High-Risk Maternity &amp; Infertility Care
              </li>
              <li className="hover:text-white transition-colors">
                • 24/7 Surgical Trauma &amp; Emergency Care
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hospital Address */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Contact &amp; Emergency
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {HOSPITAL_INFO.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919627408441" className="text-white font-bold hover:underline">
                    +91 9627408441
                  </a>
                  <a href="tel:+919557966896" className="text-slate-400 hover:text-white">
                    +91 9557966896
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-slate-300 hover:underline">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 leading-snug">
                  <div className="text-emerald-400 font-semibold">24/7 Emergency Services</div>
                  <div>OPD: 10:00 AM – 2:00 PM (Both Doctors) &bull; Evening: 6:00 PM – 8:00 PM (Dr. Sanjeev Agarwal)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {currentYear} {HOSPITAL_INFO.legalName}. All Rights Reserved. NABH Certified Hospital.
          </p>
          <p className="text-slate-500">
            Doctors: Dr. Sanjeev Agarwal (M.S.) &bull; Dr. Manisha Agarwal (D.G.O.) | Roorkee, Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  );
}
