// components/Header.js
import Link from "next/link";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";



const Header = async () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-2xl text-green-400 font-medium">
              Chart of Accountants
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/openings">
            <span className="text-white border-0 py-2 px-4 focus:outline-none hover:text-green-400 rounded text-lg">
              Openings
            </span>
          </Link>
          <Link href="/businessModel">
            <span className="text-white border-0 py-2 px-4 focus:outline-none hover:text-green-400 rounded text-lg">
              How Our Business Works
            </span>
          </Link>



<LoginLink>Sign in</LoginLink>
<RegisterLink>Sign up</RegisterLink>

        </div>
      </nav>
    </header>
  );
};

export default Header;
