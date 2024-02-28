import { categories } from "../lib/data";
import FormTitle from "./FormTitle";

const Categories = () => {
  return (
    <div className="hidden md:block w-[200px] lg:w-[250px]  py-3">
      {/* <h2 className="mb-1 text-xl font-bold px-7 ">Categories</h2> */}
      <FormTitle title={'Category'} />

      <ul>
        {
          categories.map((cat) => {
            return (
              <li className="py-1.5 hover:text-white px-7 text-[15px] hover:bg-takia-orange " key={cat}>{cat}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Categories;