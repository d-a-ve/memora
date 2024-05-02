import { ReactNode } from "react";

export type DNavControllerPropsType = {
  clickFunction?: () => void;
  title: string;
  icon: ReactNode;
};

export default function DNavController({
  clickFunction,
  title,
  icon,
}: DNavControllerPropsType) {
  return (
    <button
      onClick={clickFunction}
      title={title}
      className="cursor-pointer hidden lg:inline"
    >
      {icon}
    </button>
  );
}
