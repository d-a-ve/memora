import { NormalLink } from "@components/Link";
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
      <div className="w-32 mb-6 lg:mb-4">
        <FullNameLogo />
      </div>
      <div className="mb-8 md:mb-6">
        <h1 className="text-fs-1 font-semibold mb-2">{headerTitle}</h1>
        <p className="text-fs--1">
          {subTitle}
          <NormalLink label={subTitleCta} href={ctaLinkTo} />
        </p>
      </div>
    </>
  );
}
