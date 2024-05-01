import { ActionButtonProps } from "./types";

export function SecondaryButton({
  buttonText,
  clickFunction,
  buttonType,
  className,
}: ActionButtonProps) {
  return (
    <button
      type={buttonType}
      className={`btn-secondary ${className}`}
      onClick={clickFunction}
    >
      {buttonText}
    </button>
  );
}
