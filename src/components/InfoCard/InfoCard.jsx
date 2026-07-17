function InfoCard({ icon, title, text }) {
  const Icon = icon;
  return (
    <div className="info-card">
      <div className="info-card-head">
        <div className="info-icon">
          <Icon size={18} />
        </div>
        <div className="info-title">{title}</div>
      </div>
      <p className="info-text">{text}</p>
    </div>
  );
}

export default InfoCard;
