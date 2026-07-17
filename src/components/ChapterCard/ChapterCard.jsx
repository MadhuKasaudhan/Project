import { ArrowUpRight } from 'lucide-react';

function ChapterCard() {
  return (
    <section className="chapter-card">
      <div className="chapter-card-main">
        <div>
          <h2>UIET Chandigarh Chapter</h2>
          <p className="chapter-subtitle">Panjab University</p>
          <p className="chapter-description">
            A premier engineering and management hub fostering innovation in the heart of
            Chandigarh.
          </p>
          <p className="chapter-description">
            Our chapter focuses on deep-tech startups, sustainable solutions, and industry-aligned
            mentorship.
          </p>
          <p className="chapter-description">
            Join a community of 500+ builders and thinkers.
          </p>
        </div>

        <div className="chapter-status-pill">STATUS: ACTIVE</div>
      </div>

      <div className="chapter-divider" />

      <div className="chapter-mission">
        <h3>Mission Statement</h3>
        <blockquote>
          “Empowering the next generation of engineers to become visionary entrepreneurs through
          collaborative growth and orbit-shifting opportunities.”
        </blockquote>
      </div>
    </section>
  );
}

export default ChapterCard;
