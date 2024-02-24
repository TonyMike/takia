// "use client"


import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { auth } from "../../lib/auth";
import TkLink from "../TkLink";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";
import { IoMdClose } from "react-icons/io";
import MdSearch from "./MdSearch";




const Header = async () => {
  const session = await auth()
  console.log(session, 'from header')
  return (
    <header className="flex relative justify-between items-center py-2 px-5 md:px-20 bg-white border-b border-gray-200">
      {/* logo */}
      <Link href={'/'} className="">
        <Image src='/takia.png' width={80} height={80} />
      </Link>

      <div className=" hidden md:block">
        <Search />
      </div>

      <nav className="flex items-center gap-x-3">
        <MdSearch />
        {
          !session?.user && (
            <div className="flex gap-x-2">
              <TkLink href='/login' title='Log in' mode='light' />
              <TkLink href='/register' title='Sign up' mode='dark' />
            </div>
          )
        }
        {
          session?.user && (
            <MenuDropDown />
          )
        }
      </nav>
    </header>
  );
}

export default Header;


