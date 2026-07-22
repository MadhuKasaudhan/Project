import React, { useState } from "react";
import "../../css/mentorProfile.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "\u25A6" },
  { label: "Requests", icon: "\u2709" },
  { label: "Chats", icon: "\u{1F4AC}" },
  { label: "Meetings", icon: "\u{1F4C5}" },
];

const STARTUP_STAGES = ["Idea", "Validation", "MVP", "Traction", "Launch"];

const ACCOUNT_SETTINGS = [
  { label: "Change Password", desc: "Update your login credentials" },
  { label: "Notification Settings", desc: "Manage email and push notification alerts" },
  { label: "Privacy & Security", desc: "Profile visibility and data usage controls" },
  { label: "Deactivate Account", desc: "Temporarily disable your profile or close account" },
];

export default function MentorProfile() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  // Personal Information
  const [fullName, setFullName] = useState("Alex Smith");
  const [phone, setPhone] = useState("+1 (555) 000-0000");
  const [location, setLocation] = useState("San Francisco, CA");
  const email = "alex.smith@techstars.com";

  // Professional Information
  const [company, setCompany] = useState("Techstars");
  const [jobTitle, setJobTitle] = useState("Senior Mentor");
  const [industry, setIndustry] = useState("SaaS");
  const [yearsExperience, setYearsExperience] = useState("12");
  const [expertise, setExpertise] = useState(["Product Strategy", "Growth", "Fundraising"]);
  const [expertiseInput, setExpertiseInput] = useState("");
  const [startupDomains, setStartupDomains] = useState("FinTech, HealthTech, AI/M");
  const [bio, setBio] = useState(
    "Seasoned SaaS product leader with over 12 years of experience building..."
  );

  // Mentorship Preferences
  const [stages, setStages] = useState(["Idea", "Validation", "MVP", "Traction"]);
  const [preferredIndustries, setPreferredIndustries] = useState("Enterprise SaaS, B2B Mart...");
  const [maxMentees, setMaxMentees] = useState("5");
  const [weeklyAvailability, setWeeklyAvailability] = useState("2-4 hours / week");
  const [meetingPreference, setMeetingPreference] = useState("Hybrid");

  const profileCompletion = 88;

  const addExpertise = (e) => {
    if (e.key === "Enter" && expertiseInput.trim() !== "") {
      e.preventDefault();
      setExpertise([...expertise, expertiseInput.trim()]);
      setExpertiseInput("");
    }
  };
  const removeExpertise = (index) => {
    setExpertise(expertise.filter((_, i) => i !== index));
  };

  const toggleStage = (stage) => {
    setStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };

  const handleSaveChanges = () => {
    const profileData = {
      fullName,
      email,
      phone,
      location,
      company,
      jobTitle,
      industry,
      yearsExperience,
      expertise,
      startupDomains,
      bio,
      stages,
      preferredIndustries,
      maxMentees,
      weeklyAvailability,
      meetingPreference,
    };
    console.log("Mentor profile save:", profileData);
    // TODO: send profileData to your backend
  };

  return (
    <div className="mp-page">
      {/* Sidebar */}
      <aside className="mp-sidebar">
        <div className="mp-brand">
          <span className="mp-brand-title">BOCC Mentor</span>
          <span className="mp-brand-sub">Mentorship Module</span>
        </div>

        <nav className="mp-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`mp-nav-item ${activeNav === item.label ? "mp-nav-active" : ""}`}
              onClick={() => setActiveNav(item.label)}
            >
              <span className="mp-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mp-sidebar-footer">
          <div className="mp-avatar-placeholder" />
          <div>
            <div className="mp-sidebar-name">Alex Smith</div>
            <div className="mp-sidebar-link">View Profile</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="mp-main">
        <div className="mp-header">
          <h1 className="mp-title">Mentor Profile</h1>
          <p className="mp-subtitle">Manage your professional information and mentorship settings.</p>
        </div>

        <div className="mp-content-grid">
          {/* Left summary card */}
          <div className="mp-summary-card">
            <div className="mp-summary-avatar" />
            <div className="mp-summary-name">Alex Smith</div>
            <div className="mp-summary-role">Senior Mentor</div>

            <div className="mp-summary-tags">
              <span className="mp-tag">TechStars</span>
              <span className="mp-tag">SaaS</span>
            </div>
            <div className="mp-summary-years">12 Years Exp.</div>

            <div className="mp-completion-section">
              <div className="mp-completion-label">
                PROFILE COMPLETION <span>{profileCompletion}%</span>
              </div>
              <div className="mp-completion-track">
                <div
                  className="mp-completion-fill"
                  style={{ width: `${profileCompletion}%` }}
                />
              </div>
            </div>

            <button className="mp-btn-outline mp-summary-btn">Change Photo</button>
            <button className="mp-btn-primary-outline mp-summary-btn">Preview Public Profile</button>

            <div className="mp-verified-status">&#10003; Verified Mentor Status</div>

            <div className="mp-expertise-section">
              <div className="mp-expertise-label">Expertise Highlights</div>
              <div className="mp-expertise-tags">
                <span className="mp-highlight-pill">Product Strategy</span>
                <span className="mp-highlight-pill">Growth</span>
                <span className="mp-highlight-pill">Fundraising</span>
              </div>
            </div>
          </div>

          {/* Right form area */}
          <div className="mp-form-area">
            {/* Personal Information */}
            <div className="mp-section">
              <h2 className="mp-section-title">Personal Information</h2>
              <div className="mp-row">
                <div className="mp-field mp-half">
                  <label className="mp-label">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="mp-field mp-half">
                  <label className="mp-label">Email (Read Only)</label>
                  <input type="email" value={email} disabled className="mp-input-disabled" />
                </div>
              </div>
              <div className="mp-row">
                <div className="mp-field mp-half">
                  <label className="mp-label">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mp-field mp-half">
                  <label className="mp-label">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="mp-section">
              <h2 className="mp-section-title">Professional Information</h2>
              <div className="mp-row">
                <div className="mp-field mp-half">
                  <label className="mp-label">Current Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="mp-field mp-half">
                  <label className="mp-label">Job Title</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="mp-row">
                <div className="mp-field mp-half">
                  <label className="mp-label">Industry</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div>
                <div className="mp-field mp-half">
                  <label className="mp-label">Years of Experience</label>
                  <input
                    type="text"
                    value={yearsExperience}
                    onChange={(e) => setYearsExperience(e.target.value)}
                  />
                </div>
              </div>

              <div className="mp-field">
                <label className="mp-label">Areas of Expertise</label>
                <div className="mp-chips-box">
                  {expertise.map((item, i) => (
                    <span className="mp-chip" key={i}>
                      {item}
                      <button type="button" onClick={() => removeExpertise(i)}>
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    className="mp-chip-input"
                    value={expertiseInput}
                    onChange={(e) => setExpertiseInput(e.target.value)}
                    onKeyDown={addExpertise}
                    placeholder="Add skill"
                  />
                </div>
              </div>

              <div className="mp-field">
                <label className="mp-label">Startup Domains</label>
                <input
                  type="text"
                  value={startupDomains}
                  onChange={(e) => setStartupDomains(e.target.value)}
                />
              </div>

              <div className="mp-field">
                <label className="mp-label">Professional Bio</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>
            </div>

            {/* Mentorship Preferences */}
            <div className="mp-section">
              <h2 className="mp-section-title mp-section-title-orange">Mentorship Preferences</h2>

              <div className="mp-field">
                <label className="mp-label">Ideal Startup Stages</label>
                <div className="mp-checkbox-row">
                  {STARTUP_STAGES.map((stage) => (
                    <label className="mp-checkbox-item" key={stage}>
                      <input
                        type="checkbox"
                        checked={stages.includes(stage)}
                        onChange={() => toggleStage(stage)}
                      />
                      {stage}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mp-row">
                <div className="mp-field mp-half">
                  <label className="mp-label">Preferred Industries</label>
                  <input
                    type="text"
                    value={preferredIndustries}
                    onChange={(e) => setPreferredIndustries(e.target.value)}
                  />
                </div>
                <div className="mp-field mp-half">
                  <label className="mp-label">Max Mentees</label>
                  <input
                    type="text"
                    value={maxMentees}
                    onChange={(e) => setMaxMentees(e.target.value)}
                  />
                </div>
              </div>

              <div className="mp-row">
                <div className="mp-field mp-half">
                  <label className="mp-label">Weekly Availability</label>
                  <input
                    type="text"
                    value={weeklyAvailability}
                    onChange={(e) => setWeeklyAvailability(e.target.value)}
                  />
                </div>
                <div className="mp-field mp-half">
                  <label className="mp-label">Meeting Preference</label>
                  <select
                    value={meetingPreference}
                    onChange={(e) => setMeetingPreference(e.target.value)}
                  >
                    <option value="Online">Online</option>
                    <option value="In-Person">In-Person</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div className="mp-section">
              <h2 className="mp-section-title">Account Settings</h2>
              <div className="mp-settings-list">
                {ACCOUNT_SETTINGS.map((item) => (
                  <button className="mp-settings-row" key={item.label}>
                    <div>
                      <div className="mp-settings-label">{item.label}</div>
                      <div className="mp-settings-desc">{item.desc}</div>
                    </div>
                    <span className="mp-settings-chevron">&#8250;</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="mp-footer-bar">
          <div className="mp-footer-left">
            <div className="mp-avatar-placeholder mp-footer-avatar" />
            <div>
              <div className="mp-sidebar-name">Alex Smith</div>
              <div className="mp-sidebar-link">View Profile</div>
            </div>
          </div>
          <div className="mp-footer-right">
            <span className="mp-last-updated">Last updated: Oct 24, 2023 10:00 AM</span>
            <button className="mp-btn-cancel">Cancel</button>
            <button className="mp-btn-save" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}