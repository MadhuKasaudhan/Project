import { ArrowRight, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <Sparkles size={16} />
          BOCC Membership Portal
        </div>
        <h1>Welcome to BOCC!</h1>
        <p>
          You&apos;re joining the Business Orbit Campus Club at your college. This chapter will be
          your home for startup building, mentorship, networking, events, and entrepreneurial
          opportunities.
        </p>
      </div>

      <div className="hero-illustration" aria-label="Illustration placeholder">
        <div className="hero-illustration-card">
          <div className="hero-illustration-icon">✦</div>
          <span>Awaiting Verification</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
