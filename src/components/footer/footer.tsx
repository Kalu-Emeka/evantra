function Footer() {
  return (
    <>
      <div className="flex flex-col bg-[#0D647E] lg:flex-row justify-between pl-[20px] py-[40px] pr-[50.52px]  customScrn:pl-[52px] customScrn:pr-[74.52px] md:pl-[75px] xl:pl-[88px] md:pr-[100px] xl:pr-[115px] mt-[20px]">
        <div className="flex justify-between lg:justify-normal mb-[80px] lg:mb-0">
          <h2 className='text-white font-medium text-[20px]'>Veritalent</h2>
        </div>
        <div className=" flex justify-between text-white lg:justify-normal  lg:gap-[77px] xl:gap-[88px]">
          <div className="hidden  lg:flex flex-col ">
            <h2 className="text-[15px] mb-[20px]">
              COMPANY
            </h2>
            <a
              className="text-[14px] leading-[20.7px] mb-[20px]"
              href=""
            >
              About
            </a>
            <a
              className="text-[14px] leading-[20.7px] mb-[20px]"
              href="/"
            >
              Events
            </a>
            <a className="leading-[20.7px] mb-[20px]" href="">
              Careers
            </a>
             <a className="leading-[20.7px]" href="">
              Pricing
            </a>
          </div>
          <div className="w-1/2 lg:w-auto flex flex-col">
            <h2 className="text-[15px] leading-[20.7px] mb-[20px]">
              SOLUTIONS
            </h2>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
              For Talent
            </a>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
              For Employers
            </a>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
             Partners
            </a>
          </div>
          <div className="w-1/2 flex flex-col  lg:w-[200px] xl:w-[185px] xl:pr-4">
            <h2 className="text-[15px] leading-[20.7px] mb-[20px]">
              RESOURCES
            </h2>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
             Help Center
            </a>
             <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
             Blog
            </a>
             <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
             Tutorials
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[15px] leading-[20.7px] mb-[20px]">
              LEGAL
            </h2>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
              Privacy
            </a>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
              Security
            </a>
            <a
              className="text-[14px] font-light leading-[20.7px] mb-[20px]"
              href=""
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
