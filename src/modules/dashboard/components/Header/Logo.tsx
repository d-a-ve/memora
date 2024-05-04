import getSVGFromString from "helpers/getSVGFromString";

import { FullNameLogo } from "@components/Logo";

import { NavOpenPropsType } from "../../types";
import DNavController from "../Nav/DNavController";

export function Logo({
  isNavOpen,
  openNav,
  closeNav,
  logoRef,
}: Required<Pick<NavOpenPropsType, "isNavOpen" | "openNav" | "closeNav">> & {
  logoRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="flex gap-4 items-center" ref={logoRef}>
      <DNavController
        key="show-nav"
        title={`${isNavOpen ? "Hide" : "Show"} Navigation bar`}
        clickFunction={() => (isNavOpen ? closeNav() : openNav())}
        icon={getSVGFromString(isNavOpen ? "close" : "menu", 20, 20)}
      />
      <div className="w-32">
        <FullNameLogo />
      </div>
    </div>
  );
}
