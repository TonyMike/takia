"use client"

import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";


export default function Home() {
  const list = Array(40).fill('')
  return (
    <div className="">
      <div className="flex  gap-x-5">
        <Categories />
        <div className="bg-red-400 grid grid-cols-2 grow gap-4  sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4  ">


          {
            list.map((x) => {
              return <ProductCard
                name="Product 1"
                image="product-1.jpg"
                price="$19.99"
              />
            })
          }
        </div>
      </div>
    </div>
  );
}
