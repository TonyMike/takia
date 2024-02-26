"use client"

import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Search from "./Search";

const MdSearch = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden ">
      <div className="rounded-full cursor-pointer border border-gray-200 px-2 py-2" onClick={() => setOpen(true)}>
        <GoSearch size={24} className="text-gray-700 p-1  font-bold" />
      </div>
      {
        open && (
          <div className="absolute top-0 h-[72px] w-screen justify-center bg-white border-b border-gray-200 z-10 left-0 flex space-x-3 px-3 items-center">
            <Search />
            <div className="rounded-full cursor-pointer border border-gray-200 px-3 py-3" onClick={()=>setOpen(false)} >
              <IoMdClose size={16} />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default MdSearch;