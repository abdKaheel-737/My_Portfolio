import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import { Outlet } from "react-router-dom";
import ScrollToHash from "./Components/Scroll/ScrollToHash";

function MainPage() {
  return (
    <div
      className=" flex flex-col items-center md:px-17.5 py-0 gap-20 overflow-hidden
     "
    >
      <NavBar />
      <Outlet />
      <ScrollToHash />
      <Footer />
    </div>
  );
}

export default MainPage;
