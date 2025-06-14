import { useState } from 'react';
import CareerNav from '../../components/careerVerification/careerNav';
import CarreerSidebar from '../../components/careerVerification/careerSidebar';
import CareerForm from '../../components/careerVerification/careerForm';
import CareerFormEducation from '../../components/careerVerification/careerFormEducation';
import CareerFormExperience from '../../components/careerVerification/careerFormExperience';
import Wallet from '../../components/wallet/wallet';
import Cv from '../../components/upload documents/CvReport';
function ActivateReportProfile() {
  const [activeForm, setActiveForm] = useState('career');

  return (
    <>
      <CareerNav />
      <CarreerSidebar />
      <section>
        <div className="relative w-full">
          <img
            className="absolute left-[85%] ml-[10px] top-[130px] w-[6%] object-contain"
            src="/src/assets/icons/Group 97.webp"
            alt=""
          />
        </div>
        <Wallet />
        <section className="relative w-full">
          <div className="absolute flex justify-between w-[70%] pl-[30px] mt-[20px] left-[18%] top-[390px]">
            <div className="flex justify-start items-center">
              <h2 className="w-[95%]">
                Upload A CV With Size Not Larger Than 10mb in PDF, WORD Or .Docs
                Format Or{' '}
                <span className="font-bold">Input Details Manually</span>
              </h2>
            </div>
            <div className="flex justify-start items-center w-[90%]">
              <button
                onClick={() => setActiveForm('career')}
                className={`border px-[20px] py-[10px] mr-[20px] rounded-md ${
                  activeForm === 'career' ? 'border-[#794C9F]' : 'border'
                }`}
              >
                Basic Info
              </button>
              <button
                onClick={() => setActiveForm('education')}
                className={`border px-[20px] py-[10px] mr-[20px] rounded-md ${
                  activeForm === 'education' ? 'border-[#794C9F]' : 'border'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveForm('experience')}
                className={`border px-[20px] py-[10px] mr-[20px] rounded-md ${
                  activeForm === 'experience' ? 'border-[#794C9F]' : 'border'
                }`}
              >
                Experience
              </button>
            </div>
          </div>
          <div className="flex w-[83%] absolute left-[17%] pl-[20px] pt-[90px] pb-[20px] bg-[#F9EDF7]">
            <div className="flex justify-start items-center pl-[20px]">
              <img
                className="w-[7%] mr-[20px]"
                src="/src/assets/icons/advert.webp"
                alt=""
              />
              <h2>
                Appear as credible as you should. Get a verified CV-Report today
              </h2>
            </div>
            <button className="bg-[#794C9F] text-white px-[20px] py-[3px] w-[25%] rounded-md">
              Activate Career Report
            </button>
          </div>
        </section>
      </section>
      <Cv
        token={null}
        onUploadSuccess={function (data: any): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className="rounded">
        {activeForm === 'career' && <CareerForm />}
        {activeForm === 'education' && <CareerFormEducation />}
        {activeForm === 'experience' && <CareerFormExperience />}
      </div>
    </>
  );
}
export default ActivateReportProfile;
