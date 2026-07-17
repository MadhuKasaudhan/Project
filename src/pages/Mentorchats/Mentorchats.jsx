import React, { useState } from "react";
import "../../css/mentorChats.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Requests", icon: "\u2709" },
  { label: "Chats", icon: "\u{1F4AC}" },
  { label: "Meetings", icon: "\u{1F4C5}" },
  { label: "Settings", icon: "\u2699" },
];

const THREADS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    preview: "I've updated the financial model as we...",
    time: "2m ago",
    tag: "FINTECH",
    unread: true,
    role: "FOUNDER, ECOFLOW",
    status: "Active now",
    startupIdea:
      "AI-driven waste management systems for small-scale urban manufacturing hubs.",
    stage: "Pre-Seed",
    college: "MIT Sloan",
    cohort: "Spring 2024",
    messages: [
      { id: 1, from: "me", text: "Hi Sarah! I just finished reviewing your draft. The market size calculations look much more realistic now. Have you thought about the go-to-market strategy for the enterprise segment specifically?", time: "10:15 AM" },
      { id: 2, from: "them", text: "Thanks, Alex! I actually just uploaded an updated version of the model that includes a slide on the GTM strategy. I'm focusing on the direct sales approach first for the local markets.", time: "10:22 AM" },
      { id: 3, from: "me", text: "I've updated the financial model as we discussed. Let me know if the burn rate projections look okay to you now.", time: "10:23 AM" },
      { id: 4, from: "them", text: "Got it. Let me take a look at the slide. Are you free for a quick call later this week to walk through it?", time: "10:25 AM" },
    ],
  },
  {
    id: 2,
    name: "Marcus Chen",
    preview: "Can we move the meeting to 3 PM instead?",
    time: "1h ago",
    tag: null,
    unread: false,
    role: "FOUNDER",
    status: "Offline",
    startupIdea: "",
    stage: "",
    college: "",
    cohort: "",
    messages: [
      { id: 1, from: "them", text: "Can we move the meeting to 3 PM instead?", time: "9:10 AM" },
    ],
  },
  {
    id: 3,
    name: "Aisha Gupta",
    preview: "Attached is the deck for the seed round...",
    time: "3h ago",
    tag: null,
    unread: false,
    role: "FOUNDER",
    status: "Offline",
    startupIdea: "",
    stage: "",
    college: "",
    cohort: "",
    messages: [
      { id: 1, from: "them", text: "Attached is the deck for the seed round.", time: "7:40 AM" },
    ],
  },
  {
    id: 4,
    name: "Julian Vasseur",
    preview: "Thanks for the feedback on the landing...",
    time: "Yesterday",
    tag: null,
    unread: false,
    role: "FOUNDER",
    status: "Offline",
    startupIdea: "",
    stage: "",
    college: "",
    cohort: "",
    messages: [
      { id: 1, from: "them", text: "Thanks for the feedback on the landing page.", time: "Yesterday" },
    ],
  },
];

export default function MentorChats() {
  const [activeNav, setActiveNav] = useState("Chats");
  const [threads, setThreads] = useState(THREADS);
  const [activeThreadId, setActiveThreadId] = useState(THREADS[0].id);
  const [threadSearch, setThreadSearch] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const activeThread = threads.find((t) => t.id === activeThreadId);

  const handleSend = () => {
    if (messageInput.trim() === "") return;
    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeThreadId
          ? {
              ...t,
              messages: [
                ...t.messages,
                {
                  id: t.messages.length + 1,
                  from: "me",
                  text: messageInput.trim(),
                  time: "Now",
                },
              ],
            }
          : t
      )
    );
    setMessageInput("");
    // TODO: send message to your backend / real-time chat service
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="mc-page">
      {/* Sidebar */}
      <aside className="mc-sidebar">
        <div>
          <div className="mc-brand">
            <span className="mc-brand-title">BOCC Mentor</span>
            <span className="mc-brand-sub">Mentorship Module</span>
          </div>

          <nav className="mc-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`mc-nav-item ${activeNav === item.label ? "mc-nav-active" : ""}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span className="mc-nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mc-profile-block">
          <div className="mc-profile">
            <div className="mc-avatar-placeholder" />
            <div className="mc-profile-text">
              <div className="mc-profile-name">Alex Rivera</div>
              <div className="mc-profile-role">Lead Mentor</div>
            </div>
          </div>
          <button className="mc-profile-btn">View Profile</button>
        </div>
      </aside>

      {/* Threads column */}
      <section className="mc-threads-col">
        <div className="mc-threads-search">
          <span className="mc-search-icon">&#128269;</span>
          <input
            type="text"
            value={threadSearch}
            onChange={(e) => setThreadSearch(e.target.value)}
            placeholder="Search conversations..."
          />
        </div>

        <div className="mc-threads-label">Active Threads</div>

        <div className="mc-threads-list">
          {threads.map((thread) => (
            <div
              key={thread.id}
              className={`mc-thread-item ${
                thread.id === activeThreadId ? "mc-thread-active" : ""
              }`}
              onClick={() => setActiveThreadId(thread.id)}
            >
              <div className="mc-thread-top">
                <span className="mc-thread-name">{thread.name}</span>
                <span className="mc-thread-time">{thread.time}</span>
              </div>
              <div className="mc-thread-preview">{thread.preview}</div>
              {thread.tag && <span className="mc-thread-tag">{thread.tag}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Conversation panel */}
      <section className="mc-conversation-col">
        {activeThread && (
          <>
            <div className="mc-conversation-header">
              <div className="mc-conversation-identity">
                <div className="mc-conversation-avatar" />
                <div>
                  <div className="mc-conversation-name">{activeThread.name}</div>
                  <div className="mc-conversation-status">
                    <span
                      className={`mc-status-dot ${
                        activeThread.status === "Active now" ? "mc-status-online" : ""
                      }`}
                    />
                    {activeThread.status}
                  </div>
                </div>
              </div>
              <button className="mc-schedule-btn">
                <span className="mc-schedule-icon">&#128197;</span> Schedule Meeting
              </button>
            </div>

            <div className="mc-messages-area">
              <div className="mc-day-divider">
                <span>Today</span>
              </div>
              {activeThread.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mc-message-row ${
                    msg.from === "me" ? "mc-message-row-me" : "mc-message-row-them"
                  }`}
                >
                  <div
                    className={`mc-message-bubble ${
                      msg.from === "me" ? "mc-bubble-me" : "mc-bubble-them"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div
                    className={`mc-message-time ${
                      msg.from === "me" ? "mc-time-me" : "mc-time-them"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mc-input-row">
              <span className="mc-attach-icon">&#128206;</span>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
              />
              <button className="mc-send-btn" onClick={handleSend}>
                &#10148;
              </button>
            </div>
          </>
        )}
      </section>

      {/* Profile panel */}
      {activeThread && activeThread.startupIdea && (
        <aside className="mc-profile-col">
          <div className="mc-profile-avatar-large" />
          <div className="mc-profile-large-name">{activeThread.name}</div>
          <div className="mc-profile-large-role">{activeThread.role}</div>

          <div className="mc-profile-section">
            <div className="mc-profile-section-label">Startup Idea</div>
            <div className="mc-profile-idea-box">{activeThread.startupIdea}</div>
          </div>

          <div className="mc-profile-section">
            <div className="mc-profile-section-label">Details</div>
            <div className="mc-detail-row">
              <span className="mc-detail-key">Stage</span>
              <span className="mc-detail-badge">{activeThread.stage}</span>
            </div>
            <div className="mc-detail-row">
              <span className="mc-detail-key">College</span>
              <span className="mc-detail-value">{activeThread.college}</span>
            </div>
            <div className="mc-detail-row">
              <span className="mc-detail-key">Cohort</span>
              <span className="mc-detail-value">{activeThread.cohort}</span>
            </div>
          </div>

          <button className="mc-doc-btn">
            <span className="mc-doc-icon">&#128196;</span> Pitch Deck
          </button>
          <button className="mc-doc-btn">
            <span className="mc-doc-icon">&#128202;</span> Financials
          </button>
        </aside>
      )}
    </div>
  );
}