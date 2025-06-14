import istockphoto from '../../assets/svg/istockphoto.svg'
type IndividualPay = {
  heading: string;
  content1: string;
  content2: string;
  buttonLabel: string;
};
const IndividualPayData: IndividualPay[] = [
  {
    heading: 'Contact Sales:',
    content1:
      'sales@veritalent.com',
    content2: '08107149957 (WhatsApp)',
    buttonLabel: 'Get Started',
  },
];
function EnterprisePlanning() {
  return (
    <>
      <div
        className=" pl-[80px] text-black  sm:pr-[30px] sm:pl-[30px] lg:pr-[60px] lg:pl-[80px]"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {IndividualPayData.map((item, id) => (
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-center"
            key={id}
          >
            <div className="w-[40%] sm:w-[80%] md:w-[80%] lg:w-[40%]">
              <h2 className="b text-[#1A000F] text-[30px] font-bold mb-[20px] text-left">
                {item.heading}
              </h2>
              <div className="flex gap-2">
                <div className="w-1 h-1 mt-2 rounded-[50%] bg-[#19000F]"></div>
                <p className="text-[#22001580] text-[16px] w-[80%]">
                  {item.content2}
                </p>
              </div>
              <div className="flex  gap-2">
                <div className="w-1 h-1 rounded-[50%] mt-2 bg-[#19000F]"></div>
                <p className="text-[#22001580] text-[16px] w-[80%]">
                  {item.content1}
                </p>
              </div>
              <button className="mt-4 bg-custom-gradient text-white py-2 px-4 w-[40%] sm:w-[70%] md:w-[70%] lg:w-[40%]">
                {item.buttonLabel}
              </button>
            </div>
            <img
              className="md:w-[40%] border-t-[10px] border-r-[10px] border-b-[3px] border-l-[3px] border-l-gray-100 border-t-[#794C9F] border-r-[#794C9F]"
              src={istockphoto}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default EnterprisePlanning;
