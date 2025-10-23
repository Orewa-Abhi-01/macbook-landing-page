import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";


gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return <div className="mx-auto container bg-black h-scree text-white">
    <Navbar />
    <Hero />
    <ProductViewer />
    <Showcase />
    <Performance />
    <div className="h-screen bg-blue-300"></div>
  </div>;
};

export default App;
