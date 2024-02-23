

import { handleGoogleLogin, loginUser } from "../../../lib/actions";

const Login = async () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center w-screen min-h-screen">
      <div>
        <form action={handleGoogleLogin}>
          <button>login with google</button>
        </form>
        {/* <form action={loginUser} className="flex flex-col space-y-4 ">
          <input type="text" p laceholder="username" name="username" />
          <input type="text" placeholder="password" name="password" />
          <button>Login</button>
        </form> */}
      </div>

    </div>
  );
}

export default Login;