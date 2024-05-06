import { Navigate } from "react-router-dom";

import { useUserQuery } from "@hooks/useUserQuery";

export function OAuthRedirectRoute() {
  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useUserQuery(0);

  if (isCurrentUserLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        Redirecting...
      </div>
    );

  if (!currentUser) return <Navigate to="/login" />;

  return <Navigate to={`/dashboard/${currentUser.$id}/`} />;
}
