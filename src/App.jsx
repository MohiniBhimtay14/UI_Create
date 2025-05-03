import Header from "./components/Header";
import Tabs from "./components/Tabs";
import NavBar from "./components/NavBar";
import Banner from "./components/UpdatesSection";
import Events from "./components/Events";
import UpdatesSection from "./components/UpdatesSection";
import Birthday from "./components/Birthday";

import './index.css';

// import other components...

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <h1 className="text-4xl font-bold text-red-500">Hello Tailwind</h1> */}

      <Header />
      <Tabs />
      <NavBar />
      {/* <Banner /> */}
      <Events />
      <UpdatesSection />
      <Birthday />


      {/* Add other sections like <Updates />, <Birthdays />, <QuickLinks /> */}
    </div>
  );
}
