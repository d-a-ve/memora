import { ActionButtonProps } from "./types";

export function PrimaryButton({ buttonText, clickFunction, buttonType, classname }: ActionButtonProps) {
	return (
		<button
		type={buttonType}
			className={`btn-primary ${classname}`}
			onClick={clickFunction}>
			{buttonText}
		</button>
	);
}
