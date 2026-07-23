import React, { useState } from "react";
import "./MentorDashBoard.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Requests", icon: "\u2709" },
  { label: "Chats", icon: "\u{1F4AC}" },
  { label: "Meetings", icon: "\u{1F4C5}" },
  { label: "Settings", icon: "\u2699" },
];

const STATS = [
  { label: "Active Students", value: "12", sub: null, progress: 60 },
  { label: "Pending Requests", value: "05", sub: "Requires attention", dot: true },
  { label: "Upcoming Meetings", value: "03", sub: "Next: 2:00 PM Today" },
  { label: "Completed Sessions", value: "45", sub: "+8 this month" },
];

const INITIAL_REQUESTS = [
  { id: 1, name: "Alex Rivera", role: "Founder, GreenScale AI", date: "OCT 24, 2023" },
  { id: 2, name: "Samantha Chen", role: "Founder, Orbit Logistics", date: "OCT 23, 2023" },
  { id: 3, name: "Marcus Thorne", role: "CEO, BioSynth Solutions", date: "OCT 22, 2023" },
];

const UPCOMING_MEETINGS = [
  {
    id: 1,
    day: "25",
    month: "OCT",
    title: "Strategy Deep Dive",
    time: "2:00 PM — 3:00 PM",
    location: "Google Meet",
  },
  {
    id: 2,
    day: "27",
    month: "OCT",
    title: "Project Review: Alpha",
    time: "10:30 AM — 11:30 AM",
    location: "Zoom",
  },
];

const CONVERSATIONS = [
  {
    id: 1,
    name: "Emily Watson",
    preview: "Thanks for the feedback on the pitc...",
    time: "12m ago",
  },
  {
    id: 2,
    name: "David Kim",
    preview: "Are we still on for the technical inter...",
    time: "2h ago",
  },
];

export default function MentorDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAccept = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    // TODO: call API to accept the mentorship request
  };

  const handleDecline = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    // TODO: call API to decline the mentorship request
  };

  return (
    <div className="md-page">
      {/* Sidebar */}
      <aside className="md-sidebar">
        <div>
          <div className="md-brand">
            <span className="md-brand-title">BOCC Mentor</span>
            <span className="md-brand-sub">Mentorship Module</span>
          </div>

          <nav className="md-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`md-nav-item ${activeNav === item.label ? "md-nav-active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="md-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="md-profile">
          <div className="md-avatar-placeholder" />
          <div>
            <div className="md-profile-name">Mentor Profile</div>
            <div className="md-profile-link">VIEW PROFILE</div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="md-main">
        {/* Top bar */}
        <div className="md-topbar">
          <div className="md-search">
            <span className="md-search-icon">&#128269;</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search students, startups, or documents..."
            />
          </div>
          <div className="md-topbar-icons">
            <span className="md-icon-btn">&#128276;</span>
            <span className="md-icon-btn">&#128100;</span>
          </div>
        </div>

        {/* Welcome header */}
        <div className="md-welcome-row">
          <div>
            <h1 className="md-welcome-title">Welcome back, Sarah Jenkins</h1>
            <p className="md-welcome-sub">Here's an overview of your mentorship activities today.</p>
          </div>
          <div className="md-welcome-actions">
            <button className="md-btn-outline">Open Chats</button>
            <button className="md-btn-dark">View Requests</button>
          </div>
        </div>

        {/* Stats */}
        <div className="md-stats-grid">
          {STATS.map((stat) => (
            <div className="md-stat-card" key={stat.label}>
              <div className="md-stat-label">{stat.label}</div>
              <div className="md-stat-value">{stat.value}</div>
              {stat.sub && (
                <div className="md-stat-sub">
                  {stat.dot && <span className="md-stat-dot" />}
                  {stat.sub}
                </div>
              )}
              {stat.progress && (
                <div className="md-stat-progress-track">
                  <div
                    className="md-stat-progress-fill"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom grid */}
        <div className="md-bottom-grid">
          {/* Recent Mentorship Requests */}
          <div className="md-panel">
            <div className="md-panel-header">
              <span className="md-panel-title">Recent Mentorship Requests</span>
              <span className="md-view-all">View all</span>
            </div>
            <div className="md-requests-list">
              {requests.length === 0 && (
                <div className="md-empty-state">No pending requests right now.</div>
              )}
              {requests.map((req) => (
                <div className="md-request-row" key={req.id}>
                  <div className="md-request-avatar" />
                  <div className="md-request-info">
                    <div className="md-request-name">{req.name}</div>
                    <div className="md-request-role">{req.role}</div>
                  </div>
                  <div className="md-request-date">{req.date}</div>
                  <div className="md-request-actions">
                    <button
                      className="md-btn-outline md-btn-small"
                      onClick={() => handleDecline(req.id)}
                    >
                      DECLINE
                    </button>
                    <button
                      className="md-btn-dark md-btn-small"
                      onClick={() => handleAccept(req.id)}
                    >
                      ACCEPT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="md-right-col">
            {/* Upcoming Meetings */}
            <div className="md-panel">
              <div className="md-panel-header">
                <span className="md-panel-title">Upcoming Meetings</span>
              </div>
              <div className="md-meetings-list">
                {UPCOMING_MEETINGS.map((meeting) => (
                  <div className="md-meeting-row" key={meeting.id}>
                    <div className="md-meeting-date">
                      <span className="md-meeting-month">{meeting.month}</span>
                      <span className="md-meeting-day">{meeting.day}</span>
                    </div>
                    <div className="md-meeting-info">
                      <div className="md-meeting-title">{meeting.title}</div>
                      <div className="md-meeting-time">{meeting.time}</div>
                      <div className="md-meeting-location">
                        &#128421; {meeting.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Conversations */}
            <div className="md-panel">
              <div className="md-panel-header">
                <span className="md-panel-title">Recent Conversations</span>
                <span className="md-panel-info-icon">&#9432;</span>
              </div>
              <div className="md-conversations-list">
                {CONVERSATIONS.map((conv) => (
                  <div className="md-conversation-row" key={conv.id}>
                    <div className="md-conversation-avatar" />
                    <div className="md-conversation-info">
                      <div className="md-conversation-name">{conv.name}</div>
                      <div className="md-conversation-preview">{conv.preview}</div>
                    </div>
                    <div className="md-conversation-time">{conv.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}