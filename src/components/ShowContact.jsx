'use client'
import { Popover } from "@headlessui/react";
import { Snippet } from "@nextui-org/react";
// import { Popover, PopoverContent, PopoverTrigger, Snippet } from "@nextui-org/react";
import { BiCopy } from "react-icons/bi";
import { FaCheckCircle, FaExclamation, FaPhoneAlt } from "react-icons/fa";

export const CopyIcon = () => {
  return <button className="px-3 py-1 border border-green-400 rounded-md">copy</button>
}

const ShowContact = () => {

  const showTip = ["Avoid making advance payments, even for delivery purposes.", "Let the seller know that you found their contact information on Takia to provide context about your inquiry."]
  return (
    // <div className="relative">
    <Popover  >
      <Popover.Button className='w-full border-none outline-none '>
        <button className="bg-gray-900 space-x-3 border-none outline-none rounded-md shadow-md flex items-center justify-center text-white py-2  w-full">
          <FaPhoneAlt className="" />
          <span>Show Phone No</span>
        </button>
      </Popover.Button>

      <Popover.Panel className=" w-full mt-1 b-white p-0 ">
        <div className=" bg-white  z-[2] shadow-lg  top-11 rounded-md">

          <Snippet
            className=" py-1 px-5 bg-white rounded-none flex w-full  border-b border-b-gray-300"
            // variant="bordered"
            copyIcon={<BiCopy />}
            checkIcon={<FaCheckCircle />}
            hideSymbol={true}
          >

            {/* <FaPhoneAlt className="inline" /> */}
            <button>081362829202</button>
          </Snippet>
          <div className="py-3 space-y-2 px-4">
            {
              showTip.map((tip, index) => (
                <p key={index} className="text-sm leading-normal  text-gray-600">{index === 0 ? <FaExclamation className="mr-1 inline-block text-red-500 " /> : <FaCheckCircle className="text-green-500 inline-block mr-1" />} {tip}</p>
              ))
            }
          </div>
        </div>
      </Popover.Panel>


    </Popover>
    // </div>
  );
}

export default ShowContact;