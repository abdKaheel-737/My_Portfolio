import { BsChatSquareFill } from "react-icons/bs";
import Ellipse from "/images/Ellipse.png";
import { aboutMeLogoImages, aboutMeRange } from "../assets/Script/info";
import { useTheme } from "../Components/Context/ThemeContext";

const AboutMe = () => {
  const { darkMode } = useTheme();
  const aboutMeEllipse = [
    {
      position: "left-5.5 bottom-5",
    },
    {
      position: "left-11.25 bottom-11",
    },
  ];

  return (
    <section
      id="aboutme"
      className="flex flex-col lg:flex-row justify-between items-center
       w-full text-center lg:text-start overflow-hidden"
    >
      <div className="max-w-75 w-full h-132.5  ">
        <div
          className=" relative top-1/5  -left-2    lg:left-1/6 max-w-75 w-full h-132.5 bg-no-repeat  bg-contain"
          style={{ backgroundImage: `url(${Ellipse})` }}
        >
          {aboutMeEllipse?.map((element, index) => {
            return (
              <div
                key={index}
                className={`absolute ${element.position} max-w-75 w-full h-132.5 bg-no-repeat  bg-contain`}
                style={{ backgroundImage: `url(${Ellipse})` }}
              ></div>
            );
          })}
          {aboutMeLogoImages?.map((image, index) => {
            return (
              <img
                key={index}
                className={`absolute  ${image.position} 
                   h-20.5  ${index > 1 ? "w-20.5" : "w-16.25"}`}
                src={`/images/logoImages/${darkMode ? "Dark/" : "Light/"}${image.imageName}`}
              />
            );
          })}
        </div>
      </div>
      <div className="max-w-150  lg:max-w-125 xl:max-w-150   w-full">
        <div className="font-poppins tracking-[3%] ">
          <h1 className=" font-semibold text-[40px] mb-3">About Me</h1>
          <p className="font-normal text-[18px] leading-7 mb-10 ">
            I’m a motivated Front-End Developer with hands-on experience in
            HTML5, CSS3, JavaScript, and React. I focus on writing clean code
            and building responsive web applications with modern UI design.
            Currently expanding my knowledge and working on improving
            performance and user experience.
          </p>
        </div>
        <div>
          {aboutMeRange?.map((element, index) => {
            return (
              <div key={index} className="pb-2">
                <label
                  htmlFor={element?.inputName}
                  className="text-start   block font-poppins font-semibold text-[24px] tracking-[3%] mb-1"
                >
                  {element?.labelContent}
                </label>
                <div className="w-full relative">
                  <input
                    type="range"
                    name={element?.inputName}
                    id={element?.inputName}
                    min="0"
                    max="100"
                    value={element?.inputValue}
                    className={`${element?.inputBackground}`}
                    readOnly
                  />
                  <div
                    className={`absolute -top-7 ${element?.positionContainer} flex justify-center items-center -translate-x-1/2`}
                  >
                    <BsChatSquareFill className="text-secondaryColor w-13.75 h-7.25" />
                    <span
                      className="absolute top-2/5 left-1/2 text-[10px] 
                                font-inter font-normal
                                -translate-x-1/2 -translate-y-1/2 text-white"
                    >
                      {element?.spanContent}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
