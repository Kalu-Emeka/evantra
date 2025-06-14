import CareerNav from "../../components/careerVerification/careerNav"
import CarreerSidebar from "../../components/careerVerification/careerSidebar"
import { useState } from "react";
import { Link} from 'react-router-dom';

function CareerDashboard () {
    const [progress, setProgress] = useState<number>(20);
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
                <div className="absolute w-[80%] pl-[130px] left-[10%] top-[200px]">
                    <h2 className="mb-[20px] text-[19px]">Welcome,</h2>
                    <div className="flex justify-between">
                        <div className="">
                            <div className="flex">
                                <div className="pl-[30px] border border-black rounded-md px-[20px] py-[10px] pb-[10px]">
                                    <div className="flex justify-between items-center">
                                        <h2>Wallet Balance</h2>
                                        <img className="w-[12%] cursor-pointer" src="/src/assets/icons/Vector (2).webp" alt="" />
                                    </div>
                                    <h2 className="mt-[20px] text-[40px]">20,000 <span className="text-[20px]">.00</span></h2>
                                </div>
                                <h2 className="bg-[#794C9F] text-[50px] pt-[30px] text-white text-center font-medium ml-[30px] rounded-lg px-[25px]">+</h2>    
                            
                            </div>
                            <li className='w-[80%] list-none mt-[20px]'>
                                <Link className='text-[#794C9F] font-bold'  to="/">
                                    view wallet transactions  
                                </Link>
                            </li>
                        </div>
                        <div className="w-[40%]">
                            <h2>Career Profile Progress</h2>
                            <div className="flex justify-between items-center my-[20px]">
                                <p className="font-semibold text-[#22001580] text-[15px]">{progress}% completed</p>
                                <img className="w-[3%] object-contain cursor-pointer" src="/assets/icons/arrow-left.webp" alt="" />
                            </div>
                            <div className="max-w-lg mx-auto space-y-4">
                            {/* Progress Bar */}
                            <div className="w-full bg-pink-100 rounded-full h-6 overflow-hidden">
                                <div
                                className="h-full rounded-full bg-[#794C9F]"
                                style={{ width: `${progress}%` }}
                                ></div>
                            </div>

                            {/* Slider to Control Progress */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress}
                                onChange={(e) => setProgress(Number(e.target.value))}
                                className="w-full"
                            />
                            </div>
                            </div>
                        </div>
                    </div>
            </section>  
            <section className="relative w-full">
                <div className="absolute w-[80%] pl-[130px] left-[10%] top-[450px] flex justify-between items-center">
                    <div className="border py-[20px] px-[20px] w-[45%] rounded-md cursor-pointer hover:bg-[#F9EDF7]">
                        <h2 className="text-[20px] mb-[20px]">Career Verification</h2>
                        <div className="flex justify-end items-center">
                            <img className="w-[10%] cursor-pointer" src="/assets/icons/ei_arrow-up.webp" alt="" />
                        </div>
                    </div>
                    <div className="border py-[20px] px-[20px] w-[45%] rounded-md cursor-pointer hover:bg-[#F9EDF7]">
                        <h2 className="text-[20px] mb-[20px]">Repository Manager</h2>
                        <div className="flex justify-end items-center">
                            <img className="w-[10%] cursor-pointer" src="/assets/icons/ei_arrow-up.webp" alt="" />
                        </div>
                    </div>
                </div>  
                <div className="absolute flex justify-center items-center pl-[130px] left-[10%] top-[580px] mt-[20px]">
                    <li className='w-[80%] list-none'>
                        <Link className='text-[] font-bold'  to="/">
                            other solutions/pricing
                        </Link>
                    </li>
                    <img className="w-[5%] object-contain cursor-pointer" src="/assets/icons/arrow-left.webp" alt="" />
                </div>
            </section>
        </>
    )
}
export default CareerDashboard