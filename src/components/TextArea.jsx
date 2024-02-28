const TextArea = ({ name, label,placeholder }) => {
  return (
    <div className="flex gap-y-2 flex-col">

      <div className="flex items-center justify-between">
        <label className="ml-3 text-sm font-medium" id={name}>
          {/* ₦ */}
          {label} <span className="text-red-600">*</span>
        </label>
      </div>
      <textarea name={name} placeholder={placeholder} cols="30" rows="3" id="" className="px-5  py-2.5 text-base text-gray-800 outline-none min-w-0 placeholder:text-sm border-none rounded-md resize-none " style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }}></textarea>
    </div>
  );
}

export default TextArea;