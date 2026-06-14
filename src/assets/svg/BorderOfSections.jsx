import { useTheme } from "../../Components/Context/ThemeContext";

const BorderOfSections = () => {
  const { darkMode } = useTheme();
  return (
    <>
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1366"
          height="22"
          viewBox="0 0 1366 22"
          fill="none"
        >
          <rect
            x="-221.75"
            y="11.3906"
            width="0.5"
            height="1810.45"
            transform="rotate(-90 -221.75 11.3906)"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="5 10"
          />
          <circle cx="685.969" cy="11" r="10.5" fill="#EFF2F7" stroke="white" />
          <circle cx="685.969" cy="10.9998" r="7.44897" stroke="white" />
          <circle cx="685.969" cy="10.9998" r="7.44897" stroke="white" />
          <circle cx="685.969" cy="11" r="1.5" fill="#1D2130" stroke="white" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1366"
          height="22"
          viewBox="0 0 1366 22"
          fill="none"
        >
          <rect
            x="-221.75"
            y="11.3906"
            width="0.5"
            height="1810.45"
            transform="rotate(-90 -221.75 11.3906)"
            stroke="#1D2130"
            strokeWidth="0.5"
            strokeDasharray="5 10"
          />
          <circle
            cx="685.969"
            cy="11"
            r="10.5"
            fill="#EFF2F7"
            stroke="#1D2130"
          />
          <circle cx="685.969" cy="10.9998" r="7.44897" stroke="#1D2130" />
          <circle cx="685.969" cy="10.9998" r="7.44897" stroke="#1D2130" />
          <circle cx="685.969" cy="11" r="2" fill="#1D2130" />
        </svg>
      )}
    </>
  );
};

export default BorderOfSections;
