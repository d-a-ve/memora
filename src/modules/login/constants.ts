import { InputFieldType } from "../../types";

export const LOGIN_INPUT_FIELDS: InputFieldType[] = [
	{
		id: 1,
		labelText: "Email",
		labelFor: "email",
		inputType: "email",
		isRequired: true,
	},
	{
		id: 2,
		labelText: "Password",
		labelFor: "password",
		inputType: "password",
		twoLabelElements: true,
		isRequired: true,
		isPassword: true,
	},
];
