import type { Metadata, Viewport } from "next";
import Script from "next/script";

/*
  Built with the taste skill (MIT, see public/assets/LICENSE-taste-skill.txt).
  type: service (a hospital: site-kind other)
  deal: hero statement, nav nav-centre (dealt nav-mega, dealt again: its menu card needs a photograph the
  client has not supplied), close close-type, footer footer-columns, rhythm dark-band, buttons tonal,
  mark: the client's own logo, grounds none (kind other)
  palette: the client's own colours from the logo through start.mjs brand; type: zilla, dealt first
  moments: word-highlight in #approach
*/

// The palette and type printed by start.mjs (the client's own logo colours), then page CSS.
// Kept as one inline block after the kit's stylesheets, as the kit requires.
const PAGE_CSS = `
:root {
  --p-bg: #ffffff; --p-surface: #f3f5f2; --p-ink: #17211d; --p-muted: #666d6a;
  --p-accent: #1b4d3e; --p-accent-ink: #ffffff; --p-action: #1b4d3e; --p-action-ink: #ffffff;
  --p-inv-bg: #17211d; --p-inv-surface: #242e2a; --p-inv-ink: #ffffff; --p-inv-muted: #9ea3a1;
  --p-inv-accent: #ffffff; --p-inv-accent-ink: #17211d; --p-inv-action: #ffffff; --p-inv-action-ink: #17211d;
  --font-display: "Zilla Slab", Georgia, serif;
  --font-text: "Rethink Sans", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.018em;
  --display-tracking-xl: -0.024em;
  --ly-scale: 1.02;
}
.nav__logo img { height: 36px; }
.visit__big { font: var(--display-weight) var(--t-h2)/1.05 var(--font-display); letter-spacing: var(--display-tracking); font-style: normal; }
.doctor .rows { margin-top: var(--s-4); }
.text-link { text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--line-strong); }
.text-link:hover { text-decoration-color: currentColor; }
@media (max-width: 380px) { .nav__logo { font-size: 17px; } .nav__logo img { height: 28px; width: 28px; } }
/* Compact rhythm (the client asked for a fuller, less empty page): sections take their content's height
   instead of a whole screen each, with one even gap between them. */
main > :is(section, .section), footer.closing { height: auto !important; min-height: 0 !important; padding: 80px 0 80px; }
main > :is(section, .section) > :is(.wrap, .container), footer.closing > .wrap { height: auto; }
main > section.hero { padding: calc(var(--nav, 72px) + 56px) 0 64px; }
.hero--statement .hero__in { justify-content: flex-start; }
.hero--statement .hero__facts { margin-top: 56px; }
main > section.section + section.section:not(.ground-inverse):not(.statement) { border-top: 1px solid var(--line); }
#approach { padding: 64px 0; background: var(--surface); }
.section-head { margin-bottom: 36px; }
.rows > li { padding-block: 12px; }
footer.closing { padding-top: 72px; }
footer.closing .closing__links { margin-top: 64px; }
@media (max-width: 639px) {
  main > :is(section, .section), footer.closing { padding: 56px 0; }
  main > section.hero { padding: calc(var(--nav, 56px) + 32px) 0 40px; }
  .hero--statement .hero__facts { display: grid; margin-top: 36px; }
  #approach { padding: 48px 0; }
  .section-head { margin-bottom: 24px; }
  footer.closing .closing__links { margin-top: 48px; }
}
/* Desktop: the four facts as a column beside the headline, so the first screen has no empty half. */
@media (min-width: 1024px) {
  .hero--statement .hero__in { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 4fr); column-gap: 96px; align-items: end; }
  .hero--statement .hero__facts { display: block; margin-top: 0; padding-top: 0; border-top: 0; }
  .hero--statement .hero__facts > div { display: flex; justify-content: space-between; gap: 24px; padding-block: 16px; border-top: 1px solid var(--line); }
  .hero--statement .hero__facts > div:last-child { border-bottom: 1px solid var(--line); }
  .hero--statement .hero__facts dd { text-align: right; }
}
`;

const SITE_URL = "https://bhagwati-hospital.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bhagwati Hospital: surgery and maternity care in Roorkee",
  description:
    "Keyhole and laser surgery, pregnancy and gynaecology care, and a casualty open 24 hours, at Chaw Mandi in Roorkee since 1994.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bhagwati Hospital",
    locale: "en_IN",
    title: "Bhagwati Hospital: surgery and maternity care in Roorkee",
    description: "Keyhole and laser surgery, maternity care and a 24-hour casualty at Chaw Mandi, Roorkee.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  verification: { google: "6T_Mg6aBpZqPxk30JkEN_QzsPzZr6t16oPX6hxeF-98" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Bhagwati Hospital",
      alternateName: ["Bhagwati Hospitals Pvt. Ltd.", "Bhagwati Hospital Roorkee"],
    },
    {
      "@type": "Hospital",
      "@id": `${SITE_URL}/#hospital`,
      name: "Bhagwati Hospital",
      legalName: "Bhagwati Hospitals Pvt. Ltd.",
      url: SITE_URL,
      telephone: "+919627408441",
      email: "bhagwatihosp@yahoo.co.in",
      foundingDate: "1994",
      address: {
        "@type": "PostalAddress",
        streetAddress: "325, Chaw Mandi",
        addressLocality: "Roorkee",
        addressRegion: "Uttarakhand",
        postalCode: "247667",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "14:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "20:00" },
      ],
      employee: [
        { "@type": "Physician", name: "Dr. Sanjeev Agarwal", description: "Laparoscopic, laser and general surgeon" },
        { "@type": "Physician", name: "Dr. Manisha Agarwal", description: "Gynaecologist and obstetrician" },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The kit's head scripts add classes to <html> before React hydrates.
    <html lang="en" data-type="service" data-radius="soft" data-buttons="tonal" data-motion="" suppressHydrationWarning>
      <head>
        <meta name="site-kind" content="other" />
        <meta name="page-type" content="service" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;500;600&family=Rethink+Sans:wght@400..600&display=swap"
        />
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);",
          }}
        />
        <script src="/assets/backgrounds/backgrounds.js" />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <header className="nav nav--centre">
          <div className="wrap nav__bar">
            <a className="skip-link" href="/#top">Skip to content</a>
            <a className="nav__logo" href="/#top"><img src="/images/branding/logo.svg" alt="" width="36" height="36" />Bhagwati Hospital</a>
            <nav className="nav__links" aria-label="Main">
              <div className="nav__item"><a className="nav__link" href="/#treatments">Treatments</a></div>
              <div className="nav__item"><a className="nav__link" href="/#doctors">Doctors</a></div>
              <div className="nav__item"><a className="nav__link" href="/#facilities">Facilities</a></div>
              <div className="nav__item"><a className="nav__link" href="/#visit">Visit</a></div>
            </nav>
            <div className="nav__actions">
              <a className="nav__link" href="tel:+919627408441">Emergency 24h</a>
              <a className="btn btn--primary" href="tel:+919557966896">Book an OPD visit</a>
            </div>
            <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
            </button>
          </div>
        </header>

        <main id="top">{children}</main>

        <footer className="footer closing" id="contact" style={{ "--hm": 2 } as React.CSSProperties} aria-labelledby="close-h">
          <div className="wrap">
            <div className="closing__cta close--type">
              <div className="section-head">
                <h2 id="close-h">Book an OPD visit</h2>
                <p>Call reception, Monday to Saturday, and bring your earlier reports.</p>
              </div>
              <a className="btn btn--primary btn--xl btn--wide" href="tel:+919557966896">Book an OPD visit<svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path className="m-arrow__stem" d="M1 6h8"/><path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
            </div>
            <div className="closing__links">
              <div className="grid">
                <div className="span-4 stack-4">
                  <a className="nav__logo" href="/#top"><img src="/images/branding/logo.svg" alt="" width="36" height="36" />Bhagwati Hospital</a>
                  <p className="footer__lede">Safe Surgery Saves Life.</p>
                </div>
                <div className="span-2 footer__col"><h3>Treatments</h3><ul><li><a href="/#treatments">Keyhole surgery</a></li><li><a href="/#treatments">Laser treatment</a></li><li><a href="/#treatments">Maternity</a></li></ul></div>
                <div className="span-2 footer__col"><h3>Doctors</h3><ul><li><a href="/#doctors">Dr. Sanjeev Agarwal</a></li><li><a href="/#doctors">Dr. Manisha Agarwal</a></li></ul></div>
                <div className="span-2 footer__col"><h3>Facilities</h3><ul><li><a href="/#facilities">Operation theatre</a></li><li><a href="/#facilities">Labour room</a></li><li><a href="/#facilities">Private rooms</a></li></ul></div>
                <div className="span-2 footer__col"><h3>Visit</h3><ul><li><a href="/#visit">Address and OPD hours</a></li><li><a href="/#contact">Contact</a></li></ul></div>
              </div>
              <div className="footer__legal">
                <span>&copy; 2026 Bhagwati Hospitals Pvt. Ltd. &nbsp; CIN U85120UR1996PTC019680</span>
                <div className="socials"></div>
              </div>
            </div>
          </div>
        </footer>

        <nav className="actionbar" aria-label="Quick actions">
          <a className="btn btn--primary" href="tel:+919557966896">Book an OPD visit</a>
        </nav>

        {/* The kit's scripts run after React hydrates, so their changes to the page are never overwritten. */}
        <Script src="/assets/system.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/motion/motion.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/layout/layout.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  );
}
