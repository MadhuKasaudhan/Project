import { useState } from 'react';

function OTPInput({ length = 4 }) {
  const [values, setValues] = useState(Array(length).fill(''));

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    const nextValues = [...values];
    nextValues[index] = value;
    setValues(nextValues);

    if (value && index < length - 1) {
      const next = document.querySelectorAll('.otp-input')[index + 1];
      next?.focus();
    }
  };

  return (
    <div className="otp-grid">
      {values.map((value, index) => (
        <input
          key={index}
          className="otp-input"
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={value}
          onChange={(event) => handleChange(index, event)}
          aria-label={`OTP digit ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default OTPInput;
