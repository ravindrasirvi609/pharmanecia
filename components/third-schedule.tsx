import type { NextPage } from "next";
import PhotoshopImages from "./photoshop-images";

const ThirdSchedule: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-left text-lg text-darksalmon-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border">
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[717px] flex flex-col items-start justify-start gap-[106px] max-w-full mq450:gap-[26px] mq750:gap-[53px]">
          <PhotoshopImages
            emptyTopImage="12:30"
            bitmap="/bitmap-11@2x.png"
            bestPhotoshopColla="Best Photoshop Collage Templates"
            leanneSimpson="Leanne Simpson"
          />
          <PhotoshopImages
            emptyTopImage="14:00"
            bitmap="/bitmap-12@2x.png"
            bestPhotoshopColla="Lens Flare Trends! What Is Lens Flare?"
            leanneSimpson="Leo Knight"
            propAlignSelf="unset"
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf1="unset"
            propMinWidth1="72px"
          />
          <PhotoshopImages
            emptyTopImage="16:00"
            bitmap="/bitmap-13@2x.png"
            bestPhotoshopColla="Best Creative InDesign Brochure Templates"
            leanneSimpson="Sung Jin-Shil"
            propAlignSelf="stretch"
            propFlex="1"
            propMinWidth="336px"
            propAlignSelf1="stretch"
            propMinWidth1="88px"
          />
        </div>
        <div className="w-[198px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border text-right text-base text-darkslategray-100 font-source-sans-pro">
          <div className="self-stretch flex flex-col items-end justify-start gap-[142px]">
            <div className="w-[159px] flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[32px] inline-block min-w-[59px] z-[3]">
                Room #4
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-8 h-8 relative z-[3]"
                  alt=""
                  src="/combined-shape-4.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[32px] inline-block min-w-[98px] z-[3]">
                Medium Room
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-8 h-8 relative z-[3]"
                  alt=""
                  src="/combined-shape-4.svg"
                />
              </div>
            </div>
            <div className="w-[164px] flex flex-row items-start justify-between gap-[20px]">
              <div className="relative leading-[32px] inline-block min-w-[64px] z-[3]">
                Big Arena
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-8 h-8 relative z-[3]"
                  alt=""
                  src="/combined-shape-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSchedule;
