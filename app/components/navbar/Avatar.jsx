"use client";

import Image from "next/image";

export const Avatar = ({ user, big }) => {
  if (user) {
    if (user.image !== null) {
      return (
        <Image
          alt="avatar"
          height={big ? 45 : 30}
          width={big ? 45 : 30}
          className="rounded-full"
          src={user?.image || "/images/placeholder.jpg"}
        />
      );
    } else {
      return (
        <div
          className={`
            rounded-full 
            bg-zinc-800 
            text-white  
            flex 
            items-center 
            justify-center
            ${big ? "w-[45px] h-[45px]" : "w-[30px] h-[30px]"}
          `}
        >
          <h1 className={big ? "text-xl" : "text-sm"}>
            {user.name.substring(0, 1)}
          </h1>
        </div>
      );
    }
  }

  return (
    <Image
      alt="avatar"
      height={big ? 45 : 30}
      width={big ? 45 : 30}
      className="rounded-full"
      src={user?.image || "/images/placeholder.jpg"}
    />
  );
};
