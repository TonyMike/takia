"use client"
import { updateUserPassword } from "../../lib/actions";
// import { auth } from "../../lib/auth";
import Input from "../Input";
import SubmitButton from "../SubmitButton";

const UpdatePasssword = () => {
  return (
    <form action={updateUserPassword} className="bg-white rounded-xl shadow-takia space-y-4 p-4 md:p-8">
      <div className="flex items-center space-x-2">
        <span className="text-red-500">*</span>
        <p className="text-gray-500 text-sm">Google users do not need to change their passwords</p>
      </div>
      <Input placeholder="*********" label="Old Password" name="oldPassword" type="password" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <Input placeholder="*********" label="New Password" name="newPassword" type="password" />
        {/* <Input placeholder="*********" label="Confirm Password" name="confirmNewPassword" type="password" /> */}
      </div>
      <div className="flex justify-center">
        <SubmitButton text="update" />
      </div>
    </form>


  );
}

export default UpdatePasssword;