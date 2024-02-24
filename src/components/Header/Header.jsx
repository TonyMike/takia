// "use client"


import Link from "next/link";
import { auth } from "../../lib/auth";
import TkLink from "../TkLink";
import MenuDropDown from "./MenuDropDown";



const Header = () => {
  const session = auth()
  // console.log(session)
  return (
    <header className="flex justify-between items-center h-20 px-5 md:px-20 bg-white border-b border-gray-200">
      {/* logo */}
      <Link href={'/'}>Takia</Link>
      <div>icon</div>
      <nav className="flex gap-x-5">
        {
          session?.user && (
            <>
              <TkLink href='/login' title='Log in' mode='light' />
              <TkLink href='/register' title='Sign up' mode='dark' />
            </>
          )
        }
        <MenuDropDown />
      </nav>
    </header>
  );
}

export default Header;


