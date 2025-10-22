import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";


gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return <div className="mx-auto container bg-black h-scree text-white">
    <Navbar />
    <Hero />
    <ProductViewer />
  </div>;
};

export default App;
