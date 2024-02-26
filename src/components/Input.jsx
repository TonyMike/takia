"use client"
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


const Input = ({ label, name, placeholder, type = 'text' }) => {
  const [show, setShow] = useState(false)
  const togglePassword = () => {
    setShow(!show)
  }
  return (
    <div className="flex gap-y-2 flex-col">

      <div className="flex items-center justify-between">
        <label className="ml-3 text-sm font-medium" id={name}>
          {label} <span className="text-red-600">*</span>
        </label>
        {
          type.toLowerCase() === 'password' && (
            <>
              {
                show ? <FiEye className="cursor-pointer" onClick={() => togglePassword()} /> : <FiEyeOff className="cursor-pointer" onClick={() => togglePassword()} />
              }
            </>
          )
        }

      </div>
      <input type={show ? 'text' : type} className="px-5 py-2.5 outline-none border-none rounded-full " style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }} placeholder={placeholder} name={name} required />
    </div>
  );
}

export default Input;