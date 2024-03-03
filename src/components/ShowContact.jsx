'use client'
import { useState } from "react";
import { FaCheckCircle, FaExclamation, FaPhoneAlt } from "react-icons/fa";



const ShowContact = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(prev => !prev)
  }
  const showTip = ["Avoid making advance payments, even for delivery purposes.", "Let the seller know that you found their contact information on Takia to provide context about your inquiry."]
  return (
    <div className="relative">
      <button onClick={toggle} className="bg-gray-900 hover:bg-opacity-90 space-x-3 rounded-md shadow-md flex items-center justify-center text-white py-2  w-full">
        <FaPhoneAlt className="" />
        <span>Show Phone No</span>
      </button>
      {
        open && (
          <div className=" bg-white  z-[2] shadow-lg absolute top-11 w-full rounded-md">
            <div className="flex justify-between px-4  items-center border-b border-gray-300 py-3">
              <div className="flex gap-x-3 items-start">
                <FaPhoneAlt className="" />
                <span className="text-sm">09164209289</span>
              </div>
              <button className="rounded-md text-xs p-1 px-3 border border-takia-orange">Copy</button>
            </div>
            <div className="py-3 space-y-2 px-4">
              {
                showTip.map((tip, index) => (
                  <p key={index} className="text-sm leading-normal  text-gray-600">{index === 0 ? <FaExclamation className="mr-1 inline-block text-red-500 " /> : <FaCheckCircle className="text-green-500 inline-block mr-1" />} {tip}</p>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ShowContact;