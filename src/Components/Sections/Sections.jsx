import Dark from "../../assets/svg/dark";
import Light from "../../assets/svg/Light";
import { useTheme } from "../Context/ThemeContext";

function Sections({ paragraphArray }) {
  const { darkMode } = useTheme();
  return (
    <div className="flex justify-between gap-8  ">
      {darkMode ? <Light /> : <Dark />}
      <div className="flex flex-col justify-between items-center gap-10">
        {paragraphArray?.map((text, index) => {
          return (
            <div key={index} className="font-poppins ">
              <h3
                className={` font-medium text-[25px] pb-3.5 leading-[100%] tracking-[-1.5%]
                   ${darkMode ? "text-white" : "text-[#344054]"}`}
              >
                {text?.title}
              </h3>
              <p className="max-w-111 font-normal text-[16px] text-[#98A2B3]  tracking-[-1.5%]">
                {text?.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sections;
