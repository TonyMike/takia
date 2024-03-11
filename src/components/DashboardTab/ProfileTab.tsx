import Input from "../Input";
import SubmitButton from "../SubmitButton";

const ProfileTab = () => {
  return (
    <form className="bg-white rounded-xl shadow-takia space-y-4 p-4 md:p-8">
      <label className="block cursor-pointer" >
        <span className="sr-only">Choose profile photo</span>
        <input type="file" name="file" required   accept="image/jpg,image/png" className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold

              file:bg-orange-50 file:text-orange-700
              hover:file:bg-orange-100

              "/>
      </label >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <Input placeholder="First Name" label="First Name" name="firstName" value="Tony" />
        <Input placeholder="Last Name" label="Last Name" name="lastName" value="michael" />
        <Input placeholder="Email" disabled={true} value="tee.jhay1@gmail.com" label="Email" name="email" />
        <Input placeholder="Phone" value="09164209289" label="Phone" name="phone" />
        <Input placeholder="09164209289" label="Whatsapp" name="whatsapp" />
        <Input placeholder="Zeus Venture" label="Business Name" name="businessName" />

      </div>


      <div className="flex justify-center">
        <SubmitButton text="update" />
      </div>
    </ form>
  );
}

export default ProfileTab;