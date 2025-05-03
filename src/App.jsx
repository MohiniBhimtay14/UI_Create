import Header from "./components/Header";
import Tabs from "./components/Tabs";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Events from "./components/Events";
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
      {/* Add other sections like <Updates />, <Birthdays />, <QuickLinks /> */}
    </div>
  );
}
