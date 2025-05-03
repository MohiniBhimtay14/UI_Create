import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import NavBar from "./components/NavBar";
import UpdatesSection from "./components/UpdatesSection";
import Events from "./components/Events";
import Birthday from "./components/Birthday";
import QuickApp from "./components/QuickApp";
import ProfilePage from "./components/ProfilePage";
import Sidebar from "./components/Sidebar"; // ⬅️ your new sidebar component

import "./index.css";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed z-50 w-64 h-full bg-white shadow-lg transition-transform">
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gray-100 min-h-screen">
              <Header onMenuClick={() => setSidebarOpen(true)} />
              <Tabs />
              <NavBar />
              <Events />
              <UpdatesSection />
              <Birthday />
              <QuickApp />
            </div>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
