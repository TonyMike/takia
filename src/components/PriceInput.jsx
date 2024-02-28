const PriceInput = ({ name, placeholder }) => {
  return (
    <div className="flex gap-y-2 flex-col">
      <div className="flex items-center justify-between">
        <label className="ml-3 text-sm font-medium" id='price'>
          Price <span className="text-red-600">*</span>
        </label>
      </div>
      <div className=" overflow-hidden  flex  placeholder:text-sm outline-none min-w-0 border-none rounded-full " style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }} >
        <span className=" px-4 pr-2 text-lg py-2 text-gray-800 bg-transparent h-full font-medium">
          ₦
        </span>
        <input type='number' placeholder='2500' min={0} className="py-2 text-lg  mr-2 placeholder:text-sm outline-none border-none bg-transparent flex-1" name='price' required />
      </div>


    </div>
  );
}

export default PriceInput;