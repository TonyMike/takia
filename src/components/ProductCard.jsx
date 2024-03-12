import Image from "next/image";
import { ImLocation2 } from "react-icons/im";


const ProductCard = ({ name, image, price, imageCount }) => {
  return (
    <div className="w-full  overflow-hidden rounded-lg bg-white shadow-takia  ">
      <div className=" relative min-h-36">
        <Image src={image} fill alt='image' objectFit="cover" className="object-center  object-cover" />
        <div className="bg-black text-center text-xs text-white bg-opacity-60 absolute  h-6 flex items-center justify-center w-7">{imageCount}</div>
      </div>
      <div className="p-3 space-y-0.5 ">
        <p className="text-ellipsis text-gray-700 w-full text-sm overflow-hidden whitespace-nowrap block text-nowrap">{name}</p>
        <div className="flex justify-between gap-y-1 flex-wrap">
          <p className="font-bold text-sm font-[montserrat] leading-normal  text-takia-orange ">
             ₦ 14,0000
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