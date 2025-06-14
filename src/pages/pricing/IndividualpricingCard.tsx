const PricingCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 bg-[EDEDED] mt-[90px] place-items-center px-8 md:px-0">
        <div className="flex justify-center border-4 border-r-[#794C9F] md:w-[80%] lg:w-[57%] border-b-[#794C9F] border-l-[#794C9F] shadow-md flex-col">
          <div className="flex justify-center items-center py-[20px]">
            <div className="flex justify-center w-[20%]">
              <img
                className="w-[40%] object-contain"
                src="/assets/icons/Group 26.webp"
                alt=""
              />
            </div>
            <h2 className="text-[#1A000F] text-[20px]">Starter (Free)</h2>
          </div>
          <hr />
          <h2 className="brs text-center mt-[40px] text-[35px]">
            N0.00
          </h2>
          <div className="mt-[40px]">
            <div className="flex justify-center items-center mb-[12px] sm:pl-[20px] md:pl-[20px] lg:pl-0">
              <ul className="pl-[30px]">
                <li className="list-disc">5 AI-powered job applications</li>
                <li className="list-disc">Credibility Validation</li>
              </ul>
            </div>
          </div>
          <a href="/" rel="noopener noreferrer">
            <button
              className="px-[40px] w-full py-[30px] text-white bg-[#794C9F] hover:bg-[#9D5C93]"
              type="button"
            >
              Start Free | Upgrade Anytime                
            </button>
          </a>
        </div>
        <div className="flex justify-center border-4 border-r-[#794C9F] border-b-[#794C9F] border-l-[#794C9F] shadow-md flex-col mt-20 md:mt-[160px] md:w-[80%] lg:w-[57%]">
          <div className="flex justify-center items-center py-[20px]">
            <div className="flex justify-center w-[20%]">
              <img
                className="w-[40%] object-contain"
                src="/assets/icons/Group 26.webp"
                alt=""
              />
            </div>
            <h2 className="text-[#1A000F] text-[20px] text-center">
              Pro Tier
            </h2>
          </div>
          <hr />
          <h2 className="brs text-center mt-[40px] text-[35px]">N10,000<span className="text-[15px]"> / Monthly</span></h2>
          <div className="mt-[40px]">
            <div className="flex justify-center items-center mb-[12px]">
              <div className="flex justify-center items-center mb-[12px]">
                <ul>
                  <li className="list-disc">Includes Starter offer</li>
                  <li className="list-disc">150 AI-powered job applications</li>
                  <li className="list-disc">Priority AI</li>
                  <li className="list-disc">Insights</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="/" rel="noopener noreferrer">
            <button
              className="px-[40px] w-full py-[30px] text-black bg-gray-300 hover:bg-gray-400"
              type="button"
            >
              Activate Now
            </button>
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 bg-[EDEDED] mt-[90px] place-items-center px-8 md:px-0">
        <div className="flex justify-center border-4 border-r-[#794C9F] md:w-[80%] lg:w-[57%] border-b-[#794C9F] border-l-[#794C9F] shadow-md flex-col">
          <div className="flex justify-center items-center py-[20px]">
            <div className="flex justify-center w-[20%]">
              <img
                className="w-[40%] object-contain"
                src="/assets/icons/Group 26.webp"
                alt=""
              />
            </div>
            <h2 className="text-[#1A000F] text-[20px]">Guaranteed Tier</h2>
          </div>
          <hr />
          <h2 className="brs text-center mt-[40px] text-[35px]">N100,000<span className="text-[15px] font-light">/Month</span></h2>
          <div className="mt-[40px]">
            <div className="flex justify-center items-center mb-[12px]">
              <div className="flex justify-center items-center mb-[12px]">
                <ul>
                  <li className="list-disc">Includes Pro offer</li>
                  <li className="list-disc">Unlimited AI-powered job applications</li>
                  <li className="list-disc">Dedicated Hiring Support</li>
                  <li className="list-disc">Placement Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="/" rel="noopener noreferrer">
            <button
              className="px-[40px] w-full py-[30px] text-black bg-gray-300 hover:bg-gray-400"
              type="button"
            >
              Activate Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default PricingCard;
