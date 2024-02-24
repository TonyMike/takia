import { registerUser } from "../../../lib/actions";

const Register = () => {
  return (
    <div className="">
      <form action={registerUser}>
        <input type="text" placeholder="first name" name="firstName" />
        <input type="text" placeholder="last name" name="lastName" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default Register;