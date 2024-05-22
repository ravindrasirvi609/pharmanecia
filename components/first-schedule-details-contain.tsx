import type { NextPage } from "next";

const FirstScheduleDetailsContain: NextPage = () => {
  return (
    <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-lg text-darksalmon-100 font-spartan mq1050:flex-wrap">
      <div className="w-[522px] flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[19px] pb-0 pr-[13px] pl-0">
          <b className="relative tracking-[2px] leading-[32px] uppercase inline-block min-w-[57px] z-[3]">
            9:00
          </b>
        </div>
        <img
          className="h-[70px] w-[70px] relative object-cover min-h-[70px] z-[3]"
          alt=""
          src="/bitmap-9@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[209px] max-w-full text-5xl text-darkslategray-100">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
            <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[26px]">
              Expressive Design Systems
            </h3>
            <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[3]">
              Amacheah Chukwudi
            </div>
          </div>
        </div>
      </div>
      <div className="w-[152px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border text-right text-base text-darkslategray-100 font-source-sans-pro">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="relative leading-[32px] inline-block min-w-[52px] z-[3]">
            Big Hall
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-8 h-8 relative z-[3]"
              alt=""
              src="/combined-shape-4.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScheduleDetailsContain;
