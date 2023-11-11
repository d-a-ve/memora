import { Link } from "react-router-dom";

import { LinkButtonProps } from "./types";

export function LinkButton({ to, buttonText, isPrimary }: LinkButtonProps) {
  const buttonClassName = isPrimary ? "btn-primary" : "btn-secondary";

  return (
    <Link to={to} className={buttonClassName}>
      {buttonText}
    </Link>
  );
}
