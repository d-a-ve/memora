import { ActionButtonProps } from "./types";

export function SecondaryButton({ buttonText, clickFunction }: ActionButtonProps) {
	return <button className="btn-secondary" onClick={clickFunction}>{buttonText}</button>;
}
