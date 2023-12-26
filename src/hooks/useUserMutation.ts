import { useNavigate } from "react-router-dom";

import { deleteSession } from "@/appwrite/utils/userSession";
import { toastError } from "@/utils/toastNotifs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUserMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const userMutation = useMutation({
    mutationFn: deleteSession,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["current-user"] });
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
      toastError("Something went wrong, could not log out!!!");
    },
  });

  return userMutation;
};

export default useUserMutation;
