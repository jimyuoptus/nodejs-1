import Link from "next/link";
import icon from "../assets/library.png";
import Image from "next/image";
const MainHeader = () => {
return (
  <header className="flex justify-center mt-4 ml-4">
    <Link href="/">
      <Image src={icon} width={80} height={80} alt={""} priority />
    </Link>
    <nav>
      <ul className="flex space-x-4  mt-8 ml-8">
        <li>
          <Link href="/books">
            <b>Books</b>
          </Link>
        </li>
        <li>
          <Link href="/authors">
            <b>Authors</b>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <b>Login</b>
          </Link>
        </li>
      </ul>
    </nav>
    <hr className="my-4" /> {/* Add horizontal line */}
  </header>
);
};

export default MainHeader;
