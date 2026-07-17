function ProgressBar({ steps }) {
  return (
    <div className="progress-stack">
      {steps.map((step, index) => (
        <div key={step.title} className="progress-item">
          <div className={`progress-dot ${step.status}`}>{step.status === 'done' ? '✓' : index + 1}</div>
          <div className="progress-meta">
            <strong>{step.title}</strong>
            <span>{step.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
