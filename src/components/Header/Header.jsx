import Image from "next/image";
import Link from "next/link";
import { auth } from "../../lib/auth";
import SellNow from "../SellNow";
import TkLink from "../TkLink";
import MdSearch from "./MdSearch";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";
import { BsList } from "react-icons/bs";
import { LuListMinus } from "react-icons/lu";
import SideBar from "../SideBar";


const Header = async () => {
  const session = await auth()
  console.log(session, 'from header')
  return (
    <header className="flex sticky top-0 z-10 justify-between items-center py-2 px-3 sm:px-20 md:px-12 xl:px-44 bg-white border-b border-gray-200">
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <SideBar />
        <Link href={'/'} className="">
          <Image src='/takiaLogo.png' alt="takia logo" width={80} height={70} />
        </Link>
      </div>


      <div className=" hidden md:block">
        <Search />
      </div>

      <nav className="flex items-center gap-x-3">
        <div className="hidden md:block">
          <SellNow />
        </div>
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


