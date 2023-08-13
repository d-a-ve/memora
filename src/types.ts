export interface InputFieldType {
    id: number;
    labelText: string;
    labelFor: string;
    inputType: string;
    isRequired: boolean;
    placeHolder?: string;
    twoLabelElements?: boolean;
    isPassword?: boolean;
}

export interface IconPropsType {
	width: string | number;
	height: string | number;
}
