import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header className="h-20 border-b-4 border-indigo-500">
      <nav className="h-full w-full flex items-center justify-center">
        <ul tabIndex={0} className="flex gap-10">
          <li className="hover:text-blue-700">
            <Link
              href={{
                pathname: "/",
              }}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-blue-700">
            <Link
              href={{
                pathname: "/admin",
              }}
            >
              admin
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
