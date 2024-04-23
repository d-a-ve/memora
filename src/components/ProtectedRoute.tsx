import { Navigate, Outlet } from "react-router-dom";

import { useUserQuery } from "@hooks/useUserQuery";

export function UserProtectedRoute() {
  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useUserQuery(1);

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

export function ProtectedRouteFromAuthenticatedUser() {
  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useUserQuery(0);

  if (isCurrentUserLoading) return <div>Loading...</div>;

  if (currentUser) return <Navigate to={`/dashboard/${currentUser.$id}/`} />;

  return <Outlet />;
}
