import { SocialMediaFooter } from "../assets/Script/data";
import SocialMediaContainerLinks from "../Components/Containers/SocialMediaContainerLinks";

const Footer = () => {
  return (
    <footer
      className="w-full py-5 md:py-10  flex flex-col md:flex-row   
      justify-between items-center  gap-8 md:gap-0
      border-t  border-[#BEC0BF] font-inter font-normal text-[16px] leading-4"
    >
      <p>@ 2026. All Rights Reserved</p>
      <p>Develpoment by Abd</p>
      <div className="flex justify-between gap-[16.14px] ">
        {SocialMediaFooter?.map((media, index) => {
          return (
            <SocialMediaContainerLinks
              key={index}
              url={media?.url}
              borderRounded="rounded-full"
            >
              {media?.icone}
            </SocialMediaContainerLinks>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
