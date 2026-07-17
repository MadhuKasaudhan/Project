function CheckboxCard({ label, checked, onToggle }) {
  return (
    <button type="button" className={`checkbox-card${checked ? ' active' : ''}`} onClick={onToggle}>
      <span className="checkbox-box" aria-hidden="true">
        {checked ? '✓' : ''}
      </span>
      <span>{label}</span>
    </button>
  );
}

export default CheckboxCard;
