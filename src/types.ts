type Preferences = {
	[key: string]: any;
};

export type InputFieldType = {
	id: number;
	labelText: string;
	labelFor: string;
	inputType: string;
	isRequired: boolean;
	placeHolder?: string;
	twoLabelElements?: boolean;
	isPassword?: boolean;
};

export type IconPropsType = {
	width: string | number;
	height: string | number;
};

export type UserType = {
	$id: string;
	$createdAt: string;
	$updatedAt: string;
	name: string;
	password?: string;
	hash?: string;
	hashOptions?: object;
	registration: string;
	status: boolean;
	passwordUpdate: string;
	email: string;
	phone: string;
	emailVerification: boolean;
	phoneVerification: boolean;
	prefs: Preferences;
};
