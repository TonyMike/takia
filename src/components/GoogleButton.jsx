import { FcGoogle } from "react-icons/fc";

const GoogleButton = ({text}) => {
  return (
    <button className=" w-full flex justify-center hover:bg-[#f2f2f2]  items-center gap-3 py-2.5 rounded-full border border-black ">
      <FcGoogle />
      <span>{text}</span>
    </button>
  );
}

export default GoogleButton;