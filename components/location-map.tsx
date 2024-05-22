import type { NextPage } from "next";

const LocationMap: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[55px] box-border max-w-full text-left text-5xl text-darkslategray-100 font-spartan lg:pl-10 lg:pr-10 lg:box-border mq750:pb-9 mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[177px] max-w-full lg:gap-[88px] mq450:gap-[22px] mq750:gap-[44px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <img
            className="h-24 w-20 relative object-cover z-[4]"
            loading="lazy"
            alt=""
            src="/pin@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[640px] w-[1170px] absolute !m-[0] top-[-464px] left-[calc(50%_-_585px)] object-cover z-[3]"
            alt=""
            src="/bitmap-30@2x.png"
          />
          <div className="flex-1 shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white flex flex-row items-start justify-between py-8 pr-12 pl-8 box-border max-w-full gap-[20px] z-[4] lg:pr-6 lg:box-border mq1050:flex-wrap mq1050:justify-center">
            <div className="h-36 w-[1106px] relative shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white hidden max-w-full" />
            <div className="w-[584px] flex flex-row items-end justify-start gap-[24px] max-w-full mq750:flex-wrap">
              <div className="h-20 w-20 flex flex-row items-start justify-start relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[5]"
                    alt=""
                    src="/oval-3.svg"
                  />
                  <img
                    className="absolute top-[16px] left-[20px] w-10 h-12 z-[6]"
                    loading="lazy"
                    alt=""
                    src="/shape.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border min-w-[312px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                  <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[5] mq450:text-lgi mq450:leading-[26px]">
                    24 Lakewood Street Webster, NY 14580
                  </h3>
                  <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[5]">
                    23°26'13.7'' S and 23°26'13.7'' N
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <button className="cursor-pointer [border:none] pt-4 px-[39px] pb-3.5 bg-[transparent] flex flex-row items-start justify-start relative z-[5]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded box-border border-[1px] border-solid border-cornflowerblue-200" />
                <b className="w-[90px] relative text-base tracking-[-1px] inline-block font-spartan text-cornflowerblue-100 text-center min-w-[90px] z-[1]">
                  Navigation
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
