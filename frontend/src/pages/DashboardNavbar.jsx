import { useState } from "react";
import { Bell, MessageCircle, Settings, Search } from "lucide-react";
import { useNavigate } from "react-router-dom"

export default function DashboardNavbar() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleLogout = () => {
    alert("Logged out!");
    // yahan ap API call ya auth logout logic laga sakte ho
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-blue-600">MyDashboard</h1>
      </div>

      {/* Center - Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-6 relative">

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        {/* Messages */}
        <div className="relative cursor-pointer">
          <MessageCircle />
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded-full">
            5
          </span>
        </div>

        {/* Settings */}
        <div className="cursor-pointer">
          <Settings />
        </div>

        {/* Profile */}
        <div className="relative">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Ali</span>
          </div>

          {/* Dropdown */}
          {dropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40 p-2">
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded" onClick={() => {
                navigate("/profile");
                setDropdown(false);
              }}>
                Profile
              </button>

              <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded" onClick={() => {
                navigate("/settings");
                setDropdown(false);
              }}>
                settings
              </button>
             
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-500 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}