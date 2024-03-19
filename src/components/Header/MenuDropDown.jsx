"use client"

import Link from "next/link";
import { BiLogOutCircle } from "react-icons/bi";
// import { Avatar } from "@nextui-org/react";
// import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Popover } from "@headlessui/react";
import { Avatar } from "@nextui-org/react";
import { handleLogout } from "../../lib/actions";
const MenuDropDown = ({ user }) => {
  return (
    <Popover className="relative">
      <Popover.Button className='border-none relative outline-none'>
        <Avatar showFallback isBordered  className="uppercase mt-2 text-xs bg-black text-white " size="sm" src={user?.profile_picture} name={`${user?.firstName.charAt(0)}${user?.lastName.charAt(0)}`} alt="avatar" />
      </Popover.Button>
      <Popover.Panel className=" absolute right-0 p-0">
        <div className=" right-0 bg-white w-[180px]   border border-gray-200 shadow-sm rounded-md  ">
          <div className="space-y-1 border-b px-4 py-3  border-gray-200">
            <p className="text-sm capitalize">{user?.firstName} {user?.lastName}</p>
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