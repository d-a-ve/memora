import { useUserQuery } from "@hooks/useUserQuery";

import { getInitials } from "@appwrite/utils/avatar";

export default function User() {
  const { data: currentUser, isLoading: isCurrentUserLoading } = useUserQuery();
  const userAvatar = getInitials();

  return (
    <div className="flex items-center">
      <p className="text-fs--1">
        Welcome back
        {!isCurrentUserLoading && (
          <span className="sm:hidden">, {currentUser?.name || "Guest"}</span>
        )}
      </p>
      <div className=" ml-2 w-10 h-10 bg-black overflow-hidden rounded-full flex items-center justify-center">
        <img
          src={userAvatar.href}
          alt={`${currentUser?.name || "Guest"} initials`}
        />
      </div>
    </div>
  );
}
