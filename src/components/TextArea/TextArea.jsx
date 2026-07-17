import { forwardRef } from 'react';

const TextArea = forwardRef(function TextArea({ label, id, placeholder, value, onChange, ...props }, ref) {
  return (
    <div className="field-group">
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        className="textarea-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
});

export default TextArea;
