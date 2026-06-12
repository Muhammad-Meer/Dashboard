import { BrowserRouter } from "react-router-dom";
import DashboardNavbar from "./pages/DashboardNavbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <DashboardNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;