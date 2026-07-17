import { useMemo, useState } from 'react';
import { Globe } from 'lucide-react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import ProfileUploader from '../../components/ProfileUploader/ProfileUploader';
import SkillChip from '../../components/SkillChip/SkillChip';
import TextArea from '../../components/TextArea/TextArea';
import CheckboxCard from '../../components/CheckboxCard/CheckboxCard';
import '../../css/completeProfile.css';

const initialSkills = ['Fintech', 'Leadership'];
const interests = ['SaaS', 'EdTech', 'Sustainability', 'Web3', 'HealthTech', 'FinTech'];

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6.94 8.5a1.56 1.56 0 1 0 0-3.12 1.56 1.56 0 0 0 0 3.12Z" />
      <path d="M5.38 9.75h3.12v8.25H5.38z" />
      <path d="M10.75 9.75h2.99v1.13h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.75 2.08 3.75 4.79v4.95h-3.13v-4.54c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.62h-3.13z" />
    </svg>
  );
}

function CompleteProfile() {
  const [skills, setSkills] = useState(initialSkills);
  const [skillInput, setSkillInput] = useState('');
  const [selectedInterests, setSelectedInterests] = useState(['SaaS', 'FinTech']);

  const headerStep = useMemo(() => 'Step 5 of 5 - Final Completion', []);

  const handleAddSkill = (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const nextSkill = skillInput.trim();
    if (!nextSkill) return;
    if (!skills.includes(nextSkill)) {
      setSkills((current) => [...current, nextSkill]);
    }
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills((current) => current.filter((skill) => skill !== skillToRemove));
  };

  const toggleInterest = (interest) => {
    setSelectedInterests((current) =>
      current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest],
    );
  };

  return (
    <div className="page-shell complete-profile-page">
      <Header stepLabel="Step 5 of 5" rightText="Final Completion" />
      <main className="complete-profile-main">
        <section className="complete-profile-card" aria-labelledby="complete-profile-title">
          <div className="complete-profile-header">
            <h1 id="complete-profile-title">Complete Your Profile</h1>
            <p>Finish setting up your presence in the Business Orbit ecosystem.</p>
          </div>

          <ProfileUploader />

          <div className="field-stack">
            <TextArea
              label="Short Bio"
              id="short-bio"
              placeholder="Tell us about your background and professional goals..."
              rows={6}
            />

            <div className="field-group">
              <label className="field-label">Skills &amp; Interests</label>
              <div className="skill-list">
                {skills.map((skill) => (
                  <SkillChip key={skill} label={skill} onRemove={() => handleRemoveSkill(skill)} />
                ))}
              </div>
              <input
                className="input-field"
                type="text"
                placeholder="Type a skill and press enter..."
                value={skillInput}
                onChange={(event) => setSkillInput(event.target.value)}
                onKeyDown={handleAddSkill}
              />
            </div>

            <div className="link-grid">
              <Input
                label="LinkedIn Profile URL"
                id="linkedin"
                type="url"
                placeholder="linkedin.com/in/..."
                icon={LinkedinIcon}
              />
              <Input
                label="Portfolio/Website (Optional)"
                id="website"
                type="url"
                placeholder="https://..."
                icon={Globe}
              />
            </div>

            <div className="field-group">
              <label className="field-label">Startup Interests</label>
              <div className="interest-grid">
                {interests.map((interest) => (
                  <CheckboxCard
                    key={interest}
                    label={interest}
                    checked={selectedInterests.includes(interest)}
                    onToggle={() => toggleInterest(interest)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <Button to="/" className="profile-primary-btn">Save &amp; Finish</Button>
            <a className="text-link" href="#">Skip for now</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CompleteProfile;
