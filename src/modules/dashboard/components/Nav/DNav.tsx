import { NavLink, useParams } from "react-router-dom";

import getSVGFromString from "helpers/getSVGFromString";

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

export default function DNav({ isNavOpen, setIsNavOpen }: NavOpenPropsType) {
  const { userId } = useParams();
  return (
    <div
      className={`dashboard-nav nav-height ${
        isNavOpen ? "lg:z-10" : "lg:-translate-x-full"
      }`}
    >
      <nav className="py-8 flex flex-col h-4/5 justify-between">
        <ul className="flex flex-col">
          {navLinksArray.map(({ id, to, icon, text }) => {
            return (
              <li key={id}>
                <NavLink
                  to={`/dashboard/${userId || "64e447cebb60d0ff0bd"}/${to}`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "nav-link bg-primary-500 text-white"
                      : isPending
                      ? "nav-link bg-secondary-500 text-black"
                      : "nav-link"
                  }
                  onClick={() => setIsNavOpen(false)}
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
