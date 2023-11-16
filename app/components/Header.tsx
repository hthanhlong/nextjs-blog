import Link from "next/link";
import LogoutButton from "./Logout";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <ul tabIndex={0} className="flex gap-3">
          <li>
            <Link
              href={{
                pathname: "/",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/about",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/posts",
              }}
            >
              posts
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/dashboard",
              }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
