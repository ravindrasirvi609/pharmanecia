import type { NextPage } from "next";

const LocationContainer: NextPage = () => {
  return (
    <section className="w-[1214px] flex flex-row items-start justify-center pt-0 px-0 pb-[30px] box-border max-w-full text-center text-lg text-darksalmon-100 font-spartan">
      <div className="flex flex-col items-end justify-start gap-[55px] max-w-full mq750:gap-[27px]">
        <div className="w-[968px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[576px] flex flex-col items-start justify-start gap-[29px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[35px] mq750:gap-[17px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
                  Pricing plans
                </b>
              </div>
              <h1 className="m-0 self-stretch relative text-37xl tracking-[-2px] leading-[64px] font-bold font-inherit text-darkslategray-100 z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                Get Your Ticket Now
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[54px] pl-[52px] box-border max-w-full text-xl text-darkslategray-100 font-source-sans-pro mq750:pl-[26px] mq750:pr-[27px] mq750:box-border">
              <div className="flex-1 relative leading-[32px] inline-block max-w-full z-[3] mq450:text-base mq450:leading-[26px]">
                The sky was cloudless and of a deep dark blue. The spectacle
                before us was indeed sublime.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[78px] max-w-full text-base text-darkslategray-200 font-source-sans-pro mq750:gap-[19px] mq1050:flex-wrap mq1050:gap-[39px]">
          <div className="w-[274px] flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border mq750:pt-[42px] mq750:box-border">
            <div className="flex flex-col items-end justify-start gap-[49px]">
              <div className="w-[169px] flex flex-row items-start justify-end py-0 px-11 box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[5px]">
                    <div className="h-[70px] flex-1 flex flex-row items-start justify-start relative">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                          alt=""
                          src="/oval.svg"
                        />
                        <img
                          className="absolute top-[17px] left-[21px] w-7 h-9 z-[4]"
                          alt=""
                          src="/combined-shape-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 pb-[11px] pr-[23px] pl-[22px]">
                    <div className="relative leading-[32px] inline-block min-w-[36px] z-[3]">
                      Basic
                    </div>
                  </div>
                  <b className="self-stretch relative text-21xl tracking-[-2px] leading-[48px] inline-block font-spartan text-darkslategray-100 min-w-[81px] whitespace-nowrap z-[3] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    $99
                  </b>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end pt-0 pb-[5px] pr-[26px] pl-0 text-left">
                <div className="flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-row items-start justify-start gap-[12px] text-darkslategray-100">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <input
                        className="cursor-pointer m-0 w-4 h-4 relative [background:linear-gradient(180deg,_#a6d8be,_#fcefba)] z-[3]"
                        type="radio"
                      />
                    </div>
                    <div className="relative leading-[32px] z-[3]">
                      Waves flung themselves
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <input
                        className="cursor-pointer m-0 w-4 h-4 relative [background:linear-gradient(180deg,_#f4a69b,_#fbdaa4)] z-[3]"
                        type="radio"
                      />
                    </div>
                    <div className="relative leading-[32px] z-[3]">
                      Almost before we knew it
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <input
                        className="cursor-pointer m-0 w-4 h-4 relative [background:linear-gradient(180deg,_#f4a69b,_#fbdaa4)] z-[3]"
                        type="radio"
                      />
                    </div>
                    <div className="relative leading-[32px] z-[3]">{`A shining crescent far `}</div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-4 px-[46px] pb-3.5 bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap z-[3]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded box-border border-[1px] border-solid border-cornflowerblue-200" />
                <b className="w-[77px] relative text-base tracking-[-1px] inline-block font-spartan text-cornflowerblue-100 text-center min-w-[77px] z-[1]">
                  Get Ticket
                </b>
              </button>
            </div>
          </div>
          <div className="shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white flex flex-col items-end justify-start pt-16 pb-20 pr-[100px] pl-12 box-border gap-[49px] max-w-full z-[3] mq450:gap-[24px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[42px] mq750:pb-[52px] mq750:box-border">
            <div className="w-[370px] h-[624px] relative shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white hidden max-w-full" />
            <div className="w-[169px] flex flex-row items-start justify-end py-0 px-[30px] box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[19px]">
                  <div className="h-[70px] flex-1 flex flex-row items-start justify-start relative">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <img
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[4]"
                        alt=""
                        src="/oval-5.svg"
                      />
                      <img
                        className="absolute top-[17px] left-[21px] w-7 h-9 z-[5]"
                        alt=""
                        src="/combined-shape-9.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 pb-[11px] pr-[23px] pl-6">
                  <div className="relative leading-[32px] inline-block min-w-[62px] z-[4]">
                    Premium
                  </div>
                </div>
                <b className="self-stretch relative text-21xl tracking-[-2px] leading-[48px] inline-block font-spartan text-darkslategray-100 min-w-[109px] whitespace-nowrap z-[4] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                  $249
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end pt-0 pb-[5px] pr-[26px] pl-0 text-left text-darkslategray-100">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <input
                      className="cursor-pointer m-0 w-4 h-4 relative [background:linear-gradient(180deg,_#a6d8be,_#fcefba)] z-[4]"
                      type="radio"
                    />
                  </div>
                  <div className="relative leading-[32px] z-[4]">
                    Waves flung themselves
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <input
                      className="cursor-pointer m-0 w-4 h-4 relative [background:linear-gradient(180deg,_#a6d8be,_#fcefba)] z-[4]"
                      type="radio"
                    />
                  </div>
                  <div className="relative leading-[32px] z-[4]">
                    Almost before we knew it
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[12px] text-darkslategray-200">
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <input
                      className="cursor-pointer m-0 w-4 h-4 relative [background:linear-gradient(180deg,_#f4a69b,_#fbdaa4)] z-[4]"
                      type="radio"
                    />
                  </div>
                  <div className="relative leading-[32px] z-[4]">{`A shining crescent far `}</div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-4 px-[46px] pb-3.5 bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap z-[4]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-royalblue" />
              <b className="w-[77px] relative text-base tracking-[-1px] inline-block font-spartan text-white text-center min-w-[77px] z-[1]">
                Get Ticket
              </b>
            </button>
          </div>
          <div className="w-[222px] flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border mq750:pt-[42px] mq750:box-border">
            <div className="self-stretch flex flex-col items-end justify-start gap-[49px]">
              <div className="w-[168px] flex flex-row items-start justify-end py-0 px-[30px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[18px]">
                    <div className="h-[70px] flex-1 flex flex-row items-start justify-start relative">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                          alt=""
                          src="/oval-6.svg"
                        />
                        <img
                          className="absolute top-[17px] left-[21px] w-7 h-9 z-[4]"
                          alt=""
                          src="/combined-shape-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start pt-0 px-[43px] pb-[11px]">
                    <div className="relative leading-[32px] inline-block min-w-[22px] z-[3]">
                      VIP
                    </div>
                  </div>
                  <b className="self-stretch relative text-21xl tracking-[-2px] leading-[48px] inline-block font-spartan text-darkslategray-100 min-w-[108px] whitespace-nowrap z-[3] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    $499
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5px] pr-[26px] pl-0 text-left text-darkslategray-100">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative z-[3]"
                        alt=""
                        src="/shape-7.svg"
                      />
                    </div>
                    <div className="relative leading-[32px] z-[3]">
                      Waves flung themselves
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative z-[3]"
                        alt=""
                        src="/shape-7.svg"
                      />
                    </div>
                    <div className="relative leading-[32px] z-[3]">
                      Almost before we knew it
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative z-[3]"
                        alt=""
                        src="/shape-7.svg"
                      />
                    </div>
                    <div className="relative leading-[32px] z-[3]">{`A shining crescent far `}</div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-4 px-[46px] pb-3.5 bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap z-[3]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded box-border border-[1px] border-solid border-cornflowerblue-200" />
                <b className="w-[77px] relative text-base tracking-[-1px] inline-block font-spartan text-cornflowerblue-100 text-center min-w-[77px] z-[1]">
                  Get Ticket
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContainer;
