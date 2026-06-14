import Button from "../Components/Buttons/Button";
import Card from "../Components/Card/Card";
import NewCardSoon from "../Components/Card/NewCardSoon";
import TitleContainer from "../Components/Containers/TitleContainer";
import { GoArrowUpRight } from "react-icons/go";
import { projectsToDisplay } from "../assets/Script/data";
const MyProjectSpace = () => {
  return (
    <section id="projects" className="w-full h-fit mt-5">
      <div
        className="flex flex-col lg:flex-row  justify-between items-center 
       lg:items-end gap-8 lg:gap-0 text-center lg:text-start  "
      >
        <TitleContainer
          title="Portfolio"
          subTitle="My Creative Works Latest"
          nestedSpan="Projects"
          subTitleWidth="max-w-90.5"
        />

        <Button
          btnWidth="w-40.75"
          onClickFun={() =>
            window.open("https://github.com/abdKaheel-737", "_blank")
          }
        >
          View Github <GoArrowUpRight className="text-[20px]" />
        </Button>
      </div>
      <div
        className="w-full h-fit flex flex-wrap flex-col min-[900px]:flex-row 
        items-center 
        justify-between gap-14.5 mt-14"
      >
        <Card projects={projectsToDisplay} />
        <NewCardSoon />
        <NewCardSoon />
      </div>
    </section>
  );
};

export default MyProjectSpace;
