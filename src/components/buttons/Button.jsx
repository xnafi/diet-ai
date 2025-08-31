import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-3 text-[16px] cursor-pointer font-medium rounded-md shadow-[0_20px_40px_rgba(205,248,1,25)]/50 secondaryColorBg flex justify-center items-center
       `}
    >
      {text} <FaArrowRight className="ml-2" />
    </button>
  );
};

export default Button;
