import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SpaceEffect from "./components/SpaceEffect";
import Works from "./components/Works";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <SpaceEffect />
        </div>
        <div className='bg-about-pattern bg-cover bg-no-repeat bg-center'>
          <About />
          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
