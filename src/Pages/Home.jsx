import { SocialMediaHomePage } from "../assets/Script/data";
import Button from "../Components/Buttons/Button";
import SocialMediaContainerLinks from "../Components/Containers/SocialMediaContainerLinks";

const Home = () => {
  return (
    <section
      id="home"
      className=" scroll-mt-50  mt-28 w-full lg:h-full  flex flex-col  lg:flex-row   justify-between  items-center "
    >
      <div
        className=" max-w-125 w-full  h-150 rounded-[50%] absolute 
                  top-10  lg:top-30 lg:left-0 z-[-1] 
                  bg-[radial-gradient(circle,#c8edff_0%,rgba(188,216,250,0)_65%)] blur-2xl opacity-80  "
      ></div>
      <div className="max-w-130  h-82 mt-8  text-center mb-6 lg:text-start lg:mb-0         ">
        <p
          className="font-Inter font-medium text-secondaryColor
        text-[18px] 
         lg:text-[20px] leading-[145%]"
        >
          Welcome
        </p>
        <h1 className="  font-bold text-[40px] lg:text-[55px] leading-[110%] pt-2 ">
          <span className=" font-normal font-inter ">HEY! </span>
          I’m Abd, Frontend Developer
        </h1>
        <p
          className="max-w-129.5 font-inter font-normal text-[14px] lg:text-[16px] leading-[150%]
         pt-5 pb-4 xl:pt-10  xl:pb-7.5 "
        >
          I’m Abd, a creative Product Designer. I’ve been helping businesses to
          solve their problems with my design for 2 years.
        </p>
        <div className="ml-[35%] lg:ml-0">
          <Button btnWidth="w-38.75">Download Cv</Button>
        </div>
      </div>
      <div
        className="  lg:max-w-156.75   max-h-116  w-screen lg:w-full  flex   justify-center 

        items-center gap-2.5 relative  overflow-hidden "
      >
        <img
          src="/my-photo.png"
          className=" w-3/4    lg:w-full  h-116 object-contain "
        />

        <div
          className="absolute  top-10 right-7 md:top-7 md:right-16 lg:top-0  lg:right-0  mt-26  max-w-[4%] 
          flex flex-col justify-between items-center gap-8   md:gap-10  lg:gap-14    "
        >
          <h3 className=" text-[12px]  lg:text-[16px]    font-inter font-normal leading-[150%] w-26   rotate-90">
            Follow me on:
          </h3>
          <div className=" w-16 h-[0.5px] bg-secondaryColor mt-8 rotate-90 "></div>
          <div className="flex flex-col  gap-4 md:gap-8 mt-4 lg:mt-0">
            {SocialMediaHomePage?.map((media, index) => {
              return (
                <SocialMediaContainerLinks
                  key={index}
                  url={media?.url}
                  borderRounded="rounded-[5px]"
                >
                  {media?.icone}
                </SocialMediaContainerLinks>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
