"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=" grid grid-cols-2 grow gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  ">
      {
        products.map((x, i) => {

          return (
            <Link key={x.id} href={`/products/${x?.title}`} >
              <ProductCard
                name={x?.title}
                image={x?.images[0]}
                price="$19.99"
                imageCount={x.images.length}
              />
            </Link>
          )


        })
      }
    </div>
  );
}

export default ProductsList;