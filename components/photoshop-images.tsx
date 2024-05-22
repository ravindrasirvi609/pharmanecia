import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PhotoshopImagesType = {
  emptyTopImage?: string;
  bitmap?: string;
  bestPhotoshopColla?: string;
  leanneSimpson?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const PhotoshopImages: NextPage<PhotoshopImagesType> = ({
  emptyTopImage,
  bitmap,
  bestPhotoshopColla,
  leanneSimpson,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propAlignSelf1,
  propMinWidth1,
}) => {
  const photoshopImagesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const photoDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const photoDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const leanneSimpsonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-lg text-darksalmon-100 font-spartan mq750:flex-wrap"
      style={photoshopImagesStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[19px] pb-0 pr-1.5 pl-0">
        <b className="relative tracking-[2px] leading-[32px] uppercase inline-block min-w-[64px] whitespace-nowrap z-[3]">
          {emptyTopImage}
        </b>
      </div>
      <img
        className="h-[70px] w-[70px] relative object-cover min-h-[70px] z-[3]"
        alt=""
        src={bitmap}
      />
      <div
        className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-5xl text-darkslategray-100"
        style={photoDetailsStyle}
      >
        <div
          className="flex flex-col items-start justify-start gap-[3px]"
          style={photoDescriptionStyle}
        >
          <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[26px]">
            {bestPhotoshopColla}
          </h3>
          <div
            className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[111px] z-[3]"
            style={leanneSimpsonStyle}
          >
            {leanneSimpson}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoshopImages;
