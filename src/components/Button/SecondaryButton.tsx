import { ActionButtonProps } from "./types";

export function SecondaryButton({ buttonText, clickFunction, buttonType, classname }: ActionButtonProps) {
	return <button type={buttonType} className={`btn-secondary ${classname}`} onClick={clickFunction}>{buttonText}</button>;
}
