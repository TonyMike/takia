import DashboardTab from "../../components/DashboardTab/DashboardTab";

const Dashboard = async () => {


  return (
    <div className="">
      {/* <div className="sm:px-16 md:px-20 lg:px-24  xl:px-64 "> */}
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <DashboardTab />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;