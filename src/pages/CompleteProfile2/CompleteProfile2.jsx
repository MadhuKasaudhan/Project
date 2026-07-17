import React, { useState } from "react";
import '../../css/completeProfile2.css';

const ALL_INTERESTS = ["AI", "SaaS", "FinTech", "HealthTech", "EdTech", "Sustainability"];
const ALL_GOALS = [
  "Build a Startup",
  "Find Mentors",
  "Meet Investors",
  "Get Incubated",
  "Freelancing Opportunities",
  "Networking",
];

export default function CompleteProfile() {
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState(["Product Management", "Python", "Marketing"]);
  const [skillInput, setSkillInput] = useState("");
  const [interests, setInterests] = useState([]);
  const [goals, setGoals] = useState([]);
  const [links, setLinks] = useState({ linkedin: "", website: "", github: "" });
  const [photo, setPhoto] = useState(null);

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

  const toggleInterest = (interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const toggleGoal = (goal) => {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const handleSaveContinue = () => {
    const profileData = { bio, skills, interests, goals, links, photo };
    console.log("Profile data:", profileData);
    // TODO: send profileData to your backend / next route here
  };

  return (
    <div className="cp-wrapper">
      <div className="cp-topbar">
        <span className="cp-logo">BOCC</span>
        <span className="cp-step">Step 5 of 5</span>
      </div>

      <div className="cp-outer">
        <div className="cp-card">
          <div className="cp-progress-bar" />
          <h1 className="cp-title">Complete Your Profile</h1>
          <p className="cp-subtitle">
            Complete your profile to personalize your BOCC startup journey.
          </p>

          {/* Photo */}
          <div className="cp-photo-section">
            {photo ? (
              <img src={photo} alt="Profile" className="cp-photo-preview" />
            ) : (
              <div className="cp-photo-placeholder" />
            )}
            <label className="cp-upload-btn">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {/* Bio */}
          <div className="cp-section">
            <div className="cp-label">Short Bio</div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about your background, interests, and what you're looking for..."
            />
          </div>

          {/* Skills */}
          <div className="cp-section">
            <div className="cp-label">Skills &amp; Expertise</div>
            <div className="cp-skills-box">
              {skills.map((skill, i) => (
                <span className="cp-chip" key={i}>
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
              placeholder="Add a skill..."
            />
          </div>

          {/* Startup Interests */}
          <div className="cp-section">
            <div className="cp-label cp-label-orange">Startup Interests</div>
            <div className="cp-checkbox-grid">
              {ALL_INTERESTS.map((interest) => (
                <label
                  key={interest}
                  className={`cp-checkbox-item ${
                    interests.includes(interest) ? "cp-checked" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={interests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          {/* Startup Goals */}
          <div className="cp-section">
            <div className="cp-label cp-label-orange">Startup Goals</div>
            <div className="cp-goal-pills">
              {ALL_GOALS.map((goal) => (
                <div
                  key={goal}
                  className={`cp-goal-pill ${goals.includes(goal) ? "cp-selected" : ""}`}
                  onClick={() => toggleGoal(goal)}
                >
                  {goal}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Links */}
          <div className="cp-section">
            <div className="cp-label">Professional Links</div>
            <div className="cp-link-field">
              <span className="cp-link-icon">🔗</span>
              <input
                type="url"
                placeholder="LinkedIn URL"
                value={links.linkedin}
                onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
              />
            </div>
            <div className="cp-link-field">
              <span className="cp-link-icon">🌐</span>
              <input
                type="url"
                placeholder="Portfolio / Website (Optional)"
                value={links.website}
                onChange={(e) => setLinks({ ...links, website: e.target.value })}
              />
            </div>
            <div className="cp-link-field">
              <span className="cp-link-icon">💻</span>
              <input
                type="url"
                placeholder="GitHub (Optional)"
                value={links.github}
                onChange={(e) => setLinks({ ...links, github: e.target.value })}
              />
            </div>
          </div>

          <button className="cp-save-btn" type="button" onClick={handleSaveContinue}>
            Save &amp; Continue
          </button>
          <span className="cp-skip-link">Skip for Now</span>
        </div>
      </div>
    </div>
  );
}