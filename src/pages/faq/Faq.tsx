import FaqFlower from '../../assets/svg/Group 97.svg'
import FaqOverlayLeft from '../../assets/svg/fag-left-overlay.svg'
import FaqOverlayRight from '../../assets/svg/fag-right-overlay.svg'
import FaqHalfCircle from '../../assets/svg/left-half.svg'
import FaqHalfCircleRight from '../../assets/svg/right-half.svg'
import FaqShadowFlower from '../../assets/svg/overlay-shadow-flower.svg'
import Pentagon from '../../assets/images/pentagon.webp'
import PentagonR from '../../assets/images/pentagon -right.webp'
import Whatsapp from '../../assets/icons/whatsapp.svg'
import Footer from '../../components/footer/footer'
import AccordionGeneral from './AccordionGeneral'
import AccordionIndividual from './AccordionVerified'
import AccordionCredential from './AccordionCredentialing.tsx'
import AccordionEmployer from './AccordionCareer.tsx'
import AccordionPricing from './AccordionPricing.tsx'
import NavBar from '../../components/nav/nav';
import { Helmet } from 'react-helmet-async';

const Faq = () => {
  return (
    <>
     <Helmet>
        <title>FAQ | Smarter Talent Management</title>
        <meta name="description" content="Discover smarter talent management solutions for individuals. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
        
        <meta name="keywords" content="talent management, HR solutions, recruitment, employee engagement" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/organisations-solution" />
        <meta property="og:title" content="Organisations Solution | Smarter Talent Management" />
        <meta property="og:description" content="Discover smarter talent management solutions for organizations. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />

      </Helmet>
    <NavBar />
    <div className="relative overflow-hidden">
    <div className="relative flex flex-col justify-center items-center pt-[37px] pb-[11px] lg:px-10 bg-[rgba(249,237,247,1)]">
      <img src={FaqOverlayLeft} alt="" className="absolute w-[20%] sm:w-[15%] md:w-[20%] lg:w-[240px]  xl:w-[280px]  lg:h-[555px] xl:h-[645px] top-[34%] md:top-28 lg:top-0 left-0 lg:-left-10 xl:left-0 z-20" />
      <img src={FaqOverlayRight} alt="" className="absolute w-[20%] sm:w-[15%] md:w-[20%] lg:w-[240px] xl:w-[280px] lg:h-[555px] xl:h-[645px] top-[34%] md:top-28  lg:top-0 right-0 lg:-right-10 xl:right-0" />
      <img src={FaqShadowFlower} alt="" className="absolute lg:w-[70px] xl:w-[83px] hidden lg:block lg:bottom-16 xl:bottom-24 lg:left-[24%] xl:left-[20%]" />
      <div className="bg-white w-full mt-[50px] lg:mt-[67px] pb-10 md:pb-24 lg:pb-52 xl:pb-[273px]">
        <div className="flex flex-col">
          <div className="hidden lg:flex justify-between w-full lg:px-3 xl:px-8 -mt-4">
            <img className="w-[83.37px] animate-flipFade" src={FaqFlower} alt="" />
            <img className="w-[83.37px] animate-flipFade" src={FaqFlower} alt="" />
          </div>

          <div className="flex flex-col justify-center items-center lg:px-[112px] xl:px-[230px]">
            <h1 className='text-[35.2px] text-center pb-[30px] lg:text-balance sm:text-[20px] md:text-[30px] lg:text-[35px] leading-[50.6px] font-bold mt-12 md:mt-24 lg:mt-0 faq-heading lg:relative'>Frequently Asked Questions (FAQs) – VeriTalent</h1>
            <p className='text-[17px] sm:text-[15px] md:text-[17px] lg:text-[20px]  text-center leading-[25.64px] px-14 md:px-40 lg:px-24 xl:px-10 font-light'>Here, we’ve answered common questions to help you understand how our platform works and how it can benefit individuals, employers and organisations.</p>
          </div>

        </div>
      </div>
      <img src={FaqHalfCircle} alt="" className="absolute w-[16%] sm:w-[12%]  md:w-[10%]  lg:w-[9%] bottom-0 left-0 z-20" />
      <img src={FaqHalfCircleRight} alt="" className="absolute w-[16%] sm:w-[12%] md:w-[10%] lg:w-[9%] bottom-0 right-0" />
    </div>
    
      <img className='absolute -left-10 lg:hidden  md:-left-8 top-[30%]  w-[60px] lg:w-[110px]' src={Pentagon} alt="" />
      <img className='absolute -right-10 lg:hidden md:-right-8 z-10 top-[30%] w-[60px] lg:w-[110px]' src={PentagonR} alt="" />
      <div className='mt-[52.3px] md:mt-[117px]'>
        <AccordionGeneral/>
      </div>
      <div className='mt-7'>
        <AccordionIndividual/>
      </div>
      <img className='absolute -left-10 md:-left-8 lg:-left-8 bottom-[30%] lg:bottom-60 w-[60px] lg:w-[110px]' src={Pentagon} alt="" />
      <img className='absolute -right-10 md:-right-8 lg:-right-8 z-10 bottom-[30%] lg:bottom-60 w-[60px] lg:w-[110px]' src={PentagonR} alt="" />
      <div className='mt-7'>
        <AccordionCredential/>
      </div>
      <div className='mt-7'>
        <AccordionEmployer/>
      </div>
      <div className='mt-7'>
        <AccordionPricing/>
      </div>
      <div className=" px-4 md:px-8  lg:pl-[100px] lg:pr-[90px] mt-6">
        <h2 className='text-[18px] lg:text-[20px] leading-[25.64px] font-light'>Need Help?</h2> 
        <p className='text-[18px] lg:text-[18px] leading-[25.64px] font-light'>
          Our support team is here to assist with any questions or issues. Reach out to us:
        </p>
        <div className="flex flex-col justify-center mt-8">
        <a href="mailto:support@veritalent.com" className='flex flex-row gap-2 text-[rgba(121,76,159,1)] w-[10%] text-[14px] md:text-[18px] font-semibold leading-[20.7px]'>
          <span className='font-bold text-black'>Email: </span> support@veritalent.com
        </a>
       
        <a 
          href="https://wa.me/2348107149957" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black gap-2 flex flex-row items-center w-[180px]"
        >
          <span className='text-[14px] md:text-[18px] font-semibold leading-[20.7px]'>Phone: </span> +2348107149957 
         <img src={Whatsapp} alt="veritalent whatsapp" className='w-[30%]' />
        </a>
        </div>
      
      </div>
    <div className='mt-16'>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default Faq