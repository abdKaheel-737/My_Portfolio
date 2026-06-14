const SliderBottons = ({ children, formats, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[35.35px] h-8.75 flex justify-center items-center
         text-[18px] rounded-[50%] cursor-pointer hover:scale-110 ${formats} `}
    >
      {children}
    </button>
  );
};

export default SliderBottons;
