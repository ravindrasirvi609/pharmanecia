import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SpeakerGridType = {
  bitmap?: string;
  alfieWood?: string;
  apple?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const SpeakerGrid: NextPage<SpeakerGridType> = ({
  bitmap,
  alfieWood,
  apple,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const alfieWoodStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const appleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="flex flex-col items-start justify-start gap-[23px] text-left text-5xl text-darkslategray-100 font-spartan">
      <img
        className="w-[270px] h-[272px] relative object-cover z-[3]"
        alt=""
        src={bitmap}
      />
      <div className="flex flex-col items-start justify-start gap-[3px]">
        <h3
          className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[26px]"
          style={alfieWoodStyle}
        >
          {alfieWood}
        </h3>
        <div
          className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 inline-block min-w-[39px] z-[3]"
          style={appleStyle}
        >
          {apple}
        </div>
      </div>
    </div>
  );
};

export default SpeakerGrid;
