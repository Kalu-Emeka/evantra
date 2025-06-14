const OrgPricingCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 bg-[#EDEDED] mt-[90px] place-items-center px-8 md-px-0">
        <div className="card-flower relative bg-white flex justify-center items-center border-4 border-r-[#794C9F] w-full md:w-[80%] lg:w-[57%] border-b-[#794C9F] border-l-[#794C9F] shadow-md flex-col">
          <div className="flex justify-center items-center py-6">
            <h2 className="text-[#1A000F] font-bold leading-5 Lg:leading-3 text-[20px]">
              Pay-Per-Hire
            </h2>
          </div>
          <div className="w-full h-[0.03rem] bg-gray-200"></div>
          <div className="mt-[30px] flex justify-center  flex-col items-center">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 "></div>
              <h2 className="text-sm text-center">
                Occasional hiring or budget-conscious teams
              </h2>
            </div>
          </div>

          <div className="mt-[40px] text-sm grid place-content-center w-full">
            <h2 className="brs text-center font-bold leading-8 my-[40px] text-[35px]">
              N0.00<span className="text-[15px]">/ contact sales</span>
            </h2>
            <div className="flex items-center gap-2 mb-[12px]">
              <ul>
                  <li className="list-disc">AI-matched candidates for roles (Capped)</li>
                  <li className="list-disc">Credibility Check</li>
                  <li className="list-disc">90-day replacement guarantee</li>
                </ul>
            </div>
          </div>
          <div className="w-full cursor-pointer grid place-content-center py-[30px] text-white bg-[#794C9F] text-sm font-light hover:bg-[#9D5C93]">
            <a href="/" rel="noopener noreferrer">
              <button type="button">Contact Sales</button>
            </a>
          </div>
        </div>
        <div className="card-flower-top relative bg-white flex text-sm justify-center border-4 border-r-[#794C9F] border-b-[#794C9F] border-l-[#794C9F] shadow-md flex-col mt-20 md:mt-[160px]  md:w-[80%] lg:w-[57%] ">
          <div className=" flex justify-center items-center md:pl-4 lg:pl-0 py-6">
            <h2 className="text-[#1A000F] px-2 xl:px-0 font-bold leading-5 Lg:leading-3 text-[20px]">
              Subscription Plans
            </h2>
          </div>
          <div className="w-full h-[0.03rem] bg-gray-200"></div>
          <div className="mt-[30px] flex justify-center  flex-col items-center">
            <h2 className="text-sm text-center">Growing teams with regular and substantial monthly/annual hiring need.</h2>
          </div>
          <div className="mt-[40px] text-sm grid place-content-center w-full">
            <h2 className="brs text-center font-bold leading-8 mt-[40px] mb-[10px] text-[35px]">
              N0.00<span className="text-[15px]"> / contact sales</span>
            </h2>
            <div className="flex items-center gap-2 mb-[12px] pl-[30px]">
              <ul>
                  <li className="list-disc">Discounted Pay-Per-Hire fees</li>
                  <li className="list-disc">AI-matched candidates for roles (Unlimited)</li>
                  <li className="list-disc">Credibility Check</li>
                  <li className="list-disc">90-day replacement guarantee</li>
                </ul>
            </div>
          </div>
          <div className="w-full cursor-pointer grid place-content-center py-[30px] text-black bg-gray-300 hover:bg-gray-400 text-sm font-light">
            <a href="/" rel="noopener noreferrer">
              <button type="button">Contact Sales</button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 bg-[#EDEDED] mt-[90px] place-items-center px-8 md-px-0">
        <div className="card-flower relative bg-white flex justify-center border-4 border-r-[#794C9F] md:w-[80%] lg:w-[57%] border-b-[#794C9F] border-l-[#794C9F] shadow-md flex-col">
          <div className="flex justify-center items-center py-6">
            <h2 className="text-[#1A000F] font-bold leading-5 lg:leading-3 text-[20px]">
              Blockchain Credentials
            </h2>
          </div>
          <div className="w-full h-[0.03rem] bg-gray-200"></div>

          <div className="mt-[30px] flex justify-center  flex-col items-center">
          <div className="mt-[30px] flex justify-center  flex-col items-center">
            <h2 className="text-sm text-center">Create and Issue tamper-proof references & credentials</h2>
          </div>
            <div className="mt-[40px] text-sm grid place-content-center w-full">
            <h2 className="brs text-center font-bold leading-8 my-[40px] text-[35px]">
              N0.00  <p className="text-[15px]">(Templated Issuance / free & unlimited)</p>
            </h2>
            <h2 className="brs text-center font-bold leading-8 my-[10px] text-[35px]">
              N25,000<p className="text-[15px]">(Custom Issuance / 50 units bundle)</p>
            </h2>
          </div>
          </div>
          <div className="w-full cursor-pointer grid place-content-center py-[30px] text-black bg-gray-300 hover:bg-gray-400 text-sm font-light">
            <a href="/" rel="noopener noreferrer">
              <button type="button">Activate Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrgPricingCard;
