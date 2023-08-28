import { ActionButtonProps } from "./types";

export function PrimaryButton({ buttonText, clickFunction, buttonType }: ActionButtonProps) {
	return (
		<button
		type={buttonType}
			className="btn-primary"
			onClick={clickFunction}>
			{buttonText}
		</button>
	);
}
