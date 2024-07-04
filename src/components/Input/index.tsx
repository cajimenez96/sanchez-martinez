import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  hasError?: boolean;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ 
  label,
  placeholder,
  type = 'text',
  name,
  id,
  hasError = false,
  required = false,
  error,
  handleChange,
}) => {
  return (
    <div className="mb-4 w-full flex flex-col">
      <label className="text-base text-oscuro" htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea 
          className="mt-2 p-2 bg-transparent text-oscuro border-0 border-b-2 border-oscuro placeholder:text- focus:outline-none resize-none h-28"
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          onChange={handleChange}
          id={id}
          required={required}
          placeholder={placeholder}
          className="mt-2 p-2 bg-transparent text-oscuro border-0 border-b-2 border-oscuro focus:outline-none"
        />
      )}
      {hasError && (<p className="text-alert text-xs">{error}</p>)}
    </div>
  );
};

export default Input;
