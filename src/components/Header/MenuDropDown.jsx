"use client"

import Link from "next/link";
import { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
// import { PiListBold } from "react-icons/pi";
import Image from "next/image";
import { handleLogout } from "../../lib/actions";
const MenuDropDown = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (

    <div className="relative " >

      {
        user ? (
          <div className="h-10 w-10 transition-all bg-transparent hover:bg-gray-200 rounded-full p-1 " onClick={() => setOpen(prev => !prev)}>
            <div className=" bg-red-400 h-full w-full relative rounded-full">
              <Image src={user.image} alt={user?.name || user.firstName} fill objectFit="cover" className="rounded-full  cursor-pointer " />
            </div>
          </div>
        ) : <div onClick={() => setOpen(prev => !prev)} className=" flex items-center gap-x-2 cursor-pointer rounded-full border border-gray-200 hover:bg-gray-50 px-2 py-2">
          <p className="text-[10px]  leading-normal rounded-full bg-black text-white p-1 md:p-1.5 ">
            {user?.name.charAt(0)}
          </p>
        </div>
      }
      <>
        {
          open && (
            <div className="absolute right-0 bg-white space-y-4 py-4  border border-gray-200 shadow-sm rounded-md top-12 ">
              <div className="space-y-1 border-b px-4 pb-4 border-gray-200">
                <p className="text-sm">Anthony Michael</p>
                <p className="text-sm font-bold">tee.jhay1@gmail.com</p>
              </div>
              <ul className="[&_li]:px-4   text-sm font-bold pb-4 border-b [&_li]:py-2 [&_li:hover]:bg-gray-100 border-gray-200">

                <li>
                  <Link href={'/dashboard'}>Dashboard</Link>
                </li>
                <li className="hover:bg-gray-100  ">My Profile</li>
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