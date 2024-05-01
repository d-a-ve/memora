import { cn } from "@helpers/cn";

import { InlineLoader } from "@components/Loader";

import { ActionButtonProps } from "./types";

export function PrimaryButton({
  buttonText,
  clickFunction,
  buttonType,
  className,
  disabled,
  isLoading,
}: ActionButtonProps) {
  return (
    <button
      type={buttonType}
      className={cn(
        "btn-primary flex items-center gap-2 justify-center",
        className
      )}
      onClick={clickFunction}
      disabled={disabled}
    >
      {isLoading && <InlineLoader />}
      <span>{buttonText}</span>
    </button>
  );
}
