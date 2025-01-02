import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-black relative overflow-clip text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#787AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <Image
                src="/assets/arrow-right.png"
                alt="arrow"
                height={12}
                width={12}
              />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8">
         <div className="inline-flex relative">
         <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
            One task <br />
            at a time
          </h1>
          <Image src="/assets/cursor.png" alt="cursor" height={200} width={200} className="absolute right-[476px] top-[108px] hidden sm:inline"/>
          <Image src="/assets/message.png" alt="cursor" height={200} width={200} className="absolute top-[56px] left-[498px] hidden sm:inline" />
         </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8 ">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
