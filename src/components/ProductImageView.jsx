const ProductImageView = () => {

  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-6 md:grid-flow-col-dense">
      <div className="h-72 bg-gray-100 rounded-md md:col-span-5 md:h-96 lg:h-[450px] xl:h-[500px] ">large</div>
      <div className="h-20  md:order-first md:col-span-1 md:h-96 lg:h-[450px] xl:h-[500px] grid  grid-cols-4 grid-rows-1 md:grid-cols-1 md:grid-rows-4 md:grid-flow-col-dense gap-1 md:gap-2  ">
        {
          Array(4).fill(0).map((x, i) => {
            return <div className="bg-gray-100 rounded-md" key={i}>{i}</div>
          })
        }
      </div>
    </div>
  );
}

export default ProductImageView;