/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type TWhyChooseUsCard = {
  icon: any;
  title: string;
  description: string;
};

const WhyChooseUsCard: React.FC<TWhyChooseUsCard> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-neutral-20 p-6 rounded-xl border border-transparent hover:border-purple-700 transition-all duration-300 relative group">
      <div className="hidden lg:block size-[280px] rounded-full bg-neutral-20 group-hover:bg-primary-20/20 bg-opacity-30 blur-[100px] absolute top-2"></div>
      <Image src={icon} alt="on time delivery icon" className="size-[54px]" />
      <div className="flex flex-col gap-9 mt-12">
        <h1 className="bg-text-gradient bg-clip-text text-transparent text-2xl font-semibold font-Poppins">
          {title}
        </h1>

        <div className="w-[120px] bg-text-gradient h-[1px] group-hover:w-[200px] transition-all duration-500"></div>
        <p className="text-white font-Inter text-lg">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
