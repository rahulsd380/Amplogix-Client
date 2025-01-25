import React from 'react'
 import { ICONS,  } from "@/assets";
 import Image from "next/image";
 import { StaticImageData } from "next/image";
 
 interface BlogPreviewCardDetailsProps {
   category: string;
   title: string;
   authorName: string;
   authorImage: string | StaticImageData;
   date: string;
   readTime: string;
   description: string;
 }
 
const BlogsPreviewCard :React.FC<BlogPreviewCardDetailsProps> = ({
   category,
   title,
   authorName,
   authorImage,
   date,
   readTime,
   description,
 }) => {
   const shortDetailsStyling =
     "text-neutral-15 font-sans text-xs font-normal  capitalize";
 

  return (
    <div className=" w-full">
          <div className="text-white font-Poppins  w-full ">
            <div className="bg-gradient-to-r from-fuchsia-600/30 via-purple-500/30 to-violet-300/25 px-2 py-1 text-white w-fit rounded-lg text-[10px] ">
              {category}
            </div>
            <h1 className="text-lg bg-text-gradient bg-clip-text text-transparent  font-semibold mt-2">
              {title}
            </h1>
            <div className="flex items-center justify-start gap-[10px] my-2 h-[18px]">
              <div className="flex gap-2 items-center justify-start">
                <Image
                  className="size-[18px]"
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
        </div>
  )
}

export default BlogsPreviewCard