import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-3 text-md font-medium rounded-md drop-shadow-[0_5px_60px_rgba(205,248,1,25)] transition-all secondaryColorBg flex justify-center items-center
       `}
    >
      {text} <FaArrowRight className="ml-2" />
    </button>
  );
};

export default Button;
