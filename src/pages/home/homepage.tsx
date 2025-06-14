// import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
// import NavBar from '../../components/nav/nav';
// import Footer from '../../components/footer/footer';
// import Copyright from '../../components/copyright/copyright';
// import { PlanData } from './planData';
// import { ProcedureData } from './veridaqProcedureData';
import { Helmet } from 'react-helmet';
import SwiperHeader from '../../components/swiper/headerSwipper';
// import Marquee from "react-fast-marquee";
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
// import { div } from 'framer-motion/client';

function Home() {
  // const [toggled, setToggled] = useState(PlanData[0]?.id);
  // const handleButton = (id: string) => {
  //   setToggled(id);
  // };
  return (
    <>
      <Helmet>
        <title>Evantra</title>
        <meta name="description" content="Discover smarter talent management solutions for individuals. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
        
        <meta name="keywords" content="talent management, HR solutions, recruitment, employee engagement" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/organisations-solution" />
        <meta property="og:title" content="Organisations Solution | Smarter Talent Management" />
        <meta property="og:description" content="Discover smarter talent management solutions for organizations. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />

      </Helmet>
      {/* <NavBar /> */}
      <SwiperHeader/>
      {/* Acheived banner
      <section>
        <hr className='bg-[#28809A] w-[55%] h-[1.5px] mx-auto'/>
        <div className='flex justify-center items-center pt-[30px] flex-col'>
          <h2 className='text-[#28809A] font-bold text-[17px] tracking-[1px] sm:text-[13px] md:text-[13px] lg:text-[17px] sm:text-center md:text-center lg:text-left'>Join our 4000+ Employable-Vetted talents and Top Employers revolutionizing hiring with AI</h2>
          <div className='mt-[10px] flex justify-center item-center w-[60%] sm:w-[80%] md:w-[80%] lg:w-[60%]'>
            <Marquee speed={200}>
              <img className='w-[120px] h-auto object-contain sm:w-[100px] md:w-[100px] lg:w-[120px]' src="/assets/images/br1.webp" alt="" />
              <img className='w-[120px] h-auto object-contain md:w-[100px] lg:w-[120px]' src="/assets/images/br2.webp" alt="" />
              <img className='w-[120px] h-auto object-contain md:w-[100px] lg:w-[120px]' src="/assets/images/br3.webp" alt="" />
              <img className='w-[120px] h-auto object-contain md:w-[100px] lg:w-[120px]' src="/assets/images/br4.webp" alt="" />
              <img className='w-[120px] h-auto object-contain md:w-[100px] lg:w-[120px]' src="/assets/images/br5.webp" alt="" />
              <img className='w-[120px] h-auto object-contain md:w-[100px] lg:w-[120px]' src="/assets/images/br6.webp" alt="" />
              <img className='w-[120px] h-auto object-contain md:w-[100px] lg:w-[120px]' src="/assets/images/br7.webp" alt="" />
            </Marquee>
          </div>        
        </div>
        <hr className='w-[54%] h-[1.5px] mx-auto'/>
      </section>
      {/* Product Offering */}
      {/* <section className='flex justify-center items-center flex-col sm:hidden md:hidden lg:flex'>
        <div className="flex justify-center items-center mt-[40px] flex-col">
          <h2 className="text-[#0D647E] text-[30px] font-bold mb-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px]">
            Why Veritalent?
          </h2>
          <p className="text-[#000000] text-[17px] text-center font-medium sm:text-[15px] md:text-[15px] lg:text-[16px]">
            As your Recruitment Copilot AI, Veritalent delivers: 
          </p>
        </div>
        <div className="mt-[30px] flex justify-between items-center w-[60%] bg-[#E2E7EA] rounded-[30px] sm:ml-[1px] md:ml-[1px] sm:flex-col-reverse md:flex-col-reverse lg:flex-row sm:hidden md:hidden lg:flex">
          <div className="pl-[20px]">
             <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flex justify-between items-center text-[#101828] font-medium'>
                            <h2 className='flex justify-left items-center text-[20px] font-bold text-[#28809A]'><span className='pr-[20px] text-[30px] font-medium'>1.</span>3x Faster Hiring Process <img className='w-[3%] object-contain ml-[30px]' src="/assets/icons/Vector.webp" alt="" /></h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-[13px] text-black bg-[#E2E7EA] px-[40px] py-[5px] mb-[10px] rounded-b-md">Skip the resume pile. Our AI handles sourcing, screening and scheduling, cutting hiring time from weeks to days. <p className='font-bold text-[13px]'>Key Stat: 67% reduced time-to-hire </p></p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flex justify-between items-center text-[#101828] font-medium'>
                          <h2 className='flex justify-left items-center text-[20px] font-bold text-[#28809A]'><span className='pr-[20px] text-[30px] font-medium'>2.</span>AI-Driven Precision Matching <img className='w-[3%] object-contain ml-[30px]' src="/assets/icons/Vector.webp" alt="" /></h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-[13px] text-black bg-[#E2E7EA] px-[40px] py-[5px] mb-[10px] rounded-b-md">No more mismatches. Our AI analyzes skills, culture fit, and role requirements to connect employers with ideal candidates and talents with jobs they’ll love.<p className='font-bold text-[13px]'>Key Stat: 95% of hires stay longer</p></p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flex justify-between items-center text-[#101828] font-medium'>
                          <h2 className='flex justify-left items-center text-[20px] font-bold text-[#28809A]'><span className='pr-[20px] text-[30px] font-medium'>3.</span>Employability & Credibility Validation<img className='w-[3%] object-contain ml-[30px]' src="/assets/icons/Vector.webp" alt="" /></h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-[13px] text-black bg-[#E2E7EA] px-[40px] py-[5px] mb-[10px] rounded-b-md">Zero fraud risk. We empower employers to see talents beyond self-reported resumes with VeriTalent’s credibility validation and AI-driven employability insights.<p className='font-bold text-[13px]'>Key Stat: 100+ fake resumes flagged in our pilot. </p></p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flex justify-between items-center text-[#101828] font-medium'>
                          <h2 className='flex justify-left items-center text-[20px] font-bold text-[#28809A]'><span className='pr-[20px] text-[30px] font-medium'>4.</span>Hands-Free Application & Screening <img className='w-[3%] object-contain ml-[30px]' src="/assets/icons/Vector.webp" alt="" /></h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-[14px] text-black bg-[#E2E7EA] px-[40px] py-[5px] mb-[10px] rounded-b-md">Talents: Auto-apply to match jobs while you focus on other things that matter. Employers: AI interviews and ranks candidates before you meet them.<p className='font-bold text-[13px]'>Key Stat: Candidates get 5x more interviews</p></p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
          </div>
          <img className='w-[37%]' src="/assets/images/Rectangle 4326.webp" alt="" />
        </div>
      </section>
      <section>
        <div className='mt-[60px] py-[40px] flex justify-center items-center bg-[#E2E7EA] sm:flex-col md:flex-col lg:flex-row'>
          <img className='w-[30%] sm:w-[70%] md:w-[70%] lg:w-[30%]' src="/assets/images/Col.webp" alt="" />
          <div className='flex justify-center items-center flex-col w-[40%] ml-[40px] sm:w-[90%] md:w-[90%] lg:w-[40%] sm:ml-[10px] md:ml-[10px] lg:ml-[40px]'>
            <h2 className='text-[28px] text-[#0D647E] font-bold text-center'>About Veritalent</h2>
            <p className='text-center text-[13px] w-[70%] mt-[15px]'>Rebuilding trust in the Broken Hiring System with Data and AI.</p>
            <h4 className='font-bold text-[15px] mt-[15px]'>Our vision</h4>
            <p className='text-center text-[13px] w-[80%]'>To become Africa’s most trusted source of verifiable, employable talents — bridging education, employment and opportunity through AI and credibility.</p>
            <h4 className='font-bold text-[15px] mt-[15px]'>Our Mission</h4>
            <p className='text-center text-[13px] w-[80%]'>To help young talent unlock opportunities through employability evaluation, skills development and credibility validation </p>
            <a href="/" rel="noopener noreferrer">
                <button
                className='px-[15px] py-[5px] rounded-md bg-[#0D647E] text-white mr-[10px] text-[14px] mt-[20px]'
                type="button"
              >
                Learn more
              </button>
            </a>          
          </div>

        </div>
      </section> */}
      {/* Verification */}
      {/* <section>
        <div>
          <div className="flex justify-center items-center my-[30px] flex-col">
            <h2 className="text-[28px] text-[#0D647E] text-center font-bold mb-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px]">
              How it Works 
            </h2>
            <div className="text-[16px] sm:flex lg:flex">
              {ProcedureData.map(({ title, id }) => {
                return (
                  <button
                    key={id}
                    className={`py-[6px] border text-[14px] mr-[30px] rounded-md border-[#0D647E] sm:px-[20px] md:px-[40px] lg:px-[25px] sm:mr-[10px] md:mr-[20px] lg:mr-[30px] ${toggled === id ? 'bg-[#0D647E] text-white text-[14px] rounded-md' : 'bg-white text-[#0D647E]'}`}
                    onClick={() => handleButton(id)}
                    type="button"
                  >
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="my-[270px] relative sm:my-[300px] md:my-[400px] lg:my-[160px]">
            <div className='flex justify-center items-center'>
              <img
              src="/assets/icons/Vector 16.webp"
              alt="Wave Path"
              className="w-[69%] pl-[30px] sm:w-[95%] md:w-[95%] lg:w-[69%] sm:hidden lg:flex"
            />
            </div>
            <div className="absolute left-[21%] top-[6px] grid grid-cols-3 gap-[40px] px-6 place-items-center py-[20px] w-[70%] mb-[30px] sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-3 sm:top-[-300px] md:top-[-400px] lg:top-[-50px] sm:gap-[10px] lg:gap-[40px] sm:px-2 lg:pr-6">
                {ProcedureData.find(d => d.id === toggled)?.steps.map((step, index) => (
                  <div key={step.id}>
                      <div
                        key={step.id}
                        className=""
                      >
                        <h1 className=" px-[20px] py-[10px] text-[#8D9192] text-[75px] font-bold rounded-[50px] sm:text-[40px] md:text-[40px] lg:text-[75px] sm:text-center md:text-center lg:text-left">
                          {step.stepstitle}
                        </h1>
                        <p className="text-[19px] sm:text-[14px] md:text-[17px] lg:text-[14px] font-bold text-center">{step.stepdescription}</p>
                      </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section> */}
      {/* Partnership */}
      {/* <section>
        <div className='bg-[#E2E7EA] py-[30px] flex justify-center items-center sm:flex-col md:flex-col lg:flex-row'>
          <div className='flex items-center sm:justify-center lg:justify-left sm:flex-col md:flex-col lg:flex-row'>
            <img className='w-[5%] object-contain mr-[30px] bg-white px-[7px] py-[5px] rounded-md sm:w-[10%] md:w-[10%] lg:w-[5%] sm:mb-[10px] lg:mb-0' src="/assets/icons/flag-02 (1).webp" alt="" />
            <p className='text-[13px] w-[50%] sm:w-[89%] md:w-[80%] lg:w-[50%] sm:mb-[10px] lg:mb-0 sm:text-center lg:text-left'>Integrate your ATS or import candidates from other pipelines for Credibility and Background Checks at no base cost</p>
          </div>
          <a href="/" rel="noopener noreferrer">
                <button
                className='px-[25px] py-[7px] rounded-md bg-[#0D647E] text-white mr-[10px] text-[13px]'
                type="button"
              >
                Signup for free
              </button>
              </a>
        </div> */}
      {/* </section> */}
      {/* Testimonials */}
      {/* <section>
        <div className="flex justify-center items-center mt-[50px] flex-col">
          <h2 className="text-[#0D647E] text-[35px] font-bold mb-[20px] sm:text-[25px] md:text-[25px] lg:text-[35px] sm:text-center lg:text-left">
            Real Stories from Satisfied Customers
          </h2>
          <p className="text-[#52525B] text-[15px] w-[35%] text-center sm:text-[13px] md:text-[13px] lg:text-[14px] sm:w-[70%] md:w-[80%] lg:w-[35%] lg:w-[35%]">
            Many people have said how good Veritalent work
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <div className='bg-[#8D9192] py-[120px] mt-[30px] w-[40%] sm:py-[170px] md:py-[160px] lg:py-[120px]'>
          </div>
        </div>
        <div className='relative flex justify-between items-center w-[70%] left-[20%] top-[-120px] sm:top-[-180px] lg:top-[-120px] sm:w-[99%] lg:w-[70%] sm:my-[100px] lg:my-0'>
        <div className='absolute flex  sm:flex-col lg:flex-row'>
          <div className='flex justify-center flex-col bg-white rounded-sm pl-[20px] py-[10px] w-[40%] shadow-md mr-[30px] sm:mb-[10px] lg:mb-0 sm:items-center lg:items-left sm:w-[70%] md:w-[70%] lg:w-[30%]'>
            <img className='w-[19%] object-contain' src="/assets/icons/favourite-31.webp" alt="" />
            <p className='text-[#0D647E] text-[12px] w-[90%] mt-[20px] mb-[20px] sm:text-[13px] lg:text-[12px]'>“From posting a job to an offer letter in 9 days. Our HR team now focuses more on strategy not screening.”</p>
            <div className='flex items-center sm:justify-center lg:justify-left'>
              <img className='w-[30px] object-contian' src="/assets/images/Oval.webp" alt="" />
              <div className='ml-[10px]'>
                <h2 className='text-[12px] font-medium'>Jacob Jeremiah</h2>
                <p className='text-[12px] text-[#52525B]'>HR Director (Lagos)</p>
              </div>
            </div>
          </div>
           <div className='flex justify-center flex-col bg-white rounded-sm pl-[20px] py-[10px] w-[40%] shadow-md mr-[30px] sm:mb-[10px] lg:mb-0 sm:items-center lg:items-left sm:w-[70%] md:w-[70%] lg:w-[30%]'>
            <img className='w-[19%] object-contain' src="/assets/icons/favourite-31.webp" alt="" />
            <p className='text-[#0D647E] text-[12px] w-[90%] mt-[20px] mb-[20px] sm:text-[13px] lg:text-[12px]'>“Veritalent got me 5 Interviews in one week, all remote jobs paying 2x my local salary!”</p>
            <div className='flex items-center sm:justify-center lg:justify-left'>
              <img className='w-[30px] object-contian' src="/assets/images/Oval (1).webp" alt="" />
              <div className='ml-[10px]'>
                <h2 className='text-[12px] font-medium'>Temilade Wilson</h2>
                <p className='text-[12px] text-[#52525B]'>Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center flex-col bg-white rounded-sm pl-[20px] py-[10px] w-[40%] shadow-md mr-[30px] sm:mb-[10px] lg:mb-0 sm:items-center lg:items-left sm:w-[70%] md:w-[70%] lg:w-[30%]'>
            <img className='w-[19%] object-contain' src="/assets/icons/favourite-31.webp" alt="" />
            <p className='text-[#0D647E] text-[12px] w-[90%] mt-[20px] mb-[20px] sm:text-[13px] lg:text-[12px]'>“Cut our hiring costs by 60% and eliminated the error of fake CVs. The AI found us a perfect DevOps Engineeer in 72 hours.”</p>
            <div className='flex items-center sm:justify-center lg:justify-left'>
              <img className='w-[30px] object-contian' src="/assets/images/testimonials.webp" alt="" />
              <div className='ml-[10px]'>
                <h2 className='text-[12px] font-medium'>Leslie Alexander</h2>
                <p className='text-[12px] text-[#52525B]'>CTO at Fintech Startup (Nairobi)</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <p className='text-center text-[13px] font-medium mt-[20px]'>Check more reviews</p>
        <hr className='w-[10%] mx-auto h-[2px] bg-[#18181B]'/>
      </section> */}
      {/* Plan */}
       {/* <section>
        <div className="flex justify-center items-center mt-[80px] flex-col">
          <h2 className="text-[#0D647E] text-[35px] font-bold mb-[10px] sm:text-[25px] md:text-[25px] lg:text-[35px]">
            Choose Your Ideal Plan Today!
          </h2>
          <p className="text-[#00000] text-[15px] text-center sm:text-[15px] md:text-[15px] lg:text-[14px]">
            Explore our comprehensive pricing plans to meet your needs and budgets
          </p>
          <div className='flex justify-between items-center mt-[40px] bg-[#F4F4F5] w-[60%] py-[5px]'>
            {PlanData.map(({ title, id }) => {
              return (
                <button
                  key={id}
                  className={`py-[4px] text-[14px] rounded-md sm:px-[20px] md:px-[40px] lg:px-[25px] w-[60%] ${toggled === id ? 'bg-[#FFFF] text-black text-[14px] rounded-md w-[60%]' : 'bg-transparent text-[#00000]'}`}
                  onClick={() => handleButton(id)}
                  type="button"
                >
                  {title}
                </button>
              );
            })}
          </div>
            <div className="mt-[40px] flex justify-between w-[60%] sm:flex-col md:flex-col lg:flex-row sm:w-[90%] lg:w-[60%]">
              <div className="border pt-[20px] px-[20px] w-[60%] mr-[30px] border-[#E1EEEF] border-2 rounded-sm sm:w-[99%] lg:w-[60%] sm:mb-[10px] lg:mb-0">
                {PlanData.filter(({ id }) => id === toggled).map(
                  ({ id, steps }) => (
                    <div key={id}>
                      {steps?.map((step) => (
                        <div
                          key={step.id}
                          className="mb-[20px]"
                        >
                          <p className='text-[#0D647E] text-[14px] font-medium sm:text-[15px] md:text-[14px] lg:text-[14px]'>{toggled === "2" ? "AI Screening Subscription (Monthly)" : "Starter(Free)"}</p>
                             {toggled === "2" ? (
                              <div className='mt-[10px]'>
                                 <p className="text-[#00000] text-[14px] font-bold rounded-[50px]">N175k (50 Applicants)</p>
                                 <p className="text-[#00000] text-[14px] font-bold rounded-[50px]">N50k (10 Applicants)</p>
                                 <p className="text-[#00000] text-[14px] font-bold rounded-[50px]">N7.5K (1 Applicants)</p>
                              </div>
                            ) : (
                              <h1 className="py-[10px] text-[#00000] text-[30px] font-bold rounded-[50px] sm:py-[8px] md:py-[8px] lg:py-[10px]">N0.00</h1>
                                  
                            )}
                          <hr className='bg-[#CFCFCF] h-[2px]' />
                          {toggled === "2" ? (
                              <div>
                                  <div className='mt-[30px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Create Employable-Vetted Pipeline (Free)</p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>.CSV Import & ATS Integration (Free)</p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Credibility and Background Check (Free)</p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Interview Assessment AI</p>
                                </div>
                                 <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Full Reporting Suite</p>
                                </div>
                                <a href="/" rel="noopener noreferrer">
                                    <button
                                    className='px-[15px] w-full py-[7px] rounded-sm bg-[#0D647E] text-white mr-[10px] text-[13px] mt-[69px]'
                                    type="button"
                                  >
                                    Start Free | Subscribe to Upgrade
                                  </button>
                                </a> 
                              </div>
                             
                            ) : (
                             <div>
                                <div className='mt-[30px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Credibility Check</p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Basic Employability Assessment</p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Auto-Apply for Jobs</p>
                                </div>
                                <a href="/" rel="noopener noreferrer">
                                    <button
                                    className='px-[15px] w-full py-[7px] rounded-sm bg-[#0D647E] text-white mr-[10px] text-[13px] mt-[150px]'
                                    type="button"
                                  >
                                    Start Free | Upgrade to Pro
                                  </button>
                                </a>       
                             </div>     
                            )}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
                <div className="border pt-[20px] px-[20px] w-[60%] mr-[30px] border-[#E1EEEF] border-2 rounded-sm sm:w-[99%] lg:w-[60%] sm:mb-[10px] lg:mb-0">
                  {PlanData.filter(({ id }) => id === toggled).map(
                  ({ id, steps }) => (
                    <div key={id}>
                      {steps?.map((step) => (
                        <div
                          key={step.id}
                          className="mb-[20px]"
                        >
                          <p className='text-[#0D647E] text-[14px] font-medium'>{toggled === "2" ? "Placement Success Premium " : "Pro Tier"}</p>
                           {toggled === "2" ? (
                              <div className='mt-[10px]'>
                                <h1 className="py-[10px] text-[#00000] text-[22px] font-bold rounded-[50px] sm:py-[8px] md:py-[8px] lg:py-[10px]">% Pay-per-Hire</h1>
                              </div>
                            ) : (
                              <div>
                                <p className="text-[#00000] text-[14px] font-bold rounded-[50px]">N3,000/Month</p>
                                <p className="text-[#00000] text-[14px] font-bold rounded-[50px]">N6,000/Quarter</p>
                                <p className="text-[#00000] text-[14px] font-bold rounded-[50px]"> N20,000/Annual</p>
                              </div>    
                            )}
                          <hr className='bg-[#CFCFCF] h-[2px]' />
                          {toggled === "2" ? (
                              <div>
                                  <div className='mt-[30px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>End-to-End Hiring Package </p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Placement Success AI (best-fit hire)</p>
                                </div>
                                <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>Onboarding and Adaptability Support</p>
                                </div>
                                 <div className='mt-[20px] flex'>
                                  <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                  <p className='text-[12px] text-[#0D647E] font-medium'>90-day Replacement Guarantee</p>
                                </div>
                                <a href="/" rel="noopener noreferrer">
                                    <button
                                    className='px-[15px] w-full py-[7px] rounded-sm bg-[#0D647E] text-white mr-[10px] text-[13px] mt-[115px]'
                                    type="button"
                                  >
                                    Contact Sales 
                                  </button>
                                </a> 
                              </div>
                             
                            ) : (
                             <div>
                                <div className='mt-[30px] flex'>
                                <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                <p className='text-[12px] text-[#0D647E] font-medium'>Includes Starter Offering</p>
                              </div>
                              <div className='mt-[20px] flex'>
                                <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                <p className='text-[12px] text-[#0D647E] font-medium'>Updates and Unlimited Access</p>
                              </div>
                              <div className='mt-[20px] flex'>
                                <img className='w-[4%] mr-[5px] object-contain' src="/assets/icons/check-circle.webp" alt="" />
                                <p className='text-[12px] text-[#0D647E] font-medium'>Priority AI (Matching)</p>
                              </div>
                              <a href="/" rel="noopener noreferrer">
                                  <button
                                  className='px-[15px] w-full py-[7px] rounded-sm bg-[#0D647E] text-white mr-[10px] text-[13px] mt-[150px]'
                                  type="button"
                                >
                                  Activate Now
                                </button>
                              </a>          
                             </div>     
                            )}
                        </div>
                      ))}  
                    </div>
                  )
                )}
                
              </div>
          </div>
        </div>
      </section> */}
      {/* Reasons */}
      {/* <section>
        <div className='bg-[#E2E7EA] py-[25px] flex justify-between items-center mt-[70px] px-[80px] sm:flex-col lg:flex-row'>
          <div className='flex items-center'>
            <p className='text-[#0D647E] font-medium text-[20px]'>Prefer to talk sales?</p>
          </div>
          <div className='flex items-center w-[50%] sm:flex-col lg:flex-row sm:w-[95%] md:w-[95%] lg:w-[50%] sm:justify-center sm:py-[10px] lg:py-0'>
            <img className='w-[1.5%] absolute left-[50.5%] outline-none mt-[3px] sm:w-[5%] md:w-[5%] lg:w-[1.5%] sm:left-[22%] lg:left-[56.7%] sm:mt-[-30px] lg:mt-[3px]' src="/assets/icons/flag-02.webp" alt="" />
            <input  type="email" className='pl-[35px] py-[7px] rounded-md text-[13px] mr-[30px] shadow-md w-[50%] sm:w-[90%] md:w-[90%] lg:w-[50%]' placeholder='Enter your email address' />
            <a href="/" rel="noopener noreferrer">
              <button
              className='px-[10px] py-[7px] rounded-md bg-[#0D647E] text-white mr-[10px] text-[13px] sm:mt-[10px] lg:mt-0'
              type="button"
              >
                Get Started
              </button>
              </a>
            </div>
        </div>
      </section>
      <section>
         <div className="flex justify-center items-center mt-[50px] flex-col">
          <h2 className="text-[#101828] text-[27px] font-bold mb-[10px] sm:text-[25px] md:text-[25px] lg:text-[27px]">
            Frequently asked questions
          </h2>
          <p className="text-[#667085] text-[15px] w-[35%] text-center sm:text-[15px] md:text-[15px] lg:text-[14px] sm:w-[70%] md:w-[80%] lg:w-[35%] lg:w-[35%]">
            Everything you need to know about the product and billing.
          </p>
          <div className='mt-[30px] px-[50px] w-[50%] sm:w-[97%] lg:w-[50%]'>
             <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px]'>
                            What is VeriTalent?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">Veritalent is a recruitment Copilot AI that source, screen and hire best-fit talents to job openings faster and smarter</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[10px]'>
                            What is a Credibility Validation (CV) Report?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                         <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">The CV-Report is a live, shareable report that showcases talent verified education, work experience, certifications, and identity. It provides recruiters with a vetted summary of talent career profile</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[10px]'>
                            How do you screen talent?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                         <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">Through career profile credibility validation, reference checks and structured interviews assessment via AI</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[10px]'>
                             What can organizations do on Veritalent?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">Organizations can:</p>
                      <ul className="space-y-3 text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">
                        <li className="before:content-['•'] before:mr-2 before:text-gray-800">
                            Validate candidate career profile and credentials. 
                        </li>
                        <li className="before:content-['•'] before:mr-2 before:text-gray-800">
                          Post jobs or source talent
                        </li>
                         <li className="before:content-['•'] before:mr-2 before:text-gray-800">
                          Conduct AI-led interviews
                        </li>
                         <li className="before:content-['•'] before:mr-2 before:text-gray-800">
                          Issue verifiable reference credentials
                        </li>
                         <li className="before:content-['•'] before:mr-2 before:text-gray-800">
                          Use Placement Success AI to fill roles faster
                        </li>
                      </ul>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[10px]'>
                            What is Placement Success AI?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">
                        It’s a Veritalent proprietary AI tool that fast-track recruitment. You post a job and our AI handles sourcing, screening and matching of a best-fit hire. Employer only pay a % fee of the hire's annual salary when a successful hire is made.
                      </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[10px]'>
                           Can we integrate with our ATS or HR system?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">
                        Yes. Veritalent supports integrations via API or CSV upload to streamline candidate data and report generation.
                      </p>
                    </AccordionItemPanel>
                </AccordionItem>
                 <AccordionItem>
                    <AccordionItemHeading>
                         <AccordionItemButton className='flex justify-between items-center text-[20px] text-[#101828] font-medium bg-[#E2E7EA] px-[30px] py-[10px] rounded-md rounded-l-sm rounded-r-sm rounded-t-md sm:text-[18px] md:text-[18px] lg:text-[18px] mt-[10px]'>
                           How is data protected on Veritalent?
                            <img className='w-[3%] object-contain sm:w-[6%] lg:w-[3%]' src="/assets/icons/Icon wrap (1).webp" alt="" />
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="text-[15px] text-[#9FA6A9] bg-[#E2E7EA] px-[40px] py-[10px] mb-[10px] rounded-b-md sm:px-[20px] lg:px-[40px]">
                        We use end-to-end encryption, secure repositories, and access controls to ensure that all personal and organizational data is protected.
                      </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center mt-[40px] bg-[#E2E7EA] py-[20px] sm:flex-col lg:flex-row">
          <img className='w-[25%] sm:hidden lg:flex' src="/assets/images/Cards Round.webp" alt="" />
          <img className='w-[50%] sm:flex lg:hidden' src="/assets/images/Cards Round sm2.webp" alt="" />
          <div className='flex justify-center items-center flex-col'>
            <h2 className="text-black text-[35px] font-bold mb-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px]">
              Do More With VERITALENT
            </h2>
            <p className="text-[#0F172A] text-[14px] text-center sm:w-[90%] md:w-[90%] lg:w-[60%]">
              Empower your career growth as a talent or make smarter and performance-oriented workforce decisions as an organisation with VeriTalent.
            </p>
            <a href="/" rel="noopener noreferrer">
              <button
              className='px-[20px] py-[9px] rounded-md bg-[#0D647E] text-white mr-[10px] text-[13px] mt-[20px]'
              type="button"
              >
                Sign Up Now
              </button>
            </a>
          </div>
          <img className='w-[20%] sm:hidden lg:flex' src="/assets/images/Cards Round (1).webp" alt="" />
          <img className='w-[50%] sm:flex lg:hidden' src="/assets/images/Cards Round sm.webp" alt="" />
        </div>
      </section>
      <Footer />
      <Copyright/> */} 
    </>
  );
}
export default Home;
