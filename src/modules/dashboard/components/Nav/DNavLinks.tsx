import { navLinksArray } from "../../constants";
import DNavLink from "./DNavLink";

export default function DNavLinks() {
  return (
    <ul className="flex flex-col">
      {navLinksArray.map((link) => {
        return (
          <li key={link.id}>
            <DNavLink icon={link.icon} text={link.text} to={link.to} />
          </li>
        );
      })}
    </ul>
  );
}
