const Select = ({ label, name, placeholder }) => {
  return (
    <div className="flex gap-y-2 flex-col">

      <div className="flex items-center justify-between">
        <label className="ml-3 text-sm font-medium" id={name}>
          {label} <span className="text-red-600">*</span>
        </label>
      </div>
      <select name={name} id="" className="pl-3  py-2.5 text-sm text-gray-800 outline-none min-w-0 border-none rounded-full " style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }}>
        <option value="" >{placeholder}
        </option>
        <option value="">one</option>
        <option value="">two</option>
      </select>
    </div>
  );
}

export default Select;