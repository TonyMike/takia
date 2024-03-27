import FormTitle from "../../../components/FormTitle";
import ProductsList from "../../../components/ProductsList";
import { searchProduct } from "../../../lib/actions";

const SearchProduct = async ({ searchParams }) => {
  // console.log("🚀 ~ SearchProduct ~ searchParams:", searchParams)
  const products = await searchProduct({ query: searchParams.query })
  // console.log("🚀 ~ SearchProduct ~ products:", products)
// console
  return (
    <div>
      <div className=" space-y-5 ">
        <div className=" flex ">
          <FormTitle title={'Search Results'} />
        </div>
        {
          !products ? <div>
            No results found for your search.
          </div> : <ProductsList dbproducts={[]} />
        }

      </div>
    </div>
  );
}

export default SearchProduct;