import Maskgroup from '../../assets/svg/Mask group.svg'
type IndividualPay = {
  heading: string;
  content: string;
  buttonLabel: string;
};
const IndividualPayData: IndividualPay[] = [
  {
    heading: 'Pay-for-Access (Custom):',
    content: 'Enterprise-specific offering for individual users.',
    buttonLabel: 'Get Started',
  },
];
function IndividualPays() {
  return (
    <>
      <div
        className="pt-[90px] pl-[80px] text-black bg-[#FDFBF5] sm:pr-[30px] sm:pl-[30px] lg:pr-[60px] lg:pl-[80px]"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {IndividualPayData.map((item, id) => (
          <div className="flex justify-between items-center flex-col md:flex-row py-24 md:py-0" key={id}>
            <div>
              <h2 className="b text-[#1A000F] text-[30px] font-bold mb-[20px] text-left">
                {item.heading}
              </h2>
              {/* <p className="text-[#22001580] text-[16px] mb-6 w-[95%]">
                {item.content}
              </p> */}
               <div className="flex  gap-2">
                <div className="w-1 h-1 rounded-[50%] mt-2 bg-[#19000F]"></div>
                  <p className="text-[#22001580] text-[16px] w-[90%]">
                    {item.content}
                  </p>
              </div>
              <button className="mt-4 bg-custom-gradient text-white py-2 px-4 w-[70%]">
                {item.buttonLabel}
              </button>
            </div>
            <img
              className="md:w-[40%] mt-5 md:mt-0 border-t-[10px] border-r-[10px] border-b-[3px] border-l-[3px] border-l-gray-100 border-t-[#794C9F] border-r-[#794C9F]"
              src={Maskgroup}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default IndividualPays;
