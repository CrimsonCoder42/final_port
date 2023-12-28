import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SpaceEffect from "./components/SpaceEffect";
import Works from "./components/Works";
import Tech from "./components/Tech";
import StarsCanvas from "./components/StarsCanvas";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SpaceEffect />
      <StarsCanvas /> {/* Positioned over SpaceEffect but under other content */}
      <div className='relative z-[20] w-full'>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
