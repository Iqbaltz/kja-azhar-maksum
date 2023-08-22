import React from "react";

interface IBtnProps {
  children?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const variants = {
  primary:
    "bg-secondary text-white hover:bg-lightsecondary transition-color duration-200",
  secondary:
    "bg-bggrey text-white hover:bg-lightsecondary transition-color duration-200",
};

export default function Button({
  children,
  className,
  variant = "primary",
}: IBtnProps) {
  const variantClasses = variants[variant];
  return (
    <button
      className={`${variantClasses} 2xl:text-lg px-8 py-3 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
