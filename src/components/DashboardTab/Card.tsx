import Image from "next/image";
import { FaCamera } from "react-icons/fa";

const Card = () => {
  return (

    <div className="border overflow-hidden w-[400px] rounded-md flex gap-x-3  p-2 border-gray-200">
      <div className="h-24  relative rounded-md overflow-hidden min-w-24">
        <Image src='/shoe.png' className="object-cover" fill alt="shoe" />
        <div className="absolute flex items-center text-[10px] space-x-1 text-white justify-center h-5 w-7 bg-black/80 bottom-0 ">
          <FaCamera size={10} className=" text-white" />
          <span>5</span>
        </div>
      </div>
      <div className="  space-y-1.5">
        <p className="font-semibold text-sm font-[montserrat]  ">N 14000</p>
        {/* description */}
        <p className="line-clamp-2 text-sm overflow-hidden text-ellipsis "> Sneakers for men in the color blue and white</p>

        <div className="flex  items-center space-x-3">
          <button className="bg-blue-500 text-white font-bold py-1 text-xs px-2 rounded">
            Edit
          </button>

          <button className="bg-red-500 text-white font-bold py-1 text-xs px-2 rounded">
            Delete
          </button>
{/*
          <button className="bg-gray-500 text-white font-bold py-1 text-xs px-2 rounded">
            Close
          </button> */}
        </div>
      </div>

    </div>
  );
}

export default Card;