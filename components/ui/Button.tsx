import React from "react";

interface DynamicButtonProps {
  text: string;
  onClick?: () => void; // Function to execute on click
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<DynamicButtonProps> = ({
  text,
  onClick,
  type,
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn  text-white rounded-lg ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
