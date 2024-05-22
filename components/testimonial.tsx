import type { NextPage } from "next";

const Testimonial: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start gap-[54px] text-left text-lg text-darksalmon-100 font-spartan mq750:gap-[27px]">
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq1050:flex-wrap">
        <div className="w-[270px] flex flex-col items-start justify-end pt-0 px-0 pb-8 box-border text-21xl text-white">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[48px] font-bold font-inherit inline-block min-w-[81px] z-[4] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
              EVT
            </h1>
            <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-gray-100 z-[4]">
              Truly it was a great journey, and in it I met with many, whom to
              know was to love whom never could I see again
            </div>
          </div>
        </div>
        <div className="w-[170px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[17px]">
          <b className="relative tracking-[2px] leading-[32px] uppercase inline-block min-w-[76px] z-[4]">
            EVENT
          </b>
          <div className="relative text-base leading-[32px] font-source-sans-pro text-white z-[4]">
            <p className="m-0">About</p>
            <p className="m-0">Speakers</p>
            <p className="m-0">Schedule</p>
            <p className="m-0">Contact</p>
          </div>
        </div>
        <div className="w-[180px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[17px]">
          <b className="relative tracking-[2px] leading-[32px] uppercase inline-block min-w-[118px] z-[4]">
            Features
          </b>
          <div className="relative text-base leading-[32px] font-source-sans-pro text-white z-[4]">
            <p className="m-0">Network</p>
            <p className="m-0">Education</p>
            <p className="m-0">Inspiration</p>
            <p className="m-0">Experience</p>
          </div>
        </div>
        <div className="h-[170px] w-40 flex flex-col items-start justify-start">
          <img
            className="self-stretch h-12 relative max-w-full overflow-hidden shrink-0 object-cover z-[4]"
            loading="lazy"
            alt=""
            src="/social@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[41px] text-base text-gray-100 font-source-sans-pro mq750:gap-[20px]">
        <div className="self-stretch h-px relative bg-gray-400 mix-blend-normal z-[4]" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="relative leading-[32px] z-[4]">
            Copyright © 2020 Laaqiq. All Rights Reserved.
          </div>
          <div className="w-[226px] flex flex-row items-start justify-start gap-[47px] text-right text-white">
            <div className="relative leading-[32px] inline-block min-w-[86px] z-[4]">
              Terms of Use
            </div>
            <div className="relative leading-[32px] inline-block min-w-[93px] z-[4]">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Testimonial;
