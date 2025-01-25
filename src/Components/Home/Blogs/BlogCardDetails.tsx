import { ICONS,  } from "@/assets";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface BlogCardDetailsProps {
  category: string;
  title: string;
  authorName: string;
  authorImage: string | StaticImageData;
  date: string;
  readTime: string;
  description: string;
  blogImage: string | StaticImageData;
}

const BlogCardDetails: React.FC<BlogCardDetailsProps> = ({
  category,
  title,
  authorName,
  authorImage,
  date,
  readTime,
  description,
  blogImage,
}) => {
  const shortDetailsStyling =
    "text-neutral-15 font-sans text-xs font-normal  capitalize";

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between gap-5 md:gap-10 w-full">
      <div className="text-white font-Poppins md:py-12 w-full md:w-[60%]">
        <div className="bg-gradient-to-r from-fuchsia-600/30 via-purple-500/30 to-violet-300/25 px-2 py-1 text-white w-fit rounded-lg text-[10px]">
          {category}
        </div>
        <h1 className="text-3xl bg-text-gradient bg-clip-text text-transparent leading-[45px] font-semibold mt-1">
          {title}
        </h1>
        <div className="flex items-center justify-start gap-[10px] my-5 h-[18px]">
          <div className="flex gap-2 items-center justify-start">
            <Image
              className="size-[18px] "
              src={authorImage}
              alt="Author Image"
            />
            <div className={shortDetailsStyling}>{authorName}</div>
          </div>
          <div className="h-[16px] w-[1px] bg-neutral-600"></div>
          <div className="flex gap-2 items-center justify-start">
            <Image
              className="size-[18px]"
              src={ICONS.calender}
              alt="Calendar Icon"
            />
            <div className={shortDetailsStyling}>{date}</div>
          </div>
          <div className="h-[16px] w-[1px] bg-neutral-600"></div>
          <div className="flex gap-2 items-center justify-start">
            <Image
              className="size-[18px]"
              src={ICONS.clock}
              alt="Clock Icon"
            />
            <div className={shortDetailsStyling}>{readTime} min. To Read</div>
          </div>
        </div>
        <p className="font-Inter text-neutral-40 mt-3">{description}</p>
      </div>
      <div className="w-full md:w-[40%] p-4 pt-12 md:pt-0">
  <div className="relative h-[200px] sm:h-[300px] md:h-[400px] md:h-full w-full">
    <div className="absolute -top-4 -left-4 w-[60%] h-[75%] bg-gradient-to-r from-fuchsia-600/50 via-purple-500/50 to-violet-300/45 rounded-lg"></div>
    <div className="absolute w-full h-full rounded-lg overflow-hidden">
      <Image
        src={blogImage}
        alt="Blog Image"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default BlogCardDetails;
