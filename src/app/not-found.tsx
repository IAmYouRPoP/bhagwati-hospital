export default function NotFound() {
  return (
    <section className="hero hero--statement" aria-labelledby="nf-h">
      <div className="wrap">
        <div className="hero-text hero__in">
          <div>
            <h1 id="nf-h">This page is not on the hospital&rsquo;s site</h1>
            <p className="hero__lead">
              The link may be old. Everything is now on one page: treatments, doctors, facilities and
              how to reach the hospital.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="/">
                Go to the home page
              </a>
              <a className="btn btn--secondary" href="tel:+919627408441">
                Call casualty
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
