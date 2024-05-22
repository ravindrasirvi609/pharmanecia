import type { NextPage } from "next";

const Testimonial1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-12 pb-[110px] box-border max-w-full text-center text-lg text-darkslategray-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border mq450:pb-[46px] mq450:box-border mq1050:pb-[71px] mq1050:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[71px] max-w-full lg:gap-[35px] mq750:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[470px] flex flex-col items-end justify-start gap-[29px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-1.5 pr-5 pl-[22px] text-darksalmon-100">
              <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
                What people say
              </b>
            </div>
            <div className="flex flex-row items-start justify-end py-0 pr-[55px] pl-[58px] text-37xl mq750:pl-[29px] mq750:pr-[27px] mq750:box-border">
              <h1 className="m-0 w-[357px] relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                Testimonials
              </h1>
            </div>
            <div className="self-stretch relative text-xl leading-[32px] font-source-sans-pro z-[3] mq450:text-base mq450:leading-[26px]">
              The sky was cloudless and of a deep dark blue. The spectacle
              before us was indeed sublime.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[100px] max-w-full text-left text-5xl lg:flex-wrap lg:gap-[50px] lg:justify-center mq750:gap-[25px]">
          <div className="w-[570px] flex flex-col items-start justify-start pt-0 px-0 pb-[102px] box-border min-w-[570px] min-h-[361px] max-w-full lg:flex-1 mq450:pb-[66px] mq450:box-border mq1050:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] mq750:gap-[17px]">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[26px]">
                As the minuteness of the parts formed a great hindrance to my
                speed, I resolved, contrary to my first intention, to make the
                being of a gigantic stature that is to say, about eight feet in
                height, and proportionably large.
              </h3>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-xl font-source-sans-pro mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[1px]">
                  <div className="relative leading-[32px] inline-block min-w-[122px] z-[3] mq450:text-base mq450:leading-[26px]">
                    Charles Davies
                  </div>
                  <div className="relative text-base leading-[32px] text-darkslategray-200 inline-block min-w-[59px] z-[3]">
                    Designer
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="h-12 w-12 relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                        alt=""
                        src="/oval-1.svg"
                      />
                      <img
                        className="absolute top-[19px] left-[18px] w-3 h-[11px] object-contain z-[4]"
                        alt=""
                        src="/path.svg"
                      />
                    </div>
                    <div className="h-12 w-12 relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                        alt=""
                        src="/oval-2.svg"
                      />
                      <img
                        className="absolute top-[19px] left-[18px] w-3 h-[11px] z-[4]"
                        alt=""
                        src="/path-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[512px] w-[440px] relative min-w-[440px] max-w-full lg:flex-1 mq750:min-w-full">
            <img
              className="absolute top-[32px] left-[0px] w-[272px] h-[272px] z-[3]"
              alt=""
              src="/mask.svg"
            />
            <div className="absolute top-[0px] left-[70px] w-[370px] h-[512px] flex flex-row items-start justify-start max-w-full">
              <img
                className="h-[272px] w-[272px] absolute !m-[0] right-[-60px] bottom-[32px] z-[4]"
                alt=""
                src="/mask-1.svg"
              />
              <div className="h-[512px] flex-1 relative max-w-full z-[5] flex items-center justify-center">
                <img
                  className="h-full flex-1 overflow-hidden z-[5] object-contain absolute left-[0px] top-[20px] w-full [transform:scale(1.216)]"
                  alt=""
                  src="/bitmap-28@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
