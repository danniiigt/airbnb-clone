import Image from "next/image";

export const Logo = () => {
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
