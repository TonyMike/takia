// "use client"


import { usePathname } from "next/navigation";
import { auth } from "../../lib/auth";
import TkLink from "../TkLink";



const Header = () => {
  const session = auth()
  console.log(session)
  return (
    <div className="flex justify-between items-center h-20 px-5 md:px-20 bg-white border-b border-gray-200">
      {/* logo */}
      <p>Takia</p>
      <div>icon</div>
      <div className="flex gap-x-5">
        <TkLink href='/login' title='Log in' mode='light' />
        <TkLink href='/register' title='Sign up' mode='dark' />
      </div>
    </div>
  );
}

export default Header;


