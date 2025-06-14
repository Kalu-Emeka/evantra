import 'swiper/swiper-bundle.css';
import Ellipse3 from '../../assets/svg/Ellipse 3.svg'
import Testimonials from '../../assets/svg/testimonials.svg'
import Ellipse2 from '../../assets/svg/Ellipse 2.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Swipers() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Add desired modules
      navigation={true} // Enable navigation arrows
      pagination={{
        type: 'fraction',
        renderFraction: (currentClass, totalClass) => {
          return `<span class="${currentClass}"></span><span style="font-size: 20px;"> Of </span><span class="${totalClass}"></span>`;
        },
      }} // Enable pagination dots
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      autoplay={{ delay: 7000 }}
    >
      <SwiperSlide>
      <div className="grid grid-cols-2 gap-4 place-items-center mt-[40px] text-[#22001580] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="">
          <img
              className="pic3 test w-[15%] bg-gray-100 opacity-50 rounded-[130px] sm:w-[30%] md:w-[20%] lg:w-[10%]"
              src={Ellipse3}
              alt=""
            />
            <img
              className="pic1 test w-[40%] sm:w-[60%]  xl:w-[75%]"
              src={Testimonials}
              alt=""
            />
            <img
              className="pic2 test sm:w-[60%]  xl:w-[75%]"
              src={Ellipse2}
              alt=""
            />
          </div>
          <div>
            <p className="w-[80%] mt-[30px] mb-[60px] sm:text-[15px] md:text-[15px] lg:text-[16px] sm:w-full md:w-full lg:w-[80%] sm:px-[20px] md:px-[20px] lg:px-0">
              My VeriTalent Rating made employers message ME first. No more sending 100 applications into a black hole.
            </p>
            <h2 className="text-[25px] font-bold sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:text-[17px] md:text-[17px] lg:text-[25px]">Aminu O.,</h2>
            <p className='sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:text-[15px] md:text-[15px] lg:text-[16px]'>Financial Analyst (Accra).</p>
        
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-4 place-items-center mt-[40px] text-[#22001580] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
           <div className="">
          <img
              className="pic3 test w-[15%] bg-gray-100 opacity-50 rounded-[130px] sm:w-[30%] md:w-[20%] lg:w-[10%]"
              src={Ellipse3}
              alt=""
            />
            <img
              className="pic1 test w-[40%] sm:w-[60%] xl:w-[75%]"
              src={Testimonials}
              alt=""
            />
            <img
              className="pic2 test sm:w-[60%] xl:w-[75%]"
              src={Ellipse2}
              alt=""
            />
          </div>
          <div>
            <p className="w-[80%] mt-[30px] mb-[60px]  sm:text-[15px] md:text-[15px] lg:text-[16px] sm:w-full md:w-full lg:w-[80%] sm:px-[20px] md:px-[20px] lg:px-0">
                Cut our hiring costs by 60% and eliminated the error of fake CVs. The AI found us a perfect DevOps engineer in 72 hours.
            </p>
            <h2 className="text-[25px] font-bold sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:text-[17px] md:text-[17px] lg:text-[25px]"> Samuel M.,</h2>
            <p className='sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:text-[15px] md:text-[15px] lg:text-[16px]'>CTO at Fintech Startup (Nairobi)</p>
          </div>
        </div>
      </SwiperSlide> 
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-4 place-items-center mt-[40px] text-[#22001580] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="">
          <img
              className="pic3 test w-[15%] bg-gray-100 opacity-50 rounded-[130px] sm:w-[30%] md:w-[20%] lg:w-[10%]"
              src={Ellipse3}
              alt=""
            />
            <img
              className="pic1 test w-[40%] sm:w-[60%] xl:w-[75%]"
              src={Testimonials}
              alt=""
            />
            <img
              className="pic2 test sm:w-[60%] xl:w-[75%]"
              src={Ellipse2}
              alt=""
            />
          </div>
          <div>
            <p className="w-[80%] mt-[30px] mb-[60px]  sm:text-[15px] md:text-[15px] lg:text-[16px] sm:w-full md:w-full lg:w-[80%] sm:px-[20px] md:px-[20px] lg:px-0">
               VeriTalent got me 5 interviews in one week, all remote jobs paying 2x my local salary!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            </p>
            <h2 className="text-[25px] font-bold sm:text-[17px] md:text-[17px] lg:text-[25px] sm:pl-[20px] md:pl-[20px] lg:pl-0">Emeka L.,</h2>
            <p className='sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:text-[15px] md:text-[15px] lg:text-[16px]'>Product Manager (Lagos)</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-4 place-items-center mt-[40px] text-[#22001580] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="">
          <img
              className="pic3 test w-[15%] bg-gray-100 opacity-50 rounded-[130px] sm:w-[30%] md:w-[20%] lg:w-[10%]"
              src={Ellipse3}
              alt=""
            />
            <img
              className="pic1 test w-[40%] sm:w-[60%] xl:w-[75%]"
              src={Testimonials}
              alt=""
            />
            <img
              className="pic2 test sm:w-[60%] xl:w-[75%]"
              src={Ellipse2}
              alt=""
            />
          </div>
          <div>
            <p className="w-[80%] mt-[30px] mb-[60px]  sm:text-[15px] md:text-[15px] lg:text-[16px] sm:w-full md:w-full lg:w-[80%] sm:px-[20px] md:px-[20px] lg:px-0">
              From posting a job to an offer letter in 9 days. Our HR team now focuses more on strategy not screening.
            </p>
            <h2 className="text-[25px] font-bold sm:text-[17px] md:text-[17px] lg:text-[25px] sm:pl-[20px] md:pl-[20px] lg:pl-0">Femi A.,</h2>
            <p className='sm:pl-[20px] md:pl-[20px] lg:pl-0 sm:text-[15px] md:text-[15px] lg:text-[16px]'> HR Director (Lagos)</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default Swipers;
