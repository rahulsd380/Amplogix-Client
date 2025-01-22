/* eslint-disable react/no-unescaped-entities */
import { IMAGES } from "@/assets";
import Image from "next/image";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <div className="relative h-[550px] flex flex-col gap-2 items-center justify-center">
      <Image
        src={IMAGES.heroBg}
        alt=""
        className="absolute top-0 bottom-0 right-0 left-0 z-0"
      />
      <h1 className="font-Poppins font-extrabold text-[32px] md:text-[56px] lg:text-[70px] xl:text-[86px] text-white text-center max-w-[1300px] z-10 mx-auto">
        Empowering{" "}
        <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent">
          Your Success
        </span>{" "}
        Through Technology
      </h1>
      <p className="font-Inter text-sm md:text-lg text-center max-w-[980px] mx-auto text-neutral-15 z-10">
        At <span className="font-semibold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-clip-text text-transparent">Amplogix</span>, we
        empower your success through innovative technology solutions. From
        digital transformation to web development, we turn ideas into impactful
        platforms, driving growth and amplifying your brand's potential.
      </p>
      <HeroButtons />
    </div>
  );
};

export default Hero;
