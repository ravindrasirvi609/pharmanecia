import type { NextPage } from "next";

const SponsorGallery: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-12 pb-[39px] box-border max-w-full text-center text-lg text-darksalmon-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[71px] max-w-full lg:gap-[35px] mq750:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[470px] flex flex-col items-end justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
              <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
                Event Gallery
              </b>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[29px] text-37xl text-darkslategray-100">
              <div className="flex flex-row items-start justify-end py-0 pr-10 pl-[41px]">
                <h1 className="m-0 w-[389px] relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                  Event Gallery
                </h1>
              </div>
              <div className="self-stretch relative text-xl leading-[32px] font-source-sans-pro z-[3] mq450:text-base mq450:leading-[26px]">
                The sky was cloudless and of a deep dark blue. The spectacle
                before us was indeed sublime.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full text-37xl text-white">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[370px] min-h-[512px] z-[3] mq750:min-w-full"
            alt=""
            src="/bitmap-23@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[370px] max-w-full mq750:gap-[16px] mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq750:flex-wrap">
              <div className="flex-[0.8519] flex flex-row items-start justify-center py-[85px] px-5 box-border relative min-w-[175px] mq450:flex-1">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[3]"
                  alt=""
                  src="/bitmap-24@2x.png"
                />
                <div className="h-[70px] w-[70px] flex flex-row items-start justify-start relative">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[4]"
                      alt=""
                      src="/oval.svg"
                    />
                    <img
                      className="absolute top-[24px] left-[29px] w-4 h-[22px] object-contain z-[5]"
                      alt=""
                      src="/triangle.svg"
                    />
                  </div>
                </div>
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[175px] min-h-[240px] z-[3]"
                alt=""
                src="/bitmap-25@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq750:flex-wrap">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[175px] min-h-[240px] z-[3]"
                alt=""
                src="/bitmap-26@2x.png"
              />
              <div className="flex-[0.4222] flex flex-col items-end justify-start pt-[76px] pb-[73px] pr-[86px] pl-[70px] box-border relative min-w-[175px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[3]"
                  alt=""
                  src="/bitmap-27@2x.png"
                />
                <b className="self-stretch relative tracking-[-2px] leading-[64px] inline-block min-w-[114px] whitespace-nowrap z-[4] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                  +24
                </b>
                <div className="flex flex-row items-start justify-end py-0 px-1.5 mt-[-5px] text-5xl">
                  <h3 className="m-0 w-[85px] relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit inline-block min-w-[85px] z-[5] mq450:text-lgi mq450:leading-[26px]">
                    photos
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorGallery;
