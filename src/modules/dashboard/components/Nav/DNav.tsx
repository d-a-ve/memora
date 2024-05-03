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
        "col-span-1 fixed bg-secondary px-4 transition lg:top-0 lg:left-0 lg:bottom-0 lg:max-w-[300px] h-dashboard-content lg:mt-16 isolate lg:z-10",
        {
          "lg:-translate-x-full": !isNavOpen,
        }
      )}
      ref={navRef}
    >
      <nav className="py-2 flex flex-col h-4/5 justify-between">
        <ul className="flex flex-col space-y-2">
          {navLinksArray.map(({ id, to, icon, text }) => {
            return (
              <li key={id}>
                <NavLink
                  to={`/dashboard/${userId}/${to}`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "nav-link bg-primary text-white"
                      : isPending
                      ? "nav-link bg-secondary text-black"
                      : "nav-link"
                  }
                  onClick={closeNav}
                >
                  {getSVGFromString(icon, 20, 20)}
                  <span>{text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <DNavLogoutBtn />
      </nav>
    </div>
  );
}
