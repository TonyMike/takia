

import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ProductsList from "../components/ProductsList";
export default  function Home() {



  const list = Array(16).fill('')
  return (
    <div className="">
      <div className="flex  gap-x-5">
        <div className="sticky top-0">
          <Categories />
        </div>
        <ProductsList />
      </div>
    </div>
  );
}
