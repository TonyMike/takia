
import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa";
import FormTitle from "../../../components/FormTitle";
import PostAdForm from "../../../components/PostAdForm";
import { auth } from "../../../lib/auth";

const PostAd =async () => {
  const tips = [
    'Embrace the charm of simplicity in your title and item description',
    'Ensure that you’re sharing it under the right category, enhancing visibility',
    'Accentuate your ad with eye-catching photo shots',
    'Price it just right to invite quick offers',
    'Give your item a final look-over before introducing it into the market'
  ];
  return (
    <div className="flex justify-center gap-y-5  flex-col-reverse md:flex-row-reverse gap-x-10 item-center">

      <div className="space-y-5 ">
        <div className="w-full relative hidden md:block h-80">
          <Image src={'/business.svg'} alt="business image" fill />
        </div>
        <h3 className="font-bold text-xl">Sell now for free</h3>
        <p>
          Join the fun by posting a free classified today completely on us!
        </p>
        <div className=" border border-gray-300">
          <h2 className="font-bold py-2 border-b border-b-gray-300 px-3 text-center">SECURE A FAST SALE EFFORTLESSLY!</h2>
          <ul className="py-3 space-y-2">
            {
              tips.map((tip, index) => <li className="text-gray-600 px-3 flex items-start space-x-2 text-sm" key={index}>
                <FaCheckDouble className="mt-1 " size={16} color="#4CAF50" />
                <span>{tip}</span>
              </li>)
            }
          </ul>
        </div>
      </div>
      <div style={{ boxShadow: 'inset 8px 8px 20px #e0e0e0,inset -8px -8px 20px #f6f6f6' }} className="flex rounded-md bg-[#f5f5f5] shadow-sm  flex-col py-8 md:py-10 gap-y-6 sm:w-[500px] xl:w-[650px]  px-6 md:px-10 ">
        <div>
          <FormTitle title={'Post free advert'} />
        </div>
        <PostAdForm />
      </div>
    </div>
  );
}
// file:bg-violet-50 file:text-violet-700
// hover:file:bg-violet-100

export default PostAd;