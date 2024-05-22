import type { NextPage } from "next";

const EventLocation: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-[132px] box-border max-w-full text-center text-lg text-darksalmon-100 font-spartan mq450:pb-[86px] mq450:box-border">
      <div className="w-[470px] flex flex-col items-end justify-start gap-[35px] max-w-full mq750:gap-[17px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
          <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
            Event location
          </b>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[29px] text-37xl text-darkslategray-100">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
            <h1 className="m-0 w-[249px] relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
              Location
            </h1>
          </div>
          <div className="self-stretch relative text-xl leading-[32px] font-source-sans-pro z-[3] mq450:text-base mq450:leading-[26px]">
            The sky was cloudless and of a deep dark blue. The spectacle before
            us was indeed sublime.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;
