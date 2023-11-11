import { deleteSession } from "@appwrite/utils/userSession";

import useAuthApi from "@hooks/useAuthApi";

import getSVGFromString from "@utils/getSVGFromString";
import { toastError } from "@utils/toastNotifs";

export default function DNavLogoutBtn() {
  const { setCurrentUser } = useAuthApi();

  const logout = async () => {
    try {
      await deleteSession();
      setCurrentUser(undefined);
    } catch (error) {
      toastError("Something went wrong, could not log out!!!");
    }
  };

  return (
    <button onClick={logout} className="nav-logout-btn">
      {getSVGFromString("logout", 20, 20)}
      <span>Log out</span>
    </button>
  );
}
