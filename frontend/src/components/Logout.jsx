import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();

    localStorage.removeItem("token");

    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;