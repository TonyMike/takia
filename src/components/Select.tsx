"use client"
import { selectProp } from "../@types/types";
import { useStateStore } from "../lib/store";

const Select = ({ label, name, options, required = false , handleChange}: selectProp) => {

  return (
    <div className="flex gap-y-2 flex-col">
      <div className="flex items-center justify-between">
        <label className="ml-3 text-sm font-medium" id={name}>
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      </div>
      <select name={name} id="" required={required} onChange={handleChange} className="pl-3 appearance-none capitalize py-2.5 text-sm text-gray-800 outline-none min-w-0 border-none rounded-full " style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }}>
        <option value="">Select an option</option>
        {options?.map(option => <option key={option} value={option.toLowerCase()}>{option}</option>)}

      </select>
    </div>
  );
}

export default Select;