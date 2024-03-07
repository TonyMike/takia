"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuListMinus } from "react-icons/lu";
import { categories } from "../lib/data";


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}



// side bar
const SideBar = () => {
  const [open, setOpen] = useState(false)
  const toggleSideBar = () => {
    setOpen(prev => !prev)
  }
  useLayoutEffect(() => {
    setOpen(false)
  }, [])
  return (
    <div className="md:hidden" >
      <LuListMinus className="cursor-pointer" size={30} onClick={toggleSideBar} />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={open ? "open" : "closed"}
        variants={variants}
        className="h-screen top-0 left-0 z-40 absolute bg-black bg-opacity-25 w-full">
        <div className="h-screen w-4/5 flex flex-col  border-y border-y-gray-200 bg-white "  >
          <div className="flex justify-between items-center border-b border-b-gray-200 py-2.5 px-5  ">
            <Image src={'/takiaLogo.png'} alt="takia logo" width={80} height={70} />
            <div className="rounded-full border cursor-pointer border-gray-300 p-1.5 " onClick={toggleSideBar} >
              <IoMdClose size={23} className="text-gray-800" />
            </div>
          </div>
          <div className="px-5 py-2.5">
            <h2 className="font-bold text-xl">All Categories</h2>
            <ul className="mt-1  ">
              {
                categories.map(cat=>{
                  return (
                    <li
                      className="py-1.5 capitalize flex gap-x-2 px-4 hover:text-white items-center text-[15px] hover:bg-takia-orange "
                      key={cat.category}
                    >
                      <Image  src={cat.icon} alt={cat.category} width={20} height={20} />
                      <span>{cat.category}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </motion.nav>

    </div>
  );
}

export default SideBar;