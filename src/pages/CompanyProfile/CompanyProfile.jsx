import React, { useState } from "react";
import "../../css/companyProfile.css";

const INDUSTRIES = [
  "Technology",
  "Finance",
  "Healthcare",
  "Retail / E-commerce",
  "Education",
  "Manufacturing",
  "Other",
];

const COMPANY_SIZES = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];

const OPPORTUNITY_TYPES = [
  "Internships",
  "Freelancing",
  "Part-time Roles",
  "Full-time Graduate Roles",
  "Project Based",
];

export default function CompleteProfile5() {
  const [logo, setLogo] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [hiringCategories, setHiringCategories] = useState(["Software Engineering", "Product Marketing"]);
  const [categoryInput, setCategoryInput] = useState("");
  const [studentSkills, setStudentSkills] = useState(["Leadership", "Agile Project Management"]);
  const [skillInput, setSkillInput] = useState("");
  const [opportunityTypes, setOpportunityTypes] = useState([]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const addCategory = (e) => {
    if (e.key === "Enter" && categoryInput.trim() !== "") {
      e.preventDefault();
      setHiringCategories([...hiringCategories, categoryInput.trim()]);
      setCategoryInput("");
    }
  };
  const removeCategory = (index) => {
    setHiringCategories(hiringCategories.filter((_, i) => i !== index));
  };

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault();
      setStudentSkills([...studentSkills, skillInput.trim()]);
      setSkillInput("");
    }
  };
  const removeSkill = (index) => {
    setStudentSkills(studentSkills.filter((_, i) => i !== index));
  };

  const toggleOpportunity = (type) => {
    setOpportunityTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSaveFinish = () => {
    const companyProfileData = {
      logo,
      companyName,
      industry,
      companySize,
      website,
      bio,
      hiringCategories,
      studentSkills,
      opportunityTypes,
    };
    console.log("Company profile data:", companyProfileData);
    // TODO: send companyProfileData to your backend / next route here
  };

  return (
    <div className="cp5-outer">
      <div className="cp5-card">
        <div className="cp5-meta-row">
          <span className="cp5-step">Step 5 of 5</span>
          <span className="cp5-final">Final Completion</span>
        </div>
        <div className="cp5-progress-bar" />
        <h1 className="cp5-title">Complete Company Profile</h1>
        <p className="cp5-subtitle">
          Finish setting up your company presence in the Business Orbit ecosystem.
        </p>

        {/* Logo */}
        <div className="cp5-photo-section">
          <label className="cp5-photo-upload">
            {logo ? (
              <img src={logo} alt="Company Logo" className="cp5-photo-preview" />
            ) : (
              <div className="cp5-photo-placeholder">
                <span className="cp5-photo-icon">&#128100;</span>
              </div>
            )}
            <span className="cp5-photo-camera">&#128247;</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              style={{ display: "none" }}
            />
          </label>
          <span className="cp5-photo-label">Company Logo</span>
        </div>

        {/* Company Name + Industry */}
        <div className="cp5-row">
          <div className="cp5-section cp5-half">
            <div className="cp5-label">Company Name</div>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Orbit Tech Solutions"
            />
          </div>
          <div className="cp5-section cp5-half">
            <div className="cp5-label">Industry</div>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
              <option value="">Select Industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Company Size + Company Website */}
        <div className="cp5-row">
          <div className="cp5-section cp5-half">
            <div className="cp5-label">Company Size</div>
            <select value={companySize} onChange={(e) => setCompanySize(e.target.value)}>
              <option value="">Number of employees</option>
              {COMPANY_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="cp5-section cp5-half">
            <div className="cp5-label">Company Website</div>
            <div className="cp5-link-field">
              <span className="cp5-link-icon"></span>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://"
              />
            </div>
          </div>
        </div>

        {/* Company Mission & Bio */}
        <div className="cp5-section">
          <div className="cp5-label">Company Mission &amp; Bio</div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about your company values, background and what you look for in campus leaders..."
          />
        </div>

        {/* Hiring Categories */}
        <div className="cp5-section">
          <div className="cp5-label">Hiring Categories</div>
          <div className="cp5-skills-box">
            {hiringCategories.map((category, i) => (
              <span className="cp5-chip" key={i}>
                {category}
                <button type="button" onClick={() => removeCategory(i)}>
                  ×
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            onKeyDown={addCategory}
            placeholder="Type a category and press enter..."
          />
        </div>

        {/* Preferred Student Skills */}
        <div className="cp5-section">
          <div className="cp5-label">Preferred Student Skills</div>
          <div className="cp5-skills-box">
            {studentSkills.map((skill, i) => (
              <span className="cp5-chip" key={i}>
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
            placeholder="Type a skill (e.g. Python, Strategy) and press enter..."
          />
        </div>

        {/* Types of Opportunities Offered */}
        <div className="cp5-section">
          <div className="cp5-label">Types of Opportunities Offered</div>
          <div className="cp5-checkbox-grid">
            {OPPORTUNITY_TYPES.map((type) => (
              <label
                key={type}
                className={`cp5-checkbox-item ${
                  opportunityTypes.includes(type) ? "cp5-checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={opportunityTypes.includes(type)}
                  onChange={() => toggleOpportunity(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <button className="cp5-save-btn" type="button" onClick={handleSaveFinish}>
          Save &amp; Finish <span className="cp5-check">&#10003;</span>
        </button>
        <span className="cp5-skip-link">Skip for now</span>
      </div>
    </div>
  );
}