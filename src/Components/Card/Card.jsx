import { Link } from "react-router-dom";
import ArrowSvg from "../../assets/svg/ArrowSvg";

const Card = ({ projects }) => {
  return (
    <>
      {projects?.map((project) => {
        return (
          <div
            key={project.id}
            className=" min-w-87.5 max-w-87.5 h-80 snap-start"
          >
            <div className="relative">
              <img
                src={project.image}
                className="w-full h-55 rounded-lg mb-5"
              />
              <Link
                to={`/project/${project.id}`}
                className="absolute top-0 left-0 w-full h-55 rounded-lg bg-[#00000099]
                    flex  justify-center items-center font-manrope
                    transform transition-transform duration-300 ease-in-out 
                     text-white  font-semibold text-[18px] opacity-0  hover:opacity-100"
              >
                View
              </Link>
            </div>
            <div className="flex justify-between items-end ">
              <div className="font-poppins">
                <h2 className=" font-semibold text-[22px] leading-[150%]">
                  {project.title}
                </h2>
                <p className="text-[16px] font-normal leading-[150%] mt-2.75">
                  {project.tecno}
                </p>
              </div>
              <Link to={`/project/${project.id}`} className="cursor-pointer">
                <ArrowSvg />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
