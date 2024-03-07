import Image from "next/image";
import DashboardTab from "../../components/DashboardTab/DashboardTab";

const Dashboard = async () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="  px-4  sm:px-6 lg:px-8">
        <DashboardTab />
      </div>
      <div className="relative w-full hidden md:block">
        <Image fill src="/dashboard-pana.png" className="object-cover -z-10 content-center" alt="dashboard img" />
      </div>
    </div>
  );
}

export default Dashboard;

