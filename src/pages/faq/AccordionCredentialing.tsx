import { useState } from 'react';
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import { ReactNode } from 'react';
interface FAQ {
  question: string;
  answer: string | ReactNode;
}

const faqOrg: FAQ[] = [
  {
    question: 'What is VeriTalent Credentialing?',
    answer: (
      <>
        <p className="text-[17px]">
          VeriTalent provides digital credentialing solutions that allow users
          to receive and showcase verifiable credentials for work experience,
          training, certifications and achievements. These credentials can be
          instantly verified by employers, clients or recruiters for
          authenticity.
        </p>
      </>
    ),
  },
  {
    question: 'How do I earn a VeriTalent credential?',
    answer: (
      <>
        <p className="text-[17px]">
          You can earn a VeriTalent digital credential by:
        </p>
        <ul className="text-[16px] space-y-3 mt-[15px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Completing internships, job roles or work experiences that are
            verified by past employers or supervisors.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Completing a recognized training program from an accredited
            institution or organization.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Receiving a skills or experience endorsement from a professional
            body or an employer.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Credentialing performance reports and other demonstrated
            competencies.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Verifiable references from clients, mentor, superior etc
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'How can I share my VeriTalent credentials?',
    answer: (
      <>
        <p className="text-[17px]">You can share your credentials via:</p>
        <ul className="text-[16px] space-y-3 mt-[15px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            A unique verification link that employers or clients can access.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            LinkedIn and other professional platforms by embedding your
            credential.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Job applications to provide instant credibility.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can organizations issue credentials through VeriTalent?',
    answer: (
      <>
        <p className="text-[17px]">
          Yes! Employers, training institutions and professional bodies can use
          VeriTalent to issue verifiable digital credentials to their employees,
          students or members, enhancing credibility and professional
          recognition.
        </p>
      </>
    ),
  },
];

const AccordionCredential: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-between px-4 md:px-8  lg:pl-[100px] lg:pr-[90px] ">
        <h3 className="text-[25px] md:text-[25px] w-full lg:w-[25%] text-[#9D3B93] font-light leading-[40.48px] md:leading-[40.48px]">
          VeriTalent Credentialing
        </h3>
        <div className="w-full lg:w-[72%]">
          {faqOrg.map((faq, index) => (
            <div
              key={index}
              className={`border-b ${
                openIndex === index
                  ? 'border-none'
                  : 'border-[rgba(34,0,21,0.5)]'
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left text-[18px] md:text-[22.3px] font-light leading-[25.64px] py-4 transition-all duration-300 ease-in-out"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-[20px]">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <img
                      className="w-[65%] transition-transform duration-300 rotate-180"
                      src={Minus}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[65%] transition-transform duration-300 rotate-0"
                      src={Plus}
                      alt=""
                    />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-[18px] md:text-[22.3px] font-[Neuzeit] leading-[25.64px] ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-700 py-4">
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

export default AccordionCredential;
