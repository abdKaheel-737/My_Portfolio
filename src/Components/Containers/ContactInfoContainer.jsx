const ContactInfoContainer = ({
  svgIcone,
  explanationLetter,
  communicationMethod,
}) => {
  return (
    <div className="flex py-5 gap-5 items-center justify-evenly w-full   ">
      <div
        className="w-[61.85px] h-14 flex justify-center items-center
      rounded-lg bg-secondaryColor text-white text-[25px]"
      >
        {svgIcone}
      </div>
      <div className="font-inter text-[16px] w-52">
        <p className=" font-normal  leading-3.5 tracking-[0.8%] text-[#92929D] mb-4">
          {explanationLetter}
        </p>
        <p className="font-medium  leading-4.5 tracking-[0.5%]">
          {communicationMethod}
        </p>
      </div>
    </div>
  );
};

export default ContactInfoContainer;
