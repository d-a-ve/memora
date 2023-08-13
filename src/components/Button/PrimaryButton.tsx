import { ActionButtonProps } from "./types";

export function PrimaryButton({ buttonText, clickFunction }: ActionButtonProps) {
	return (
		<button
			className="btn-primary"
			onClick={clickFunction}>
			{buttonText}
		</button>
	);
}
