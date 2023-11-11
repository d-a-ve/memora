import { ReactNode, FormEvent } from "react";

export type FormHeaderType = {
  headerTitle: string;
  subTitle: string;
  subTitleCta: string;
  ctaLinkTo: string;
};

export type FormWrapperType = {
  submitFunction: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};
