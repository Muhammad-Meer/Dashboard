import { useNavigate } from "react-router-dom";
import API from "../api/auth.api";

function Home() {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await API.post("/logout");

      alert("Logout Success");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default Home;