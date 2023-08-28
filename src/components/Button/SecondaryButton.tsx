import { ActionButtonProps } from "./types";

export function SecondaryButton({ buttonText, clickFunction, buttonType }: ActionButtonProps) {
	return <button type={buttonType} className="btn-secondary" onClick={clickFunction}>{buttonText}</button>;
}
