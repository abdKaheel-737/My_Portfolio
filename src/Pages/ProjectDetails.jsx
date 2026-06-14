import { useParams } from "react-router-dom";
import { projects } from "../assets/Script/data";
import Button from "../Components/Buttons/Button";
import ArrowSvg from "../assets/svg/ArrowSvg";
import { IoArrowBack, IoChevronBack, IoChevronForward } from "react-icons/io5";
import TitleContainer from "../Components/Containers/TitleContainer";
import SliderBottons from "../Components/Buttons/SliderBottons";
import { useRef } from "react";
import Card from "../Components/Card/Card";
import NewCardSoon from "../Components/Card/NewCardSoon";
import BorderOfSections from "../assets/svg/BorderOfSections";

const ProjectDetails = () => {
  const { id } = useParams();
  const otherProjects = projects.filter((p) => p.id !== Number(id));
  const sliderRef = useRef();
  const scrollAmount = 350 + 32;
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const project = projects.find((p) => p.id === Number(id));

  return (
    <section className="w-full  mt-42.5  ">
      <div
        className="w-full  flex  flex-col lg:flex-row items-center lg:items-start
         justify-between gap-10.75"
      >
        <img src={project.image} className="h-100 w-153.25 rounded-lg" />
        <div
          className="w-6/7 lg:w-full  flex flex-col justify-between 
         font-poppins tracking-[3%] leading-7 lg:h-100 "
        >
          <div className="font-poppins">
            <div className="flex justify-between">
              <h2 className="font-semibold text-[28px] leading-[150%] tracking-[0%]">
                {project.title}
              </h2>
              <a target="_blank" href={project.githubUrl}>
                <ArrowSvg />
              </a>
            </div>
            <p className="font-medium text-[14px]  text-[#A6A6A6]">
              {project.date}
            </p>
          </div>
          <p className="font-normal text-[18px] mt-3">{project.desc}</p>
          <div className="font-medium text-[18px]">
            <p className="my-3.75">
              Basic Languages : {""}
              <span className="font-normal ">{project.tecno}</span>
            </p>
            {project.libraries && (
              <p className=" my-3.75 ">
                Libraries : {""}
                <span className="font-normal ">{project.libraries}</span>
              </p>
            )}
          </div>
          <Button
            btnWidth="w-40.75"
            onClickFun={() => window.open(project.githubUrl, "_blank")}
          >
            Github Repo
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <BorderOfSections />
      </div>
      <div
        className="flex flex-col lg:flex-row  justify-between items-center 
       lg:items-end gap-8 lg:gap-0 text-center lg:text-start mt-18   "
      >
        <TitleContainer
          title="Portfolio"
          subTitle="The Best"
          nestedSpan="Projects"
        />
        <div className="flex gap-2 ">
          <SliderBottons
            onClick={scrollLeft}
            formats="border border-[#A6A6A6] text-[#A6A6A6] "
          >
            <IoChevronBack />
          </SliderBottons>
          <SliderBottons
            onClick={scrollRight}
            formats="bg-secondaryColor text-white"
          >
            <IoChevronForward />
          </SliderBottons>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex  flex-nowrap gap-8 mt-10
         overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        <Card projects={otherProjects} />
      </div>
    </section>
  );
};

export default ProjectDetails;
