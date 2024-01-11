import { Navigate, Outlet } from "react-router-dom";

import { useUserQuery } from "@/hooks/useUserQuery";

export default function ProtectedRoute() {
  const {
    data: currentUser,
    isLoading: isCurrentUserLoading,
    error,
  } = useUserQuery(1);

  console.log({ error });
  if (isCurrentUserLoading) return <div>Loading...</div>;

  if (!currentUser) return <Navigate to="/login" />;

  return <Outlet />;
}
// export default function ProtectedRoute() {
//   const { currentUser } = useAuth();
//   const { setCurrentUser } = useAuthApi();

//   if (!currentUser) {
//     const session = async () => {
//       const sess = await getUserAccount();
//       setCurrentUser(sess);
//     };
//     session();
//   }

//   return currentUser ? <Outlet /> : <Navigate to="/login" />;
// }
