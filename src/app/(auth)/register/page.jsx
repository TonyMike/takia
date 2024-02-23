import { registerUser } from "../../../lib/actions";

const Register = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center w-screen min-h-screen">
      <form action={registerUser} className="flex flex-col space-y-4 ">
        <input type="text" placeholder="full name" name="fullName" />
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="email" name="email" />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default Register;