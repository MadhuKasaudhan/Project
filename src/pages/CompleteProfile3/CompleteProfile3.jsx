import React, { useState } from "react";
import "./completeProfile3.css";

const INDUSTRIES = ["SaaS", "FinTech", "Sustainability", "HealthTech", "DeepTech", "Web3"];
const EXPERIENCE_RANGES = ["0-2 years", "3-5 years", "6-10 years", "10+ years"];
const AVAILABILITY_OPTIONS = [
  "1-2 hours / week",
  "3-5 hours / week",
  "5+ hours / week",
  "Occasional / As needed",
];

export default function CompleteProfile2() {
  const [photo, setPhoto] = useState(null);
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState(["Product Strategy", "Fundraising"]);
  const [skillInput, setSkillInput] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [industries, setIndustries] = useState([]);
  const [mentoringMode, setMentoringMode] = useState("Both");
  const [languages, setLanguages] = useState("");
  const [availability, setAvailability] = useState("");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault();
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const toggleIndustry = (industry) => {
    setIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const handleSaveFinish = () => {
    const mentorProfileData = {
      photo,
      company,
      designation,
      experience,
      bio,
      skills,
      linkedin,
      portfolio,
      industries,
      mentoringMode,
      languages,
      availability,
    };
    console.log("Mentor profile data:", mentorProfileData);
    // TODO: send mentorProfileData to your backend / next route here
  };

  return (
    <div className="cp2-wrapper">
      <div className="cp2-topbar">
        <span className="cp2-step">Step 5 of 5</span>
        <span className="cp2-final">Final Completion</span>
      </div>

      <div className="cp2-outer">
        <div className="cp2-card">
          <div className="cp2-progress-bar" />
          <h1 className="cp2-title">Complete Your Profile</h1>
          <p className="cp2-subtitle">
            Finish setting up your presence in the Business Orbit ecosystem as a{" "}
            <strong>Mentor</strong>.
          </p>

          {/* Photo */}
          <div className="cp2-photo-section">
            <label className="cp2-photo-upload">
              {photo ? (
                <img src={photo} alt="Profile" className="cp2-photo-preview" />
              ) : (
                <div className="cp2-photo-placeholder">
                  <span className="cp2-photo-icon">&#128100;</span>
                </div>
              )}
              <span className="cp2-photo-camera">&#128247;</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
            </label>
            <span className="cp2-photo-label">Profile Photo</span>
          </div>

          {/* Company + Designation */}
          <div className="cp2-row">
            <div className="cp2-section cp2-half">
              <div className="cp2-label">Current Company</div>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Google, McKinsey, Stripe"
              />
            </div>
            <div className="cp2-section cp2-half">
              <div className="cp2-label">Designation</div>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="e.g. Senior Product Manager"
              />
            </div>
          </div>

          {/* Years of Experience */}
          <div className="cp2-section">
            <div className="cp2-label">Years of Experience</div>
            <select value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option value="">Select range</option>
              {EXPERIENCE_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Short Bio */}
          <div className="cp2-section">
            <div className="cp2-label">Short Bio</div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about your background, career milestones, and why you want to mentor campus leaders..."
            />
          </div>

          {/* Areas of Expertise */}
          <div className="cp2-section">
            <div className="cp2-label">Areas of Expertise</div>
            <div className="cp2-skills-box">
              {skills.map((skill, i) => (
                <span className="cp2-chip" key={i}>
                  {skill}
                  <button type="button" onClick={() => removeSkill(i)}>
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={addSkill}
              placeholder="Type a skill and press enter..."
            />
          </div>

          {/* LinkedIn + Portfolio */}
          <div className="cp2-row">
            <div className="cp2-section cp2-half">
              <div className="cp2-label">LinkedIn Profile URL</div>
              <div className="cp2-link-field">
                <span className="cp2-link-icon">in</span>
                <input
                  type="url"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="linkedin.com/in/..."
                />
              </div>
            </div>
            <div className="cp2-section cp2-half">
              <div className="cp2-label">Portfolio/Website (Optional)</div>
              <div className="cp2-link-field">
                <span className="cp2-link-icon"></span>
                <input
                  type="url"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          {/* Industries Mentored */}
          <div className="cp2-section">
            <div className="cp2-label">Industries Mentored</div>
            <div className="cp2-checkbox-grid">
              {INDUSTRIES.map((industry) => (
                <label
                  key={industry}
                  className={`cp2-checkbox-item ${
                    industries.includes(industry) ? "cp2-checked" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={industries.includes(industry)}
                    onChange={() => toggleIndustry(industry)}
                  />
                  {industry}
                </label>
              ))}
            </div>
          </div>

          {/* Mentoring Mode + Languages */}
          <div className="cp2-row">
            <div className="cp2-section cp2-half">
              <div className="cp2-label">Mentoring Mode</div>
              <div className="cp2-radio-group">
                {["Online", "Offline", "Both"].map((mode) => (
                  <label className="cp2-radio-item" key={mode}>
                    <input
                      type="radio"
                      name="mentoringMode"
                      value={mode}
                      checked={mentoringMode === mode}
                      onChange={() => setMentoringMode(mode)}
                    />
                    {mode}
                  </label>
                ))}
              </div>
            </div>
            <div className="cp2-section cp2-half">
              <div className="cp2-label">Languages Spoken</div>
              <input
                type="text"
                value={languages}
                onChange={(e) => setLanguages(e.target.value)}
                placeholder="e.g. English, Spanish, Mandarin"
              />
            </div>
          </div>

          {/* Availability */}
          <div className="cp2-section">
            <div className="cp2-label">Availability</div>
            <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
              <option value="">Choose your frequency</option>
              {AVAILABILITY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button className="cp2-save-btn" type="button" onClick={handleSaveFinish}>
            Save &amp; Finish
          </button>
          <span className="cp2-skip-link">Skip for now</span>
        </div>
      </div>

      <div className="cp2-footer">
        <span>BOCC</span>
        <span>Platform</span>
        <span>Resources</span>
        <span>&copy; 2024 Business</span>
      </div>
    </div>
  );
}