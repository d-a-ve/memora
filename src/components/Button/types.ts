export type ButtonProps = {
  buttonText: string;
  buttonType?: "button" | "submit" | "reset";
  classname?: string;
};

export type LinkButtonProps = ButtonProps & {
  to: string;
  isPrimary: boolean;
};

export type ActionButtonProps = ButtonProps & {
  clickFunction?: () => void;
  disabled?: boolean;
};

export type ActionButtonWithIconProps = ActionButtonProps & {
  iconUrl: string;
};
