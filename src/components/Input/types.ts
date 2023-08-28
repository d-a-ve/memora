import { ReactNode, ChangeEvent } from "react";
// import { LOGIN_DEFAULT_VALUES_TYPE } from "../../types";

export type InputPropsType = {
	inputType: string;
	labelFor: string;
	required: boolean;
	inputValue: string;
	placeHolder?: string;
	displayError?: boolean;
	isPassword?: boolean;
	className?: string;
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	blurHandler?: () => void;
};

export type InputWithLabelPropsType = {
	labelText: string;
	inputType: string;
	labelFor: string;
	required: boolean;
	isPassword?: boolean;
	placeHolder?: string;
};

export type InputWithLabelWrapperPropsType = InputWithLabelPropsType & {
	children: ReactNode;
};

export type InputErrorType = {
	name: string;
	errorMessage: string;
};
