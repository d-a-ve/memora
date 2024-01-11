import { ActionButtonProps } from "./types";

export function PrimaryButton({
  buttonText,
  clickFunction,
  buttonType,
  classname,
  disabled,
}: ActionButtonProps) {
  return (
    <button
      type={buttonType}
      className={`btn-primary ${classname}`}
      onClick={clickFunction}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}
