/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextAreaInputProps {
  label: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  [key: string]: any;
}

const TextAreaInput: FC<TextAreaInputProps> = ({
  label,
  error,
  register,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-neutral-15 font-Inter">{label}</label>
      <textarea
        {...register}
        {...props}
        className={`focus:outline-none p-3 border ${
          error ? "border-red-500" : "border-neutral-15/30"
        } focus:border-purple-600 transition duration-300 text-neutral-15 bg-neutral-20 rounded placeholder:text-neutral-500`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default TextAreaInput;
