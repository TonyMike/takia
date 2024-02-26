import Image from "next/image";

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="w-full h-[250px] rounded-3xl bg-white shadow-md  ">
      <div className="h-[75%] relative">
        <Image src={image} fill alt='' objectFit="cover" className="rounded-t-3xl" />
      </div>
      <div className=" rounded-b-3xl px-4 h-[25%] ">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;