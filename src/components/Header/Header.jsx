import Image from "next/image";
import Link from "next/link";
import { auth } from "../../lib/auth";
import SellNow from "../SellNow";
import SideBar from "../SideBar";
import TkLink from "../TkLink";
import MdSearch from "./MdSearch";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";


const Header = async () => {
  const session = await auth()
  return (
    <header className="flex sticky top-0 z-10 justify-between items-center py-[7px] lg:py-3 px-3 sm:px-20 md:px-12 xl:px-44 bg-white border-b border-gray-200">
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

      <nav className="flex items-center md:gap-x-4 gap-x-2">
        <div className="hidden md:block">
          <SellNow />
        </div>
        <MdSearch />
        {
          !session?.user && (
            <div className="flex md:gap-x-2 gap-x-2">
              <TkLink href='/login' title='Log in' mode='light' />
              <TkLink href='/register' title='Sign up' mode='dark' />
            </div>
          )
        }
        {
          session?.user && (
            <MenuDropDown user={session.user} />
          )
        }
      </nav>
    </header>
  );
}



export default Header;


