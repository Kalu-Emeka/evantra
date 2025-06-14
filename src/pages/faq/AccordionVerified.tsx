import { useState } from 'react';
import Plus from '../../assets/svg/plus.svg';
import Minus from '../../assets/svg/minus.svg';
import { ReactNode } from 'react';
interface FAQ {
  question: string;
  answer: string | ReactNode;
}

const faqInd: FAQ[] = [
  {
    question: 'What is a Verified-CV?',
    answer: (
      <>
        <p className="text-[17px]">
          A Verified-CV is a real-time, AI-powered career validation report that
          verifies your work experience, skills and competencies. It provides a
          dynamic, shareable profile that evolves as you progress in your
          career, offering employers instant, trusted insights into your
          qualifications.
        </p>
      </>
    ),
  },
  {
    question: ' How do I activate my Verified-CV?',
    answer: (
      <>
        <p className="text-[17px]">You activate the Verified-CV Automation:</p>
        <ul className="text-[16px] space-y-3 mt-[15px]">
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Sign up at VeriTalent.com.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Generating dynamic Verified-CVs that update in real-time as users
            achieve new milestones.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Input your career details — education, work experience,
            certifications and skills.
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            The platform career validation workflow driven process identify,
            verifies and document each career highlight/claim
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-gray-800">
            Generate and share your Verified-CV anytime, with automatic updates
            as you grow.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can I update my Verified-CV after activation?',
    answer: (
      <>
        <p className="text-[17px]">
          Yes! The activated Verified-CV workflow enable the Verified-CV updates
          automatically as you add and verify new roles, certifications and
          skills, thus, keeping your profile relevant at all times.
        </p>
      </>
    ),
  },
  {
    question: 'How do I share my Verified-CV with employers?',
    answer: (
      <>
        <p className="text-[17px]">
          You’ll get a unique, shareable link for your Verified-CV, which you
          can include in job applications, LinkedIn profiles or emails, allowing
          recruiters to instantly verify your credentials.
        </p>
      </>
    ),
  },
  {
    question: 'What is the Deferred Payment Option for Verified-CV Activation?',
    answer: (
      <>
        <p className="text-[17px]">
          This option is enabled via the organisation partner program and it
          allows individuals to defer payment until a later time wen the
          activated Verified-CV (career validation report) is of mecessity to
          share. Note: Deferredpayments may come with an interest fee and
          cancellation of discount offers
        </p>
      </>
    ),
  },
];

const AccordionIndividua: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between px-5 md:px-8 lg:pl-[100px] lg:pr-[90px]">
      <h3 className="text-[25px] md:text-[25px] w-full lg:w-[25%] text-[#9D3B93] font-light leading-[40.48px] md:leading-[40.48px]">
        VeriTalent Verified-CV
      </h3>
      <div className="w-full lg:w-[72%]">
        {faqInd.map((faq, index) => (
          <div
            key={index}
            className={`border-b ${
              openIndex === index ? 'border-none' : 'border-[rgba(34,0,21,0.5)]'
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
              className={`overflow-hidden transition-all duration-300 ease-in-out text-[18px] md:text-[22.3px] ${
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
  );
};

export default AccordionIndividua;
