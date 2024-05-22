import type { NextPage } from "next";

const EventScheduleContainer: NextPage = () => {
  return (
    <section className="w-[1216px] flex flex-row items-start justify-center max-w-full text-center text-lg text-darksalmon-100 font-spartan">
      <div className="w-[520px] flex flex-col items-end justify-start gap-[64px] max-w-full mq450:gap-[16px] mq750:gap-[32px]">
        <div className="w-[470px] flex flex-col items-end justify-start gap-[35px] max-w-full mq750:gap-[17px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
            <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
              Event Schedule
            </b>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[29px] text-37xl text-darkslategray-100">
            <div className="flex flex-row items-start justify-end py-0 pr-4 pl-[18px]">
              <h1 className="m-0 w-[436px] relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                Event Schedule
              </h1>
            </div>
            <div className="self-stretch relative text-xl leading-[32px] font-source-sans-pro z-[3] mq450:text-base mq450:leading-[26px]">
              The sky was cloudless and of a deep dark blue. The spectacle
              before us was indeed sublime.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-base text-darkslategray-200 font-source-sans-pro">
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[476px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="relative text-xl leading-[32px] text-darkslategray-100 inline-block min-w-[84px] z-[3] mq450:text-base mq450:leading-[26px]">
                  12 Feb, 20
                </div>
                <div className="flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0">
                  <div className="relative leading-[32px] inline-block min-w-[67px] z-[3]">
                    13 Feb, 20
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative leading-[32px] inline-block min-w-[67px] z-[3]">
                    14 Feb, 20
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[170px] h-1 relative rounded-sm bg-royalblue z-[3]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventScheduleContainer;
