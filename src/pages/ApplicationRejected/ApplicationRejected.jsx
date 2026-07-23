import { AlertCircle } from 'lucide-react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import "./styles.css";

function ApplicationRejected() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="main-content">
        <section className="status-card">
          <div className="status-icon">
            <AlertCircle size={40} />
          </div>
          <div className="eyebrow-pill danger">Application Not Approved</div>
          <h1>We could not approve this application</h1>
          <p>
            Your submission did not pass the current review criteria. Please review the reason
            below and update the required details before resubmitting.
          </p>

          <div className="reason-box">
            <div className="info-title">Reason for review</div>
            <p>
              One or more submitted documents were incomplete or did not meet the required format.
            </p>
          </div>

          <div className="info-box">
            Our support team can help you correct the issue quickly and guide you through the next
            step.
          </div>

          <div className="actions-row">
            <Button to="/">Back to Dashboard</Button>
            <Button to="/verify-email" variant="secondary">
              Contact Support
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ApplicationRejected;
