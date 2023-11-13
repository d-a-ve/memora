import getSVGFromString from "@utils/getSVGFromString";

import { DNavHeaderPropsType } from "../../dashboard";
import DNavController from "./DNavController";

export default function DNavHeader({ setNavOpen }: DNavHeaderPropsType) {
  return (
    <>
      <DNavController
        title="Hide Navigation bar"
        clickFunction={() => setNavOpen(false)}
        icon={getSVGFromString("close", 24, 24)}
      />
      <div className="mb-12">Logo Image</div>
    </>
  );
}
