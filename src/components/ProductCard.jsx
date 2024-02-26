const ProductCard = ({ name, image, price }) => {
  return (
    <div className="w-full h-[150px] bg-blue-500 " >
      <div>{image}</div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;