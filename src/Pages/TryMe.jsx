import Button from "../Components/Buttons/Button";
import { NavLink } from "react-router-dom";
import { IoArrowForwardSharp } from "react-icons/io5";
import { svgLine } from "../assets/Script/info";

const TryMe = () => {
  return (
    <section className=" relative flex min-h-87  w-full   xl:w-8/10   mt-20  ">
      <div className="w-full h-full bg-secondaryColor rounded-4xl absolute top-0 left-0 -rotate-[1.34deg] "></div>
      <div
        className="w-full h-full rounded-4xl bg-[#583FBC]
       absolute top-0 left-2.25 flex justify-between items-center overflow-hidden "
      >
        <div className="  w-full h- h-full absolute top-0 left-0  opacity-40   ">
          {svgLine?.map((line, index) => {
            return (
              <svg
                key={index}
                className={`absolute ${line.position}`}
                xmlns="http://www.w3.org/2000/svg"
                width="1169"
                height={line.height}
                viewBox={line.viewBox}
                fill="none"
              >
                <path d={line.dir} stroke="#BECED8" />
              </svg>
            );
          })}
        </div>
        <div
          className="w-full h-full  flex flex-col lg:flex-row
         justify-center items-center  gap-20    lg:gap-41.25  z-10  "
        >
          <div className="font-poppins text-white max-w-137.5 text-center lg:text-start">
            <h2 className=" font-semibold text-[40px] lg:text-[48px] leading-[57.6px]  ">
              Try me out, risk free!
            </h2>
            <p className="font-normal text-[18px] lg:text-[20px] leading-7.5 pt-2.25 ">
              If you’re not happy with the design after the first draft, I’ll
              refund your deposit,{" "}
              <span className="font-bold ">no questions asked</span>
            </p>
          </div>
          <a
            className="w-38.75 h-12.5 rounded-lg 
           flex justify-center items-center gap-[12.5px] font-manrope cursor-pointer
            bg-secondaryColor text-white  font-semibold text-[14px] leading-6 hover:bg-[#0b7ab6] "
            href="#contact"
          >
            Contact <IoArrowForwardSharp className="text-[18px] mt-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TryMe;
