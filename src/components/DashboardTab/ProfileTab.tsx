"use client"
import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import { updateUserProfile } from "../../lib/actions";
import { useAuthStore } from "../../lib/store";
import Input from "../Input";
import SubmitButton from "../SubmitButton";

const ProfileTab = () => {
  const [img, setImg] = useState()
  const handlefile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImg(URL.createObjectURL(e.target.files[0]))
  }
  const user = useAuthStore((state) => state.user)
  console.log("🚀 ~ ProfileTab ~ user:", user)
  return (
    <form action={updateUserProfile} className="bg-white rounded-xl shadow-takia space-y-4 p-4 md:p-8">
      <div className="flex items-center space-x-2">
        <Avatar className="bg-takia-orange text-white/80" size="lg" src={img} />
        <label className="flex-1 border-takia-orange cursor-pointer" >
          <span className="sr-only">Choose profile photo</span>
          <input onChange={handlefile} type="file" name="file" required={false} accept="image/jpg,image/png" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100
              "/>
        </label >
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <Input placeholder="First Name" label="First Name" disabled={true} name="firstName" value="tony" />
        <Input placeholder="Last Name" label="Last Name" disabled={true} name="lastName" value="michael" />
        <Input placeholder="Email" disabled={true} value="tee.jhay1@gmail.com" label="Email" name="email" />
        <Input placeholder="Phone" value="09164209289" label="Phone" name="phone" />
        <Input placeholder="09164209289" required={false} label="Whatsapp" name="whatsapp" />
        <Input placeholder="Zeus Venture" required={false} label="Business Name" name="businessName" />

      </div>

      <div className="flex justify-center">
        <SubmitButton text="update" />
      </div>
    </ form>
  );
}

export default ProfileTab;