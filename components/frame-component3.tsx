import Link from "next/link";
import { NextPage } from "next";

const FrameComponent3: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between py-4 px-6 max-w-full text-left text-21xl text-darkslategray-100 font-spartan lg:px-6 bg-darkslategray-900 relative z-10">
      <div className="flex-1 flex flex-row items-center justify-between max-w-full">
        <h1 className="m-0 text-inherit tracking-[-2px] leading-[48px] font-bold text-darksalmon-200">
          Pharmanecia
        </h1>
        <nav className="flex-1 flex flex-row items-center justify-end gap-6 text-base text-white font-source-sans-pro">
          <Link href="/about">
            <span className="hover:text-darksalmon-200">About</span>
          </Link>
          <Link href="/speakers">
            <span className="hover:text-darksalmon-200">Speakers</span>
          </Link>
          <Link href="/schedule">
            <span className="hover:text-darksalmon-200">Schedule</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-darksalmon-200">Contact</span>
          </Link>
          <div className="relative text-center font-spartan">
            <Link href="/get-ticket">
              <span className="inline-block px-4 py-2 rounded bg-darksalmon-200 text-white font-bold">
                Get Ticket
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default FrameComponent3;
