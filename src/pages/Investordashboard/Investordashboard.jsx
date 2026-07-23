import React, { useState } from "react";
import "./investorDashboard.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Pitch Decks", icon: "\u{1F4C4}" },
  { label: "Startups", icon: "\u{1F680}" },
  { label: "Conversations", icon: "\u{1F4AC}" },
  { label: "Watchlist", icon: "\u{1F441}" },
];

const STATS = [
  { label: "Startups Available", value: "124", change: "+12%", positive: true },
  { label: "Pitch Decks Received", value: "48", change: "-0%", positive: false },
  { label: "Active Conversations", value: "12", change: "+2", positive: true },
  { label: "Watchlist Count", value: "31", change: "Total Items", positive: null },
];

const SUBMISSIONS = [
  { id: 1, name: "NeuralEdge AI", sector: "Software / AI", stage: "Seed", submitted: "2h ago" },
  { id: 2, name: "GreenFlow Logistics", sector: "Sustainability", stage: "Series A", submitted: "5h ago" },
  { id: 3, name: "QuantumSecure", sector: "Cybersecurity", stage: "Seed", submitted: "Yesterday" },
  { id: 4, name: "UrbanAero", sector: "Mobility", stage: "Pre-Seed", submitted: "Oct 24" },
];

const ALERTS = [
  {
    id: 1,
    title: "New Deck: SkyBound",
    desc: "Updated series A deck wit...",
    time: "12 mins ago",
  },
  {
    id: 2,
    title: "Updated: BioSynth",
    desc: "Phase 2 clinical data...",
    time: "1h ago",
  },
  {
    id: 3,
    title: "Shared: SolarNodes",
    desc: "Founder shared exclusive...",
    time: "4h ago",
  },
];

export default function InvestorDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const quotaUsed = 67;

  const handleBrowseStartups = () => {
    // TODO: navigate to /startups
  };
  const handleViewPitchDecks = () => {
    // TODO: navigate to /pitch-decks
  };
  const handleOpenConversations = () => {
    // TODO: navigate to /conversations
  };

  return (
    <div className="id-page">
      {/* Sidebar */}
      <aside className="id-sidebar">
        <div>
          <div className="id-brand">
            <div className="id-avatar-placeholder" />
            <div>
              <span className="id-brand-title">BOCC</span>
              <span className="id-brand-sub">Investor Portal</span>
            </div>
          </div>

          <nav className="id-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`id-nav-item ${activeNav === item.label ? "id-nav-active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="id-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="id-usage-card">
          <div className="id-usage-label">Account Usage</div>
          <div className="id-usage-track">
            <div className="id-usage-fill" style={{ width: `${quotaUsed}%` }} />
          </div>
          <div className="id-usage-text">{quotaUsed}% of quota used</div>
        </div>
      </aside>

      {/* Main */}
      <main className="id-main">
        {/* Top bar */}
        <div className="id-topbar">
          <div className="id-search">
            <span className="id-search-icon">&#128269;</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search startups, pitch decks, or investors..."
            />
          </div>
          <div className="id-topbar-right">
            <span className="id-icon-btn">&#128276;</span>
            <span className="id-icon-btn">&#9881;</span>
            <div className="id-topbar-profile">
              <div>
                <div className="id-topbar-name">Investor Name</div>
                <div className="id-topbar-role">Senior Partner</div>
              </div>
              <div className="id-avatar-placeholder id-topbar-avatar" />
            </div>
          </div>
        </div>

        {/* Welcome header */}
        <div className="id-welcome">
          <h1 className="id-welcome-title">Welcome back, Investor Name</h1>
          <p className="id-welcome-sub">Here is what has happened since your last login.</p>
        </div>

        {/* Stats */}
        <div className="id-stats-grid">
          {STATS.map((stat) => (
            <div className="id-stat-card" key={stat.label}>
              <div className="id-stat-label">{stat.label}</div>
              <div className="id-stat-row">
                <span className="id-stat-value">{stat.value}</span>
                {stat.positive === true && <span className="id-stat-change id-change-up">&#8593; {stat.change}</span>}
                {stat.positive === false && <span className="id-stat-change id-change-down">{stat.change}</span>}
                {stat.positive === null && <span className="id-stat-change id-change-neutral">{stat.change}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="id-actions-row">
          <button className="id-btn-dark" onClick={handleBrowseStartups}>
            &#128269; Browse Startups
          </button>
          <button className="id-btn-outline" onClick={handleViewPitchDecks}>
            &#128196; View Pitch Decks
          </button>
          <button className="id-btn-outline" onClick={handleOpenConversations}>
            &#128172; Open Conversations
          </button>
        </div>

        {/* Bottom grid */}
        <div className="id-bottom-grid">
          {/* Recent Startup Submissions */}
          <div className="id-panel">
            <div className="id-panel-header">
              <span className="id-panel-title">Recent Startup Submissions</span>
              <span className="id-view-all">View All</span>
            </div>

            <div className="id-table">
              <div className="id-table-head-row">
                <span className="id-table-head">Startup Name</span>
                <span className="id-table-head">Sector</span>
                <span className="id-table-head">Stage</span>
                <span className="id-table-head">Submitted</span>
              </div>
              {SUBMISSIONS.map((sub) => (
                <div className="id-table-row" key={sub.id}>
                  <div className="id-table-name-cell">
                    <div className="id-table-avatar" />
                    <span className="id-table-name">{sub.name}</span>
                  </div>
                  <span className="id-table-sector">{sub.sector}</span>
                  <span className="id-stage-tag">{sub.stage}</span>
                  <span className="id-table-submitted">{sub.submitted}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pitch Deck Alerts */}
          <div className="id-panel">
            <div className="id-panel-header">
              <span className="id-panel-title">Pitch Deck Alerts</span>
            </div>
            <div className="id-alerts-list">
              {ALERTS.map((alert) => (
                <div className="id-alert-row" key={alert.id}>
                  <div className="id-alert-icon">&#128196;</div>
                  <div className="id-alert-info">
                    <div className="id-alert-title">{alert.title}</div>
                    <div className="id-alert-desc">{alert.desc}</div>
                    <div className="id-alert-time">{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="id-see-all">See all notifications</div>
          </div>
        </div>
      </main>
    </div>
  );
}