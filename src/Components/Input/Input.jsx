const Input = ({ name, type, placeholder, specialFormats }) => {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={`resize-none w-full pt-4 px-[26.51px] text-[#BEC0BF]
        placeholder:text-[#92929D] focus:outline-none focus:ring-0
        font-inter font-normal text-[16px] leading-[150%] tracking-[0.8px]
        rounded-lg border-[0.3px] border-[#92929D] h-42.5 ${specialFormats}`}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className={` w-full py-4 pl-[26.51px] text-[#BEC0BF]
                    placeholder:text-[#92929D] focus:outline-none focus:ring-0
                    font-inter font-normal text-[16px] leading-[150%] tracking-[0.8px]
                    rounded-lg border-[0.3px] border-[#92929D] ${specialFormats}`}
        />
      )}
    </>
  );
};

export default Input;
