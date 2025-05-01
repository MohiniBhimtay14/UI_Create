import Header from "./components/Header";
import Tabs from "./components/Tabs";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Events from "./components/Events";
// import other components...

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Tabs />
      <NavBar />
      <Banner />
      <Events />
      {/* Add other sections like <Updates />, <Birthdays />, <QuickLinks /> */}
    </div>
  );
}
