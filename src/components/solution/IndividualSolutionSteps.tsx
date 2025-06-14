import PricingSettings from "../../assets/icons/pricing-setting.svg";
import PricingBook from "../../assets/icons/pricing-book.svg";

type IndividualDescription = {
  heading: string;
  content: string;
};

type OurIndividualAndPricingProps = {
  solutionHeading: string;
  solutionSubheading: string;
  descriptions: IndividualDescription[];
};

const IndividualSolutionSteps = ({
  solutionHeading,
  solutionSubheading,
  descriptions,
}: OurIndividualAndPricingProps) => {
  return (
    <section className="mt-10">
      <h2 className="b text-[#1A000F] text-[30px] font-bold mb-[20px] text-center">{solutionHeading}</h2>
      <p className="text-[#22001580] text-center text-[17px] w-[95%] md:px-40 mb-6">{solutionSubheading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[40px]">
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4  mb-10"
          >
            {desc.heading === "AI-Driven Hiring Insights" || desc.heading === "Repository Management:" ? 
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
              <div className="flex items-start gap-2 mt-[10px] text-[#22001580]">
                <div className="w-1 h-1 mt-[10px] rounded-full bg-[#22001580] flex-shrink-0"></div>
                <p className="text-[#22001580] text-[16px] w-[80%] leading-[25.64px]">{desc.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndividualSolutionSteps;
