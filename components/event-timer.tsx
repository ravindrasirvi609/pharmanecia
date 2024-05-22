import { useEffect, useState } from "react";
import type { NextPage } from "next";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventTimer: NextPage = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-06-01") - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 px-8 pb-[23px] box-border max-w-full text-left text-lg text-darksalmon-100 font-spartan">
      <div className="w-[1170px] flex flex-col items-start justify-start pt-[41px] pb-16 pr-[116px] pl-[484px] box-border relative gap-[39px] max-w-full lg:pl-[242px] lg:pr-[58px] lg:box-border mq450:pl-5 mq450:pt-[27px] mq450:pb-[42px] mq450:box-border mq750:gap-[19px] mq750:pl-[121px] mq750:pr-[29px] mq750:box-border">
        <div className="w-full h-full absolute !m-[0] top-[-16px] left-[-16px] rounded [background:linear-gradient(180deg,_#a6d8be,_#fcefba)] z-[4]" />
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded box-border opacity-[0.1] mix-blend-normal z-[3] border-[2px] border-solid border-black" />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded box-border opacity-[0.5] mix-blend-normal z-[5] border-[2px] border-solid border-white" />
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
          <b className="relative tracking-[2px] leading-[32px] uppercase z-[7]">
            Event Timer
          </b>
          <h1 className="m-0 relative text-21xl tracking-[-2px] leading-[48px] font-bold font-inherit text-white z-[7] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
            Don’t Waste Your Time!
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full text-21xl text-darkslategray-100">
          <div className="flex-1 shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white flex flex-row items-end justify-between pt-[19px] pb-3.5 pr-[50px] pl-8 box-border max-w-full gap-[20px] z-[7] mq750:pr-[25px] mq750:box-border mq1050:flex-wrap">
            <div className="h-28 w-[570px] relative shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white hidden max-w-full" />
            <div className="flex flex-col items-start justify-start py-0 pr-[60px] pl-0">
              <div className="h-[41px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <b className="mb-[-7px] relative tracking-[-2px] leading-[48px] inline-block min-w-[44px] shrink-0 z-[8] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                  {timeLeft.days}
                </b>
              </div>
              <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[32px] shrink-0 z-[9]">
                days
              </div>
            </div>
            <div className="w-[106px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <b className="relative tracking-[-2px] leading-[48px] inline-block min-w-[57px] z-[8] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    {timeLeft.hours}
                  </b>
                </div>
                <h1 className="m-0 w-4 relative text-inherit tracking-[-2px] leading-[48px] font-bold font-inherit inline-block z-[8] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                  :
                </h1>
              </div>
              <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[39px] z-[9] mt-[-7px]">
                hours
              </div>
            </div>
            <div className="w-[106px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <b className="relative tracking-[-2px] leading-[48px] inline-block min-w-[53px] z-[8] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    {timeLeft.minutes}
                  </b>
                </div>
                <h1 className="m-0 w-4 relative text-inherit tracking-[-2px] leading-[48px] font-bold font-inherit inline-block z-[8] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                  :
                </h1>
              </div>
              <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[39px] z-[9] mt-[-7px]">
                minutes
              </div>
            </div>
            <div className="w-[106px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <b className="relative tracking-[-2px] leading-[48px] inline-block min-w-[53px] z-[8] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    {timeLeft.seconds}
                  </b>
                </div>
              </div>
              <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[55px] shrink-0 z-[9]">
                seconds
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer border-none pt-4 px-[46px] pb-3.5 bg-transparent flex flex-row items-start justify-start relative whitespace-nowrap z-[7]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-darksalmon-200" />
          <b className="w-[77px] relative text-base tracking-[-1px] inline-block font-spartan text-white text-center min-w-[77px] z-[1]">
            Get Ticket
          </b>
        </button>
      </div>
    </section>
  );
};

export default EventTimer;
