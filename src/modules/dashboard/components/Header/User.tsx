import { useUserQuery } from "@hooks/useUserQuery";

import { getInitials } from "@appwrite/utils/avatar";

export default function User() {
  const { data: currentUser, isLoading: isCurrentUserLoading } = useUserQuery();
  const userAvatar = getInitials();

  return (
    <div className="flex items-center">
      <p className="text-base md:text-fs--1 sm:text-fs--2">
        Welcome
        {!isCurrentUserLoading && (
          <span className="sm:hidden">, {currentUser?.name || "Guest"}</span>
        )}
      </p>
      <div className="ml-2 w-10 h-10 bg-black overflow-hidden rounded-full flex items-center justify-center sm:w-6 sm:h-6 md:w-8 md:h-8">
        <img
          src={userAvatar.href}
          alt={`${currentUser?.name || "Guest"} initials`}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
