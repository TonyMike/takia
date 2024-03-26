import Image from "next/image";
import { ImLocation2 } from "react-icons/im";


const ProductCard = ({ name, image, price, imageCount }) => {
  return (
    <div className="w-full  relative overflow-hidden rounded-lg  shadow-takia  ">
      <div className="bg-black text-center text-xs text-white bg-opacity-60  absolute top-0 z-[1]  h-6 flex items-center justify-center w-7">{imageCount}</div>
      <div className=" relative overflow-hidden  p-4 min-h-36">
        <Image src={image} fill alt='image' className=" hover:scale-125 transition-transform duration-100 object-cover" />
      </div>
      <div className="p-3 space-y-0.5 ">
        <p className="text-ellipsis text-gray-700 w-full text-sm overflow-hidden whitespace-nowrap block text-nowrap">{name}</p>
        <div className="flex justify-between gap-y-1 flex-wrap">
          <p className="font-bold text-sm font-[montserrat] leading-normal  text-takia-orange ">
            {/* ₦ */}
            {price}
          </p>
          <div className="flex space-x-0.5 justify-ed items-center">
            <ImLocation2 className="text-xs text-green-600" />
            <div className="text-xs italic font-medium ">
              <span className="capitalize">unilag, </span>
              <span className="capitalize">lagos</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;