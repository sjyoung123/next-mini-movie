import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </nav>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: red;
        }
      `}</style>
    </>
  );
};

export default Nav;
