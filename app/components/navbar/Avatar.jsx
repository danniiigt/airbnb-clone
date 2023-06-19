"use client";

import Image from "next/image";

export const Avatar = ({ user }) => {
  if (user) {
    if (user.image !== null) {
      return (
        <Image
          alt="avatar"
          height={30}
          width={30}
          className="rounded-full"
          src={user?.image || "/images/placeholder.jpg"}
        />
      );
    } else {
      return (
        <div className="rounded-full bg-zinc-800 text-white w-[30px] h-[30px] flex items-center justify-center">
          <h1 className="text-xs">{user.name.substring(0, 1)}</h1>
        </div>
      );
    }
  }

  return (
    <Image
      alt="avatar"
      height={30}
      width={30}
      className="rounded-full"
      src={user?.image || "/images/placeholder.jpg"}
    />
  );
};
