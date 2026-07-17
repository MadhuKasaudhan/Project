import { ArrowLeft, CalendarDays, GraduationCap, Rocket, Users } from 'lucide-react';
import Button from '../../components/Button/Button';
import ChapterCard from '../../components/ChapterCard/ChapterCard';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import StatsCard from '../../components/StatsCard/StatsCard';

const stats = [
  { icon: Users, label: 'Members', value: '524' },
  { icon: Rocket, label: 'Active Startups', value: '12' },
  { icon: GraduationCap, label: 'Mentors', value: '45' },
  { icon: CalendarDays, label: 'Events Conducted', value: '82' },
];

function WelcomeChapter() {
  return (
    <div className="page-shell welcome-page-shell">
      <Header />
      <main className="welcome-main">
        <div className="welcome-container">
          <Hero />
          <ChapterCard />

          <section className="stats-grid" aria-label="Chapter statistics">
            {stats.map((stat) => (
              <StatsCard key={stat.label} icon={stat.icon} label={stat.label} value={stat.value} />
            ))}
          </section>

          <div className="action-bar">
            <Button to="/" variant="secondary" className="action-bar-back">
              <ArrowLeft size={16} />
              Back
            </Button>

            <div className="action-bar-actions">
              <Button to="/verify-email" className="action-bar-primary">
                Continue to Email Verification
              </Button>
              <Button to="/application-rejected" variant="secondary" className="action-bar-secondary">
                Request Chapter Change
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeChapter;
