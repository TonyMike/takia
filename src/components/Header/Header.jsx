// "use client"


import Link from "next/link";
import { auth } from "../../lib/auth";
import TkLink from "../TkLink";
import MenuDropDown from "./MenuDropDown";



const Header = async () => {
  const session = await auth()
  console.log(session, 'from header')
  return (
    <header className="flex justify-between items-center h-20 px-5 md:px-20 bg-white border-b border-gray-200">
      {/* logo */}
      <Link href={'/'} className="flex-1">Takia</Link>

      <div className="flex  bg-red-100">
        <div className="">search</div>
        <nav className="flex gap-x-5">
          {
            !session?.user && (
              <>
                <TkLink href='/login' title='Log in' mode='light' />
                <TkLink href='/register' title='Sign up' mode='dark' />
              </>
            )
          }
          {
            session?.user && (
              <MenuDropDown />
            )
          }
        </nav>
      </div>
    </header>
  );
}

export default Header;


