import PricingSettings from "../../assets/icons/pricing-setting.svg";
import PricingBook from "../../assets/icons/pricing-book.svg";

type SolutionDescription = {
  heading: string;
  content: string;
};

type OurSolutionAndPricingProps = {
  solutionHeading: string;
  solutionSubheading: string;
  descriptions: SolutionDescription[];
};

const OurSolutionAndPricing = ({
  solutionHeading,
  solutionSubheading,
  descriptions,
}: OurSolutionAndPricingProps) => {
  return (
    <section className="px-3 md:px-10 xl:px-[90px] 2xl:px-[118px]  mt-10">
      <h1 className="b text-center text-2xl leading-[50.6px] text-[30px] font-bold mb-4">{solutionHeading}</h1>
      <p className="text-[#22001580] flex justify-center items-center text-center text-[16px]  md:px-52 mb-6">{solutionSubheading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[60px]">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4  mb-10"
          >
            {desc.heading === "AI-Driven Hiring Insights" || desc.heading === "career Verification Report" ? 
            <img
              src={PricingBook}
              alt="Pricing Settings Icon"
              className="w-[40px] h-[40px] flex-shrink-0"
            />:
              <img
                src={PricingSettings}
                alt="Pricing Settings Icon"
                className="w-[40px] h-[40px] flex-shrink-0"
              />
          }
            <div>
              <h3 className="text-[#1A000F] font-light text-[20px] mb-2">{desc.heading}</h3>
              <div className="flex items-start gap-2 mt-6 text-[#22001580]">
                <div className="w-1 h-1 mt-2 rounded-full bg-[#22001580] flex-shrink-0"></div>
                <p className="text-[#22001580] text-[16px] w-[80%] leading-[25.64px]">{desc.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutionAndPricing;
