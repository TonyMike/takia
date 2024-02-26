"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuListMinus } from "react-icons/lu";


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


const SideBar = () => {
  const [open, setOpen] = useState(false)
  const toggleSideBar = () => {
    setOpen(prev => !prev)
  }
  return (
    <div className="md:hidden" >
      <LuListMinus className="cursor-pointer" size={30} onClick={toggleSideBar} />
      <motion.nav
        animate={open ? "open" : "closed"}
        variants={variants}
        className="h-screen top-0 left-0 z-40 absolute bg-black bg-opacity-25 w-full">
        <div className="h-screen w-4/5 border-y border-y-gray-200 bg-white"  >
          <div className="flex justify-between items-center border-b border-b-gray-200 py-2.5 px-5  ">
            <Image src={'/takiaLogo.png'} width={80} height={70} />
            <div className="rounded-full border cursor-pointer border-gray-300 p-1.5 " onClick={toggleSideBar} >
              <IoMdClose size={23} className="text-gray-800" />
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default SideBar;