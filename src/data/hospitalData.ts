export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  title: string;
  registrationNumber: string;
  experience: string;
  specialization: string;
  department: string;
  opdTimings: string;
  image: string;
  expertise: string[];
  bio: string;
}

export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  doctorInCharge: string;
  procedures: string[];
  keyHighlights: string[];
}

export interface Facility {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export const HOSPITAL_INFO = {
  name: "Bhagwati Hospital",
  legalName: "Bhagwati Hospitals Pvt. Ltd.",
  establishedYear: "1994",
  yearsOfTrust: "30+",
  motto: "Safe Surgery Saves Life",
  accreditation: "NABH Certified Hospital (Pre-Accredited)",
  accreditationDetail: "Patient Safety & Quality of Care",
  cin: "U85120UR1996PTC019680",
  address: {
    line1: "325, Chaw Mandi (Chow Mandi)",
    locality: "Nehru Nagar / Civil Lines Road",
    city: "Roorkee",
    district: "Haridwar",
    state: "Uttarakhand",
    pincode: "247667",
    full: "325, Chaw Mandi, Roorkee, Distt: Haridwar, Uttarakhand – 247667",
  },
  phones: [
    { label: "Emergency & Appointments", number: "+91 9627408441", raw: "+919627408441" },
    { label: "Hospital Reception", number: "+91 9557966896", raw: "+919557966896" },
  ],
  email: "bhagwatihosp@yahoo.co.in",
  emergencyAvailability: "24 Hours Emergency & Casualty Services Available",
  opdHours: "Dr. Sanjeev Agarwal: Mon–Sat 10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM | Dr. Manisha Agarwal: Mon–Sat 10:00 AM – 2:00 PM",
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-sanjeev-agarwal",
    name: "Dr. Sanjeev Agarwal",
    qualifications: "M.B.B.S., M.S. (Lucknow)",
    title: "Consultant Laparoscopic, Laser & General Surgeon",
    registrationNumber: "913 (Uttarakhand)",
    experience: "30+ Years of Surgical Excellence",
    specialization: "Laparoscopic Surgery, Advanced Laser Surgery & General Surgery",
    department: "Department of Surgery",
    opdTimings: "Mon – Sat: 10:00 AM – 2:00 PM & 6:00 PM – 8:00 PM",
    image: "/images/doctors/dr-sanjeev-agarwal.svg",
    expertise: [
      "Minimally Invasive Laparoscopic Cholecystectomy (Gallbladder Stone)",
      "Laparoscopic Hernia Repair (Inguinal, Umbilical, Incisional)",
      "Laparoscopic Appendectomy",
      "Painless Laser Proctology (Piles / Hemorrhoids, Fissure, Fistula, Pilonidal Sinus)",
      "Laser Treatment for Varicose Veins",
      "Abdominal & Trauma Surgery",
    ],
    bio: "Dr. Sanjeev Agarwal is an esteemed senior surgeon in Roorkee and Haridwar district with over 30 years of clinical and operative experience. Having earned his M.B.B.S. and M.S. in General Surgery from Lucknow, he has pioneered modern laparoscopic and minimally invasive laser surgery in Roorkee, adhering strictly to the ethos 'Safe Surgery Saves Life'.",
  },
  {
    id: "dr-manisha-agarwal",
    name: "Dr. Manisha Agarwal",
    qualifications: "M.B.B.S., D.G.O. (Lucknow)",
    title: "Senior Consultant Gynaecologist & Obstetrician",
    registrationNumber: "914 (Uttarakhand)",
    experience: "30+ Years of Women's Healthcare",
    specialization: "Obstetrics, Gynaecology, Infertility & High-Risk Pregnancy",
    department: "Department of Obstetrics & Gynaecology",
    opdTimings: "Mon – Sat: 10:00 AM – 2:00 PM",
    image: "/images/doctors/dr-manisha-agarwal.svg",
    expertise: [
      "Antenatal & Comprehensive Pregnancy Care",
      "Normal & Painless Deliveries",
      "Cesarean Section (C-Section) with High-Risk Management",
      "Infertility Evaluation & Treatment",
      "Hysterectomy (Uterus Removal - Laparoscopic & Abdominal)",
      "Menstrual Disorders & Adolescent Gynaecological Care",
      "Menopause Management & Cervical Cancer Screening",
    ],
    bio: "Dr. Manisha Agarwal is a compassionate and highly trusted senior gynaecologist and obstetrician in Roorkee with more than three decades of dedicated service to women's health. She completed her M.B.B.S. and D.G.O. from Lucknow. She has guided thousands of safe deliveries and provides holistic maternal and reproductive healthcare.",
  },
];

export const SPECIALTIES: Specialty[] = [
  {
    id: "laparoscopic-surgery",
    title: "Advanced Laparoscopic Surgery",
    subtitle: "Keyhole surgery with tiny incisions, minimal pain, and rapid recovery",
    description: "State-of-the-art minimally invasive keyhole surgical techniques enabling patients to resume normal life quickly with significantly reduced post-operative discomfort.",
    icon: "Stethoscope",
    doctorInCharge: "Dr. Sanjeev Agarwal (M.S.)",
    procedures: [
      "Laparoscopic Gallbladder Stone Removal (Cholecystectomy)",
      "Laparoscopic Hernia Repair (Inguinal, Incisional, Umbilical)",
      "Laparoscopic Appendectomy (Appendix Removal)",
      "Diagnostic Laparoscopy & Adhesiolysis",
      "Minimally Invasive Abdominal Surgeries",
    ],
    keyHighlights: [
      "Tiny 5-10mm keyhole incisions",
      "Significantly less post-operative pain",
      "Minimal blood loss and lowest infection rate",
      "Hospital stay often under 24-48 hours",
    ],
  },
  {
    id: "laser-surgery",
    title: "Modern Laser Surgery Unit",
    subtitle: "Precise, painless, and bloodless outpatient laser procedures",
    description: "Cutting-edge medical laser technology offering patients stitch-free, painless treatments for anorectal and vascular conditions.",
    icon: "Zap",
    doctorInCharge: "Dr. Sanjeev Agarwal (M.S.)",
    procedures: [
      "Laser Treatment for Piles / Hemorrhoids (LHP)",
      "Laser Treatment for Anal Fissure",
      "Laser Surgery for Anal Fistula (FiLaC)",
      "Laser Pilonidal Sinus Treatment (SiLaC)",
      "Endovenous Laser Ablation for Varicose Veins",
    ],
    keyHighlights: [
      "No cuts, no stitches, minimal to zero bleeding",
      "Same-day or next-day discharge",
      "Negligible post-procedure pain compared to open surgery",
      "Fast return to work within 48 to 72 hours",
    ],
  },
  {
    id: "obstetrics-gynaecology",
    title: "Obstetrics & Gynaecology / Maternity",
    subtitle: "Dedicated, compassionate care for mothers, newborns, and women of all ages",
    description: "Complete continuum of women’s health services from puberty to maternity, menopause, and advanced gynecological surgical interventions.",
    icon: "Heart",
    doctorInCharge: "Dr. Manisha Agarwal (D.G.O.)",
    procedures: [
      "Comprehensive Antenatal Checkups (ANC) & Nutrition Counseling",
      "Normal Vaginal Delivery & Pain-Relief Labor Management",
      "Cesarean Section (LSCS) for Normal & High-Risk Pregnancies",
      "Management of PCOD / PCOS and Menstrual Irregularities",
      "Uterine Fibroids, Ovarian Cyst, and Endometriosis Treatment",
      "Total Laparoscopic Hysterectomy (TLH) & Abdominal Hysterectomy",
      "Infertility Counseling and Preliminary Treatment",
    ],
    keyHighlights: [
      "Equipped Labor Room with continuous fetal monitoring",
      "Round-the-clock obstetric emergency coverage",
      "Strict hygiene following NABH infection control standards",
      "Personalized, empathetic care for every expectant mother",
    ],
  },
  {
    id: "general-surgery",
    title: "General & Emergency Surgery",
    subtitle: "Comprehensive open and emergency surgical procedures",
    description: "Experienced surgical interventions for abdominal emergencies, wound care, soft tissue swellings, and trauma care.",
    icon: "ShieldAlert",
    doctorInCharge: "Dr. Sanjeev Agarwal (M.S.)",
    procedures: [
      "Excision of Lipoma, Sebaceous Cysts & Benign Tumors",
      "Hydrocele & Varicocele Surgeries",
      "Abscess Drainage & Diabetic Foot Debridement",
      "Emergency Trauma Wound Repair & Suture Care",
      "Peritonitis & Bowel Perforation Emergency Surgeries",
    ],
    keyHighlights: [
      "Rapid triage and prompt surgical intervention",
      "Advanced sterile modular OT setup",
      "Comprehensive pre-op and post-op nursing care",
    ],
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "modular-ot",
    name: "Advanced Operation Theatres (OT)",
    tagline: "Ultra-sterile surgical environment ensuring maximum patient safety",
    description: "Equipped with high-definition laparoscopic camera systems, electrocautery, specialized laser generators, and modern anesthesia workstations.",
    features: [
      "Strict sterility and laminar airflow protocols",
      "Multi-parameter vital monitors and anesthesia workstation",
      "Dedicated laparoscopic and laser surgical instrumentation",
      "Strict compliance with NABH patient safety guidelines",
    ],
    image: "/images/facilities/operation-theatre.svg",
  },
  {
    id: "labor-room",
    name: "Maternity & Labor Delivery Suite",
    tagline: "Welcoming new lives in comfort, safety, and utmost care",
    description: "Designed specifically to provide expectant mothers a calm, supportive, and safe environment with continuous mother and fetal monitoring.",
    features: [
      "Specialized labor and delivery beds",
      "Cardiotocography (CTG) fetal heart monitoring",
      "Immediate newborn resuscitation & stabilization station",
      "Attentive female nursing staff available 24/7",
    ],
    image: "/images/facilities/labor-room.svg",
  },
  {
    id: "inpatient-wards",
    name: "Inpatient Rooms (Deluxe & Private)",
    tagline: "Hygienic, comfortable accommodations for peaceful recovery",
    description: "Clean, spacious inpatient rooms including Private Air-Conditioned Deluxe Rooms and Private Patient Rooms, equipped with 24/7 nursing and attendant comfort.",
    features: [
      "Private Deluxe AC Rooms with TV and attendant couch",
      "Comfortable Private Patient Rooms",
      "24/7 dedicated nursing call system at bedside",
      "Daily sanitized and infection-controlled spaces",
    ],
    image: "/images/facilities/inpatient-ward.svg",
  },
  {
    id: "diagnostics-pharmacy",
    name: "Pathology, Diagnostics & Pharmacy Support",
    tagline: "Convenient diagnostic testing and medicine access",
    description: "Coordination with trusted outsourced diagnostic laboratories for routine blood tests, ultrasound imaging, and adjacent pharmacy facilities for prompt medication availability.",
    features: [
      "Outsourced Pathology & Diagnostic blood investigations",
      "Ultrasound & radiological study coordination",
      "Outsourced pharmacy support for prescribed medications",
      "Prompt report turnaround for surgical and obstetric patients",
    ],
    image: "/images/facilities/inpatient-ward.svg",
  },
  {
    id: "emergency-casualty",
    name: "24/7 Emergency & Casualty Care",
    tagline: "Immediate medical response for urgent and critical situations",
    description: "Round-the-clock emergency triage facility to handle surgical emergencies, acute abdominal pain, bleeding, and obstetrics emergencies.",
    features: [
      "Open 24 hours a day, 365 days a year",
      "Rapid doctor triage and emergency stabilization",
      "Oxygen supply, nebulization, and crash cart ready",
      "Direct coordination with surgical OT for urgent cases",
    ],
    image: "/images/hospital/hospital-building.svg",
  },
];
