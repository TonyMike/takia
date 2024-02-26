import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <button className=" w-full flex justify-center hover:bg-[#f2f2f2]  items-center gap-3 py-2.5 rounded-full border border-black ">
      <FcGoogle />
      <span>Continue with Google</span>
    </button>
  );
}

export default GoogleButton;