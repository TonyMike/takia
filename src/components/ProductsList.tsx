"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ dbproducts }: { dbproducts: any }) => {
  const [products, setProducts] = useState([])
  console.log(dbproducts)
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
    <div>
      {/* <div className="mb-5 flex justify-center ">
        <FormTitle title={'Latest Products'} />
      </div> */}
      <div className=" grid grid-cols-2 grow gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  ">
        {
          dbproducts.map((x, i) => {

            return (
              <Link key={i} href={`/products/${x?._id}`} >
                <ProductCard
                  name={x?.title}
                  image={x?.images[0]}
                  price={x?.price}
                  imageCount={x.images.length}
                />
              </Link>
            )


          })
        }
      </div>
    </div>
  );
}

export default ProductsList;