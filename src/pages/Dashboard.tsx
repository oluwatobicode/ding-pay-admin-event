import DashboardTables from "../components/dashboard/DasboardTables";
import DashboardCards from "../components/dashboard/DashboardCards";
import Navbar from "../ui/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <DashboardCards />
      <DashboardTables />
    </div>
  );
};

export default Dashboard;
