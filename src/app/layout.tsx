import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickContactBar from "@/components/QuickContactBar";
import { HOSPITAL_INFO } from "@/data/hospitalData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhagwati-hospital.vercel.app"),
  title: {
    default: "Bhagwati Hospital Roorkee | Safe Surgery Saves Life | NABH Certified",
    template: "%s | Bhagwati Hospital Roorkee",
  },
  description:
    "Bhagwati Hospital Pvt Ltd (Estd. 1994) is a premier NABH Certified Hospital in Roorkee, Uttarakhand. Led by Dr. Sanjeev Agarwal (Surgeon) & Dr. Manisha Agarwal (Gynecologist). Advanced Laparoscopic & Laser Surgery, Maternity & 24/7 Emergency Care.",
  keywords: [
    "Bhagwati Hospital Roorkee",
    "Bhagwati Hospitals Pvt Ltd",
    "Dr Sanjeev Agarwal Surgeon Roorkee",
    "Dr Manisha Agarwal Gynecologist Roorkee",
    "Laparoscopic Surgeon in Roorkee",
    "Laser Surgery Roorkee",
    "Maternity Hospital Roorkee",
    "NABH Hospital Roorkee Haridwar",
    "Best Hospital in Roorkee",
    "Gallbladder stone surgery Roorkee",
    "Piles laser surgery Roorkee",
    "Normal delivery Roorkee",
    "Emergency hospital Roorkee Chaw Mandi",
  ],
  authors: [{ name: "Bhagwati Hospital" }],
  creator: "Bhagwati Hospitals Pvt Ltd",
  publisher: "Bhagwati Hospitals Pvt Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Bhagwati Hospital Roorkee | Safe Surgery Saves Life",
    description:
      "Premier NABH Pre-Accredited hospital in Roorkee offering Advanced Laparoscopic Surgery, Laser Surgery, and Women's Maternity Care since 1994.",
    url: "https://bhagwati-hospital.vercel.app",
    siteName: "Bhagwati Hospital",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hospital structured data (Schema.org JSON-LD for MedicalOrganization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": HOSPITAL_INFO.name,
    "legalName": HOSPITAL_INFO.legalName,
    "description": "NABH Pre-Accredited Hospital in Roorkee specializing in Laparoscopic Surgery, Laser Surgery, and Obstetrics & Gynaecology.",
    "url": "https://bhagwati-hospital.vercel.app",
    "telephone": "+919627408441",
    "email": HOSPITAL_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "325, Chaw Mandi",
      "addressLocality": "Roorkee",
      "addressRegion": "Uttarakhand",
      "postalCode": "247667",
      "addressCountry": "IN"
    },
    "founder": [
      {
        "@type": "Physician",
        "name": "Dr. Sanjeev Agarwal",
        "medicalSpecialty": ["General Surgery", "Laparoscopic Surgery"],
        "qualification": "M.B.B.S, M.S."
      },
      {
        "@type": "Physician",
        "name": "Dr. Manisha Agarwal",
        "medicalSpecialty": ["Obstetrics", "Gynaecology"],
        "qualification": "M.B.B.S, D.G.O."
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:30"
      }
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Laparoscopic Surgery"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Laser Surgery for Piles, Fissure and Fistula"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Obstetrics & Maternity Care"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-red-100 selection:text-red-900 pb-14 lg:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickContactBar />
      </body>
    </html>
  );
}
