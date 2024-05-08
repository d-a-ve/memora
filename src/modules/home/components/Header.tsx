import { ElementRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import useBodyOverflow from "@hooks/useBodyOverflow";

import { cn } from "@helpers/cn";
import getSVGFromString from "@helpers/getSVGFromString";

import { LinkButton } from "@components/Link";
import { FullNameLogo } from "@components/Logo";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { hideBodyOveflow, resetBodyOverflow } = useBodyOverflow();
  const navRef = useRef<ElementRef<"div">>(null);
  const openMenu = () => {
    setIsMobileMenuOpen(true);
    hideBodyOveflow();
  };
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    resetBodyOverflow();
  };

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("pointerup", handleClickOutside);
    return () => {
      document.removeEventListener("pointerup", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="border-b border-b-grey-300">
      <header className="flex items-center justify-between py-6 landing-padding">
        <div className="w-32 md:w-24">
          <FullNameLogo />
        </div>
        <div className="hero:block hidden">
          <button
            onClick={openMenu}
            className="focus-ring-visible outline-none rounded-sm hidden lg:inline"
          >
            {getSVGFromString("menu", 16, 16)}
          </button>
        </div>
        {/* Dark overlay */}
        {isMobileMenuOpen && (
          <div className="inset-0 fixed bg-black/30 transition-all" />
        )}
        <div
          className={cn(
            "hero:fixed hero:bg-white hero:z-1 hero:px-8 hero:py-4 hero:inset-0 hero:w-4/5 hero:transition-all hero:duration-300",
            {
              "hero:-translate-x-full": !isMobileMenuOpen,
              "hero:translate-x-0": isMobileMenuOpen,
            }
          )}
          ref={navRef}
        >
          <nav className="h-full relative">
            <div className="hidden hero:block absolute top-4 right-0 p-4">
              <button
                onClick={closeMenu}
                className="focus-ring-visible outline-none rounded-sm hidden lg:inline"
              >
                {getSVGFromString("close", 16, 16)}
              </button>
            </div>
            <ul className="flex h-full items-center gap-4 hero:flex-col hero:gap-12 hero:justify-center hero:max-w-lg hero:mx-auto">
              <li>
                <Link
                  to="#"
                  className="text-medium outline-none relative before:absolute before:w-0 before:h-0.5 before:left-0 before:bg-accent before:bottom-0 before:transition-[width] hover:before:w-1/2 focus-ring-visible focus-visible:rounded focus-visible:text-primary"
                >
                  Why Choose Memora
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-medium outline-none relative before:absolute before:w-0 before:h-0.5 before:left-0 before:bg-accent before:bottom-0 before:transition-[width] hover:before:w-1/2 focus-ring-visible focus-visible:rounded focus-visible:text-primary"
                >
                  How Memora Works
                </Link>
              </li>
              <li className="hidden hero:block hero:w-full">
                <LinkButton href="/login" label="Get Started" size="sm" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="hero:hidden">
          <LinkButton href="/login" label="Get Started" size="sm" />
        </div>
      </header>
    </div>
  );
}

export default Header;
