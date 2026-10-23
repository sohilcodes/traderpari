"use client";

import { useEffect, useState } from "react";
import {
ArrowDown,
ArrowDownRight,
ArrowRight,
ArrowUpRight,
Check,
ChevronDown,
CircleHelp,
Clock3,
Eye,
GraduationCap,
Menu,
ShieldCheck,
Sparkles,
Target,
TrendingUp,
X,
Zap,
} from "lucide-react";

const TELEGRAM_LINK = "https://t.me/+czomSkb2uIgyNjdl";

const rotatingWords = [
"Learn smarter.",
"Study patterns.",
"Manage risk.",
"Stay disciplined.",
];

const faqs = [
{
question: "What is Trade With Pari?",
answer:
"Trade With Pari is a community for color trading-related educational content, session updates, and market observations. Always research independently before making financial decisions.",
},
{
question: "Are predictions guaranteed to win?",
answer:
"No. Color trading outcomes are uncertain, and no prediction can guarantee a win. You can lose money. Never treat educational content as guaranteed financial returns.",
},
{
question: "How do I join the Telegram channel?",
answer:
"Tap any Join Telegram button on this page. It will open the Trade With Pari Telegram invitation link.",
},
{
question: "Should I use real money to learn?",
answer:
"Start by learning the rules and practicing with no-money examples where possible. Never use money needed for essential expenses, and follow the laws and age requirements applicable to you.",
},
];

const steps = [
{
number: "01",
title: "Understand",
text: "Learn the game format, rules, terminology, and limitations before participating.",
icon: GraduationCap,
},
{
number: "02",
title: "Observe",
text: "Study historical outcomes without assuming that past results predict the next one.",
icon: Eye,
},
{
number: "03",
title: "Manage risk",
text: "Set firm limits, avoid chasing losses, and never risk essential money.",
icon: ShieldCheck,
},
];

export default function Home() {
const [wordIndex, setWordIndex] = useState(0);
const [menuOpen, setMenuOpen] = useState(false);
const [openFaq, setOpenFaq] = useState<number | null>(0);
const [toast, setToast] = useState(false);
const [demoMode, setDemoMode] = useState<"overview" | "learn" | "risk">(
"overview",
);
const [visibleStats, setVisibleStats] = useState(false);

useEffect(() => {
const timer = window.setInterval(() => {
setWordIndex((current) => (current + 1) % rotatingWords.length);
}, 2500);

const observer = new IntersectionObserver(
  (entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      setVisibleStats(true);
    }
  },
  { threshold: 0.2 },
);

const statsElement = document.getElementById("stats");
if (statsElement) observer.observe(statsElement);

return () => {
  window.clearInterval(timer);
  observer.disconnect();
};

}, []);

function joinTelegram() {
setToast(true);

window.setTimeout(() => {
  window.open(TELEGRAM_LINK, "_blank", "noopener,noreferrer");
  setToast(false);
}, 650);

}

function scrollToSection(id: string) {
setMenuOpen(false);
document.getElementById(id)?.scrollIntoView({
behavior: "smooth",
block: "start",
});
}

return (
<main>
<div className="announcement">
<span className="announcement-dot" />
EDUCATION FIRST. RISK AWARENESS ALWAYS.
<ArrowRight size={13} />
</div>

  <header className="navbar">
    <a
      className="brand"
      href="#home"
      aria-label="Trade With Pari home"
    >
      <span className="brand-mark">P<span>.</span></span>
      <span className="brand-name">
        TRADE WITH <strong>PARI</strong>
        <small>COLOR TRADING COMMUNITY</small>
      </span>
    </a>

    <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
      <button onClick={() => scrollToSection("home")}>Home</button>
      <button onClick={() => scrollToSection("features")}>Features</button>
      <button onClick={() => scrollToSection("how-it-works")}>
        How it works
      </button>
      <button onClick={() => scrollToSection("faq")}>FAQ</button>
      <button className="mobile-join" onClick={joinTelegram}>
        Join Telegram <ArrowUpRight size={16} />
      </button>
    </nav>

    <button className="nav-cta" onClick={joinTelegram}>
      Join Community <ArrowUpRight size={16} />
    </button>

    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      {menuOpen ? <X /> : <Menu />}
    </button>
  </header>

  <section className="hero section-wrap" id="home">
    <div className="hero-grid">
      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="eyebrow-icon">
            <Sparkles size={13} />
          </span>
          A SMARTER WAY TO LEARN
        </div>

        <h1>
          Color trading.
          <br />
          <span className="hero-highlight">{rotatingWords[wordIndex]}</span>
        </h1>

        <p className="hero-description">
          Explore color trading concepts, understand patterns in historical
          results, and build a more disciplined approach to risk.
        </p>

        <div className="hero-actions">
          <button className="button-primary" onClick={joinTelegram}>
            Join Telegram Channel <ArrowUpRight size={18} />
          </button>
          <button
            className="button-secondary"
            onClick={() => scrollToSection("how-it-works")}
          >
            Explore the platform <ArrowDown size={16} />
          </button>
        </div>

        <div className="hero-note">
          <ShieldCheck size={15} />
          <span>No guaranteed wins. No false profit promises.</span>
        </div>

        <div className="hero-mini-stats">
          <div>
            <strong>01</strong>
            <span>Learn first</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Observe data</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Manage risk</span>
          </div>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="visual-glow" />

        <div className="floating-tag tag-top">
          <span className="status-dot green-dot" />
          EDUCATION MODE
        </div>

        <div className="terminal-card">
          <div className="terminal-head">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span>PARI / INSIGHTS</span>
            <span className="terminal-live">● DEMO</span>
          </div>

          <div className="terminal-content">
            <div className="terminal-label">
              <span>COLOR OUTCOME EXPLORER</span>
              <CircleHelp size={15} />
            </div>

            <div className="color-orbs">
              <div className="color-orb orb-green">
                <span>G</span>
                <small>GREEN</small>
              </div>
              <div className="color-orb orb-red">
                <span>R</span>
                <small>RED</small>
              </div>
              <div className="color-orb orb-violet">
                <span>V</span>
                <small>VIOLET</small>
              </div>
            </div>

            <div className="terminal-divider" />

            <div className="terminal-metric">
              <div>
                <span className="metric-label">ANALYSIS STATUS</span>
                <strong>Learning dashboard</strong>
              </div>
              <span className="metric-badge">DEMO</span>
            </div>

            <div className="terminal-bars">
              <div className="bar-row">
                <span>Understand rules</span>
                <div className="bar-track">
                  <div className="bar-fill fill-green" />
                </div>
                <span>01</span>
              </div>
              <div className="bar-row">
                <span>Review history</span>
                <div className="bar-track">
                  <div className="bar-fill fill-red" />
                </div>
                <span>02</span>
              </div>
              <div className="bar-row">
                <span>Assess risk</span>
                <div className="bar-track">
                  <div className="bar-fill fill-violet" />
                </div>
                <span>03</span>
              </div>
            </div>

            <div className="terminal-disclaimer">
              <ShieldCheck size={14} />
              Illustrative interface · Not a live prediction
            </div>
          </div>
        </div>

        <div className="floating-tag tag-bottom">
          <span className="status-dot red-dot" />
          STAY DISCIPLINED
        </div>
      </div>
    </div>

    <div className="hero-bottom-line">
      <span>BUILT FOR LEARNING</span>
      <span className="line" />
      <span>DESIGNED FOR MOBILE</span>
      <span className="line" />
      <span>RISK-AWARE BY DESIGN</span>
    </div>
  </section>

  <section className="stats-section" id="stats">
    <div className="stats-grid section-wrap">
      <div className="stat-item">
        <div className="stat-icon green-icon">
          <GraduationCap size={19} />
        </div>
        <div>
          <strong>{visibleStats ? "01" : "00"}</strong>
          <span>LEARN THE BASICS</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon red-icon">
          <Eye size={19} />
        </div>
        <div>
          <strong>{visibleStats ? "02" : "00"}</strong>
          <span>OBSERVE HISTORY</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon violet-icon">
          <ShieldCheck size={19} />
        </div>
        <div>
          <strong>{visibleStats ? "03" : "00"}</strong>
          <span>CONTROL YOUR RISK</span>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon gold-icon">
          <Clock3 size={19} />
        </div>
        <div>
          <strong>24/7</strong>
          <span>LEARN AT YOUR PACE</span>
        </div>
      </div>
    </div>
  </section>

  <section className="section-wrap features-section" id="features">
    <div className="section-heading">
      <div className="eyebrow">
        <span className="eyebrow-icon">
          <Zap size={13} />
        </span>
        THE PARI EXPERIENCE
      </div>
      <h2>
        Less noise.
        <br />
        <span>More understanding.</span>
      </h2>
      <p>
        A clean, structured space to explore the concepts behind color
        trading without unrealistic claims or unnecessary hype.
      </p>
    </div>

    <div className="bento-grid">
      <article className="bento-card bento-large">
        <div className="bento-top">
          <span className="card-index">01 / LEARN</span>
          <span className="card-icon"><GraduationCap size={20} /></span>
        </div>
        <div className="learning-illustration">
          <div className="learn-line line-one" />
          <div className="learn-line line-two" />
          <div className="learn-line line-three" />
          <div className="learn-center">
            <Target size={34} />
          </div>
          <span className="learn-node node-one">RULES</span>
          <span className="learn-node node-two">DATA</span>
          <span className="learn-node node-three">RISK</span>
        </div>
        <h3>Understand before you act.</h3>
        <p>
          Start with the format, rules, historical results, and the limits
          of prediction-based decisions.
        </p>
      </article>

      <article className="bento-card bento-risk">
        <div className="bento-top">
          <span className="card-index">02 / DISCIPLINE</span>
          <span className="card-icon red-card-icon">
            <ShieldCheck size={20} />
          </span>
        </div>
        <div className="risk-visual">
          <div className="risk-ring">
            <ShieldCheck size={42} />
          </div>
          <span className="risk-pill">SET LIMITS</span>
          <span className="risk-pill">NO CHASING</span>
        </div>
        <h3>Protect your downside.</h3>
        <p>
          Learn why spending limits and loss limits matter more than chasing
          a winning streak.
        </p>
      </article>

      <article className="bento-card bento-data">
        <div className="bento-top">
          <span className="card-index">03 / OBSERVE</span>
          <span className="card-icon">
            <TrendingUp size={20} />
          </span>
        </div>
        <div className="data-visual">
          {[35, 58, 43, 75, 51, 88, 62, 70, 46, 82, 60, 95].map(
            (height, index) => (
              <div
                className={`data-bar ${index % 3 === 0 ? "data-red" : ""}`}
                key={index}
                style={{ height: `${height}%` }}
              />
            ),
          )}
        </div>
        <div className="data-caption">
          <span>ILLUSTRATIVE DATA</span>
          <span>NOT LIVE RESULTS</span>
        </div>
        <h3>History is information.</h3>
        <p>
          Review past outcomes thoughtfully, without assuming they determine
          the next result.
        </p>
      </article>

      <article className="bento-card bento-community">
        <div className="bento-top">
          <span className="card-index">04 / COMMUNITY</span>
          <span className="card-icon">
            <Sparkles size={20} />
          </span>
        </div>
        <div className="community-graphic">
          <div className="community-circle">P</div>
          <span className="community-star star-one">✦</span>
          <span className="community-star star-two">✧</span>
          <span className="community-star star-three">✦</span>
        </div>
        <h3>One place to learn.</h3>
        <p>
          Visit our Telegram channel for community updates and available
          educational content.
        </p>
        <button className="text-link" onClick={joinTelegram}>
          Explore Telegram <ArrowUpRight size={16} />
        </button>
      </article>
    </div>
  </section>

  <section className="interactive-section">
    <div className="section-wrap interactive-grid">
      <div className="interactive-copy">
        <div className="eyebrow">
          <span className="eyebrow-icon">
            <Sparkles size={13} />
          </span>
          TAKE A QUICK TOUR
        </div>
        <h2>
          Explore the
          <br />
          <span>Pari dashboard.</span>
        </h2>
        <p>
          Tap through the demo panels to explore learning topics. This
          interactive preview does not connect to a live trading platform.
        </p>

        <div className="tour-options">
          <button
            className={demoMode === "overview" ? "tour-option active" : "tour-option"}
            onClick={() => setDemoMode("overview")}
          >
            <span className="tour-option-icon"><Eye size={18} /></span>
            <span><strong>Overview</strong><small>Explore the basics</small></span>
            <ArrowRight size={16} />
          </button>
          <button
            className={demoMode === "learn" ? "tour-option active" : "tour-option"}
            onClick={() => setDemoMode("learn")}
          >
            <span className="tour-option-icon"><GraduationCap size={18} /></span>
            <span><strong>Learning mode</strong><small>Understand the format</small></span>
            <ArrowRight size={16} />
          </button>
          <button
            className={demoMode === "risk" ? "tour-option active" : "tour-option"}
            onClick={() => setDemoMode("risk")}
          >
            <span className="tour-option-icon"><ShieldCheck size={18} /></span>
            <span><strong>Risk awareness</strong><small>Build safer habits</small></span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="tour-preview">
        <div className="tour-window-head">
          <div className="window-dots"><span /><span /><span /></div>
          <span>PARI / INTERACTIVE DEMO</span>
          <span className="demo-label">PREVIEW</span>
        </div>
        <div className="tour-window-body">
          <div className="tour-welcome">
            <span className="tour-welcome-icon">
              {demoMode === "risk" ? (
                <ShieldCheck size={23} />
              ) : demoMode === "learn" ? (
                <GraduationCap size={23} />
              ) : (
                <Sparkles size={23} />
              )}
            </span>
            <div>
              <small>WELCOME TO PARI</small>
              <h3>
                {demoMode === "risk"
                  ? "Risk awareness"
                  : demoMode === "learn"
                    ? "Learning mode"
                    : "Your learning space"}
              </h3>
            </div>
          </div>

          <p className="tour-message">
            {demoMode === "risk"
              ? "Define limits before you participate. Never chase losses or use money needed for essentials."
              : demoMode === "learn"
                ? "Understand the rules and format first. Historical outcomes cannot guarantee what happens next."
                : "Explore educational topics and community updates at your own pace."}
          </p>

          <div className="tour-checklist">
            {(demoMode === "risk"
              ? ["Set a spending limit", "Never chase losses", "Stop when your limit is reached"]
              : demoMode === "learn"
                ? ["Read the game rules", "Review historical results", "Understand uncertainty"]
                : ["Explore the basics", "Review available content", "Keep expectations realistic"]
            ).map((item) => (
              <div className="tour-check" key={item}>
                <span><Check size={13} /></span>
                {item}
              </div>
            ))}
          </div>

          <div className="tour-footer">
            <span><span className="status-dot green-dot" /> INTERACTIVE PREVIEW</span>
            <span>DEMO ONLY</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section-wrap process-section" id="how-it-works">
    <div className="section-heading centered-heading">
      <div className="eyebrow">
        <span className="eyebrow-icon"><Target size={13} /></span>
        YOUR LEARNING JOURNEY
      </div>
      <h2>
        Three steps.
        <br />
        <span>A better foundation.</span>
      </h2>
      <p>
        Build knowledge gradually. There is no shortcut that can remove
        uncertainty from color trading.
      </p>
    </div>

    <div className="process-grid">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <article className="process-card" key={step.number}>
            <div className="process-top">
              <span className="process-number">{step.number}</span>
              <span className="process-icon"><Icon size={23} /></span>
            </div>
            <div className="process-connector">
              <span />
              <span />
              <span />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            {index < steps.length - 1 && (
              <ArrowRight className="process-arrow" size={18} />
            )}
          </article>
        );
      })}
    </div>
  </section>

  <section className="comparison-section">
    <div className="section-wrap comparison-grid">
      <div className="comparison-copy">
        <div className="eyebrow">
          <span className="eyebrow-icon"><Zap size={13} /></span>
          A DIFFERENT APPROACH
        </div>
        <h2>
          Hype fades.
          <br />
          <span>Discipline stays.</span>
        </h2>
        <p>
          We believe an honest learning experience is better than flashy
          promises. Compare the mindset, not promised outcomes.
        </p>
        <button className="button-primary" onClick={joinTelegram}>
          Explore the Community <ArrowUpRight size={17} />
        </button>
      </div>

      <div className="comparison-table">
        <div className="comparison-table-head">
          <span>THE APPROACH</span>
          <span className="negative-head">HYPE-FIRST</span>
          <span className="positive-head">PARI APPROACH</span>
        </div>
        {[
          ["Expectations", "Guaranteed wins", "Acknowledge uncertainty"],
          ["Learning", "Skip the basics", "Understand the rules"],
          ["Historical data", "Assume repetition", "Review with caution"],
          ["Risk", "Chase losses", "Set personal limits"],
          ["Decisions", "Follow blindly", "Think independently"],
        ].map((row) => (
          <div className="comparison-row" key={row[0]}>
            <span className="comparison-topic">{row[0]}</span>
            <span className="comparison-negative">
              <X size={14} /> {row[1]}
            </span>
            <span className="comparison-positive">
              <Check size={14} /> {row[2]}
            </span>
          </div>
        ))}
        <div className="comparison-footnote">
          <ShieldCheck size={15} />
          No strategy can guarantee a profitable outcome.
        </div>
      </div>
    </div>
  </section>

  <section className="section-wrap community-section">
    <div className="community-banner">
      <div className="banner-orb banner-orb-one" />
      <div className="banner-orb banner-orb-two" />
      <div className="banner-content">
        <div className="eyebrow">
          <span className="eyebrow-icon"><Sparkles size={13} /></span>
          YOUR NEXT STEP
        </div>
        <h2>
          Curious about color trading?
          <br />
          <span>Start with learning.</span>
        </h2>
        <p>
          Join Trade With Pari on Telegram to explore community updates and
          available educational content.
        </p>
        <button className="button-primary banner-button" onClick={joinTelegram}>
          Join Trade With Pari <ArrowUpRight size={18} />
        </button>
        <span className="banner-small-note">
          Joining is optional. Outcomes are never guaranteed.
        </span>
      </div>
      <div className="banner-symbol">P<span>.</span></div>
    </div>
  </section>

  <section className="section-wrap faq-section" id="faq">
    <div className="faq-heading">
      <div className="eyebrow">
        <span className="eyebrow-icon"><CircleHelp size={13} /></span>
        GOT QUESTIONS?
      </div>
      <h2>
        Frequently asked
        <br />
        <span>questions.</span>
      </h2>
      <p>Clear answers before you join the community.</p>
    </div>

    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div
          className={openFaq === index ? "faq-item faq-active" : "faq-item"}
          key={faq.question}
        >
          <button
            className="faq-question"
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            aria-expanded={openFaq === index}
          >
            <span><small>0{index + 1}</small>{faq.question}</span>
            <ChevronDown size={19} />
          </button>
          {openFaq === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  </section>

  <footer className="footer">
    <div className="section-wrap">
      <div className="footer-main">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">P<span>.</span></span>
          <span className="brand-name">
            TRADE WITH <strong>PARI</strong>
            <small>COLOR TRADING COMMUNITY</small>
          </span>
        </a>
        <p>
          Educational content and community updates for a more informed,
          risk-aware approach.
        </p>
        <button className="footer-join" onClick={joinTelegram}>
          Join Telegram <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Trade With Pari.</span>
        <span>LEARN · OBSERVE · MANAGE RISK</span>
      </div>

      <div className="disclaimer">
        <strong>IMPORTANT DISCLAIMER</strong>
        <p>
          This website is for informational and educational purposes only.
          Color trading and prediction-based games can involve substantial
          risk of loss and may be restricted or illegal in some
          jurisdictions. No outcome, signal, prediction, or return is
          guaranteed. Historical results do not predict future outcomes.
          This site does not provide financial, investment, or legal advice.
          Check applicable laws and age requirements before participating.
        </p>
      </div>
    </div>
  </footer>

  {toast && (
    <div className="success-toast" role="status">
      <span className="toast-check"><Check size={17} /></span>
      <span>
        <strong>Opening Telegram</strong>
        <small>Taking you to Trade With Pari…</small>
      </span>
    </div>
  )}

  <a
    className="floating-join"
    href={TELEGRAM_LINK}
    target="_blank"
    rel="noreferrer"
    aria-label="Join Trade With Pari on Telegram"
  >
    <ArrowUpRight size={20} />
  </a>
</main>

);
}
