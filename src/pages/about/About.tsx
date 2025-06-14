import AbouOverlayLeft from '../../assets/svg/about-left-bg.svg'
import AbouOverlayRight from '../../assets/svg/about-right-bg.svg'
import Light from '../../assets/svg/about-center-dot.svg'
import CenterOverlay from '../../assets/svg/about-bottom-overlay.svg'
import LeftStripe from '../../assets/svg/about-left-stripe-line.svg'
import RightStripe from '../../assets/svg/sripes-right.svg'
import Leave from '../../assets/images/leave.webp'
import IconTree from '../../assets/images/icon-tree.webp'
import HalfCircleLeft from '../../assets/images/left-half.webp'
import HalfCircleRight from '../../assets/images/right-half.webp'
import Footer from '../../components/footer/footer'
import { Link } from 'react-router-dom'
import NavBar from '../../components/nav/nav';
import { Helmet } from 'react-helmet-async';


console.log(RightStripe)
const About = () => {
  return (
    <>
     <Helmet>
        <title>About Us | Smarter Talent Management</title>
        <meta name="description" content="Discover smarter talent management solutions for individuals. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
        
        <meta name="keywords" content="talent management, HR solutions, recruitment, employee engagement" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/organisations-solution" />
        <meta property="og:title" content="Organisations Solution | Smarter Talent Management" />
        <meta property="og:description" content="Discover smarter talent management solutions for organizations. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />

      </Helmet>
    <NavBar />
    <div className="relative overflow-hidden">
    <div className="relative flex flex-col justify-center items-center pt-[30px] lg:pt-[70px] lg:px-10 bg-[rgba(121,76,159,1)]">
        <img className="absolute top-10 left-0  w-[20%]" src={LeftStripe} alt="" />
        <img className="absolute top-10 right-0 w-[20%]" src={RightStripe} alt="" />
      <img src={AbouOverlayLeft} alt="" className="absolute w-[20%] sm:w-[15%] md:w-[20%]  lg:w-[20%] lg:h-[555px] xl:h-[600px] top-[34%] md:top-28 lg:top-16 left-0 lg:-left-0 xl:left-0 z-20" />
      <img src={AbouOverlayRight} alt="" className="absolute w-[20%] sm:w-[15%] md:w-[20%] lg:w-[20%] lg:h-[555px] xl:h-[600px] top-[34%] md:top-28  lg:top-16 right-0 lg:-right-0 xl:right-0" />
    <div className=" w-full mt-[50px] lg:mt-[67px] pb-10 md:pb-24 lg:pb-10 xl:pb-[180px]">
        <div className="flex justify-center items-center flex-col">
          <img className='w-[31px] mb-[70px]' src={Light} alt="" />
          <div className="flex flex-col justify-center items-center text-white lg:px-[112px] xl:px-[230px]">
            <h1 className='text-[35.2px] text-center lg:text-balance lg:text-[44px] leading-[50.6px] font-bold px-5 lg:px-0  md:mt-24 lg:mt-0 '>About Us</h1>
                <div className="h-[2px] mt-[10px] mb-[40px] w-[31%] bg-white"></div>
            <p className='text-[18px] text-center mt-4 md:mt-0 leading-[20.7px] px-10 md:px-40 lg:px-24 xl:px-20 font-light'>
              At VeriTalent, we are dedicated to transforming the talent ecosystem with trusted credentials, competencies validation and AI-driven career insights. Our innovative SaaS platform bridges the gap between learning, employment and career performance, empowering both individuals and organizations to thrive in an ever-evolving workplace.
            </p>
          </div>

        </div>
        <img className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={CenterOverlay} alt="" />
        <img src={Leave} alt="" className="absolute hidden md:block left-6 bottom-0 w-[4%]" />
        <img src={IconTree} alt="" className="absolute hidden md:block right-16 bottom-0 w-[5%]" />
      </div>
    </div>
    <div className="w-full mt-[66px] flex flex-col px-4 lg:px-[20%]  font-[Neuzeit] text-[20px] text-[#22001580]">
        <p className='leading-[25.64px] font-light mb-3'>By consolidating credentials with personalized insights, we empower:</p>
        <ul className='font-light'>
            <li className='flex items-center mb-3'>
                <div className="h-1.5 w-1.5 mx-1.5 rounded-[50%] bg-[#220015] mr-[10px]"></div>
                <span>Individuals with career guidance, skill development and job-matching opportunities.</span>
            </li>
            <li className='flex items-center mb-3'>
                <div className="h-1.5 w-1.5 mx-1.5  rounded-[50%] bg-[#220015] mr-[10px]"></div>
                <span>Organizations with tools for performance forecasting and workforce optimization.</span>
            </li>
        </ul>
    </div>
    <div className="w-full flex flex-col justify-center text-[20px] mt-[40px] px-4 lg:px-[20%] text-[#22001580]">
         <h3 className='text-left my-3 text-[#9D3B93] font-bold leading-[25.64px]'>Our Mission</h3>
         <p>To bridge the gap between learning, employment, and career performance by providing tamper-proof credentialing and actionable insights.</p>
    </div>
    <div className="w-full flex flex-col justify-center text-[20px] mt-[40px] px-4 lg:px-[20%] text-[#22001580]">
         <h3 className='text-left my-3 text-[#9D3B93] font-bold leading-[25.64px]'>Our Vision</h3>
         <p>To build a talent ecosystem founded on verified competence, trusted credentials and actionable insights.</p>
         <p className='mt-[40px]'>At VeriTalent, we’re not just addressing today’s employment challenges, we’re shaping the future of work with technology that empowers talents and organizations alike.</p>
    </div>
    <div className="w-full flex items-center gap-8 mt-[40px] px-4 lg:px-[20%] text-[20px]">
      <p className='text-[#1A000F] font-bold text-[17px] md:text-[18px] lg:text-[17px] leading-[25.64px]'>Get Started Today – </p>
      <Link className='bg-[#794C9F] text-white text-[15px] font-light leading-[20.7px] py-[5px] px-6' to="/signuppage">Sign Up</Link>
    </div>
    <div className="">
    <div className="flex justify-between">
      <img className='w-[6%]' src={HalfCircleLeft} alt="" />
      <img className='w-[6%]' src={HalfCircleRight} alt="" />
    </div>
      <div className="w-full bg-[#F9EDF7] h-2"></div>
    </div>
    
      {/* <img className='absolute -left-10 lg:hidden  md:-left-8 top-[30%]  w-[60px] lg:w-[110px]' src={Pentagon} alt="" />
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
        <AccordionEmployer/>
      </div>
      <div className='mt-7'>
        <AccordionOrg/>
      </div> */}
    <div className='mt-16'>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default About