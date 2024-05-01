import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string;
  buttonType?: "button" | "submit" | "reset";
  className?: string;
};

export type LinkButtonProps = ButtonProps & {
  to: string;
  isPrimary: boolean;
};

export type ActionButtonProps = ButtonProps & {
  clickFunction?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export type ActionButtonWithIconProps = ActionButtonProps & {
  iconUrl: string;
};
