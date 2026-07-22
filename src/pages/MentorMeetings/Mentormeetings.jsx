import React, { useState } from "react";
import "../../css/mentorMeetings.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Mentorship Requests", icon: "\u2709" },
  { label: "Chat", icon: "\u{1F4AC}" },
  { label: "Meetings", icon: "\u{1F4C5}" },
  { label: "Profile", icon: "\u{1F464}" },
];

const BOTTOM_NAV_ITEMS = [
  { label: "Settings", icon: "\u2699" },
  { label: "Logout", icon: "\u{1F6AA}" },
];

const STATS = [
  { label: "Upcoming Meetings", value: "08" },
  { label: "Today's Meetings", value: "02" },
  { label: "Completed Sessions", value: "45" },
  { label: "Pending Confirmations", value: "03" },
];

const MEETINGS = [
  {
    id: 1,
    name: "Sarah Chen",
    startup: "EcoValve",
    stage: "Seed",
    title: "GTM Strategy Review",
    status: "Upcoming",
    date: "Oct 28, 2023",
    time: "2:00 PM (60 min)",
    location: "Google Meet",
    college: "MIT",
    agenda: ["Review Q3 sales targets", "Draft outbound sequence for Tier 1", "Discuss hiring roadmap for SDRs"],
    studentNotes:
      "Hoping to get specific feedback on our pricing tiers for the new enterprise tier we're launching next month.",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    startup: "GridLogic",
    stage: "Pre-seed",
    title: "Product Roadmap Deep-dive",
    status: "Upcoming",
    date: "Oct 30, 2023",
    time: "10:30 AM (45 min)",
    location: "Google Meet",
    college: "Oxford University",
    agenda: ["Walk through Q1 roadmap", "Review technical architecture decisions"],
    studentNotes: "Would like input on prioritizing the API integration versus the mobile app.",
  },
];

const OUTCOME_OPTIONS = [
  "Select outcome...",
  "Great progress",
  "Needs follow-up",
  "Blocked / Needs help",
  "Session completed",
];

export default function MentorMeetings() {
  const [activeNav, setActiveNav] = useState("Meetings");
  const [viewMode, setViewMode] = useState("List View");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeetingId, setSelectedMeetingId] = useState(MEETINGS[0].id);
  const [mentorNotes, setMentorNotes] = useState("");
  const [outcome, setOutcome] = useState(OUTCOME_OPTIONS[0]);

  const selectedMeeting = MEETINGS.find((m) => m.id === selectedMeetingId);

  const handleSaveNotes = () => {
    console.log("Saving notes for meeting", selectedMeetingId, { mentorNotes, outcome });
    // TODO: send notes/outcome to your backend
  };

  const handleScheduleFollowUp = () => {
    console.log("Scheduling follow-up for meeting", selectedMeetingId);
    // TODO: open scheduling flow / navigate to schedule form
  };

  return (
    <div className="mm-page">
      {/* Sidebar */}
      <aside className="mm-sidebar">
        <div>
          <div className="mm-brand">
            <span className="mm-brand-title">BOCC Mentor Portal</span>
          </div>

          <nav className="mm-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`mm-nav-item ${activeNav === item.label ? "mm-nav-active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="mm-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mm-nav-bottom">
          <nav className="mm-nav">
            {BOTTOM_NAV_ITEMS.map((item) => (
              <button key={item.label} className="mm-nav-item">
                <span className="mm-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <button className="mm-support-btn">Support Center</button>
        </div>
      </aside>

      {/* Main */}
      <main className="mm-main">
        {/* Top bar */}
        <div className="mm-topbar">
          <div className="mm-search">
            <span className="mm-search-icon">&#128269;</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sessions..."
            />
          </div>
          <div className="mm-topbar-right">
            <button className="mm-new-meeting-btn">+ New Meeting</button>
            <span className="mm-icon-btn">&#128276;</span>
            <span className="mm-icon-btn">&#10067;</span>
          </div>
        </div>

        {/* Header row */}
        <div className="mm-header-row">
          <div>
            <h1 className="mm-title">Meetings</h1>
            <p className="mm-subtitle">Manage your mentorship sessions and upcoming meetings.</p>
          </div>
          <div className="mm-header-actions">
            <button
              className={`mm-btn-outline ${viewMode === "List View" ? "mm-btn-active" : ""}`}
              onClick={() => setViewMode("List View")}
            >
              &#9776; List View
            </button>
            <button
              className={`mm-btn-outline ${viewMode === "Calendar View" ? "mm-btn-active" : ""}`}
              onClick={() => setViewMode("Calendar View")}
            >
              &#128197; Calendar View
            </button>
            <button className="mm-btn-dark">&#128197; Schedule Meeting</button>
          </div>
        </div>

        {/* Stats */}
        <div className="mm-stats-grid">
          {STATS.map((stat) => (
            <div className="mm-stat-card" key={stat.label}>
              <div className="mm-stat-label">{stat.label}</div>
              <div className="mm-stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="mm-content-grid">
          {/* Left: filters + meeting list */}
          <div className="mm-left-col">
            <div className="mm-filters-row">
              <div className="mm-filter-search">
                <span className="mm-search-icon">&#128269;</span>
                <input type="text" placeholder="Search by student or startu..." />
              </div>
              <button className="mm-filter-pill">Filter by Stage</button>
              <button className="mm-filter-pill">Filter by Date</button>
            </div>
            <button className="mm-sort-btn">&#8645; Sort</button>

            <div className="mm-meetings-list">
              {MEETINGS.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`mm-meeting-card ${
                    meeting.id === selectedMeetingId ? "mm-meeting-card-active" : ""
                  }`}
                  onClick={() => setSelectedMeetingId(meeting.id)}
                >
                  <div className="mm-meeting-avatar" />
                  <div className="mm-meeting-body">
                    <div className="mm-meeting-top-line">
                      <span className="mm-meeting-name">
                        {meeting.name} &bull; {meeting.startup}
                      </span>
                      <span className="mm-stage-tag">{meeting.stage}</span>
                    </div>
                    <div className="mm-meeting-title">{meeting.title}</div>
                    <div className="mm-meeting-status-row">
                      <span className="mm-status-pill">{meeting.status}</span>
                    </div>
                    <div className="mm-meeting-meta">&#128197; {meeting.date}</div>
                    <div className="mm-meeting-meta">&#128337; {meeting.time}</div>
                    <div className="mm-meeting-meta">&#128421; {meeting.location}</div>
                  </div>
                  <div className="mm-meeting-actions">
                    <button className="mm-join-btn">Join Meeting</button>
                    <span className="mm-kebab">&#8942;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: selected meeting detail panel */}
          {selectedMeeting && (
            <div className="mm-detail-panel">
              <div className="mm-detail-header">
                <div className="mm-detail-avatar" />
                <div>
                  <div className="mm-detail-name">{selectedMeeting.name}</div>
                  <div className="mm-detail-sub">
                    {selectedMeeting.college} &bull; {selectedMeeting.startup}
                  </div>
                  <div className="mm-detail-stage">{selectedMeeting.stage} Stage</div>
                </div>
              </div>

              <div className="mm-detail-actions">
                <button className="mm-btn-dark mm-btn-flex">Profile</button>
                <button className="mm-btn-outline mm-btn-flex">Chat</button>
              </div>

              <div className="mm-detail-section">
                <div className="mm-detail-section-label">Meeting Info</div>
                <div className="mm-agenda-label">Agenda</div>
                <ul className="mm-agenda-list">
                  {selectedMeeting.agenda.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="mm-student-notes-label">Student Notes</div>
                <p className="mm-student-notes-text">"{selectedMeeting.studentNotes}"</p>
              </div>

              <div className="mm-detail-section">
                <div className="mm-detail-section-label">Mentor Notes</div>
                <textarea
                  value={mentorNotes}
                  onChange={(e) => setMentorNotes(e.target.value)}
                  placeholder="Take notes during the session..."
                />
              </div>

              <div className="mm-detail-section">
                <div className="mm-detail-section-label">Meeting Outcome</div>
                <select value={outcome} onChange={(e) => setOutcome(e.target.value)}>
                  {OUTCOME_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <button className="mm-save-notes-btn" onClick={handleSaveNotes}>
                Save Notes
              </button>
              <button className="mm-followup-btn" onClick={handleScheduleFollowUp}>
                Schedule Follow-up
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
