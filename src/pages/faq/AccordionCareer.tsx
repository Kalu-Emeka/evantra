import { useState } from "react";
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import { ReactNode } from "react";
interface FAQ {
  question: string;
  answer: string  | ReactNode;
}

const faqEmpl: FAQ[] = [
  {
    question: "What are VeriTalent’s Career Insights?",
    answer:(
      <>
        <p className="text-[17px]">VeriTalent provides AI-powered career insights, offering:</p>
        <ul className="text-[16px] space-y-3 mt-[15px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Job matching: Align your skills and competencies with suitable job openings.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Career progression advice: Identify areas for upskilling and professional growth.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Industry demand analysis: Understand which skills are most sought after in your field.</li>
        </ul>
      </> 
    )
  },
  {
    question: "How do Hiring Insights benefit employers?",
    answer:(
      <>
        <p className="text-[17px]">For organizations, VeriTalent delivers data-driven hiring insights by:</p>
        <ul className="text-[16px] space-y-3 mt-[15px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Predicting candidate performance based on verified competencies and historical data.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Matching talent with job roles using AI algorithms that assess skills, experience and cultural fit.</li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">Providing workforce analytics to optimize hiring decisions and identify skill gaps.</li>
        </ul>
      </> 
    )
  },
  {
    question: "Can organizations use VeriTalent to assess candidates?",
    answer:(
      <>
        <p className="text-[17px]">Yes! Employers can access pre-validated Verified-CVs and use VeriTalent’s hiring insights to evaluate applicants’ suitability for roles, streamlining recruitment and reducing hiring risks.</p>
      </> 
    )
    },
];


const AccordionEmployer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="w-full flex flex-col lg:flex-row justify-between  px-5 md:px-8 lg:pl-[100px] lg:pr-[90px] ">
        <h3 className="text-[25px] md:text-[25px] w-full lg:w-[25%] text-[#9D3B93] font-light leading-[40.48px] md:leading-[40.48px]">Career & Hiring Insights</h3>
    <div className="w-full lg:w-[72%]">
    {faqEmpl.map((faq, index) => (
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
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-700  py-4">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    
    </>
  );
};

export default AccordionEmployer;