const TitleContainer = ({ title, subTitle, nestedSpan, subTitleWidth }) => {
  return (
    <div className="font-poppins  ">
      <h3 className=" font-medium text-[20px] leading-[150%] text-secondaryColor pb-2">
        {title}
      </h3>
      <h2
        className={`font-semibold leading-13.5 text-[40px] tracking-[-3%] ${subTitleWidth} `}
      >
        {subTitle}{" "}
        <span className="text-secondaryColor tracking-[0%]">{nestedSpan}</span>
      </h2>
    </div>
  );
};

export default TitleContainer;
