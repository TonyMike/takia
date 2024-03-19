import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

import { MdAccessTime } from "react-icons/md";
import FormTitle from "../../../components/FormTitle";
import ProductImageView from "../../../components/ProductImageView";
import ShowContact from "../../../components/ShowContact";
import { auth } from "../../../lib/auth";

import RelatedProductList from "../../../components/RelatedProductList";
import TakiaBreadCrumb from "../../../components/TakiaBreadCrumb";
import { getProduct, safetyTips } from "../../../lib/data";


// ! add a profile page to view the profile of a particular user with the list of all products ever created
const Product = async ({ params }) => {
  const { productId } = params;
  const session = await auth()
  const product = await getProduct(productId)

  return (
    <div className="space-y-14">
      <div className="space-y-5">
        <div className="mb-5">
          <TakiaBreadCrumb />
        </div>

        <div className="  space-y-2 md:space-y-0 grid  grid-cols-1 lg:grid-cols-6 xl:grid-cols-7 gap-x-5">

          <div className="lg:col-span-4  xl:col-span-5">
            <ProductImageView productId={productId} />
            {/* //! more information on the product */}
            <div className="mt-3 hidden space-y-3 py-5 px-6 rounded-md shadow-lg">
              <div className="flex gap-y-2 flex-col-reverse md:flex-col  ">
                <h2 className="text-lg md:text-xl capitalize text-gray-900 font-bold">{product?.title}</h2>
                <div className="flex items-center justify-between md:justify-start md:space-x-5 space-x-2">
                  <p className="flex items-center gap-x-1 ">
                    <MdAccessTime className="text-takia-orange" />
                    <span className="text-sm text-gray-500">Posted 1 day</span>
                  </p>

                  <div className="flex  mt-0.5 gap-x-1 items-center">
                    <HiLocationMarker className=" text-takia-orange" />
                    <p className="text-sm text-gray-500">Unilag, Lagos</p>
                  </div>
                </div>
              </div>
              <div className="flex md:hidden  justify-between items-center  border-b border-gray-200 pb-2 ">
                <h2 className="text-xl md:text-2xl font-bold text-takia-orange capitalize "> ₦ 14,100</h2>
                <h4 className="text-gray-900 font-semibold  text-xl md:text-2xl ">Negotiable</h4>
              </div>

              {/* product description */}
              <div className="mt-4">
                <h4 className="text-base font-bold">Description:</h4>
                <p className="text-sm text-gray-700 my-1 text-justify font-[montserrat] ">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive
                  PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                  .</p>
              </div>
            </div>
          </div>


          <div className=" flex flex-col lg:flex-col  md:flex-row md:gap-x-5 h-fit gap-y-5  lg:col-span-2 ">
            <div className="bg-white space-y-3 px-5 flex-1 py-4 shadow-md rounded-md">

              <div className=" hidden md:flex  justify-between items-center  border-b border-gray-200 pb-2 ">
                <h2 className="text-xl md:text-2xl font-bold text-takia-orange capitalize "> ₦ 14,100</h2>
                <h4 className="text-gray-900 font-semibold  text-xl md:text-2xl ">Negotiable</h4>
              </div>

              <div className="grid grid-cols-1  lg:grid-cols-1 gap-5 justify-between">

                <div className="flex gap-x-3 flex-wrap items-start">
                  <div className="min-h-[50px] min-w-[50px] relative bg-white  overflow-hidden rounded-full">
                    <Image fill src={session?.user?.profile_picture} className="rounded-full object-cover" alt={session?.user?.name} />
                  </div>

                  <div>
                    {/* //! make the name a link */}
                    <h4 className="uppercase overflow-x-hidden whitespace-nowrap text-sm text-nowrap hover:underline text-gray-700 font-bold ">Anthony micheal juwon</h4>
                    <p className="text-xs font-[montserrat]  text-gray-500">2y 6m on Takia</p>
                  </div>

                </div>

                {/* show contact button */}
                <div className="flex items-center flex-wrap space-x-2">
                  <p className="text-[15px] italic font-semibold text-center">Chat via social media: </p>
                  <div className=" flex items-center text-lg gap-x-3 ">
                    <IoLogoWhatsapp className="text-green-500 hover:scale-125  transition-all text-xl" />
                    <IoLogoFacebook className="text-blue-600 hover:scale-125 transition-all text-xl" />
                    <BsTwitterX className="hover:scale-125 transition-all " />
                  </div>
                </div>
                <ShowContact />


              </div>
            </div>

            {/* safety tips */}
            <div className="bg-white px-5 flex-1 py-4 shadow-md rounded-md">
              <div className="text-center">
                <FormTitle title="Tips for safety" />
              </div>
              {/* <h3 className="text-center font-bold text-lg">Tips for safety</h3> */}
              <ul className=" px-4 mt-2 list-disc space-y-2">
                {
                  safetyTips.map((tip, index) => {
                    return (
                      <li key={index} className="text-sm text-gray-600">{tip}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

        </div>

      </div>
      {/* related products */}
      <div className=" w-full">
        <div>
          <div className="flex space-x-3 items-center ">
            <div className="bg-takia-orange  rounded-md h-8 w-5" />
            <h3 className="text-takia-orange text-sm font-bold">Related item</h3>
          </div>
        </div>
        <div className="mt-5">
          <RelatedProductList />
        </div>
      </div>

    </div>

  );
}

export default Product;
