import type { NextPage } from "next";

const SponsorContainer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[71px] pr-px pl-0 box-border max-w-full text-center text-lg text-darksalmon-100 font-spartan mq750:pb-[46px] mq750:box-border">
      <div className="w-[1071px] flex flex-col items-start justify-start gap-[66px] max-w-full lg:gap-[33px] mq750:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6 box-border max-w-full">
          <div className="w-[485px] flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
                Event Sponsors
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full text-37xl text-darkslategray-100">
              <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                Official Sponsors
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-1.5 box-border max-w-full text-xl font-source-sans-pro">
                <div className="flex-1 relative leading-[32px] inline-block max-w-full z-[3] mq450:text-base mq450:leading-[26px]">
                  The sky was cloudless and of a deep dark blue. The spectacle
                  before us was indeed sublime.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0 pb-2 pr-[3px] pl-0 gap-[20px] mq1050:flex-wrap mq1050:justify-center">
          <img
            className="h-10 w-[136px] relative object-contain z-[3]"
            alt=""
            src="/bitmap-14@2x.png"
          />
          <div className="w-[129px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <img
              className="self-stretch h-[38px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
              alt=""
              src="/bitmap-15@2x.png"
            />
          </div>
          <div className="w-[162px] flex flex-col items-start justify-start pt-[11px] pb-0 pr-[23px] pl-0 box-border">
            <img
              className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0 object-contain z-[3]"
              alt=""
              src="/bitmap-16@2x.png"
            />
          </div>
          <button className="cursor-pointer [border:none] pt-[3px] px-0 pb-0 bg-[transparent] w-[124px] flex flex-col items-start justify-start box-border">
            <img
              className="self-stretch h-[45px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
              alt=""
              src="/bitmap-17@2x.png"
            />
          </button>
          <div className="w-[117px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <img
              className="self-stretch h-[31px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
              alt=""
              src="/bitmap-18@2x.png"
            />
          </div>
        </div>
        <div className="w-[1057px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[829px] flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full mq750:flex-wrap mq750:justify-center">
            <div className="w-[131px] flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border">
              <img
                className="self-stretch h-[43px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bitmap-19@2x.png"
              />
            </div>
            <div className="w-[118px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <img
                className="self-stretch h-[39px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bitmap-20@2x.png"
              />
            </div>
            <img
              className="h-[35px] w-[156px] relative object-contain z-[3]"
              alt=""
              src="/bitmap-21@2x.png"
            />
            <button className="cursor-pointer [border:none] pt-[7px] px-0 pb-0 bg-[transparent] w-[92px] flex flex-col items-start justify-start box-border">
              <img
                className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bitmap-22@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorContainer;
