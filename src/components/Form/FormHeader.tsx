import { Link } from "react-router-dom";

import { FullNameLogo } from "@components/Logo";

import { FormHeaderType } from "./types";

export function FormHeader({
  headerTitle,
  subTitle,
  subTitleCta,
  ctaLinkTo,
}: FormHeaderType) {
  return (
    <>
      <div className="w-32">
        <FullNameLogo />
      </div>
      <div className="mb-8 md:mb-6">
        <h1 className="text-fs-1 font-semibold text-black mb-2">
          {headerTitle}
        </h1>
        <p className="text-fs--1">
          {subTitle}
          <Link
            className="text-primary font-medium hover:text-primary focus:text-primary focus:outline-primary"
            to={ctaLinkTo}
          >
            {subTitleCta}
          </Link>
        </p>
      </div>
    </>
  );
}
