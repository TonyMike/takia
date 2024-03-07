import Input from "../Input";
import SubmitButton from "../SubmitButton";

const ProfileTab = () => {
  return (
    <div className="bg-white rounded-xl shadow-takia space-y-4 p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="First Name" label="First Name" name="firstName" value="Tony" />
        <Input placeholder="Last Name" label="Last Name" name="lastName" value="michael" />
        <Input placeholder="Email" disabled={true} value="tee.jhay1@gmail.com" label="Email" name="email" />
        <Input placeholder="Phone" value="09164209289" label="Phone" name="phone" />
      </div>
      <Input placeholder="09164209289" label="Whatsapp" required={false} name="whatsapp" />

      <div className="flex justify-center">
        <SubmitButton text="update" />
      </div>
    </div>
  );
}

export default ProfileTab;