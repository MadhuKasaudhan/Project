import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { label, id, type = 'text', placeholder, icon: Icon, value, onChange, ...props },
  ref,
) {
  return (
    <div className="field-group">
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-shell">
        {Icon && (
          <span className="input-icon" aria-hidden="true">
            <Icon size={16} />
          </span>
        )}
        <input
          ref={ref}
          id={id}
          className="input-field"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
});

export default Input;
