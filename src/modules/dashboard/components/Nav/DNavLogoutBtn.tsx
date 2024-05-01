import { useNavigate } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";
import getSVGFromString from "helpers/getSVGFromString";
import { toastError } from "helpers/toastNotifs";

import useUserMutation from "@hooks/useUserMutation";

import { deleteSession } from "@appwrite/utils/userSession";

export default function DNavLogoutBtn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logUserOut, isPending: isUserLoggingOut } = useUserMutation({
    mutationFn: deleteSession,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["current-user"] });
      navigate("/login");
    },
    onError: () => {
      toastError("Something went wrong, could not log out!!!");
    },
  });

  return (
    <button onClick={() => logUserOut()} className="nav-logout-btn">
      {getSVGFromString("logout", 20, 20)}
      <span>{isUserLoggingOut ? "Logging out..." : "Log out"}</span>
    </button>
  );
}
``;
