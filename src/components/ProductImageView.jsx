const ProductImageView = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-6 md:grid-flow-col-dense">
      <div className="h-72 bg-yellow-400 md:col-span-5 md:h-96 lg:h-[450px] xl:h-[500px] ">large</div>
      <div className="h-24 bg-red-300 md:order-first md:col-span-1 md:h-96 lg:h-[450px] xl:h-[500px] grid [&>*]:border  [&>*]:border-gray-400 grid-cols-4 grid-rows-1 md:grid-cols-1 md:grid-rows-4 md:grid-flow-col-dense">
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <div>four</div>
      </div>
    </div>
  );
}

export default ProductImageView;