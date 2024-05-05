import { NavOpenPropsType } from "@modules/dashboard/types";

import getSVGFromString from "@helpers/getSVGFromString";

import { FullNameLogo } from "@components/Logo";

import User from "./User";

export default function Header({
  isNavOpen,
  openNav,
  closeNav,
  logoRef,
}: Required<Pick<NavOpenPropsType, "isNavOpen" | "openNav" | "closeNav">> & {
  logoRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="sticky top-0 left-0 z-1 col-start-1 col-end-13 h-16 border-b border-b-gray-300 px-4 bg-white isolate">
      <div className="h-full grid grid-cols-[284px,_1fr] items-center justify-between lg:flex">
        <div
          className="flex gap-4 items-center border-r border-r-gray-300 h-full lg:border-0"
          ref={logoRef}
        >
          <button
            onClick={() => (isNavOpen ? closeNav() : openNav())}
            title={`${isNavOpen ? "Hide" : "Show"} Navigation bar`}
            className="focus-ring-visible outline-none rounded-sm hidden lg:inline"
          >
            {getSVGFromString(isNavOpen ? "close" : "menu", 16, 16)}
          </button>
          <div className="w-28 sm:w-20 md:w-24">
            <FullNameLogo />
          </div>
        </div>
        <div className="justify-self-end">
          <User />
        </div>
      </div>
    </div>
  );
}
