import Group31 from "../../assets/images/Group 31.webp"
import Close from "../../assets/icons/close-icon.webp"
const CareerReport = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
        <div className="absolute right-[50%] lg:right-[15px] xl:right-[150px] -top-14 lg:top-0 w-[49px] h-[49px] rounded-[50%] bg-[rgba(255,255,255,1)] flex items-center justify-center">
            <img className="w-[30px]" src={Close} alt="close" />
        </div>
        <div className="relative bg-[rgba(255,255,255,1)] w-[260px] md:w-[533px] lg:w-[733px]">
            <div className="flex items-center justify-center ">
                <h1 className="py-[30px] lg:pt-[124px] lg:pb-[177px] text-[24px] lg:text-[35.2px] w-[360px] text-center font-[Neuzeit Grotesk] font-light leading-[25.48px] lg:leading-[40.48px]">
                    Pay 4$ to 
                    <br />
                    Activate Career Report
                </h1>
            </div>
            <img className="absolute hidden customScrn:block w-[24%] lg:w-[243px] top-[10%]  lg:top-[234px] right-[10px] lg:right-[40px]" src={Group31} alt="" />
            <div className="w-full bg-[rgba(249,237,247,1)] py-[30px] lg:py-[68px] px-6 lg:pl-[47px]">
                <p className="text-[rgba(7,0,5,1)] text-[15.15px] lg:text-[19.15px] font-[Neuzeit Grotesk] font-light leading-[22.02px] customScrn:pr-32 lg:pr-64">Veridaq equips organizations with blockchain-actionable insights, Veridaq simplifies complex processes, enhances decision-making and helps institutions, corporates and agencies build trust in </p>
                <button className="text-[rgba(255,255,255,1)] mt-[20.15px] lg:mt-[37.15px] text-[15.37px] font-light leading-[17.67px] w-[180px] lg:w-[246px] h-[31.78px] bg-[rgba(151,78,159,1)]" >
                    Make Payment Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default CareerReport

