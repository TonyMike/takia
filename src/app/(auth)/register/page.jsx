"use server"
import Link from "next/link";
import Divider from "../../../components/Divider";
import GoogleButton from "../../../components/GoogleButton";
import Input from "../../../components/Input";
import SubmitButton from "../../../components/SubmitButton";
import { handleGoogleLogin, registerUser } from "../../../lib/actions";

const Register = () => {
  return (
    <div className="flex justify-center py-3 gap-y-3 items-center flex-col">

      <div style={{ boxShadow: 'inset 8px 8px 20px #e0e0e0,inset -8px -8px 20px #f6f6f6' }} className="flex rounded-md bg-[#f5f5f5] shadow-sm  flex-col py-8 md:py-10 gap-y-6 max-w-[450px]  px-6 md:px-10 ">

        <form action={handleGoogleLogin}>
          <GoogleButton text={'Sign up with Google'} />
        </form>
        <Divider />

        <form action={registerUser} className="flex  flex-col gap-y-6 md:gap-6">
          <div className="grid grid-cols-2 gap-x-2 ">
            <Input name={'firstName'} type={'text'} label={'First Name'} placeholder={'John'} />
            <Input name={'lastName'} type={'text'} label={'Last Name'} placeholder={'Smith'} />
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <Input name={'email'} type={'email'} label={'Email'} placeholder={'johnsmith@example.com'} />
            <Input name='phone' type={'text'} label={'Phone'} placeholder='09164206921' />
          </div>
          <Input name={'password'} type={'password'} label={'Password'} placeholder={'************'} />
          <Input type={'password'} label={'Confirm Password'} placeholder={'************'} />
          <SubmitButton />
          <p className="text-center text-gray-700 ">
            {"Have an account already ? "} <Link href='/login' className="font-bold underline ml-1">Log in</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Register;