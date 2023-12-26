import { Link } from "react-router-dom";

import { useUser } from "@/hooks/useUser";

import { FormHeaderType } from "./types";

export function FormHeader({
  headerTitle,
  subTitle,
  subTitleCta,
  ctaLinkTo,
}: FormHeaderType) {
  const { data: currentUser } = useUser();

  return (
    <>
      <p className="mb-8 md:mb-6">Use Logo image</p>
      <div className="mb-8 md:mb-6">
        <h1 className="text-fs-1 font-semibold text-black mb-2">
          {headerTitle}
        </h1>
        <Link to={`/dashboard/${currentUser?.$id}`}>Dashboard</Link>
        <p className="text-fs--1">
          {subTitle}
          <Link
            className="text-primary-500 font-medium hover:text-primary-300 focus:text-primary-300 focus:outline-primary-300"
            to={ctaLinkTo}
          >
            {subTitleCta}
          </Link>
        </p>
      </div>
    </>
  );
}
