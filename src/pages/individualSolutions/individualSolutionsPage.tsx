import NavBar from "../../components/nav/nav"
import Footer from "../../components/footer/footer" 
import Copyright from "../../components/copyright/copyright"
import IndividualPageHeader from "../../components/solution/IndividualPageHeader";
import IndividualSolutionSteps from "../../components/solution/IndividualSolutionSteps";
import IndividualPays from "../../components/solution/IndividualPay";
import PricingCard from "../pricing/IndividualpricingCard"
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
  
  type IndividualItem = {
    heading: string;
    subHeading: string;
    content: string;
    buttonLabel: string;
    ctaText: string;
    ourSolutionPricing?: SolutionPricingItem[];
  };
  
  
  const organisationData: IndividualItem[] = [
    {
      heading: "For Individuals:",
      subHeading: "Your Dream Job Finds You – Zero Effort, Maximum Results",
      content:"Whether you're actively job-seeking or open to new opportunities, we turn the exhausting job hunt into a seamless, strategic advantage. Let employers find you effortlessly. Imagine landing interviews without writing cover letters, negotiating higher offers with data-backed insights and starting your dream job faster than traditional methods allow. ",
      buttonLabel: "Get Started – Let Jobs Find You",
      ctaText: "See how it works",
      ourSolutionPricing: [
        {
          solutionHeading: "Our Solution / Pricing",
          solutionSubheading:
            "Get Hired Effortlessly",
          description: [
            {
              heading: "Auto Apply:",
              content:
                "AI-powered applications tailored to your skills and preferences.",
            },
            {
              heading: "Verified Credibility & Pre-Vetted Profiles:",
              content:
                "Build trust with employers beyond self-reported resume.",
            },
            {
              heading: "AI-led Interviews:",
              content:
                "Get matched and assessed before you even step into the interview room.",
            },
            {
              heading: "Repository Management",
              content:
                "Receive, save, download and share reports, references, credentials etc",
            },
          ],
        },
      ],
    },
];
function IndividualSolution () {
    return (
        <>
          <Helmet>
              <title>Individual Solutions | Smarter Talent Management</title>
              <meta name="description" content="Discover smarter talent management solutions for individuals. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
              
              <meta name="keywords" content="talent management, HR solutions, recruitment, employee engagement" />

              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://yourdomain.com/organisations-solution" />
              <meta property="og:title" content="Organisations Solution | Smarter Talent Management" />
              <meta property="og:description" content="Discover smarter talent management solutions for organizations. Streamline your recruitment, enhance employee engagement, and optimize performance with our tools." />
    
            </Helmet>
            <NavBar/>
            <div className="header pt-[120px] pb-[0px] pl-[80px] text-black bg-[#FDFBF5] sm:pr-[30px] sm:pl-[30px] lg:pr-[60px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            {organisationData.map((item, index) => (
                <div key={index}>
                    <IndividualPageHeader
                    heading={item.heading}
                    subHeading={item.subHeading}
                    content={item.content}
                    buttonLabel={item.buttonLabel}
                    ctaText={item.ctaText}
                    />
                    {item.ourSolutionPricing?.map((pricingItem, pricingIndex) => (
                    <IndividualSolutionSteps
                        key={pricingIndex}
                        solutionHeading={pricingItem.solutionHeading}
                        solutionSubheading={pricingItem.solutionSubheading}
                        descriptions={pricingItem.description}
                    />
                    ))}
                </div>
                ))}
            </div>
             {/* Pricing */}
            <section>
                <PricingCard/>
             </section>
             {/* Pay */}
             <section>
               <IndividualPays />
             </section>
             {/* Organisation */}
             <section>
                <div className="prs pt-[120px] mt-[40px] mb-[30px]">
                    <div className="mt-[60px] bg-[#EDEDEDE5] md:w-[48%] px-4 lg:px-[70px] py-[40px]">
                      <h2 className="b text-[#1A000F] font-bold text-[30px] mb-[20px]">Organisation Solution</h2>
                      <p className="text-[#22001580] text-[17px] font-bold mb-[20px]">Are you an employer? <br></br>VeriTalent cut hiring time/costs by 60% with AI-driven matching.</p>
                      <a href="/organisation" rel="noopener noreferrer"><button  className="px-[50px] py-[8px] border bg-[#794C9F] text-white rounded-sm hover:bg-[#974E9F]" type="button">Learn More</button></a>
                    </div>
                </div>
             </section>
            <Footer/>
            <Copyright/>
        </>
    )
}
export default IndividualSolution