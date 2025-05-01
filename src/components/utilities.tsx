import React, { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({
  type,
  placeholder,
  className = "",
  readOnly = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full text-center px-4 py-2 border-0 border-b-2 border-gray-400 bg-[var(--color-input-background)] text-[var(--color-input-text)] placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-[var(--color-hover-border-input)] ${readOnly ? 'bg-gray-200' : ''} ${className}`}
      {...props}
    />
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export function Select({
  className = "",
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={`w-full text-center px-4 py-2 border-0 border-b-2 border-gray-400 bg-[var(--color-input-background)] text-[var(--color-input-text)] placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-[var(--color-hover-border-input)] ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
