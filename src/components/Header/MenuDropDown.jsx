"use client"

import Link from "next/link";
import { BiLogOutCircle } from "react-icons/bi";
// import { Avatar } from "@nextui-org/react";
// import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import { handleLogout } from "../../lib/actions";
const MenuDropDown = ({ user }) => {
  return (
    // <Popover placement='bottom-end' className="border-none fixed outline-none">
    <Popover className="relative size-11">
      <Popover.Button className='border-none relative outline-none'>
        {
          user?.profile_picture ?
            (
              <div className="size-11 transition-all bg-transparent hover:bg-gray-200 rounded-full p-1 " >
                <div className=" bg-gray-100 h-full w-full relative rounded-full">

                  <Image src={user.profile_picture} alt={user?.name || user.firstName} fill objectFit="cover" className="rounded-full  cursor-pointer " />
                </div>
              </div>

            ) :
            <div className="size-11 flex items-center gap-x-2 cursor-pointer rounded-full border border-gray-200 hover:bg-gray-50 px-2 py-2">
              <p className="text-[10px]  leading-normal rounded-full bg-black text-white p-1 md:p-1.5 ">
                {user?.firstName.charAt(0)}{user?.lastName.charAt(0)}
              </p>
            </div>
        }
      </Popover.Button>
      <Popover.Panel className=" absolute right-0 p-0">
        <div className=" right-0 bg-white w-[180px]   border border-gray-200 shadow-sm rounded-md  ">
          <div className="space-y-1 border-b px-4 py-3  border-gray-200">
            <p className="text-sm">{user?.firstName} {user?.lastName}</p>
            <p className="text-sm font-bold overflow-hidden text-ellipsis ">{user?.email}</p>
          </div>
          <div className="[&_*]:px-4   text-sm font-bold  border-b [&_*]:py-2 [&_*:hover]:bg-gray-100 border-gray-200">

            <Link className="block" href={'/dashboard'}>Dashboard</Link>

            <Link className="text-takia-orange block md:hidden" href={'/dashboard/postAd'}>Sell Now</Link>


          </div>
          <form action={handleLogout}>
            <button className="px-4 flex py-2.5 items-center  gap-x-2 text-sm font-bold">
              <BiLogOutCircle size={18} />
              <span>Logout</span>
            </button>
          </form>

        </div>

      </Popover.Panel>

    </Popover>

  );
}

export default MenuDropDown;