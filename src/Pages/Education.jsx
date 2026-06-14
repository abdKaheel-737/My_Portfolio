import {
  leftSectionParagraph,
  rightSectionParagraph,
} from "../assets/Script/info";

import { useTheme } from "../Components/Context/ThemeContext";
import Sections from "../Components/Sections/Sections";

const Education = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="education"
      className="w-full flex flex-col  justify-between items-center gap-22 relative "
    >
      <img
        src="/images/Images bg.png"
        className="absolute hidden md:block -top-8 -right-15"
      />
      <div className="font-poppins verflow-hidden ">
        <p className="font-medium text-[20px] leading-[150%] text-secondaryColor text-center pb-2">
          Education and Experience
        </p>
        <h3
          className={`text-center font-semibold text-[40px] leading-[120%] ${darkMode ? "text-white" : "text-[##282938]"}`}
        >
          Education & Experience
        </h3>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 ">
        <Sections paragraphArray={leftSectionParagraph} />
        <Sections paragraphArray={rightSectionParagraph} />
      </div>
      <img
        src="/images/Images bg.png"
        className="absolute -bottom-50 -left-15 rotate-[-195deg]"
      />
    </section>
  );
};

export default Education;
