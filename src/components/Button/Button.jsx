import { Link } from 'react-router-dom';

function Button({ children, variant = 'primary', onClick, type = 'button', to, className = '' }) {
  const buttonClassName = `action-btn ${variant === 'secondary' ? 'secondary' : 'primary'} ${className}`.trim();

  if (to) {
    return (
      <Link className={buttonClassName} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
