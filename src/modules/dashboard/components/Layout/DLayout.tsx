import { ReactNode, useState } from "react";

import ToastNotif from "@components/Toast";

import Header from "../Header/Header";
import { Logo } from "../Header/Logo";
import DNav from "../Nav/DNav";

export default function DLayout({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-full bg-red-500">
      <Header
        logoComponent={
          <Logo isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        }
      />
      <div className="dashboard">
        <DNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <div className={`dashboard-main pb-16 ${isNavOpen ? "lg:opaque" : ""}`}>
          <div className="max-w-3xl mx-auto mt-4">{children}</div>
        </div>
      </div>
      <ToastNotif />
    </div>
  );
}
