import CareerNav from "../../components/careerVerification/careerNav"
import CarreerSidebar from "../../components/careerVerification/careerSidebar"

function Repository () {
    return (
        <>
            <CareerNav/>
            <CarreerSidebar/>
            <section>
                <div className="flex w-[83%] absolute left-[17%] pl-[20px] pt-[90px] pb-[20px] bg-[#F9EDF7]">
                    <div className="flex justify-start items-center pl-[20px]">
                        <img className="w-[7%] mr-[20px]" src="/src/assets/icons/advert.webp" alt="" />
                        <h2>Appear as credible as you should. Get a verified  CV-Report today</h2>
                    </div>
                    <button className="bg-[#794C9F] text-white px-[20px] py-[3px] w-[25%] rounded-md">Activate Career Report</button>
                </div>
            </section>
            <div className="relative w-full">
                <img className="absolute left-[85%] ml-[10px] top-[130px] w-[5%] object-contain" src="/src/assets/icons/Group 97.webp" alt="" />
            </div>
            <section className="relative w-full">
                <div className="absolute text-center left-[40%] top-[170px]">
                    <h2>There Is Nothing To See Yet</h2>
                </div>
            </section>
            <section className="relative w-full">
                <div className="absolute left-[16%] top-[340px] mt-[70px]">
                    <img className="w-[50%]" src="/assets/icons/Rectangle 75.webp" alt="" />
                </div>
                <img className="w-[15%] absolute left-[35%] top-[220px]" src="/assets/icons/Group 108.webp" alt="" />
            </section>
        </>
    )
}
export default Repository