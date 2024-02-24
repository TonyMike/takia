import { handleLogout } from "../../lib/actions";
import { auth } from "../../lib/auth";

const Dashboard = async () => {
  console.log(auth()?.user)
  return (
    <div className="bg-gray-100 flex justify-center items-center w-screen min-h-screen">
      <h1>Dashboard</h1>
      <form action={handleLogout}>
        <button >logout</button>
      </form>
    </div>
  );
}

export default Dashboard;