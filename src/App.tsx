import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return <div className="mx-auto container bg-black h-scree text-white">
    <Navbar />
    <Hero />
  </div>;
};

export default App;
