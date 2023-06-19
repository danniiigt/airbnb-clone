"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="
        hidden
        md:block
        cursor-pointer
    "
      height={32}
      width={100}
      src="/images/logo.png"
    />
  );
};
