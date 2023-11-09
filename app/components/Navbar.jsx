import { Logo } from "./navbar/Logo";
import { Search } from "./navbar/Search";
import { UserMenu } from "./navbar/UserMenu";
import { Categories } from "./categories/Categories";
import { Suspense } from "react";
import Link from "next/link";
import getCurrentUser from "../actions/getCurrentUser";

export const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <div className="fixed w-full bg-white z-10">
        <div className="py-4 border-b">
          <div
            className="
              max-w-[2520px]
              mx-auto
              xl:px-20
              md:px-10
              sm:px-2
              px-4
            "
          >
            <div
              className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
              "
            >
              <Link href="/" className="hidden md:block">
                <Logo />
              </Link>
              <Search />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<h1>Cargando categorias...</h1>}>
        <Categories />
      </Suspense>
    </>
  );
};
