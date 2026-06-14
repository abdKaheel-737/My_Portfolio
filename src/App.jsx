import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import TryMe from "./Pages/TryMe";
import MyProjectSpace from "./Pages/MyProjectSpace";
import Contact from "./Pages/Contact";
import ScrollToTopBtn from "./Components/Scroll/ScrollToTopBtn";
import BorderOfSections from "./assets/svg/BorderOfSections";

function App() {
  return (
    <>
      <Home />
      <BorderOfSections />
      <AboutMe />
      <Education />
      <TryMe />
      <MyProjectSpace />
      <Contact />
      <ScrollToTopBtn />
    </>
  );
}

export default App;
