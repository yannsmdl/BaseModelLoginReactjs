import { ButtonProps, InputProps, SelectProps } from "../intefaces/Utilities";


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
      className={`w-full text-center px-4 py-2 border-1 rounded-md border-gray-400 bg-[var(--color-input-background)] text-[var(--color-input-text)] placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-[var(--color-hover-border-input)] ${readOnly ? 'bg-gray-200' : ''} ${className}`}
      {...props}
    />
  );
}


export function Button({
  onClick,
  className = "",
  type="button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-[var(--color-input-background)] text-[var(--color-input-text)] font-semibold py-2 px-4 border border-gray-400 hover:border-[var(--color-hover-border-input)] hover:text-[var(--color-hover-border-input)] rounded shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonNoBorder({
  onClick,
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-inherit text-white font-semibold py-1 px-2 duration-200 hover:text-[var(--color-hover-border-input)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
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
