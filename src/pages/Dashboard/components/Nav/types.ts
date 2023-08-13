import { Dispatch, SetStateAction, ReactNode } from "react";

export type DNavHeaderPropsType = {
	setNavOpen: Dispatch<SetStateAction<boolean>>;
};

export type DNavControllerPropsType = {
	clickFunction: () => void;
	title: string;
	icon: ReactNode;
};

export type DNavLinkPropsType = {
	icon: string;
	text: string;
	to: string;
};
