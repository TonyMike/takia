"use client"
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface inputProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string
  disabled?: boolean;
  value?: string;
  required?: boolean
}
const Input = ({ label, name, placeholder, type = 'text', disabled = false, value, required = true }: inputProps) => {
  const [show, setShow] = useState(false)
  const [initialValue, setInitialValue] = useState(value)

  const togglePassword = () => {
    setShow(!show)
  }
  return (
    <div className="flex gap-y-1 flex-col">

      <div className="flex items-center justify-between">
        <label className="ml-3 text-sm font-medium" id={name}>
          {label} {
            required && <span className="text-red-600">*</span>
          }
        </label>
        {
          type.toLowerCase() === 'password' && (
            <>
              {
                show ? <FiEye className="cursor-pointer sel " onClick={() => togglePassword()} /> : <FiEyeOff className="cursor-pointer" onClick={() => togglePassword()} />
              }
            </>
          )
        }

      </div>
      <input type={show ? 'text' : type} onChange={(e) => setInitialValue(e.target.value)} disabled={disabled} defaultValue={initialValue} className={`px-5 py-2.5 text-sm placeholder:text-sm outline-none min-w-0  border-0 rounded-full focus:border border-takia-orange  ${disabled ? 'cursor-not-allowed italic' : 'cursor-pointer'} `} style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }} placeholder={placeholder} name={name} required={required} />
    </div>
  );
}

export default Input;