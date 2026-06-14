import React from "react";

const SocialMediaContainerLinks = ({ url, children, borderRounded }) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`w-6 h-6 bg-secondaryColor text-white cursor-pointer
     flex justify-center items-center text-[12px] ${borderRounded}`}
    >
      {children}
    </a>
  );
};

export default SocialMediaContainerLinks;
