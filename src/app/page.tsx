import type { CSSProperties } from "react";

// Single-page site: the sections below are linked from the menu, the footer and the phone bar.
export default function HomePage() {
  return (
    <>
        <section className="hero hero--statement" data-enter aria-labelledby="hero-h">
          <div className="wrap"><div className="hero-text hero__in">
            <div>
              <h1 id="hero-h">Surgery and maternity hospital in Roorkee</h1>
              <p className="hero__lead">Keyhole and laser operations with Dr. Sanjeev Agarwal, and pregnancy and women&rsquo;s health with Dr. Manisha Agarwal. OPD six days a week, casualty around the clock.</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="tel:+919557966896">Book an OPD visit<svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path className="m-arrow__stem" d="M1 6h8"/><path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg></a>
                <a className="btn btn--secondary" href="tel:+919627408441">Call casualty</a>
              </div>
            </div>
            <dl className="hero__facts">
              <div><dt>OPD, Monday to Saturday</dt><dd>10 am to 2 pm, 6 pm to 8 pm</dd></div>
              <div><dt>Casualty</dt><dd>Open 24 hours</dd></div>
              <div><dt>Address</dt><dd>325, Chaw Mandi</dd></div>
              <div><dt>Since 1994</dt><dd>NABH pre-accredited</dd></div>
            </dl>
          </div></div>
        </section>

        <section className="section" id="treatments" style={{ "--hm": 2 } as CSSProperties} aria-labelledby="treatments-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="treatments-h">Treatments at Bhagwati Hospital</h2>
              <p>Most operations here are done by keyhole or laser, so many patients go home within one or two days.</p>
            </div>
            <div className="grid grid--top">
              <ul className="rows span-6">
                <li><span className="rows__name">Gallbladder stones, hernia, appendix</span><p>Removed by keyhole surgery through small cuts, usually with one or two days in hospital.</p><span className="rows__value">Dr. Sanjeev</span></li>
                <li><span className="rows__name">Piles, fissure, fistula</span><p>Treated by laser, usually with no stitches and a same-day or next-day discharge.</p><span className="rows__value">Dr. Sanjeev</span></li>
                <li><span className="rows__name">Varicose veins</span><p>Closed from inside the vein by endovenous laser.</p><span className="rows__value">Dr. Sanjeev</span></li>
                <li><span className="rows__name">Lumps, cysts, hydrocele</span><p>Lipoma and sebaceous cyst removal, and hydrocele surgery.</p><span className="rows__value">Dr. Sanjeev</span></li>
              </ul>
              <ul className="rows span-6 start-7">
                <li><span className="rows__name">Pregnancy and delivery</span><p>Check-ups, normal delivery and caesarean section, high-risk pregnancies included.</p><span className="rows__value">Dr. Manisha</span></li>
                <li><span className="rows__name">PCOD, fibroids, cysts</span><p>Diagnosis and treatment of PCOD, fibroids and ovarian cysts, and infertility care.</p><span className="rows__value">Dr. Manisha</span></li>
                <li><span className="rows__name">Hysterectomy</span><p>Laparoscopic or abdominal, when removing the uterus is the right option.</p><span className="rows__value">Dr. Manisha</span></li>
                <li><span className="rows__name">Emergencies</span><p>Acute abdominal pain, wounds, abscesses and diabetic foot, at any hour.</p><span className="rows__value">Casualty</span></li>
              </ul>
            </div>
            <div className="grid">
              <p className="span-12">Each doctor&rsquo;s <a className="text-link" href="#doctors">OPD hours</a> are listed in the next section.</p>
            </div>
          </div>
        </section>

        <section className="section" id="doctors" style={{ "--hm": 2 } as CSSProperties} aria-labelledby="doctors-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="doctors-h">Doctors and OPD hours</h2>
              <p>Both consultants trained in Lucknow and have treated patients in Roorkee for over thirty years.</p>
            </div>
            <div className="grid grid--top">
              <article className="card card--open doctor span-6">
                <h3>Dr. Sanjeev Agarwal</h3>
                <p>Laparoscopic, laser and general surgeon. M.B.B.S., M.S. (Lucknow). Registration 913, Uttarakhand.</p>
                <p className="muted">OPD Monday to Saturday, 10 am to 2 pm and 6 pm to 8 pm.</p>
                <ul className="rows">
                  <li><span className="rows__name">Laparoscopic gallbladder removal</span></li>
                  <li><span className="rows__name">Laparoscopic hernia repair and appendectomy</span></li>
                  <li><span className="rows__name">Laser treatment for piles, fissure, fistula and pilonidal sinus</span></li>
                  <li><span className="rows__name">Laser treatment for varicose veins</span></li>
                </ul>
              </article>
              <article className="card card--open doctor span-6 start-7">
                <h3>Dr. Manisha Agarwal</h3>
                <p>Gynaecologist and obstetrician. M.B.B.S., D.G.O. (Lucknow). Registration 914, Uttarakhand.</p>
                <p className="muted">OPD Monday to Saturday, 10 am to 2 pm.</p>
                <ul className="rows">
                  <li><span className="rows__name">Pregnancy care and normal deliveries</span></li>
                  <li><span className="rows__name">Caesarean section and high-risk pregnancies</span></li>
                  <li><span className="rows__name">Infertility evaluation and treatment</span></li>
                  <li><span className="rows__name">Laparoscopic and abdominal hysterectomy</span></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section statement" id="approach" data-moment="word-highlight" aria-label="Before an operation">
          <div className="wrap">
            <p className="mo-wh__text">Your doctor goes through your reports with you and explains what happens with surgery and without it. An operation is advised only when it is <strong>medically needed</strong>.</p>
          </div>
        </section>

        <section className="section ground-inverse" id="facilities" style={{ "--hm": 2 } as CSSProperties} aria-labelledby="facilities-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="facilities-h">Inside the hospital</h2>
              <p>An operation theatre equipped for keyhole and laser work, a labour room, and private rooms with space for one family member.</p>
            </div>
            <div className="grid grid--top">
              <ul className="rows span-6">
                <li><span className="rows__name">Operation theatre</span><p>Laparoscopic camera system, electrocautery, laser generators, an anaesthesia workstation and multi-parameter monitors.</p></li>
                <li><span className="rows__name">Labour room</span><p>Labour beds, CTG fetal heart monitoring, a newborn resuscitation station and female nursing staff day and night.</p></li>
                <li><span className="rows__name">Private rooms</span><p>Air-conditioned deluxe rooms with a TV and attendant couch, and private rooms, each with a call bell.</p></li>
              <li><span className="rows__name">Nursing</span><p>Nurses on duty around the clock, checking vital signs after surgery and giving medicines on time.</p></li>
              </ul>
              <ul className="rows span-6 start-7">
                <li><span className="rows__name">Laboratory and pharmacy</span><p>Blood tests and ultrasound through partner laboratories, quick reports for surgical and maternity patients, and a pharmacy next door.</p></li>
                <li><span className="rows__name">Casualty</span><p>Oxygen, nebulisation and a crash cart, with a doctor to assess you on arrival and a direct path to the theatre.</p></li>
                <li><span className="rows__name">Infection control</span><p>Instruments sterilised before every case and rooms cleaned daily, to NABH guidelines.</p></li>
              </ul>
            </div>
            <div className="grid">
              <p className="span-12">The <a className="text-link" href="#visit">address and directions</a> are at the end of the page.</p>
            </div>
          </div>
        </section>

  

        <section className="section" id="visit" style={{ "--hm": 2 } as CSSProperties} aria-labelledby="visit-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="visit-h">Visit the hospital</h2>
              <p>Near Chow Mandi and Nehru Nagar, on Civil Lines Road.</p>
            </div>
            <div className="grid grid--top">
              <div className="span-6 stack-4">
                <address className="visit__big">325, Chaw Mandi, Roorkee</address>
                <p>District Haridwar, Uttarakhand 247667</p>
                <a className="link" href="https://maps.google.com/?q=Bhagwati+Hospital+325+Chaw+Mandi+Roorkee">Get directions</a>
                <dl className="hours"><dt>OPD, Monday to Saturday</dt><dd>10 am to 2 pm, 6 pm to 8 pm</dd><dt>Casualty</dt><dd>Open 24 hours</dd></dl>
                <p>Casualty and appointments <a className="text-link" href="tel:+919627408441">+91 96274 08441</a><br />Reception <a className="text-link" href="tel:+919557966896">+91 95579 66896</a><br />Email <a className="text-link" href="mailto:bhagwatihosp@yahoo.co.in">bhagwatihosp@yahoo.co.in</a></p>
              </div>
              <div className="faq span-6 start-7">
                <div className="faq__item"><h3>Is the hospital open on Sundays?</h3><p>Casualty is open every day. Sunday consultations are by appointment only.</p></div>
                <div className="faq__item"><h3>Do I need to book an OPD visit?</h3><p>No. OPD takes walk-in patients by token, but booking by phone means a shorter wait.</p></div>
                <div className="faq__item"><h3>Which reports should I bring?</h3><p>Earlier ultrasound and blood reports, prescriptions and any discharge summaries.</p></div>
                <div className="faq__item"><h3>How long is the stay after surgery?</h3><p>Usually one to two days after keyhole surgery, and same-day or next-day after laser treatment.</p></div>
                <div className="faq__item"><h3>Can family stay in the room?</h3><p>Yes. Private and deluxe rooms have an attendant couch for one person.</p></div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
