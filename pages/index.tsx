import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import EventScheduleContainer from "../components/event-schedule-container";
import FirstScheduleDetailsContain from "../components/first-schedule-details-contain";
import ThirdSchedule from "../components/third-schedule";
import DecorativeWave from "../components/decorative-wave";
import SponsorContainer from "../components/sponsor-container";
import SponsorGallery from "../components/sponsor-gallery";
import Testimonial1 from "../components/testimonial1";
import EventTimer from "../components/event-timer";
import EventLocation from "../components/event-location";
import LocationMap from "../components/location-map";
import LocationContainer from "../components/location-container";
import SubscribeContent from "../components/subscribe-content";
import Testimonial from "../components/testimonial";

const Event1: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-4 px-[10px] pb-[38px] box-border gap-[130px] leading-[normal] tracking-[normal] lg:gap-[65px] lg:pl-[43px] lg:pr-[43px] lg:box-border mq450:gap-[16px] mq750:gap-[32px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border">
      <div className="w-[1440px] h-[880px] relative bg-white hidden max-w-full z-[0]" />
      <FrameComponent3 />
      <section className="w-[968px] flex flex-row items-start justify-start pt-0 px-12 pb-[134px] box-border max-w-full text-left text-lg text-darksalmon-100 font-spartan mq750:pb-[87px] mq750:box-border mq1050:pl-6 mq1050:pr-6 mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px] max-w-full mq450:gap-[18px]">
          <b className="relative tracking-[2px] leading-[32px] uppercase z-[1]">
            Design meetup
          </b>
          <div className="self-stretch flex flex-row items-end justify-start gap-[59px] max-w-full text-53xl text-darkslategray-100 mq450:gap-[29px] mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                    <h1 className="m-0 flex-1 relative text-inherit tracking-[-2px] leading-[80px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
                      <p className="m-0">{`Most Creative `}</p>
                      <p className="m-0">Conference</p>
                    </h1>
                    <div className="h-[893px] w-[1084px] absolute !m-[0] right-[-764px] bottom-[-415px]">
                      <img
                        className="absolute top-[-74px] left-[0px] w-[1461px] h-[967px] object-cover z-[1]"
                        alt=""
                        src="/bg-pic@2x.png"
                      />
                      <div className="absolute top-[125px] left-[579px] w-[370px] h-[499px] z-[3] flex items-center justify-center">
                        <img
                          className="w-full h-full z-[3] object-contain absolute left-[0px] top-[30px] [transform:scale(1.216)]"
                          loading="lazy"
                          alt=""
                          src="/man@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[470px] relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block max-w-full z-[2]">
                    The sky was cloudless and of a deep dark blue. The spectacle
                    before us was indeed sublime.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[30px] max-w-full text-5xl mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <button className="cursor-pointer [border:none] pt-4 px-12 pb-3.5 bg-[transparent] flex flex-row items-start justify-start relative z-[1]">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-royalblue" />
                      <b className="w-[73px] relative text-base tracking-[-1px] inline-block font-spartan text-white text-center min-w-[73px] z-[1]">
                        Schedule
                      </b>
                    </button>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative tracking-[-1px] leading-[32px] shrink-0 [debug_commit:bf4bc93] z-[2] mq450:text-lgi mq450:leading-[26px]">
                      12-14 February, 2020
                    </b>
                    <div className="h-[29px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-base text-darkslategray-200 font-source-sans-pro">
                      <div className="mt-[-3px] relative leading-[32px] inline-block min-w-[97px] shrink-0 [debug_commit:bf4bc93] z-[2]">
                        New York, USA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[272px] w-[272px] relative object-contain z-[2] mq1050:flex-1"
              alt=""
              src="/mic@2x.png"
            />
          </div>
        </div>
      </section>
      <div className="w-[1440px] h-[11472px] relative bg-white hidden max-w-full z-[3]" />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <EventScheduleContainer />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[66px] box-border gap-[53px] max-w-full text-left text-lg text-darksalmon-100 font-spartan mq450:pb-7 mq450:box-border mq750:gap-[26px] mq1050:pb-[43px] mq1050:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full lg:pl-6 lg:pr-6 lg:box-border">
          <FirstScheduleDetailsContain />
        </div>
        <div className="self-stretch shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white flex flex-row items-end justify-between pt-[54px] px-12 pb-[52px] box-border max-w-full gap-[20px] z-[3] lg:flex-wrap lg:pl-6 lg:pr-6 lg:box-border">
          <div className="h-44 w-[1266px] relative shadow-[0px_20px_40px_rgba(0,_0,_0,_0.1)] rounded bg-white hidden max-w-full" />
          <div className="w-[708px] flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[19px] pb-0 pr-[9px] pl-0">
              <b className="relative tracking-[2px] leading-[32px] uppercase inline-block min-w-[61px] whitespace-nowrap z-[4]">
                11:00
              </b>
            </div>
            <img
              className="h-[70px] w-[70px] relative object-cover min-h-[70px] z-[4]"
              alt=""
              src="/bitmap-10@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[330px] max-w-full text-5xl text-darkslategray-100">
              <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[4] mq450:text-lgi mq450:leading-[26px]">
                  How to Make a Clipping Mask in InDesign
                </h3>
                <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[85px] z-[4]">
                  Kevin Noboa
                </div>
              </div>
            </div>
          </div>
          <div className="w-[181px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border text-right text-base text-darkslategray-100 font-source-sans-pro">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[32px] inline-block min-w-[81px] z-[4]">
                Small Room
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-8 h-8 relative z-[4]"
                  alt=""
                  src="/combined-shape-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <ThirdSchedule />
      </section>
      <DecorativeWave />
      <SponsorContainer />
      <SponsorGallery />
      <Testimonial1 />
      <EventTimer />
      <img
        className="w-[1039px] h-[606px] absolute !m-[0] bottom-[3048px] left-[-121px] object-contain z-[6]"
        alt=""
        src="/bitmap-29@2x.png"
      />
      <EventLocation />
      <LocationMap />
      <LocationContainer />
      <img
        className="w-[1584px] h-[758px] absolute !m-[0] bottom-[-106px] left-[calc(50%_-_792px)] object-cover z-[3]"
        alt=""
        src="/wave-1@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full lg:pl-6 lg:pr-6 lg:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[73px] max-w-full lg:gap-[36px] mq750:gap-[18px]">
          <SubscribeContent />
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Event1;
