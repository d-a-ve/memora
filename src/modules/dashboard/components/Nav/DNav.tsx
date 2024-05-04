import { NavLink, useParams } from "react-router-dom";

import getSVGFromString from "helpers/getSVGFromString";

import { cn } from "@helpers/cn";

import { NavOpenPropsType } from "../../types";
import DNavLogoutBtn from "./DNavLogoutBtn";

export const navLinksArray = [
  {
    id: 1,
    text: "Overview",
    icon: "overview",
    to: "",
  },
  {
    id: 2,
    text: "Upcoming Birthdays",
    icon: "calender",
    to: "upcoming-birthdays",
  },
  {
    id: 3,
    text: "Settings",
    icon: "settings",
    to: "settings",
  },
];

export default function DNav({
  isNavOpen,
  closeNav,
  navRef,
}: NavOpenPropsType) {
  const { userId } = useParams();

  return (
    <div
      className={cn(
        "col-span-1 transition sticky top-16 bg-white border-r border-r-gray-300 lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:w-[250px] h-dashboard-content lg:mt-16 isolate lg:z-10 lg:border-0",
        {
          "lg:-translate-x-full": !isNavOpen,
        }
      )}
      ref={navRef}
    >
      <nav className="py-4 flex flex-col justify-between">
        <ul className="flex flex-col space-y-2">
          {navLinksArray.map(({ id, to, icon, text }) => {
            return (
              <li key={id}>
                <NavLink
                  to={`/dashboard/${userId}/${to}`}
                  className={({ isActive, isPending }) =>
                    cn(
                      "grid grid-flow-col items-center justify-start gap-3 px-4 py-2 text-foreground relative before:absolute before:w-1 before:h-full before:bg-transparent outline-none focus-ring-visible focus-visible:ring-offset-0",
                      {
                        "bg-background text-primary before:bg-primary":
                          isActive,
                        "animate-pulse": isPending,
                        "hover:text-primary": !isActive,
                      }
                    )
                  }
                  onClick={closeNav}
                >
                  {getSVGFromString(icon, 16, 16)}
                  <span>{text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="mt-4 border-t border-t-gray-300 pt-4">
          <DNavLogoutBtn />
        </div>
      </nav>
    </div>
  );
}
