
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import CarouselImg from "./components/carousel/Carousel.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import InfoCard from "./components/InfoCard.jsx";
const App = () => {
  return (
    <div>
      <ProgressBar  />
      <Navbar />
      <Hero />
      <CarouselImg/>
      <InfoCard/>
      <About />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
