import { Clock3, BellRing, FileText, MessageCircleMore } from 'lucide-react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import StatusBadge from '../../components/StatusBadge/StatusBadge';
import Timeline from '../../components/Timeline/Timeline';
import InfoCard from '../../components/InfoCard/InfoCard';
import './verification.css';

const steps = [
  { title: 'Profile', status: 'done' },
  { title: 'Details', status: 'done' },
  { title: 'Docs', status: 'done' },
  { title: 'Review', status: 'active' },
  { title: 'Finalize', status: 'pending' },
];

const infoCards = [
  {
    icon: BellRing,
    title: 'Next Steps',
    text: 'Check your email for status updates or requests for additional documents.',
  },
  {
    icon: FileText,
    title: 'Club Charter',
    text: 'Review the BOCC bylaws while you wait to ensure compliance.',
  },
];

function VerificationProgress() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="main-content">
        <div className="content-card">
          <div className="illustration-box">
            <div className="illustration-content">
              <div className="illustration-icon">
                <Clock3 size={26} />
              </div>
              <div className="illustration-text">AWAITING VERIFICATION</div>
            </div>
          </div>

          <h1 className="page-title">Verification in Progress</h1>
          <p className="page-description">
            Our administrative team is currently reviewing your club registration documents. This
            process ensures all Business Orbit Campus Clubs meet our professional ecosystem
            standards.
          </p>

          <StatusBadge />
          <Timeline />

          <div className="progress-section">
            <div className="progress-top">
              <div className="progress-title">Registration Progress</div>
              <div className="progress-value">80% Complete</div>
            </div>
            <div className="progress-bar">
              <span />
            </div>

            <div className="stepper">
              {steps.map((step, index) => {
                const iconClass = step.status === 'done' ? 'step-icon done' : step.status === 'active' ? 'step-icon active' : 'step-icon';

                return (
                  <div key={step.title} className="step">
                    <div className={iconClass}>{step.status === 'done' ? '✓' : index + 1}</div>
                    <span>{step.title}</span>
                    {index < steps.length - 1 && <div className="step-line" />}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="actions-row">
            <Button to="/">Return to Home</Button>
            <Button to="/verify-email" variant="secondary">
              <MessageCircleMore size={16} />
              Contact Support
            </Button>
          </div>

          <div className="info-grid">
            {infoCards.map((card) => (
              <InfoCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default VerificationProgress;
