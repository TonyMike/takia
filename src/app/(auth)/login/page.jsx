

import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { handleGoogleLogin, loginUser } from "../../../lib/actions";

const Login = async () => {
  return (
    <div className="flex flex-col md:flex-row h-[400px] md:h-[420px]">
      <div className="relative  flex-1 hidden md:block ">
        <Image src="/login.svg" fill />
      </div>

      <div className="flex-1  ">
        <div style={{ boxShadow: 'inset 8px 8px 20px #e0e0e0,inset -8px -8px 20px #e7e7e7' }} className="flex  bg-[#f3f3f3] shadow-sm max-w-md flex-col h-full py-8 gap-y-6  px-6 md:px-10 ">
          <form action={handleGoogleLogin}>
            <button className=" w-full flex justify-center   items-center gap-3 py-3 rounded-full border border-black ">
              <FcGoogle />
              <span>Continue with Google</span>
            </button>
          </form>
          <div className="flex items-center">
            <div className="bg-black rounded-full h-0.5 w-full" />
            <p className="mx-3">Or</p>
            <div className="bg-black rounded-full w-full h-0.5" />
          </div>
          <form action={loginUser} className="flex  flex-col gap-y-6 md:gap-8">
            <input type="text" className="px-5 py-2 outline-none border-none rounded-full " style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }} placeholder="Email" name="email" />
            <input type="password" className="px-5 py-2 outline-none border-none rounded-full" style={{ boxShadow: 'inset 6px 6px 6px 0 #cbced1, inset -6px -6px 6px 0 #ffffff ' }} placeholder="Password" name="password" />
            <button className="bg-black py-3 rounded-md text-white">Login</button>
            <p className="text-center">
              {"Don't have an account? "} <Link href='/register' className="font-bold">Sign up</Link>
            </p>
          </form>
        </div>
      </div>


      {/* <div class="flex items-center justify-center min-h-screen bg-gray-200">
        <div class="bg-gray-200 p-10 rounded-xl shadow-lg">
          <input type="text" placeholder="Enter your text" class="w-64 h-12 px-4 py-2 bg-gray-200 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />

        </div>
      </div> */}


    </div>
  );
}

export default Login;