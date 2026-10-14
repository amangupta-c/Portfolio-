import { useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Layers3, MousePointer2 } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2800);
  };

  return (
    <main>
      <nav className="navbar shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Forma home">
          <span className="brand-mark"><Sparkles size={17} strokeWidth={2.5} /></span>
          <span>forma<span className="brand-dot">.</span></span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <button className="nav-cta" onClick={() => showMessage("Great! Let's build something amazing.")}>
          Let’s talk <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero shell" id="home">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> DESIGN THAT MOVES YOU</div>
          <h1>Ideas deserve<br /><span>a beautiful</span> beginning.</h1>
          <p className="hero-copy">
            We turn bold ideas into thoughtful digital experiences that feel as good as they look.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">
              Explore what we do <ArrowUpRight size={18} />
            </a>
            <button className="button button-secondary" onClick={() => showMessage("Our story: curious minds, thoughtful design, and meaningful digital experiences.")}>
              Our story
            </button>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Good ideas. Great experiences.</span>
          </div>
        </div>

        <div className="floating-card card-top">
          <span className="floating-icon"><Layers3 size={18} /></span>
          <span><strong>Less noise.</strong><small>More meaning.</small></span>
        </div>
        <div className="floating-card card-bottom">
          <span className="mini-avatars"><i>A</i><i>F</i><i>+</i></span>
          <span><strong>Made for people</strong><small>Always human-first</small></span>
        </div>
        <div className="cursor-badge"><MousePointer2 size={18} /><span>Creative mode</span></div>
        <div className="hero-spark spark-a">✳</div>
        <div className="hero-spark spark-b">✦</div>
      </section>

      <section className="intro shell" id="about">
        <p className="section-kicker">A LITTLE DIFFERENT BY DESIGN</p>
        <h2>Make it clear.<br /><span>Make it memorable.</span></h2>
        <p className="intro-copy">A good website does more than look nice. It guides people, tells your story, and makes the next step feel effortless.</p>
      </section>

      <section className="features shell" id="features">
        <article className="feature-card feature-lilac">
          <div className="feature-number">01 / STRATEGY</div>
          <div className="feature-icon"><Sparkles size={22} /></div>
          <h3>Start with a spark.</h3>
          <p>Clear thinking and a strong idea make every pixel work harder.</p>
          <a href="#contact" aria-label="Learn about strategy"><ArrowUpRight size={20} /></a>
        </article>
        <article className="feature-card feature-blue">
          <div className="feature-number">02 / DESIGN</div>
          <div className="feature-icon"><Layers3 size={22} /></div>
          <h3>Make it feel right.</h3>
          <p>Friendly visuals, useful details, and a rhythm that feels natural.</p>
          <a href="#contact" aria-label="Learn about design"><ArrowUpRight size={20} /></a>
        </article>
        <article className="feature-card feature-pink">
          <div className="feature-number">03 / EXPERIENCE</div>
          <div className="feature-icon"><MousePointer2 size={22} /></div>
          <h3>Keep it moving.</h3>
          <p>Responsive layouts and thoughtful interactions on every screen.</p>
          <a href="#contact" aria-label="Learn about experience"><ArrowUpRight size={20} /></a>
        </article>
      </section>

      <section className="contact shell" id="contact">
        <div>
          <p className="section-kicker">HAVE A GOOD ONE?</p>
          <h2>Let’s make your<br /><span>next idea happen.</span></h2>
        </div>
        <button className="button button-dark" onClick={() => showMessage("Thanks for stopping by! Add your email/contact details here.")}>
          Start a conversation <ArrowUpRight size={18} />
        </button>
      </section>

      <footer className="footer shell">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><Sparkles size={16} /></span><span>forma<span className="brand-dot">.</span></span></a>
        <span>© 2026 Forma Studio. Made with intention.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>

      {message && <div className="toast" role="status">{message}</div>}
    </main>
  );
}