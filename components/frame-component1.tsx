import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-12 pb-[51px] box-border max-w-full text-left text-lg text-darksalmon-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border mq750:pb-[33px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
        <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
          About event
        </b>
        <div className="self-stretch flex flex-col items-end justify-start gap-[47px] max-w-full text-37xl text-darkslategray-100 mq750:gap-[23px]">
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="w-[470px] flex flex-col items-start justify-end pt-0 px-0 pb-[33px] box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[29px] max-w-full">
                  <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block max-w-full z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                    <p className="m-0">{`Knowledge `}</p>
                    <p className="m-0">from the Best</p>
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-xl font-source-sans-pro">
                    <div className="flex-1 relative leading-[32px] inline-block max-w-full z-[3] mq450:text-base mq450:leading-[26px]">
                      The sky was cloudless and of a deep dark blue. The
                      spectacle before us was indeed sublime.
                    </div>
                    <div className="h-[606px] w-[936px] absolute !m-[0] top-[-335px] right-[-835px]">
                      <img
                        className="absolute top-[39px] left-[461px] w-[272px] h-[272px] z-[4]"
                        alt=""
                        src="/mask.svg"
                      />
                      <img
                        className="absolute top-[100px] left-[263px] w-[370px] h-[370px] z-[5]"
                        alt=""
                        src="/red.svg"
                      />
                      <img
                        className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1039px] object-contain z-[6]"
                        alt=""
                        src="/bitmap@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-4 px-[54px] pb-3.5 bg-[transparent] flex flex-row items-start justify-start relative z-[3]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-royalblue" />
                  <b className="w-[61px] relative text-base tracking-[-1px] inline-block font-spartan text-white text-center min-w-[61px] z-[1]">
                    Explore
                  </b>
                </button>
              </div>
            </div>
            <img
              className="h-[272px] w-[272px] relative z-[3]"
              loading="lazy"
              alt=""
              src="/mask-1.svg"
            />
          </div>
          <div className="w-[538px] h-1 flex flex-row items-start justify-end py-0 px-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
            <div className="self-stretch flex-1 relative rounded-sm bg-darkslategray-100 max-w-full z-[7]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
