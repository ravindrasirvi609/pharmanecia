import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NetworkIconsType = {
  network?: string;
  strainOfSacredMus?: string;
  combinedShape?: string;
  inspiration?: string;
  noblePictureOrA?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propDebugCommit?: CSSProperties["debugCommit"];
  propDebugCommit1?: CSSProperties["debugCommit"];
};

const NetworkIcons: NextPage<NetworkIconsType> = ({
  network,
  strainOfSacredMus,
  combinedShape,
  inspiration,
  noblePictureOrA,
  propMinWidth,
  propWidth,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const networkStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const combinedShapeIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      debugCommit: propDebugCommit,
    };
  }, [propWidth, propDebugCommit]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[70.1px] min-w-[175px] text-left text-5xl text-darkslategray-100 font-spartan mq450:gap-[35px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <h3
          className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit inline-block min-w-[110px] z-[3] mq450:text-lgi mq450:leading-[26px]"
          style={networkStyle}
        >
          {network}
        </h3>
        <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[3]">
          {strainOfSacredMus}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[33.1px] mq450:gap-[17px]">
        <div className="flex flex-row items-start justify-start py-0 px-1">
          <img
            className="h-[69.8px] w-[60.8px] relative shrink-0 [debug_commit:bf4bc93] z-[3]"
            alt=""
            src={combinedShape}
            style={combinedShapeIconStyle}
          />
        </div>
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[19px] shrink-0 [debug_commit:bf4bc93]"
          style={frameDivStyle}
        >
          <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[26px]">
            {inspiration}
          </h3>
          <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[3]">
            {noblePictureOrA}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkIcons;
