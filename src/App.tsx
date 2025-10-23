import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Showcase from "./components/Showcase";


gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return <div className="mx-auto container bg-black h-scree text-white">
    <Navbar />
    <Hero />
    <ProductViewer />
    <Showcase />
    <div className="h-screen bg-blue-400 overflow-hidden"></div>
  </div>;
};

export default App;
