import Copyright from "../../components/copyright/copyright";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/nav/nav";
import EnterprisePlanning from "../../components/solution/EnterprisePlanning";
import OrgPricingCard from "../../components/solution/OrgPricingCard";
import OurSolutionAndPricing from "../../components/solution/OurSolutionAndPricing";
import SolutionPageHeader from "../../components/solution/SolutionPageHeader";
import { Helmet } from 'react-helmet-async';

type SolutionDescription = {
  heading: string;
  content: string;
};

type SolutionPricingItem = {
  solutionHeading: string;
  solutionSubheading: string;
  description: SolutionDescription[];
};

type OrganisationItem = {
  heading: string;
  subHeading: string;
  content: string;
  buttonLabel: string;
  ctaText: string;
  ourSolutionPricing?: SolutionPricingItem[];
};


const organisationData: OrganisationItem[] = [
  {
    heading: "For Organizations:",
    subHeading: "Hire Best-Fit Talent: Faster and Smarter Than Ever",
    content:
      "No more guesswork. No more wasted time. Just smarter, faster hiring powered by verifiable data and machine learning precision. With intelligent screening, bias-free algorithms and automated onboarding, you'll fill positions 3x faster while reducing hiring costs by 60%. Whether you're scaling a startup or managing enterprise recruitment, our AI recruitment engine ensures you get the right talent, right when you need them",
    buttonLabel: "Sign Up Now – Fill Roles in Days",
    ctaText: "See how it works",
    ourSolutionPricing: [
      {
        solutionHeading: "Our Solution / Pricing",
        solutionSubheading:
          "Smarter, Faster Hiring",
        description: [
          {
            heading: "Pre-Vetted Talent at Application:",
            content:
              "Access qualified candidates instantly.",
          },
          {
            heading: "AI Screening & Interviews:",
            content:
              "Automate shortlisting with precision.",
          },
          {
            heading: "Seamless Onboarding:",
            content:
              "Move from offer to onboarding with AI-driven efficiency.",
          },
          {
            heading: "Blockchain Credential",
            content:
              "Create and issue tamper-proof references and credentials.",
          },
        ],
      },
    ],
  },
];


const OrganisationsSolution = () => {
  return (
    <>
      <Helmet>
        <title>Organisations Solution | Smarter Talent Management</title>
        <meta name="description" content="Discover smarter talent management solutions for organizations. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
        <meta name="keywords" content="talent management, HR solutions, recruitment, employee engagement" />
        <link rel="canonical" href="https://yourdomain.com/organisations-solution" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/organisations-solution" />
        <meta property="og:title" content="Organisations Solution | Smarter Talent Management" />
        <meta property="og:description" content="Discover smarter talent management solutions for organizations. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
       
      </Helmet>
      <NavBar />
      <main className=" relative pt-20 bg-white"  data-aos="fade-down" data-aos-duration="1500">
        {organisationData.map((item, index) => (
          <div key={index}>
            <SolutionPageHeader
              heading={item.heading}
              subHeading={item.subHeading}
              content={item.content}
              buttonLabel={item.buttonLabel}
              ctaText={item.ctaText}
            />
            {item.ourSolutionPricing?.map((pricingItem, pricingIndex) => (
              <OurSolutionAndPricing
                key={pricingIndex}
                solutionHeading={pricingItem.solutionHeading}
                solutionSubheading={pricingItem.solutionSubheading}
                descriptions={pricingItem.description}
              />
            ))}
            <div className=" pt-14 md:pt-0 pb-20 md:pb-[90px] bg-[#EDEDED]">
              <OrgPricingCard/>
            </div>
            <div className="bg-white py-10">
              <EnterprisePlanning/>
            </div>
            {/* Organisation */}
            <section className="">
                <div className="prs-org pt-[120px] flex mt-[40px] mb-24 md:mb-[30px]">
                    <div className="flex-col-reverse mb-6 bg-[#EDEDEDE5] md:w-[48%] px-5 md:px-[20px] lg:px-[70px] py-10 md:py-[40px]">
                      <h2 className="b text-[#1A000F] font-bold text-[30px] mb-[20px]">Individual Solutions</h2>
                      <p className="text-[#22001580] text-[17px] font-bold mb-[20px]">Are you a job hunting? <br></br>Veritalent get you matched to your dream job effortlessly.</p>
                      <a href="/individual" rel="noopener noreferrer"><button  className="px-[50px] py-[8px] border bg-[#794C9F] text-white rounded-sm hover:bg-[#974E9F]" type="button">Learn More</button></a>
                    </div>
                </div>
             </section>
          </div>
        ))}
      </main>
      <Footer/>
      <Copyright/>
    </>
  );
};

export default OrganisationsSolution;
