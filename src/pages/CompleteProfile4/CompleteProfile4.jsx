import React, { useState } from "react";
import "../../css/completeProfile4.css";

const INVESTMENT_STAGES = ["Idea", "Pre-Seed", "Seed", "Series A+"];

export default function CompleteProfile3() {
  const [photo, setPhoto] = useState(null);
  const [firm, setFirm] = useState("");
  const [designation, setDesignation] = useState("");
  const [bio, setBio] = useState("");
  const [stages, setStages] = useState([]);
  const [industries, setIndustries] = useState(["SaaS", "FinTech"]);
  const [industryInput, setIndustryInput] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");
  const [geoPreference, setGeoPreference] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const toggleStage = (stage) => {
    setStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };

  const addIndustry = (e) => {
    if (e.key === "Enter" && industryInput.trim() !== "") {
      e.preventDefault();
      setIndustries([...industries, industryInput.trim()]);
      setIndustryInput("");
    }
  };

  const removeIndustry = (index) => {
    setIndustries(industries.filter((_, i) => i !== index));
  };

  const handleSaveFinish = () => {
    const investorProfileData = {
      photo,
      firm,
      designation,
      bio,
      stages,
      industries,
      investmentRange,
      geoPreference,
      linkedin,
      portfolio,
    };
    console.log("Investor profile data:", investorProfileData);
    // TODO: send investorProfileData to your backend / next route here
  };

  return (
    <div className="cp3-page">
      <div className="cp3-header">
        <span className="cp3-logo">BOCC</span>
        <span className="cp3-avatar-icon">&#9673;</span>
      </div>

      <div className="cp3-outer">
        <div className="cp3-card">
          <div className="cp3-meta-row">
            <span className="cp3-step">Step 5 of 5</span>
            <span className="cp3-final">Final Completion</span>
          </div>
          <div className="cp3-progress-bar" />
          <h1 className="cp3-title">Complete Your Profile</h1>
          <p className="cp3-subtitle">
            Finalize your investor credentials in the Business Orbit ecosystem.
          </p>

          {/* Photo */}
          <div className="cp3-photo-section">
            <label className="cp3-photo-upload">
              {photo ? (
                <img src={photo} alt="Profile" className="cp3-photo-preview" />
              ) : (
                <div className="cp3-photo-placeholder">
                  <span className="cp3-photo-icon">&#128100;</span>
                </div>
              )}
              <span className="cp3-photo-camera">&#128247;</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: "none" }}
              />
            </label>
            <span className="cp3-photo-label">Profile Photo</span>
          </div>

          {/* Firm + Designation */}
          <div className="cp3-row">
            <div className="cp3-section cp3-half">
              <div className="cp3-label">Investment Firm / Organization</div>
              <input
                type="text"
                value={firm}
                onChange={(e) => setFirm(e.target.value)}
                placeholder="e.g. Orbit Capital"
              />
            </div>
            <div className="cp3-section cp3-half">
              <div className="cp3-label">Designation</div>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="e.g. Managing Director"
              />
            </div>
          </div>

          {/* Investor Bio */}
          <div className="cp3-section">
            <div className="cp3-label">Investor Bio</div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Briefly describe your investment thesis and what you look for in campus startups..."
            />
          </div>

          {/* Investment Stage */}
          <div className="cp3-section">
            <div className="cp3-label">Investment Stage</div>
            <div className="cp3-checkbox-row">
              {INVESTMENT_STAGES.map((stage) => (
                <label
                  key={stage}
                  className={`cp3-checkbox-item ${
                    stages.includes(stage) ? "cp3-checked" : ""
                  }`}
                >
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

          {/* Industry Focus */}
          <div className="cp3-section">
            <div className="cp3-label">Industry Focus</div>
            <div className="cp3-skills-box">
              {industries.map((industry, i) => (
                <span className="cp3-chip" key={i}>
                  {industry}
                  <button type="button" onClick={() => removeIndustry(i)}>
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              value={industryInput}
              onChange={(e) => setIndustryInput(e.target.value)}
              onKeyDown={addIndustry}
              placeholder="Type an industry and press enter..."
            />
          </div>

          {/* Investment Range + Geographic Preference */}
          <div className="cp3-row">
            <div className="cp3-section cp3-half">
              <div className="cp3-label">Typical Investment Range</div>
              <div className="cp3-link-field">
                <span className="cp3-link-icon">$</span>
                <input
                  type="text"
                  value={investmentRange}
                  onChange={(e) => setInvestmentRange(e.target.value)}
                  placeholder="50k - 250k"
                />
              </div>
            </div>
            <div className="cp3-section cp3-half">
              <div className="cp3-label">Geographic Preference</div>
              <input
                type="text"
                value={geoPreference}
                onChange={(e) => setGeoPreference(e.target.value)}
                placeholder="e.g. North America, Remote"
              />
            </div>
          </div>

          {/* LinkedIn + Portfolio */}
          <div className="cp3-row">
            <div className="cp3-section cp3-half">
              <div className="cp3-label">LinkedIn Profile URL</div>
              <div className="cp3-link-field">
                <span className="cp3-link-icon">in</span>
                <input
                  type="url"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="linkedin.com/in/..."
                />
              </div>
            </div>
            <div className="cp3-section cp3-half">
              <div className="cp3-label">Portfolio Website</div>
              <div className="cp3-link-field">
                <span className="cp3-link-icon">&#127760;</span>
                <input
                  type="url"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          <button className="cp3-save-btn" type="button" onClick={handleSaveFinish}>
            Save &amp; Finish <span className="cp3-check">&#10003;</span>
          </button>
          <span className="cp3-skip-link">Skip for now</span>
        </div>
      </div>

      <div className="cp3-footer">
        <div className="cp3-footer-col">
          <span className="cp3-footer-brand">BOCC</span>
          <p className="cp3-footer-tagline">
            Empowering the next generation of campus leaders and business innovators.
          </p>
        </div>
        <div className="cp3-footer-col">
          <span className="cp3-footer-heading">Platform</span>
          <a href="#">Programs</a>
          <a href="#">Clubs</a>
        </div>
        <div className="cp3-footer-col">
          <span className="cp3-footer-heading">Resources</span>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="cp3-footer-col cp3-footer-copyright">
          &copy; 2024 Business Orbit Campus Clubs. All rights reserved.
        </div>
      </div>
    </div>
  );
}