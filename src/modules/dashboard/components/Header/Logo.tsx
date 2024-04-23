import getSVGFromString from "@utils/getSVGFromString";

import { NavOpenPropsType } from "../../types";
import DNavController from "../Nav/DNavController";

export function Logo({ isNavOpen, setIsNavOpen }: NavOpenPropsType) {
  return (
    <div className="flex gap-4 items-center">
      <DNavController
        title={`${isNavOpen ? "Hide" : "Show"} Navigation bar`}
        clickFunction={
          isNavOpen ? () => setIsNavOpen(false) : () => setIsNavOpen(true)
        }
        icon={getSVGFromString(isNavOpen ? "close" : "menu", 20, 20)}
      />
      <div>Logo Image</div>
    </div>
  );
}
