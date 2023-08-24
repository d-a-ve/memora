import { Dispatch, SetStateAction } from 'react'

export type NavigationOpenPropsType = {
	isNavOpen: boolean;
	setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};
