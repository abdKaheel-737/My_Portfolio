import soonProject from "../../assets/projectImage/soonProject.png";

const NewCardSoon = () => {
  return (
    <div className=" max-w-87.5 h-80 relative">
      <img src={soonProject} className="w-full h-full rounded-lg " />
      <p
        className="absolute top-0 left-0 w-full h-full rounded-lg bg-[#00000099]
             flex flex-col  justify-center items-center font-manrope
             transform transition-transform duration-300 ease-in-out 
             text-white  font-semibold text-[25px] opacity-0  hover:opacity-100"
      >
        Coming very soon, <br />
        <span className="text-sky-300">currently in preparation</span>
      </p>
    </div>
  );
};

export default NewCardSoon;
