import React, { useState } from "react";
import "./incomingPitchDecks.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Pitch Decks", icon: "\u{1F4C4}" },
  { label: "Startups", icon: "\u{1F680}" },
  { label: "Conversations", icon: "\u{1F4AC}" },
  { label: "Watchlist", icon: "\u{1F441}" },
];

const DECKS = [
  {
    id: 1,
    name: "NeuraLinker",
    founder: "Sarah Jenkins",
    chapter: "Boston Chapter",
    stage: "MVP",
    submitted: "Oct 12",
    tags: ["AI/ML", "SaaS"],
    description:
      "Revolutionizing distributed computing by leveraging dormant browser processing power for larg...",
    targetRaise: "$1.2M",
  },
  {
    id: 2,
    name: "EcoGro Systems",
    founder: "Marcus Chen",
    chapter: "SF Chapter",
    stage: "Traction",
    submitted: "Oct 10",
    tags: ["AgTech", "Sustainability"],
    description:
      "Automated vertical hydroponic systems for urban restaurants, reducing food transport emissions ...",
    targetRaise: "$750K",
  },
  {
    id: 3,
    name: "Solara Energy",
    founder: "Elena Rodriguez",
    chapter: "Miami Chapter",
    stage: "Pre-Seed",
    submitted: "Oct 08",
    tags: ["Clean Energy", "Hardware"],
    description:
      "Next-gen thin-film solar transparent coating for commercial skyscrapers, turning entire glass facades into...",
    targetRaise: "$2.5M",
  },
  {
    id: 4,
    name: "Vellum Labs",
    founder: "David Wu",
    chapter: "NY Chapter",
    stage: "MVP",
    submitted: "Oct 05",
    tags: ["FinTech", "Legal"],
    description:
      "Smart-contract platform for automated trust fund management, ensuring conditional asset transfe...",
    targetRaise: "$450K",
  },
  {
    id: 5,
    name: "BioSense",
    founder: "Dr. Amara Okafor",
    chapter: "Chicago Chapter",
    stage: "Scaling",
    submitted: "Oct 03",
    tags: ["HealthTech", "Bio"],
    description:
      "Non-invasive glucose monitoring via wearable photonic sensors, eliminating the need for daily pin...",
    targetRaise: "$4.8M",
  },
  {
    id: 6,
    name: "OrbitLogistics",
    founder: "Kyle Thompson",
    chapter: "Seattle Chapter",
    stage: "Pre-Revenue",
    submitted: "Oct 01",
    tags: ["SpaceTech", "Supply Chain"],
    description:
      "Last-mile orbital delivery infrastructure using reusable micro-thrusters to precisely position...",
    targetRaise: "$3.2M",
  },
];

const TOTAL_SUBMISSIONS = 124;
const PAGE_SIZE = 6;

export default function IncomingPitchDecks() {
  const [activeNav, setActiveNav] = useState("Pitch Decks");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("Grid");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(TOTAL_SUBMISSIONS / PAGE_SIZE);
  const pageNumbers = [1, 2, 3, "...", totalPages];

  const handleViewPitchDeck = (id) => {
    // TODO: navigate to the pitch deck viewer for this startup
    console.log("View pitch deck", id);
  };

  const handlePreview = (id) => {
    // TODO: open a quick preview modal
    console.log("Quick preview", id);
  };

  return (
    <div className="ip-page">
      {/* Sidebar */}
      <aside className="ip-sidebar">
        <div className="ip-brand">
          <span className="ip-brand-title">BOCC</span>
          <span className="ip-brand-sub">Investor Portal</span>
        </div>

        <nav className="ip-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`ip-nav-item ${activeNav === item.label ? "ip-nav-active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <span className="ip-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="ip-sidebar-footer">
          <div className="ip-avatar-placeholder" />
          <div>
            <div className="ip-footer-name">Alex Morgan</div>
            <div className="ip-footer-role">Principal Investor</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ip-main">
        {/* Top bar */}
        <div className="ip-topbar">
          <div className="ip-search">
            <span className="ip-search-icon">&#128269;</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search startups, founders, or industries..."
            />
          </div>
          <div className="ip-topbar-right">
            <span className="ip-icon-btn">&#128276;</span>
            <span className="ip-icon-btn">&#9881;</span>
            <button className="ip-submit-deck-btn">+ Submit Deck</button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="ip-breadcrumb">
          PORTAL <span className="ip-breadcrumb-sep">&#8250;</span> INCOMING DECKS
        </div>

        {/* Header row */}
        <div className="ip-header-row">
          <div>
            <h1 className="ip-title">Incoming Pitch Decks</h1>
            <p className="ip-subtitle">Review the latest submissions from across the BOCC network.</p>
          </div>
          <div className="ip-header-actions">
            <div className="ip-view-toggle">
              <button
                className={`ip-toggle-btn ${viewMode === "Grid" ? "ip-toggle-active" : ""}`}
                onClick={() => setViewMode("Grid")}
              >
                Grid
              </button>
              <button
                className={`ip-toggle-btn ${viewMode === "List" ? "ip-toggle-active" : ""}`}
                onClick={() => setViewMode("List")}
              >
                List
              </button>
            </div>
            <button className="ip-filter-btn">&#9776; Filter</button>
          </div>
        </div>

        {/* Decks grid */}
        <div className="ip-decks-grid">
          {DECKS.map((deck) => (
            <div className="ip-deck-card" key={deck.id}>
              <div className="ip-card-top">
                <div className="ip-card-logo" />
                <div className="ip-card-meta">
                  <span className="ip-stage-badge">{deck.stage}</span>
                  <div className="ip-submitted">Submitted {deck.submitted}</div>
                </div>
              </div>

              <div className="ip-card-name">{deck.name}</div>
              <div className="ip-card-founder">
                Founded by {deck.founder} &bull; {deck.chapter}
              </div>

              <div className="ip-card-tags">
                {deck.tags.map((tag) => (
                  <span className="ip-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="ip-card-desc">{deck.description}</p>

              <div className="ip-card-raise">
                <span className="ip-raise-label">TARGET RAISE</span>
                <span className="ip-raise-value">{deck.targetRaise}</span>
              </div>

              <div className="ip-card-actions">
                <button
                  className="ip-view-deck-btn"
                  onClick={() => handleViewPitchDeck(deck.id)}
                >
                  &#9654; View Pitch Deck
                </button>
                <button className="ip-preview-btn" onClick={() => handlePreview(deck.id)}>
                  &#128065;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="ip-pagination-row">
          <span className="ip-showing-text">
            Showing {DECKS.length} of {TOTAL_SUBMISSIONS} submissions
          </span>
          <div className="ip-pagination">
            <button
              className="ip-page-arrow"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              &#8249;
            </button>
            {pageNumbers.map((num, i) =>
              num === "..." ? (
                <span className="ip-page-ellipsis" key={`ellipsis-${i}`}>
                  ...
                </span>
              ) : (
                <button
                  key={num}
                  className={`ip-page-number ${currentPage === num ? "ip-page-active" : ""}`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              )
            )}
            <button
              className="ip-page-arrow"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              &#8250;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}