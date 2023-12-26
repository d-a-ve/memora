import useUserMutation from "@/hooks/useUserMutation";

import getSVGFromString from "@utils/getSVGFromString";

export default function DNavLogoutBtn() {
  const { mutate: logUserOut, isPending: isUserLoggingOut } = useUserMutation();

  return (
    <button onClick={() => logUserOut()} className="nav-logout-btn">
      {getSVGFromString("logout", 20, 20)}
      <span>{isUserLoggingOut ? "Logging out..." : "Log out"}</span>
    </button>
  );
}
``