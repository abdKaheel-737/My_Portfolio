import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const homeSection = document.querySelector("#home");
    homeSection?.scrollIntoView({ behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 
                 w-12.5 h-12.5 rounded-xl text-[20px]
                 bg-secondaryColor text-white 
                 flex items-center justify-center
                 shadow-lg hover:scale-110 transition"
    >
      <IoArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;
