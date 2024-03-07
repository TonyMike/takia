import React from "react";

import Image from "next/image";
import { categories } from "../lib/data";
import FormTitle from "./FormTitle";


const Categories = () => {
  return (
    <div className="hidden bg-white shadow-lg  md:block w-[200px] lg:w-[250px]  py-3">
      {/* <h2 className="mb-1 text-xl font-bold px-7 ">Categories</h2> */}

      <div className="px-4">
        {/* <FormTitle title={'Category'} /> */}
        <h2 className="font-bold text-xl">All Categories</h2>

      </div>

      <ul className="mt-2">
        {categories.map((cat) => {
          return (
            <li
              className="py-1.5 flex capitalize gap-x-2 px-4 hover:text-white items-center text-[15px] hover:bg-takia-orange "
              key={cat.category}
            >
              <Image src={cat.icon} alt={cat.category} width={20} height={20} />
              <span>{cat.category}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default Categories;