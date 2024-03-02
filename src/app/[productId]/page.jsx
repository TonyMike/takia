import Image from "next/image";
import { ImLocation } from "react-icons/im";
import FormTitle from "../../components/FormTitle";
import ShowContact from "../../components/ShowContact";
import { auth } from "../../lib/auth";

// ! add a profile page to view the profile of a particular user with the list of all products ever created
const Product = async () => {
  const session = await auth()
  const safetyTips = [
    "Don't send any prepayments",
    "A public place is a good place to meet the seller",
    "Verify what you're buying to make sure it's the right thing",
    "Verify all documents and only pay if you're satisfiedjdjdjjdjdjdjd d"
  ]
  return (
    <div className="space-y-14">
      <div className="space-y-5">
        {/* breadcrumbs */}
        <div>
          <p>Home/Gaming/Ps4 </p>
        </div>

        <div className="space-y-4 grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-7 gap-x-5">

          <div className="bg-red-300 lg:col-span-4 xl:col-span-5">picture</div>

          <div className=" flex flex-col lg:flex-col md:flex-row md:gap-x-5 gap-y-5  lg:col-span-2 ">
            <div className="bg-white space-y-3 px-5 flex-1 py-4 shadow-md rounded-md">

              <h2 className="text-2xl font-bold  capitalize border-b border-gray-200 pb-2 bg-white "> ₦ 14,100</h2>


              <div className="grid grid-cols-1  lg:grid-cols-1 gap-5 justify-between">

                <div className="flex gap-x-3 items-start">
                  <div className="h-16 w-16 relative bg-white  shadow-lg overflow-hidden rounded-full">
                    <Image fill src={session.user?.image} className="rounded-full" alt={session.user?.name} />
                  </div>

                  <div>
                  {/* make this a link */}
                    <h4 className="uppercase overflow-hidden whitespace-nowrap block text-nowrap hover:underline text-gray-700 font-semibold ">{session.user.name}</h4>
                    <p className="text-xs font-[montserrat]  text-gray-500">2y 6m on Takia</p>
                    <div className="flex text-sm mt-0.5 space-x-1 items-center">
                      <ImLocation className="text-xs text-green-500" />
                      <p>Unilag, Lagos</p>
                    </div>
                  </div>
                </div>

                {/* show contact button */}
                <ShowContact />
              </div>
            </div>

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
      <div className="bg-orange-500 h-80 w-full">

      </div>

    </div>

  );
}

export default Product;
