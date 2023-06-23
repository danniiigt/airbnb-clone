import Link from "next/link";
import { Categories } from "./categories/Categories";
import { Container } from "./Container";
import { Logo } from "./navbar/Logo";
import { Search } from "./navbar/Search";
import { UserMenu } from "./navbar/UserMenu";

export const Navbar = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10">
      <div className="py-4 border-b">
        <Container>
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
        </Container>
      </div>
      <Categories />
    </div>
  );
};
