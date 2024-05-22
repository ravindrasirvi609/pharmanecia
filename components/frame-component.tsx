import type { NextPage } from "next";
import SpeakerGrid from "./speaker-grid";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-12 pb-[29px] box-border max-w-full text-center text-lg text-darksalmon-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[71px] max-w-full lg:gap-[35px] mq750:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
          <div className="w-[470px] flex flex-col items-end justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
              <b className="relative tracking-[2px] leading-[32px] uppercase z-[3]">
                Event Speakers
              </b>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[29px] text-37xl text-darkslategray-100">
              <div className="flex flex-row items-start justify-end py-0 pr-[13px] pl-[15px]">
                <h1 className="m-0 w-[442px] relative text-inherit tracking-[-2px] leading-[64px] font-bold font-inherit inline-block z-[3] mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
                  Event Speakers
                </h1>
              </div>
              <div className="self-stretch relative text-xl leading-[32px] font-source-sans-pro z-[3] mq450:text-base mq450:leading-[26px]">
                The sky was cloudless and of a deep dark blue. The spectacle
                before us was indeed sublime.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[38px_28.7px] min-h-[762px] text-left text-5xl text-darkslategray-100">
          <SpeakerGrid
            bitmap="/bitmap-1@2x.png"
            alfieWood="Alfie Wood"
            apple="Apple"
          />
          <SpeakerGrid
            bitmap="/bitmap-2@2x.png"
            alfieWood="Conan Matusov"
            apple="Google"
            propDisplay="unset"
            propMinWidth="unset"
            propMinWidth1="48px"
          />
          <SpeakerGrid
            bitmap="/bitmap-3@2x.png"
            alfieWood="Gabriel Pires"
            apple="Microsoft"
            propDisplay="unset"
            propMinWidth="unset"
            propMinWidth1="62px"
          />
          <SpeakerGrid
            bitmap="/bitmap-4@2x.png"
            alfieWood="Diane Lansdowne"
            apple="Facebook"
            propDisplay="unset"
            propMinWidth="unset"
            propMinWidth1="65px"
          />
          <SpeakerGrid
            bitmap="/bitmap-5@2x.png"
            alfieWood="Farhad Tarokh"
            apple="Instagram"
            propDisplay="unset"
            propMinWidth="unset"
            propMinWidth1="68px"
          />
          <SpeakerGrid
            bitmap="/bitmap-6@2x.png"
            alfieWood="Shen Zhi"
            apple="TikTok"
            propDisplay="inline-block"
            propMinWidth="108px"
            propMinWidth1="44px"
          />
          <SpeakerGrid
            bitmap="/bitmap-7@2x.png"
            alfieWood="Ilya Vasin"
            apple="DoDo Pizza"
            propDisplay="inline-block"
            propMinWidth="118px"
            propMinWidth1="75px"
          />
          <SpeakerGrid
            bitmap="/bitmap-8@2x.png"
            alfieWood="Riley Cooper"
            apple="Figma"
            propDisplay="unset"
            propMinWidth="unset"
            propMinWidth1="42px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
