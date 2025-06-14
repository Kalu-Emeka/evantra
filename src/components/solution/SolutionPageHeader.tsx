import { useNavigate } from "react-router-dom";
import videoImg from '../../assets/svg/Group 32.svg';

type SolutionPageHeaderProps = {
  heading: string;
  subHeading: string;
  content: string;
  buttonLabel: string;
  ctaText: string;
};

const SolutionPageHeader = ({
  heading,
  subHeading,
  content,
  buttonLabel,
  ctaText,
}: SolutionPageHeaderProps) => {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
      navigate('/activate-profile')    
  }
  return (
    <div className="px-8 md:px-10 lg:pl-20 lg:pr-70 xl:px-[90px] 2xl:px-[118px] grid lg:grid-cols-2 gap-4 place-items-center md:gap-8 xl:gap-10 mt-10">
      <div className="bg-glassBg rounded-lg">
        <h1 className="h mb-[30px] text-[50px] text-[#1A000F] sm:text-[17px] md:text-[40px] leading-[50px] w-[79%]">
          {heading}
        </h1>
        <h2 className="text-3xl text-[#1A000F] xl:pr-4 mt-2 w-[90%]">
          {subHeading}
        </h2>
        <p className="mt-4 text-[#22001580] lg:w-[480px] xl:w-[550px]">
          {content}
        </p>
        <button onClick={handleNavigate} className="mt-4 bg-custom-gradient text-white py-2 px-4">
          {buttonLabel}
        </button>
        <p className="mt-2  text-[#1A000F] cursor-pointer">{ctaText}</p>
      </div>
      <div className="">
        <img src={videoImg} className="w-[86%]" alt="" />
      </div>
    </div>
  );
};

export default SolutionPageHeader;
