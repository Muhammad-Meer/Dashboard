import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/settings" element={<h1>settings</h1>} />
    </Routes>
  );
}