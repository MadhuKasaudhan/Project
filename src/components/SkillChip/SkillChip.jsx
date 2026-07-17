import { X } from 'lucide-react';

function SkillChip({ label, onRemove }) {
  return (
    <button type="button" className="skill-chip" onClick={onRemove}>
      <span>{label}</span>
      <X size={12} />
    </button>
  );
}

export default SkillChip;
