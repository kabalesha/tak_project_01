import React, { useState } from "react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HardHat,
  ThumbsUp,
  Clock3,
  Check,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
} from "lucide-react";
import heroImage from "./images/dji_fly_20260914_171844_0037_1789399563530_photo_beautify.jpg";
const photos = {
  hero: heroImage,
  roofer:
    "https://images.unsplash.com/photo-1635424710928-9c9d8c6e7a3b?auto=format&fit=crop&w=1100&q=85",
  project1:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85",
  project2:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  project3:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
};

const services = [
  "Takreparation",
  "Takbyte",
  "Takinspektion",
  "Snörasskydd & taksäkerhet",
];

function Logo() {
  return (
    <a
      className="brand"
      href="#hem"
      aria-label="TakExpert Stockholm – startsida"
    >
      <svg viewBox="0 0 64 54" aria-hidden="true">
        <path d="M5 30 32 5l27 25M14 27v20h36V27" />
        <path d="m26 19 6-6 6 6" />
      </svg>
      <span>
        TakExpert
        <br />
        Stockholm
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    // Demo only: connect this form to your email/CRM backend before publishing.
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Öppna meny"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a className="active" href="#hem" onClick={closeMenu}>
              Hem
            </a>
            <a href="#tjanster" onClick={closeMenu}>
              Tjänster <span className="chevron">⌄</span>
            </a>
            <a href="#om-oss" onClick={closeMenu}>
              Om oss
            </a>
            <a href="#referenser" onClick={closeMenu}>
              Referenser
            </a>
            <a href="#kontakt" onClick={closeMenu}>
              Kontakt
            </a>
          </nav>
          <a className="phone-pill" href="tel:+4681234567">
            <Phone size={17} /> 08-123 45 67
          </a>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="hem"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(13,27,46,.91) 0%, rgba(13,27,46,.62) 43%, rgba(13,27,46,.08) 100%), url(${photos.hero})`,
          }}
        >
          <div className="container hero-content">
            <p className="eyebrow">DIN LOKALA TAKPARTNER</p>
            <h1>
              Takreparation
              <br />i Stockholm
            </h1>
            <h2>Tryggt. Professionellt. Hållbart.</h2>
            <p className="hero-copy">
              Vi hjälper dig med allt från mindre reparationer
              <br className="desktop-break" /> till kompletta takbyten – snabbt
              och noggrant.
            </p>
            <a className="btn btn-yellow" href="#kontakt">
              Begär offert <ArrowRight size={18} />
            </a>
          </div>
          <div className="stockholm-mark" aria-hidden="true">
            <span className="skyline">⌂ ♜ ⌂ ♜ ⌂</span>
            <span>Stockholm</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Våra fördelar">
          <div className="container trust-grid">
            <TrustItem
              icon={<ShieldCheck />}
              title="Erfarenhet & kvalitet"
              text={
                <>
                  Flera års erfarenhet
                  <br />
                  av takarbeten
                </>
              }
            />
            <TrustItem
              icon={<HardHat />}
              title="Lokalt team"
              text={<>Vi finns i Stockholm</>}
            />
            <TrustItem
              icon={<ThumbsUp />}
              title="Fast pris"
              text={<>Inga dolda kostnader</>}
            />
            <TrustItem
              icon={<Clock3 />}
              title="Snabb service"
              text={<>Vi hjälper dig snabbt</>}
            />
          </div>
        </section>

        <section className="intro-section container" id="tjanster">
          <div className="roofer-photo">
            <img src={photos.roofer} alt="Takläggare utför arbete på ett tak" />
            <span className="photo-tag">Kvalitet i varje detalj</span>
          </div>
          <div className="services-copy" id="om-oss">
            <p className="section-kicker">VAD VI GÖR</p>
            <h2>Våra tjänster</h2>
            <p>
              Vi erbjuder kompletta taklösningar för privatpersoner, företag och
              bostadsrättsföreningar i hela Stockholm.
            </p>
            <ul className="service-list">
              {services.map((service) => (
                <li key={service}>
                  <Check size={19} /> {service}
                </li>
              ))}
            </ul>
            <a className="btn btn-outline" href="#kontakt">
              Läs mer om våra tjänster <ArrowRight size={17} />
            </a>
          </div>
          <div className="quote-card" id="kontakt">
            <div className="quote-card-content">
              {sent ? (
                <div className="success-state">
                  <div className="success-icon">
                    <Check />
                  </div>
                  <h2>Tack för din förfrågan!</h2>
                  <p>
                    Det här är en demoversion. Koppla formuläret till din e-post
                    eller ditt CRM för att ta emot riktiga leads.
                  </p>
                  <button
                    className="text-button"
                    onClick={() => setSent(false)}
                  >
                    Skicka en ny förfrågan
                  </button>
                </div>
              ) : (
                <>
                  <p className="section-kicker">KOSTNADSFRI BEDÖMNING</p>
                  <h2>Få en kostnadsfri offert</h2>
                  <p>
                    Beskriv ditt projekt så återkommer vi snart med ett förslag.
                  </p>
                  <form onSubmit={submit}>
                    <label className="sr-only" htmlFor="name">
                      Namn
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Namn"
                      value={form.name}
                      onChange={update}
                      required
                    />
                    <label className="sr-only" htmlFor="phone">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Telefonnummer"
                      value={form.phone}
                      onChange={update}
                      required
                    />
                    <label className="sr-only" htmlFor="message">
                      Beskriv ditt behov
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Beskriv ditt behov..."
                      rows="3"
                      value={form.message}
                      onChange={update}
                      required
                    />
                    <button className="btn btn-yellow submit-btn" type="submit">
                      Skicka förfrågan <ArrowRight size={17} />
                    </button>
                  </form>
                  <small>Vi behandlar dina uppgifter varsamt.</small>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="projects-section container" id="referenser">
          <div className="projects-intro">
            <p className="section-kicker">VÅRT ARBETE</p>
            <h2>Våra tidigare projekt</h2>
            <p>
              Se exempel på takarbeten
              <br />
              vi har utfört i Stockholm.
            </p>
            <a className="btn btn-outline" href="#kontakt">
              Se fler projekt <ArrowRight size={17} />
            </a>
          </div>
          <Project
            image={photos.project1}
            title="Takrenovering"
            location="Stockholm"
          />
          <Project
            image={photos.project2}
            title="Nytt tegeltak"
            location="Nacka"
          />
          <Project
            image={photos.project3}
            title="Plåttak & detaljer"
            location="Solna"
          />
        </section>

        <section className="testimonials">
          <div className="container">
            <p className="section-kicker">KUNDOMDÖMEN</p>
            <h2>Vad våra kunder säger</h2>
            <div className="review-grid">
              <Review
                quote="Proffsigt bemötande, snabb service och ett perfekt resultat!"
                name="Anna K."
                area="Södermalm"
              />
              <Review
                quote="TakExpert gjorde vårt takbyte smidigt och vi är mycket nöjda."
                name="Erik L."
                area="Östermalm"
              />
              <Review
                quote="Pålitliga, kunniga och lätta att ha att göra med."
                name="Maria S."
                area="Vasastan"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <Logo />
          <nav className="footer-nav">
            <a href="#hem">Hem</a>
            <a href="#tjanster">Tjänster</a>
            <a href="#om-oss">Om oss</a>
            <a href="#referenser">Referenser</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <div className="footer-contact">
            <a href="tel:+4681234567">
              <Phone size={17} /> 08-123 45 67
            </a>
            <a className="btn btn-yellow" href="#kontakt">
              Begär offert <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} TakExpert Stockholm. Alla rättigheter
            förbehållna.
          </span>
          <span className="footer-address">
            <MapPin size={14} /> Stockholm, Sverige
          </span>
          <div className="socials">
            <a href="#kontakt" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#kontakt" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#kontakt" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrustItem({ icon, title, text }) {
  return (
    <div className="trust-item">
      <div className="trust-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}
function Project({ image, title, location }) {
  return (
    <article className="project-card">
      <img src={image} alt={`${title} – referensprojekt`} />
      <div className="project-caption">
        <strong>{title}</strong>
        <span>{location}</span>
      </div>
    </article>
  );
}
function Review({ quote, name, area }) {
  return (
    <article className="review">
      <span className="quote-mark">“</span>
      <p>”{quote}”</p>
      <div className="stars" aria-label="5 av 5 stjärnor">
        ★★★★★
      </div>
      <small>
        – {name}, {area}
      </small>
    </article>
  );
}

export default App;
