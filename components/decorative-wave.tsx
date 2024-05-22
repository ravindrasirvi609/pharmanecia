import type { NextPage } from "next";

const DecorativeWave: NextPage = () => {
  return (
    <section className="ml-[-159px] mb-[34px] w-[1584px] flex flex-row items-start justify-start relative max-w-[126%] shrink-0 text-left text-53xl text-white font-spartan">
      <img
        className="h-[581px] flex-1 relative max-w-full overflow-hidden z-[3]"
        loading="lazy"
        alt=""
        src="/wave.svg"
      />
      <div className="w-[1138px] !m-[0] absolute bottom-[203px] left-[207px] flex flex-row flex-wrap items-start justify-start gap-[62px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[178px] max-w-[238px]">
          <b className="relative tracking-[-2px] leading-[80px] inline-block min-w-[94px] z-[4] mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
            7+
          </b>
          <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[4]">
            Strain of sacred music, or a noble picture, or a passage from
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[178px] max-w-[238px]">
          <b className="relative tracking-[-2px] leading-[80px] z-[4] mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
            24k
          </b>
          <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[4]">
            Music, or a noble picture, or a passage from the grander poets
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[178px] max-w-[238px]">
          <b className="relative tracking-[-2px] leading-[80px] inline-block min-w-[122px] z-[4] mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
            5%
          </b>
          <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[4]">
            Noble picture, or a passage from the grander poets always does
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[178px] max-w-[238px]">
          <b className="relative tracking-[-2px] leading-[80px] inline-block min-w-[121px] z-[4] mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
            3m
          </b>
          <div className="self-stretch relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[4]">
            Picture, or a passage from the grander poets always one good
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorativeWave;
