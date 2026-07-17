import { Clock3 } from 'lucide-react';

function Timeline() {
  return (
    <div className="timeline-card">
      <div className="timeline-left">
        <div className="timeline-icon">
          <Clock3 size={18} />
        </div>
        <div>
          <div className="timeline-label">Estimated Timeline</div>
          <div className="timeline-subtext">Review window</div>
        </div>
      </div>
      <div className="timeline-right">24–48 Business Hours</div>
    </div>
  );
}

export default Timeline;
