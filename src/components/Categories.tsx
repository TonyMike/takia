
import Image from "next/image";
import Link from "next/link";
import { categories } from "../lib/data";

const Categories = () => {

  return (
    <div className="hidden bg-white shadow-lg  md:block w-[200px] lg:w-[250px]  py-3">
      {/* <h2 className="mb-1 text-xl font-bold px-7 ">Categories</h2> */}

      <div className="px-4">
        <h2 className="font-bold text-xl">All Categories</h2>
      </div>

      <ul className="mt-2">
        {categories.map((cat) => {
          return (
            <Link className="cursor-pointer" href={`/products/search?query=${cat.category}`} key={cat.category}>
              <li
                // onClick={() => handleCategorySelect(cat.category)}
                className="py-1.5 flex capitalize gap-x-2 px-4 hover:text-white items-center text-[15px] hover:bg-takia-orange "
                key={cat.category}
              >
                <Image src={cat.icon} alt={cat.category} width={20} height={20} />
                <span>{cat.category}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};


export default Categories;