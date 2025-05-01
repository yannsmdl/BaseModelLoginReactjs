import { InputHTMLAttributes, SelectHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
  
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}
