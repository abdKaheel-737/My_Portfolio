const Button = ({ children, btnWidth, onClickFun, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClickFun}
      className={`${btnWidth} h-12.5 rounded-lg flex justify-center 
      items-center bg-secondaryColor text-white cursor-pointer
       font-medium text-[14px] leading-[150%] font-Inter hover:bg-[#0b7ab6]`}
    >
      {children}
    </button>
  );
};

export default Button;
