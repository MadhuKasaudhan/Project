import { useEffect, useRef, useState } from 'react';
import { Mail, RefreshCw } from 'lucide-react';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const otpLength = 6;

function VerifyEmail() {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const [secondsLeft, setSecondsLeft] = useState(45);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleChange = (index, value) => {
    const sanitized = value.replace(/\D/g, '').slice(-1);
    const nextOtp = [...otp];
    nextOtp[index] = sanitized;
    setOtp(nextOtp);

    if (sanitized && index < otpLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      const nextOtp = [...otp];
      nextOtp[index - 1] = '';
      setOtp(nextOtp);
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <main className="main-content">
        <section className="auth-card">
          <div className="auth-icon">
            <Mail size={24} />
          </div>
          <div className="auth-badge">Step 2 of 3</div>
          <h1>Verify Your Email</h1>
          <p>
            We have sent a six-digit verification code to your inbox. Enter it below to continue.
          </p>

          <div className="otp-inputs">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputsRef.current[index] = element;
                }}
                className="otp-input"
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={value}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>

          <div className="actions-row">
            <Button to="/application-rejected">Verify</Button>
            <Button to="/verification-progress" variant="secondary">
              Back
            </Button>
          </div>

          <div className="info-box">
            <span>Resend code in {secondsLeft}s</span>
            <button type="button" className="inline-action">
              <RefreshCw size={15} />
              Resend Code
            </button>
          </div>

          <div className="reason-box auth-hint">
            <div className="info-title">Need help?</div>
            <p>
              If you do not receive the code, check your spam folder or request a new one.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default VerifyEmail;
