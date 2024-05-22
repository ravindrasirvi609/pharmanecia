import type { NextPage } from "next";
import NetworkIcons from "./network-icons";

const FrameComponent2: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end pt-0 px-12 pb-[183px] box-border max-w-full text-center text-lg text-darksalmon-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border mq750:pb-[77px] mq750:box-border mq1050:pb-[119px] mq1050:box-border">
      <div className="w-[1100px] flex flex-col items-start justify-start gap-[103px] max-w-full lg:gap-[51px] mq750:gap-[26px]">
        <div className="w-[1030px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[470px] flex flex-col items-end justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
              <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
                Event Features
              </b>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[29px] text-37xl text-darkslategray-100">
              <div className="flex flex-row items-start justify-end py-0 pr-[22px] pl-6">
                <h1 className="m-0 w-[424px] relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                  Event Features
                </h1>
              </div>
              <div className="self-stretch relative text-xl leading-[32px] font-source-sans-pro z-[3] mq450:text-base mq450:leading-[26px]">
                The sky was cloudless and of a deep dark blue. The spectacle
                before us was indeed sublime.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[160px] max-w-full text-left text-5xl text-white lg:gap-[80px] mq450:gap-[20px] mq750:gap-[40px] mq1050:flex-wrap">
          <div className="flex flex-row items-start justify-start relative min-w-[370px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="h-[272px] w-[272px] absolute !m-[0] top-[48px] left-[-70px] z-[3]"
              alt=""
              src="/mask.svg"
            />
            <img
              className="h-[272px] w-[272px] absolute !m-[0] right-[-68px] bottom-[48px] z-[4]"
              alt=""
              src="/mask-1.svg"
            />
            <div className="shadow-[0px_20px_40px_rgba(58,_60,_0,_0.1)] rounded [background:linear-gradient(180deg,_#f4a69b,_#fbdaa4)] flex flex-col items-start justify-start pt-[39px] pb-[38px] pr-9 pl-[46px] box-border gap-[87px] max-w-full z-[5] mq450:gap-[43px] mq450:pl-5 mq450:box-border mq750:pt-[25px] mq750:pb-[25px] mq750:box-border">
              <div className="w-[370px] h-[512px] relative shadow-[0px_20px_40px_rgba(58,_60,_0,_0.1)] rounded [background:linear-gradient(180deg,_#f4a69b,_#fbdaa4)] hidden max-w-full" />
              <div className="flex flex-col items-start justify-start gap-[124px] mq450:gap-[62px]">
                <div className="w-[278px] flex flex-row items-start justify-between gap-[20px]">
                  <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit inline-block min-w-[113px] z-[6] mq450:text-lgi mq450:leading-[26px]">
                    February
                  </h3>
                  <b className="w-[70px] relative tracking-[-1px] leading-[32px] inline-block text-right min-w-[70px] z-[6] mq450:text-lgi mq450:leading-[26px]">
                    2020
                  </b>
                </div>
                <b className="relative text-89xl tracking-[-3px] z-[6] mq450:text-13xl mq1050:text-35xl">
                  12-14
                </b>
              </div>
              <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[6]">
                <p className="m-0">{`24 Lakewood Street `}</p>
                <p className="m-0">Webster, NY 14580</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[33.1px] min-w-[370px] max-w-full text-darkslategray-100 mq750:gap-[17px] mq750:min-w-full">
            <div className="w-[372.9px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq1050:flex-1">
                <img
                  className="self-stretch w-[61.9px] relative max-h-full min-h-[70px] shrink-0 [debug_commit:bf4bc93] z-[3]"
                  loading="lazy"
                  alt=""
                  src="/combined-shape.svg"
                />
                <img
                  className="h-[69.9px] w-[67.8px] relative min-h-[70px] shrink-0 [debug_commit:bf4bc93] z-[3]"
                  alt=""
                  src="/combined-shape-1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq750:flex-wrap">
              <NetworkIcons
                network="Network"
                strainOfSacredMus="Strain of sacred music, or a noble picture, or a passage from"
                combinedShape="/combined-shape-2.svg"
                inspiration="Inspiration"
                noblePictureOrA="Noble picture, or a passage from the grander poets always does"
              />
              <NetworkIcons
                network="Education"
                strainOfSacredMus="Music, or a noble picture, or a passage from the grander poets"
                combinedShape="/combined-shape-3.svg"
                inspiration="Experience"
                noblePictureOrA="Picture, or a passage from the grander poets always does one good"
                propMinWidth="124px"
                propWidth="67.9px"
                propDebugCommit="unset"
                propDebugCommit1="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
