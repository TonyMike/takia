

import Link from "next/link";
import Divider from "../../../components/Divider";
import FormTitle from "../../../components/FormTitle";
import GoogleButton from "../../../components/GoogleButton";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { handleGoogleLogin, loginUser } from "../../../lib/actions";

const Login = async () => {
  return (
    <div className="flex justify-center item-center">
      <div style={{ boxShadow: 'inset 8px 8px 20px #e0e0e0,inset -8px -8px 20px #f6f6f6' }} className="flex rounded-md bg-[#f5f5f5] shadow-sm  flex-col py-8 md:py-10 gap-y-6 w-[448px]  px-6 md:px-10 ">
        
        <form action={handleGoogleLogin}>
          <GoogleButton />
        </form>
        <Divider />
        <form action={loginUser} className="flex  flex-col gap-y-6 md:gap-8">
          <Input name={'email'} type={'email'} label={'Email'} placeholder={'johnsmith@example.com'} />
          <Input name={'password'} type={'password'} label={'Password'} placeholder={'************'} />
          <SubmitButton />
          <p className="text-center text-gray-700">
            {"Don't have an account? "} <Link href='/register' className="font-bold underline ml-1">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;