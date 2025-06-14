import 'swiper/swiper-bundle.css';
// import Ellipse3 from '../../assets/svg/Ellipse 3.svg'
// import Testimonials from '../../assets/svg/testimonials.svg'
// import Ellipse2 from '../../assets/svg/Ellipse 2.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

function SwiperHeader() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]} // Add desired modules
      navigation={true}
      pagination={{}} 
      spaceBetween={30}
      slidesPerView={1} 
      autoplay={{ delay: 5000 }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
    >
      <SwiperSlide>
        <div
        className="header pt-[50px] pb-[30px] pl-[120px] text-black bg-white sm:pr-[30px] sm:pl-[30px] lg:pr-[40px] lg:pl-[80px]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
         <div className="flex justify-center sm:flex-col-reverse lg:flex-row">
          <div className="w-[120%] text-left sm:w-[100%] sm:text-left md:text-left lg:text-left">
            <h2 className="font-bold mb-2 text-[50px] text-[#1A000F] text-center leading-[50px] w-[79%] mt-[20px] sm:w-full md:w-full lg:w-[90%] sm:text-[28px] md:text-[28px] lg:text-[45px] sm:leading-[35px] md:leading-[35px] lg:leading-[50px]">
              Find Vendors or Clients — No Wahala
            </h2>
            <p className="w-[70%] text-bold text-[17px] mb-7 sm:text-[15px] text-center md:text-[16px] lg:text-[16px] sm:mt-[20px] md:mt-[20px] lg:mt-0 sm:w-full md:w-full lg:w-[75%]">
             From weddings to owambe, book trusted vendors or list your hustle and get steady clients.
            </p>
             <button
                  className='px-[25px] py-[15px] text-[16px] w-full rounded-[50px] bg-[#FF5F1F] text-white mr-[10px] text-[14px]'
                  type="button"
                >
                 Get Started
              </button>
              <p className='text-center mt-[10px]'>Already have an account?  <span><a href="" className='text-[#0078FF]'>Sign in</a></span></p>
          </div>
          <div>
            <img
              src='/assets/images/Group 0.png'
              className="w-[86%] sm:mt-[20px] md:mt-[20px] lg:mt-0 sm:w-full md:w-full lg:w-[86%]"
              alt=""
            />
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
         <div
        className="header pt-[50px] pb-[30px] pl-[120px] text-black bg-white sm:pr-[30px] sm:pl-[30px] lg:pr-[40px] lg:pl-[80px]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
         <div className="flex justify-center sm:flex-col-reverse lg:flex-row">
          <div className="w-[120%] text-left sm:w-[100%] sm:text-left md:text-left lg:text-left">
            <h2 className="font-bold mb-2 text-[50px] text-[#1A000F] text-center leading-[50px] w-[79%] mt-[20px] sm:w-full md:w-full lg:w-[90%] sm:text-[28px] md:text-[28px] lg:text-[45px] sm:leading-[35px] md:leading-[35px] lg:leading-[50px]">
              Plan Events. Get Gigs. All in One App.
            </h2>
            <p className="w-[70%] text-bold text-[17px] mb-7 sm:text-[15px] text-center md:text-[16px] lg:text-[16px] sm:mt-[20px] md:mt-[20px] lg:mt-0 sm:w-full md:w-full lg:w-[75%]">
             Whether you dey organize or offer services, Eventra connect you to the right people, fast and easy.
            </p>
             <button
                  className='px-[25px] py-[15px] text-[16px] w-full rounded-[50px] bg-[#FF5F1F] text-white mr-[10px] text-[14px]'
                  type="button"
                >
                 Get Started
              </button>
              <p className='text-center mt-[10px]'>Already have an account?  <span><a href="" className='text-[#0078FF]'>Sign in</a></span></p>
          </div>
          <div>
            <img
              src='/assets/images/Group 1.png'
              className="w-[86%] sm:mt-[20px] md:mt-[20px] lg:mt-0 sm:w-full md:w-full lg:w-[86%]"
              alt=""
            />
          </div>
        </div>
      </div>
      </SwiperSlide> 
      <SwiperSlide>
         <div
        className="header pt-[50px] pb-[30px] pl-[120px] text-black bg-white sm:pr-[30px] sm:pl-[30px] lg:pr-[40px] lg:pl-[80px]"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex justify-center sm:flex-col-reverse lg:flex-row">
          <div className="w-[120%] text-left sm:w-[100%] sm:text-left md:text-left lg:text-left">
            <h2 className="font-bold mb-2 text-[50px] text-[#1A000F] text-center leading-[50px] w-[79%] mt-[20px] sm:w-full md:w-full lg:w-[90%] sm:text-[28px] md:text-[28px] lg:text-[45px] sm:leading-[35px] md:leading-[35px] lg:leading-[50px]">
              Your Safety. Your Peace of Mind.
            </h2>
            <p className="w-[70%] text-bold text-[17px] mb-7 sm:text-[15px] text-center md:text-[16px] lg:text-[16px] sm:mt-[20px] md:mt-[20px] lg:mt-0 sm:w-full md:w-full lg:w-[75%]">
             With verified profiles, secure payments, and real-time support, both clients and vendors are safe on Eventra.
            </p>
             <button
                  className='px-[25px] py-[15px] text-[16px] w-full rounded-[50px] bg-[#FF5F1F] text-white mr-[10px] text-[14px]'
                  type="button"
                >
                 Get Started
              </button>
              <p className='text-center mt-[10px]'>Already have an account?  <span><a href="" className='text-[#0078FF]'>Sign in</a></span></p>
          </div>
          <div>
            <img
              src='/assets/images/Group 2.png'
              className="w-[86%] sm:mt-[20px] md:mt-[20px] lg:mt-0 sm:w-full md:w-full lg:w-[86%]"
              alt=""
            />
          </div>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default SwiperHeader;
