import Image from "next/image";

const ProductCard = ({ name, image, price,imageCount }) => {
  return (
    <div className="w-full  overflow-hidden rounded-lg bg-white shadow-lg  ">
      <div className=" relative min-h-36">
        <Image src={image} fill alt='image' objectFit="cover" className="object-center  object-cover" />
        <div className="bg-black text-center text-xs text-white bg-opacity-60 absolute  h-5 flex items-center justify-center w-6">{imageCount}</div>
      </div>
      <div className="p-3 ">
        <p className="text-ellipsis text-gray-700 w-full overflow-hidden whitespace-nowrap block text-nowrap">{name}</p>
        <p className="font-bold"> {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;