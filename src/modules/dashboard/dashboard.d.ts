import { Dispatch, SetStateAction, ReactNode } from "react";

export type NavOpenPropsType = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

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
