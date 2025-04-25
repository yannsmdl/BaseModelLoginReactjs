import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  type = "text",
  placeholder,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full text-center px-4 py-2 border border-gray-400 rounded-md bg-[var(--color-input-background)] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white ${className}`}
      {...props}
    />
  );
}
