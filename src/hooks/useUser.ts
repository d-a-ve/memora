import { getUserAccount } from "@/appwrite/utils/userSession";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const userQuery = useQuery({
    queryKey: ["current-user"],
    queryFn: getUserAccount,
    // staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
  });

  return userQuery;
};
