import { ReactNode, useEffect, useRef, useState } from "react";

import useBodyOverflow from "@hooks/useBodyOverflow";

import { cn } from "@helpers/cn";

import MaxContainer from "@components/Container/MaxContainer";
import ToastNotif from "@components/Toast";

import Header from "../Header/Header";
import { Logo } from "../Header/Logo";
import DNav from "../Nav/DNav";

export default function DLayout({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const { resetBodyOverflow, hideBodyOveflow } = useBodyOverflow();
  const openNav = () => {
    setIsNavOpen(true);
    hideBodyOveflow();
  };
  const closeNav = () => {
    setIsNavOpen(false);
    resetBodyOverflow();
  };

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        navRef.current &&
        logoRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !logoRef.current.contains(event.target as Node) &&
        isNavOpen
      ) {
        closeNav();
        resetBodyOverflow();
      }
    };

    document.addEventListener("pointerup", handleClickOutside);
    return () => {
      document.removeEventListener("pointerup", handleClickOutside);
    };
  }, [isNavOpen, resetBodyOverflow]);

  return (
    <MaxContainer>
      <Header
        logoComponent={
          <Logo
            isNavOpen={isNavOpen}
            openNav={openNav}
            closeNav={closeNav}
            logoRef={logoRef}
          />
        }
      />
      <div className="grid grid-cols-[300px,_1fr] min-h-dashboard-content">
        <DNav isNavOpen={isNavOpen} closeNav={closeNav} navRef={navRef} />
        <div
          className={cn("col-start-2 col-end-3 px-4 lg:col-start-1 pb-16", {
            "lg:opaque": isNavOpen,
          })}
        >
          <div className="max-w-3xl mx-auto mt-4 h-[300vh]">{children}</div>
        </div>
      </div>
      <ToastNotif />
    </MaxContainer>
  );
}
