function Card({ children, className = '', variant = 'default' }) {
  return <div className={`card ${variant === 'panel' ? 'panel' : ''} ${className}`.trim()}>{children}</div>;
}

export default Card;
