import { ActionButtonWithIconProps } from "./types";

export function ActionButtonWithIcon({
  buttonText,
  clickFunction,
  iconUrl,
  buttonType,
}: ActionButtonWithIconProps) {
  // const buttonclassName = isPrimary ? "btn-primary" : "btn-secondary";

  return (
    <div>
      <button
        type={buttonType}
        className="w-full flex justify-center border-transparent border bg-secondary-500 text-black py-2 rounded hover:border-primary-500"
        onClick={clickFunction}
      >
        <span className="grid grid-cols-[30px_1fr] justify-center">
          <img className="w-5 h-5" src={iconUrl} alt={`${buttonText}-icon`} />
          <span className="text-left font-medium">{buttonText}</span>
        </span>
      </button>
    </div>
  );
}
