

import { handleGoogleLogin, loginUser } from "../../../lib/actions";

const Login = async () => {
  return (
    <div className="">
      <div>
        <form action={handleGoogleLogin}>
          <button>login with google</button>
        </form>
        <form action={loginUser}>
          <input type="text" p laceholder="email" name="email" />
          <input type="text" placeholder="password" name="password" />
          <button>Login</button>
        </form>
      </div>

    </div>
  );
}

export default Login;