import Logout from "../components/Logout";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <Logout />
    </div>
  );
}

export default Dashboard;