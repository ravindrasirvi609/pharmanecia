import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DarkFieldDefaultType = {
  placeholder?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
};

const DarkFieldDefault: NextPage<DarkFieldDefaultType> = ({
  placeholder,
  propMarginTop,
}) => {
  const darkFieldDefaultStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 relative gap-[21px] z-[5] text-left text-xs text-white font-source-sans-pro"
      style={darkFieldDefaultStyle}
    >
      <b className="w-0 h-[15px] relative uppercase inline-block">{` `}</b>
      <input
        className="[border:none] [outline:none] bg-white w-full h-12 absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded"
        type="text"
      />
      <div className="flex flex-row items-start justify-start py-0 px-4 text-base text-darkslategray-200">
        <div className="relative leading-[32px] inline-block min-w-[72px] z-[1]">
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default DarkFieldDefault;
