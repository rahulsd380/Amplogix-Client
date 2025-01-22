import React, { ChangeEvent, forwardRef } from "react";

interface InputFieldProps {
  type?: "text" | "email" | "number";
  placeholder?: string;
  isMultiline?: boolean;
  className?: string;
  error?: string;
  // Added ref and other props to handle form registration
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
  ({ type = "text", placeholder = "", isMultiline = false, className = "", error = "", ...rest }, ref) => {
    const inputClass = `border border-border-10 rounded-md py-2 px-4 w-full text-white bg-white bg-opacity-5 focus:outline-none focus:border-2 focus:ring-0 ${className}`;

    return (
      <div>
        {isMultiline ? (
          <textarea
            className={inputClass}
            placeholder={placeholder}
            ref={ref}
            {...rest}
            rows={4}
          />
        ) : (
          <input
            type={type}
            className={inputClass}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField"; // Adding display name for forwardRef

export default InputField;
