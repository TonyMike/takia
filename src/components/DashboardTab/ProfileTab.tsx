import Input from "../Input";
import SubmitButton from "../SubmitButton";
import Upload from "./Upload";

const ProfileTab = () => {
  const state =  [
    {
      "Kogi":
      {
        "1": "ECWA School of Nursing (ECWASON)",
        "2": "Federal College of Education, Okene",
        "3": "Federal University Of Lokoja",
        "4": "Kogi State College of Education",
        "5": "Kogi State College of Nursing",
        "6": "Kogi State Polytechnic, Lokoja",
        "7": "KSU Kogi State University, Anyigba",
        "8": "National Open University of Nigeria",
        "9": "SUL Salem University, Lokoja",
        "10": "The Federal Polytechnic Idah"
      }
    },
    {
      "Kwara":
      {
        "1": "College of Nursing, Ilorin",
        "2": "Federal Polytechnic Offa",
        "3": "HIK Al-Hikmah University, Ilorin",
        "4": "ILO University Of Ilorin, Ilorin",
        "5": "Kwara State College of Arabic and Islamic Legal Studies",
        "6": "Kwara State College of Education",
        "7": "Kwara State College of Health and Technology",
        "8": "Kwara State Polytechnic, Ilorin",
        "9": "Kwara State University (KWASU)",
        "10": "Landmark university omu-aran",
        "11": "National Open University of Nigeria"
      }
    },
  ]
  return (
    <div className="bg-white rounded-xl shadow-takia space-y-4 p-4 md:p-8">
      <Upload />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <Input placeholder="First Name" label="First Name" name="firstName" value="Tony" />
        <Input placeholder="Last Name" label="Last Name" name="lastName" value="michael" />
        <Input placeholder="Email" disabled={true} value="tee.jhay1@gmail.com" label="Email" name="email" />
        <Input placeholder="Phone" value="09164209289" label="Phone" name="phone" />
      </div>
      <Input placeholder="09164209289" label="Whatsapp" required={false} name="whatsapp" />

      <div className="flex justify-center">
        <SubmitButton text="update" />
      </div>
    </div >
  );
}

export default ProfileTab;