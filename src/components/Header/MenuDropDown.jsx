"use client"

import Link from "next/link";
import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { PiListBold } from "react-icons/pi";
import { handleLogout } from "../../lib/actions";
const MenuDropDown = () => {
  const [open, setOpen] = useState(false);
  return (

    <div className="relative " >
      <div onClick={() => setOpen(prev => !prev)} className=" flex items-center gap-x-2 cursor-pointer rounded-full border border-gray-200 hover:bg-gray-50 px-3 py-2">
        <PiListBold size={20} />
        <p className="text-[10px] leading-normal rounded-full bg-black text-white p-1 md:p-1.5 ">AM</p>
      </div>
      <>
        {
          open && (
            <div className="absolute right-0 bg-white space-y-4 py-4  border border-gray-200 shadow-sm rounded-md top-12 ">
              <div className="space-y-1 border-b px-4 pb-4 border-gray-200">
                <p className="text-sm">Anthony Michael</p>
                <p className="text-sm font-bold">tee.jhay1@gmail.com</p>
              </div>
              <ul className="px-4 space-y-3  text-sm font-bold pb-4 border-b border-gray-200">
                <Link href={'/dashboard'}>Dashboard</Link>
                <li>My Profile</li>
                <li>Messages</li>
              </ul>
              <form action={handleLogout}>
                <button className="px-4 flex items-center gap-x-2 text-sm font-bold">
                  <BiLogOutCircle size={18} />
                  <span>Logout</span>
                </button>
              </form>

            </div>
          )
        }
      </>
    </div>

  );
}

export default MenuDropDown;