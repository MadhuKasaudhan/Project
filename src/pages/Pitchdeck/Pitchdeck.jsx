import React, { useState } from "react";
import "./pitchDeck.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Pitch Decks", icon: "\u{1F4C4}" },
  { label: "Startups", icon: "\u{1F680}" },
  { label: "Conversations", icon: "\u{1F4AC}" },
  { label: "Watchlist", icon: "\u{1F441}" },
];

const SLIDES = [
  { id: 1, label: "Executive Summary" },
  { id: 2, label: "Problem" },
  { id: 3, label: "Solution" },
  { id: 4, label: "Market Analysis" },
  { id: 5, label: "Technology" },
  { id: 6, label: "Business Model" },
  { id: 7, label: "Traction" },
  { id: 8, label: "Team" },
];

const TOTAL_SLIDES = 18;

const STATS = [
  { label: "Market Size", value: "$2B", sub: "TAM" },
  { label: "Revenue", value: "$1.2M", sub: "ARR" },
  { label: "Funding Req", value: "$5.0M", sub: "" },
  { label: "Current Stage", value: "Series A", sub: "" },
];

const FOUNDING_TEAM = [
  { id: 1, name: "Dr. Elena Vance", role: "CEO — NASA Alum" },
  { id: 2, name: "Marcus Thorne", role: "CTO — ex-SpaceX" },
];

const KEY_HIGHLIGHTS = [
  "Reached $1.2M ARR in 14 months",
  "500+ Early-access enterprise users",
  "300% YoY growth in test efficiency",
  "4 Patents pending on ionic thrust",
];

export default function PitchDeckViewer() {
  const [activeNav, setActiveNav] = useState("Pitch Decks");
  const [currentSlide, setCurrentSlide] = useState(4);
  const [investorNotes, setInvestorNotes] = useState("");

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(1, prev - 1));
  };
  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(TOTAL_SLIDES, prev + 1));
  };

  const handleStartConversation = () => {
    // TODO: navigate to / open conversation with the founder
  };
  const handleRequestPitchMeeting = () => {
    // TODO: open meeting request flow
  };

  return (
    <div className="pv-page">
      {/* Sidebar */}
      <aside className="pv-sidebar">
        <div className="pv-brand">
          <span className="pv-brand-title">BOCC</span>
          <span className="pv-brand-sub">Investor Portal</span>
        </div>

        <nav className="pv-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`pv-nav-item ${activeNav === item.label ? "pv-nav-active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <span className="pv-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Slide list column */}
      <section className="pv-slides-col">
        <div className="pv-slides-header">
          <div className="pv-slides-title">Pitch Deck</div>
          <div className="pv-slides-count">{TOTAL_SLIDES} Slides</div>
        </div>

        <div className="pv-slides-list">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className={`pv-slide-thumb-wrap ${
                slide.id === currentSlide ? "pv-slide-active" : ""
              }`}
              onClick={() => setCurrentSlide(slide.id)}
            >
              <div className="pv-slide-thumb">
                {slide.id === currentSlide && <span className="pv-slide-active-label">Active</span>}
              </div>
              <div className="pv-slide-label">
                {slide.id}. {slide.label}
              </div>
            </div>
          ))}
        </div>

        <div className="pv-slides-footer">
          <div className="pv-footer-avatar" />
          <div className="pv-footer-info">
            <div className="pv-footer-name">Alex Rivera</div>
            <div className="pv-footer-role">Principal Investor</div>
          </div>
        </div>
        <button className="pv-start-convo-btn" onClick={handleStartConversation}>
          &#128172; Start Conversation
        </button>
      </section>

      {/* Main viewer */}
      <main className="pv-main">
        <div className="pv-breadcrumb">
          Pitch Decks <span className="pv-breadcrumb-sep">&#8250;</span> AeroFlow Dynamics
        </div>

        <div className="pv-viewer-header">
          <h1 className="pv-viewer-title">Market Opportunity &amp; Dynamics</h1>
          <div className="pv-viewer-icons">
            <span className="pv-icon-btn">&#128269;</span>
            <span className="pv-icon-btn">&#9974;</span>
            <span className="pv-icon-btn">&#11015;</span>
          </div>
        </div>

        <div className="pv-slide-canvas">
          <div className="pv-chart-icon">&#128202;</div>
          <div className="pv-chart-label">Visualizing $2B Market Projection</div>
        </div>

        <div className="pv-slide-nav">
          <button className="pv-nav-btn" onClick={handlePrevious}>
            &#8592; Previous
          </button>
          <span className="pv-slide-counter">
            Slide {currentSlide} of {TOTAL_SLIDES}
          </span>
          <button className="pv-nav-btn pv-nav-btn-dark" onClick={handleNext}>
            Next &#8594;
          </button>
        </div>

        <div className="pv-stats-row">
          {STATS.map((stat) => (
            <div className="pv-stat-card" key={stat.label}>
              <div className="pv-stat-label">{stat.label}</div>
              <div className="pv-stat-value">{stat.value}</div>
              {stat.sub && <div className="pv-stat-sub">{stat.sub}</div>}
            </div>
          ))}
        </div>
      </main>

      {/* Company info panel */}
      <aside className="pv-info-panel">
        <div className="pv-company-header">
          <div className="pv-company-logo" />
          <div className="pv-company-meta">
            <span className="pv-series-badge">SERIES A</span>
            <div className="pv-company-location">Palo Alto, CA</div>
          </div>
        </div>
        <div className="pv-company-name">AeroFlow Dynamics</div>
        <p className="pv-company-tagline">
          Next-gen propulsion systems for sustainable aviation.
        </p>
        <div className="pv-company-links">
          <span className="pv-company-website">&#128279; aeroflow.tech</span>
          <span className="pv-company-sep">|</span>
          <span className="pv-company-tag">GREEN TECH</span>
        </div>

        <div className="pv-panel-section">
          <div className="pv-panel-section-label">Founding Team</div>
          {FOUNDING_TEAM.map((member) => (
            <div className="pv-team-row" key={member.id}>
              <div className="pv-team-avatar" />
              <div>
                <div className="pv-team-name">{member.name}</div>
                <div className="pv-team-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pv-panel-section">
          <div className="pv-panel-section-label">Key Highlights</div>
          <ul className="pv-highlights-list">
            {KEY_HIGHLIGHTS.map((item, i) => (
              <li key={i}>
                <span className="pv-check">&#10003;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pv-panel-section">
          <div className="pv-panel-section-label">Investor Notes</div>
          <textarea
            value={investorNotes}
            onChange={(e) => setInvestorNotes(e.target.value)}
            placeholder="Add your due diligence notes here..."
          />
        </div>

        <button className="pv-request-meeting-btn" onClick={handleRequestPitchMeeting}>
          &#128197; Request Pitch Meeting
        </button>
      </aside>
    </div>
  );
}