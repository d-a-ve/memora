import { ReactNode } from "react";

import { cn } from "@helpers/cn";

export function ModalLayout({
  isModalOpen,
  children,
}: {
  isModalOpen: boolean;
  children: ReactNode;
}) {
  return (
    <div className={cn("fixed z-10 inset-0", { "bg-black/30": isModalOpen })}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[567px] max-w-full">
        <div className="px-4">{children}</div>{" "}
      </div>
    </div>
  );
}
