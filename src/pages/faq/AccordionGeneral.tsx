import { useState } from "react";
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import { ReactNode } from "react";
interface FAQ {
  question: string;
  answer: string | ReactNode;
}

const faqGeneral: FAQ[] = [
  {
    question: "What is VeriTalent?",
    answer: (
      <>
        <p className="text-[17px]">VeriTalent is an AI-powered career validation and credentialing platform that helps individuals build trusted, employer-ready CVs with verifiable credentials, real-time career data validation and AI-driven career insights. It also enables organizations to make data-driven hiring decisions by providing verified talent profiles and predictive performance analytics.</p>
      </>
    )
  },
  {
    question: "How does VeriTalent work?",
    answer: (
      <>
        <p className="text-[17px]">VeriTalent automates career validation and hiring insights by:</p>
        <ul className="text-[16px] space-y-3 mt-[15px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Verifying work experience, skills and qualifications through AI-powered workflows.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Generating dynamic Verified-CVs that update in real-time as users achieve new milestones.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Providing personalized career insights to job seekers and professionals.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Delivering AI-powered hiring insights to help organizations optimize recruitment and workforce decisions.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Issuing verifiable digital credentials for achievements, training and work experience.</li>
        </ul>
      </>
    )   
  },
  {
    question: "Who can use VeriTalent?",
    answer: (
      <>
        <ul className="text-[16px] space-y-3 mt-[5px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Students & Job Seekers: To validate their skills and career progress, ensuring they stand out to employers.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Working Professionals: To track, update and share real-time Verified-CVs for promotions, job transitions or collaborations.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Providing personalized career insights to job seekers and professionals.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Employers & Recruiters: To access pre-validated talent, predict candidate success and optimize hiring.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Educational Institutions & Training Providers: To support students' career development and boost graduate employability.</li>
        </ul>
      </>
    )
  },
];


const AccordionGeneral: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="w-full flex flex-col lg:flex-row justify-between px-5 md:px-8 lg:pl-[100px] lg:pr-[90px] ">
        <h3 className="text-[25px] md:text-[25px] w-full lg:w-[25%] text-[#9D3B93] font-light leading-[40.48px] md:leading-[40.48px]">General Questions</h3>
    <div className="w-full lg:w-[72%]">
    {faqGeneral.map((faq, index) => (
          <div
            key={index}
            className={`border-b ${openIndex === index ? "border-none" : "border-[rgba(34,0,21,0.5)]"}`}
          >
            <button
              className="w-full flex justify-between items-center text-left text-[18px] md:text-[22.3px] font-light leading-[25.64px] py-4 transition-all duration-300 ease-in-out"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-[20px]">{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <img className="w-[65%] transition-transform duration-300 rotate-180" src={Minus} alt="" />
                ) : (
                  <img className="w-[65%] transition-transform duration-300 rotate-0" src={Plus} alt="" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out text-[18px] md:text-[22.3px] ${
                openIndex === index ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-700 py-2">
                <p className="text-[15px]">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    
    </>
  );
};

export default AccordionGeneral;