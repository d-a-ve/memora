import { ReactNode, FormEvent } from "react";

export type FormHeaderType = {
	headerTitle: string;
	subTitle: string;
	subTitleCta: string;
	ctaLinkTo: string;
};

export type FormWrapperType = {
	buttonText: string;
	submitFunction: (e: FormEvent<HTMLFormElement>) => void;
	children: ReactNode;
	// eslint-disable-next-line no-undef
	password?: JSX.Element;
};
