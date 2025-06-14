import { useState } from "react";
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import { ReactNode } from "react";
interface FAQ {
  question: string;
  answer: string | ReactNode;
}

const faqOrg: FAQ[] = [
  {
    question: "How much does VeriTalent cost?",
    answer:(
      <>
        <p className="before:content-['•'] before:mr-2 before:text-gray-800">For Individuals:</p>
        <ul>
            <li className="before:content-['m'] before:mr-2 before:text-gray-800">Freemium Plan: ₦0 — Basic Verified-CV and access to reference</li>
            <li className="before:content-['✔'] before:mr-2 before:text-gray-800">Verified-CV Automation: ₦12,000 (one-time fee) — Lifetime access to real-time career validation reporting.</li>
            <li className="before:content-['✔'] before:mr-2 before:text-gray-800">VeriTalent Premium: Starting at ₦6,000/month — AI-powered career insights, job matching and advanced career tracking.</li>
        </ul>

        <p className="before:content-['•'] before:mr-2 before:text-gray-800 mt-[20px]">For Organizations:</p>
        <ul>
            <li className="before:content-['✔'] before:mr-2 before:text-gray-800">Freemium Plan: ₦0 — Access to Verified-CVs and templated credential issuance.</li>
            <li className="before:content-['✔'] before:mr-2 before:text-gray-800">Custom Credentialing: ₦45,000/bundle (100 verified digital credentials) and ₦400,000/bundle (1000 verified digital credentials.</li>
            <li className="before:content-['✔'] before:mr-2 before:text-gray-800">nsight Premium: ₦6,000/talent review — AI-powered workforce insights and hiring recommendations.</li>
        </ul>
      </> 
    )
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        <p className="text-[17px]">We accept debit/credit cards, bank transfers and mobile payments.</p>
      </> 
    )
  },
  {
    question: "Can my company or institution partner with VeriTalent?",
    answer: (
      <>
        <p className="text-[17px]">Absolutely! We partner with universities, training programs and employers to enhance career validation and workforce efficiency. Contact us to explore partnership opportunities.</p>
      </> 
    )
  },
  {
    question: "Can organizations issue credentials through VeriTalent?",
    answer: (
      <>
        <p className="text-[17px]">Yes! Employers, training institutions and professional bodies can use VeriTalent to issue verifiable digital credentials to their employees, students or members, enhancing credibility and professional recognition.</p>
      </> 
    )
  },
];


const AccordionPricing: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
 <div className="w-full flex flex-col lg:flex-row justify-between px-4 md:px-8  lg:pl-[100px] lg:pr-[90px] ">
        <h3 className="text-[25px] md:text-[25px] w-full lg:w-[25%] text-[#9D3B93] font-light leading-[40.48px] md:leading-[40.48px]">Pricing & Payment</h3>
    <div className="w-full lg:w-[72%]">
    {faqOrg.map((faq, index) => (
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
              className={`overflow-hidden transition-all duration-300 ease-in-out text-[18px] md:text-[22.3px] font-[Neuzeit] leading-[25.64px] ${
                openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-700 py-4">
                <p  className="text-[15px]">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    </>
  );
};

export default AccordionPricing;