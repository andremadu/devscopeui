import React from "react";
import styles from "./Button.module.css"; // Importa os estilos CSS

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "outline";
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${fullWidth ? "w-full" : ""} ${
        disabled ? styles.disabled : ""
      } ${className || ""}`}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
