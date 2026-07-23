import React, { useState } from "react";
import "./mentorshipRequest.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Requests", icon: "\u2709" },
  { label: "Chats", icon: "\u{1F4AC}" },
  { label: "Meetings", icon: "\u{1F4C5}" },
  { label: "Settings", icon: "\u2699" },
];

const INITIAL_REQUESTS = [
  {
    id: 1,
    name: "Jordan Rivera",
    school: "Stanford University",
    major: "Computer Science",
    status: "PENDING",
    startupName: "Lumina AI",
    startupStage: "Pre-Seed / Prototype",
    summary:
      "Seeking technical mentorship for our NLP-driven healthcare logistics platform. We have a functional MVP and are looking for guidance on scaling our data architecture and preparing for a Seed round in Q3.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    school: "MIT",
    major: "Mechanical Engineering",
    status: "PENDING",
    startupName: "EcoValve",
    startupStage: "Seed / Early Revenue",
    summary:
      "We developed a smart irrigation controller that reduces water waste by 40%. Looking for a mentor with experience in hardware manufacturing and B2B distribution channels in North America.",
  },
  {
    id: 3,
    name: "Marcus Thorne",
    school: "Oxford University",
    major: "Business Admin",
    status: "PENDING",
    startupName: "ThriftChain",
    startupStage: "Ideation",
    summary:
      "I am building a blockchain-based provenance system for the second-hand luxury market. I need advice on market entry strategy and navigating IP regulations within the fintech and retail space.",
  },
];

export default function MentorshipRequests() {
  const [activeNav, setActiveNav] = useState("Requests");
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest First");
  const remainingCount = 3;

  const handleAccept = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    // TODO: call API to accept the mentorship request
  };

  const handleDecline = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    // TODO: call API to decline the mentorship request
  };

  const handleViewProfile = (id) => {
    // TODO: navigate to the student/startup profile page
    console.log("View profile for request", id);
  };

  return (
    <div className="mr-page">
      {/* Sidebar */}
      <aside className="mr-sidebar">
        <div>
          <div className="mr-brand">
            <span className="mr-brand-title">BOCC Mentor</span>
            <span className="mr-brand-sub">Mentorship Module</span>
          </div>

          <nav className="mr-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`mr-nav-item ${activeNav === item.label ? "mr-nav-active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="mr-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mr-profile">
          <div className="mr-avatar-placeholder" />
          <div className="mr-profile-text">
            <div className="mr-profile-name">Alex Smith</div>
            <div className="mr-profile-role">Senior Mentor</div>
          </div>
          <button className="mr-profile-btn">View Profile</button>
        </div>
      </aside>

      {/* Main content */}
      <main className="mr-main">
        {/* Top bar */}
        <div className="mr-topbar">
          <div className="mr-search">
            <span className="mr-search-icon">&#128269;</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search requests..."
            />
          </div>
          <div className="mr-topbar-icons">
            <span className="mr-icon-btn">&#128276;</span>
            <span className="mr-icon-btn">&#128100;</span>
          </div>
        </div>

        {/* Header row */}
        <div className="mr-header-row">
          <div>
            <h1 className="mr-title">Mentorship Requests</h1>
            <p className="mr-subtitle">
              Manage incoming connections and potential startup collaborations.
            </p>
          </div>
          <div className="mr-header-actions">
            <button className="mr-btn-outline">
              <span className="mr-btn-icon">&#9776;</span> Filter
            </button>
            <button
              className="mr-btn-outline"
              onClick={() =>
                setSortOrder(sortOrder === "Newest First" ? "Oldest First" : "Newest First")
              }
            >
              <span className="mr-btn-icon">&#8645;</span> {sortOrder}
            </button>
          </div>
        </div>

        {/* Requests grid */}
        <div className="mr-requests-grid">
          {requests.map((req) => (
            <div className="mr-request-card" key={req.id}>
              <div className="mr-card-header">
                <div className="mr-card-avatar" />
                <div className="mr-card-identity">
                  <div className="mr-card-name">{req.name}</div>
                  <div className="mr-card-school">
                    {req.school} &bull; {req.major}
                  </div>
                </div>
                <span className="mr-status-badge">{req.status}</span>
              </div>

              <div className="mr-startup-info">
                <div className="mr-startup-col">
                  <div className="mr-startup-label">Startup Name</div>
                  <div className="mr-startup-value">{req.startupName}</div>
                </div>
                <div className="mr-startup-col">
                  <div className="mr-startup-label">Startup Stage</div>
                  <div className="mr-startup-value">{req.startupStage}</div>
                </div>
              </div>

              <div className="mr-summary-section">
                <div className="mr-summary-label">Request Summary</div>
                <p className="mr-summary-text">{req.summary}</p>
              </div>

              <div className="mr-card-actions">
                <button
                  className="mr-btn-outline mr-btn-flex"
                  onClick={() => handleViewProfile(req.id)}
                >
                  View Profile
                </button>
                <button
                  className="mr-btn-outline mr-btn-flex"
                  onClick={() => handleDecline(req.id)}
                >
                  Decline
                </button>
                <button
                  className="mr-btn-dark mr-btn-flex"
                  onClick={() => handleAccept(req.id)}
                >
                  Accept Request
                </button>
              </div>
            </div>
          ))}

          {remainingCount > 0 && (
            <div className="mr-more-card">
              <span className="mr-more-dots">&#8943;</span>
              <p className="mr-more-text">{remainingCount} more requests waiting for review</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}