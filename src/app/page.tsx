

import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import { getAllProducts } from "../lib/actions";
import "./globals.css";

export default async function Home() {
  const allProducts= await getAllProducts();
  const serializedData: any= JSON.parse(JSON.stringify(allProducts));
  return (
    <div className="">


      <div className="flex  md:gap-x-5">
        <div className="sticky top-0">
          <Categories />
        </div>
        <ProductsList dbproducts={serializedData} />
      </div>
    </div>
  );
}
