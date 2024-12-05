
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";

import ProgressBar from "./components/ProgressBar.jsx";
import { Provider } from "./components/ui/provider"
import InfoCard from "./components/InfoCard.jsx";
const App = () => {
  return (
    <div>
      <Provider>
      <ProgressBar  />
      <Navbar />
      <Hero />
      <InfoCard/>
      <About />
      <Services />
      <Footer />
      </Provider>
    </div>
  );
};

export default App;
