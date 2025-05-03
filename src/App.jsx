import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import NavBar from "./components/NavBar";
import UpdatesSection from "./components/UpdatesSection";
import Events from "./components/Events";
import Birthday from "./components/Birthday";
import QuickApp from "./components/QuickApp";
import ProfilePage from "./components/ProfilePage"; // ✅ import your profile page

import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main App Route */}
        <Route
          path="/"
          element={
            <div className="bg-gray-100 min-h-screen">
              <Header />
              <Tabs />
              <NavBar />
              <Events />
              <UpdatesSection />
              <Birthday />
              <QuickApp />
            </div>
          }
        />

        {/* Profile Page Route */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
