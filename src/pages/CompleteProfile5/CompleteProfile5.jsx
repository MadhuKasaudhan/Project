import React, { useState } from "react";
import "../../css/completeProfile5.css";

const ORG_TYPES = [
  "University Affiliated",
  "Independent / Private",
  "Government Backed",
  "Corporate",
  "Non-Profit",
];

const SUPPORT_SERVICES = [
  "Mentorship",
  "Legal Aid",
  "Office Space",
  "Cloud Credits",
  "R&D Labs",
  "Demo Days",
];

export default function CompleteProfile4() {
  const [logo, setLogo] = useState(null);
  const [incubatorName, setIncubatorName] = useState("");
  const [orgType, setOrgType] = useState("University Affiliated");
  const [location, setLocation] = useState("");
  const [startupsSupported, setStartupsSupported] = useState("");
  const [bio, setBio] = useState("");
  const [programs, setPrograms] = useState(["Seed Acceleration", "Venture Building"]);
  const [programInput, setProgramInput] = useState("");
  const [services, setServices] = useState(["Office Space"]);
  const [website, setWebsite] = useState("");
  const [industries, setIndustries] = useState("");

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const addProgram = (e) => {
    if (e.key === "Enter" && programInput.trim() !== "") {
      e.preventDefault();
      setPrograms([...programs, programInput.trim()]);
      setProgramInput("");
    }
  };

  const removeProgram = (index) => {
    setPrograms(programs.filter((_, i) => i !== index));
  };

  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSaveFinish = () => {
    const incubatorProfileData = {
      logo,
      incubatorName,
      orgType,
      location,
      startupsSupported,
      bio,
      programs,
      services,
      website,
      industries,
    };
    console.log("Incubator profile data:", incubatorProfileData);
    // TODO: send incubatorProfileData to your backend / next route here
  };

  return (
    <div className="cp4-page">
      <div className="cp4-header">
        <span className="cp4-logo">BOCC</span>
        <span className="cp4-avatar-icon">&#9673;</span>
      </div>

      <div className="cp4-outer">
        <div className="cp4-card">
          <div className="cp4-meta-row">
            <span className="cp4-step">Step 5 of 5</span>
            <span className="cp4-final">Final Completion</span>
          </div>
          <div className="cp4-progress-bar" />
          <h1 className="cp4-title">Complete Your Profile</h1>
          <p className="cp4-subtitle">
            Finish setting up your incubator's presence in the Business Orbit ecosystem.
          </p>

          {/* Logo */}
          <div className="cp4-photo-section">
            <label className="cp4-photo-upload">
              {logo ? (
                <img src={logo} alt="Organization Logo" className="cp4-photo-preview" />
              ) : (
                <div className="cp4-photo-placeholder">
                  <span className="cp4-photo-icon">&#127970;</span>
                </div>
              )}
              <span className="cp4-photo-camera">&#128247;</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                style={{ display: "none" }}
              />
            </label>
            <span className="cp4-photo-label">Organization Logo</span>
          </div>

          {/* Incubator Name + Organization Type */}
          <div className="cp4-row">
            <div className="cp4-section cp4-half">
              <div className="cp4-label">Incubator Name</div>
              <input
                type="text"
                value={incubatorName}
                onChange={(e) => setIncubatorName(e.target.value)}
                placeholder="Orbit Tech Labs"
              />
            </div>
            <div className="cp4-section cp4-half">
              <div className="cp4-label">Organization Type</div>
              <select value={orgType} onChange={(e) => setOrgType(e.target.value)}>
                {ORG_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location + Startups Supported */}
          <div className="cp4-row">
            <div className="cp4-section cp4-half">
              <div className="cp4-label">Location</div>
              <div className="cp4-link-field">
                <span className="cp4-link-icon"></span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>
            <div className="cp4-section cp4-half">
              <div className="cp4-label">Startups Supported</div>
              <input
                type="text"
                value={startupsSupported}
                onChange={(e) => setStartupsSupported(e.target.value)}
                placeholder="50+"
              />
            </div>
          </div>

          {/* Mission Statement / Bio */}
          <div className="cp4-section">
            <div className="cp4-label">Mission Statement / Bio</div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about your incubator's goals, history, and the types of founders you support..."
            />
          </div>

          {/* Startup Programs Offered */}
          <div className="cp4-section">
            <div className="cp4-label">Startup Programs Offered</div>
            <div className="cp4-skills-box">
              {programs.map((program, i) => (
                <span className="cp4-chip" key={i}>
                  {program}
                  <button type="button" onClick={() => removeProgram(i)}>
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={programInput}
              onChange={(e) => setProgramInput(e.target.value)}
              onKeyDown={addProgram}
              placeholder="Type a program and press enter..."
            />
          </div>

          {/* Support Services */}
          <div className="cp4-section">
            <div className="cp4-label">Support Services</div>
            <div className="cp4-checkbox-grid">
              {SUPPORT_SERVICES.map((service) => (
                <label
                  key={service}
                  className={`cp4-checkbox-item ${
                    services.includes(service) ? "cp4-checked" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={services.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Website + Industries Supported */}
          <div className="cp4-row">
            <div className="cp4-section cp4-half">
              <div className="cp4-label">Website</div>
              <div className="cp4-link-field">
                <span className="cp4-link-icon"></span>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://..."
                />
              </div>
            </div>
            <div className="cp4-section cp4-half">
              <div className="cp4-label">Industries Supported</div>
              <div className="cp4-link-field">
                <span className="cp4-link-icon"></span>
                <input
                  type="text"
                  value={industries}
                  onChange={(e) => setIndustries(e.target.value)}
                  placeholder="SaaS, FinTech, AI"
                />
              </div>
            </div>
          </div>

          <button className="cp4-save-btn" type="button" onClick={handleSaveFinish}>
            Save &amp; Finish <span className="cp4-check">&#10003;</span>
          </button>
          <span className="cp4-skip-link">Skip for now</span>
        </div>
      </div>

      <div className="cp4-footer">
        <div className="cp4-footer-col">
          <span className="cp4-footer-brand">BOCC</span>
          <p className="cp4-footer-tagline">
            Empowering the next generation of campus leaders and business innovators.
          </p>
        </div>
        <div className="cp4-footer-col">
          <span className="cp4-footer-heading">Platform</span>
          <a href="#">Programs</a>
          <a href="#">Clubs</a>
        </div>
        <div className="cp4-footer-col">
          <span className="cp4-footer-heading">Resources</span>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="cp4-footer-col cp4-footer-copyright">
          &copy; 2024 Business Orbit Campus Clubs. All rights reserved.
        </div>
      </div>
    </div>
  );
}