import type { NextPage } from "next";

const ThirdSchedule: NextPage = () => {
  const scheduleData = [
    {
      time: "12:30",
      image: "/bitmap-11@2x.png",
      title: "Best Photoshop Collage Templates",
      speaker: "Leanne Simpson",
      location: "Room #4",
    },
    {
      time: "14:00",
      image: "/bitmap-12@2x.png",
      title: "Lens Flare Trends! What Is Lens Flare?",
      speaker: "Leo Knight",
      location: "Medium Room",
    },
    {
      time: "16:00",
      image: "/bitmap-13@2x.png",
      title: "Best Creative InDesign Brochure Templates",
      speaker: "Sung Jin-Shil",
      location: "Big Arena",
    },
  ];

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full text-left text-lg text-darksalmon-100 font-spartan lg:pl-6 lg:pr-6 lg:box-border">
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[717px] flex flex-col items-start justify-start gap-[106px] max-w-full mq450:gap-[26px] mq750:gap-[53px]">
          {scheduleData.map((event, index) => (
            <div
              key={index}
              className="flex-1 flex flex-row items-start justify-between gap-[20px]"
            >
              <div className="w-[159px] flex flex-row items-start justify-between gap-[20px]">
                <div className="relative leading-[32px] inline-block min-w-[59px] z-[3]">
                  {event.location}
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img
                    className="w-8 h-8 relative z-[3]"
                    alt=""
                    src="/combined-shape-4.svg"
                  />
                </div>
              </div>
              <div className="w-[717px] flex flex-col items-start justify-start gap-[26px] max-w-full">
                <div className="flex flex-col items-start justify-start gap-[3px]">
                  <b className="relative tracking-[2px] leading-[32px] uppercase inline-block min-w-[57px] z-[3]">
                    {event.time}
                  </b>
                  <img
                    className="h-[70px] w-[70px] relative object-cover min-h-[70px] z-[3]"
                    alt=""
                    src={event.image}
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[209px] max-w-full text-5xl text-darkslategray-100">
                    <h3 className="m-0 relative text-inherit tracking-[-1px] leading-[32px] font-bold font-inherit z-[3] mq450:text-lgi mq450:leading-[26px]">
                      {event.title}
                    </h3>
                    <div className="relative text-base leading-[32px] font-source-sans-pro text-darkslategray-200 z-[3]">
                      {event.speaker}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[198px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border text-right text-base text-darkslategray-100 font-source-sans-pro">
          {scheduleData.map((event, index) => (
            <div
              key={index}
              className="self-stretch flex flex-row items-start justify-between gap-[20px]"
            >
              <div className="relative leading-[32px] inline-block min-w-[98px] z-[3]">
                {event.location}
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-8 h-8 relative z-[3]"
                  alt=""
                  src="/combined-shape-4.svg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSchedule;
