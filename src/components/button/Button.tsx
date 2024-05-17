import React, { MouseEventHandler } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  text?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  intent?: "primary" | "secondary" | "default";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonVariants = cva(
  /* button base style */
  "h-fit text-white uppercase transition-colors duration-150",
  {
    variants: {
      /* button colors */
      intent: {
        primary: "bg-green-500 hover:bg-green-600",
        secondary: "bg-red-500 hover:bg-red-600",
        default: "bg-gray-500 hover:bg-gray-600",
      },
      /* button sizes */
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-4", "px-8"],
      },
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
    },
  },
);

const Button: React.FC<ButtonProps> = ({
  size = "small",
  disabled = false,
  text = "Button",
  onClick = () => {},
  intent = "primary",
  ...props
}) => {
  const defaultButtonStyle = `font-bold rounded-lg inline-block cursor-pointer focus:outline-none`;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={twMerge(defaultButtonStyle, ButtonVariants({ intent, size }))}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
