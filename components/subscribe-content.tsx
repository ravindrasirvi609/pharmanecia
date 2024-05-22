import type { NextPage } from "next";
import DarkFieldDefault from "./dark-field-default";

const SubscribeContent: NextPage = () => {
  return (
    <div className="self-stretch rounded [background:linear-gradient(180deg,_#a6d8be,_#fcefba)] flex flex-row items-end justify-between pt-[52px] px-[100px] pb-20 box-border max-w-full gap-[20px] z-[4] text-left text-21xl text-white font-spartan lg:flex-wrap lg:pl-[50px] lg:pr-[50px] lg:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
      <div className="h-[336px] w-[1170px] relative rounded [background:linear-gradient(180deg,_#a6d8be,_#fcefba)] hidden max-w-full" />
      <div className="w-[470px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border min-w-[470px] max-w-full lg:flex-1 mq1050:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
          <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[48px] font-bold font-inherit inline-block max-w-full z-[5] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
            Subscribe to our news!
          </h1>
          <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[5]">
            Anyhow, and that will be a rare experience. It seems to me that a
            view of the heavenly bodies through a fine telescope
          </div>
        </div>
      </div>
      <form className="m-0 w-[370px] flex flex-col items-start justify-start gap-[16px] min-w-[370px] max-w-full lg:flex-1 mq1050:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start">
          <DarkFieldDefault placeholder="Your name" />
          <DarkFieldDefault placeholder="Your email" propMarginTop="-12px" />
        </div>
        <button className="cursor-pointer [border:none] pt-4 px-5 pb-3.5 bg-[transparent] self-stretch flex flex-row items-start justify-center relative z-[5]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-darksalmon-200" />
          <b className="w-[78px] relative text-base tracking-[-1px] inline-block font-spartan text-white text-center min-w-[78px] z-[1]">
            Subscribe
          </b>
        </button>
      </form>
    </div>
  );
};

export default SubscribeContent;
