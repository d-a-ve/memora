import { Dispatch, SetStateAction } from "react";

export type NavOpenPropsType = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

export type ShowModeText = {
  mode: "text";
  text: string;
  openModalText: string;
};

export type ShowModeButton = {
  mode: "button";
};

export type ShowMode = ShowModeText | ShowModeButton;
