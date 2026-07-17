function StatsCard({ icon: Icon, label, value }) {
  return (
    <article className="stats-card">
      <div className="stats-icon">
        <Icon size={20} />
      </div>
      <div className="stats-label">{label}</div>
      <div className="stats-value">{value}</div>
    </article>
  );
}

export default StatsCard;
