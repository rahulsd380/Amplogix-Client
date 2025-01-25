"use client"
import Container from "@/Components/Reusable/Container/Container";
import BlogCardDetails from "./BlogCardDetails";
import { IMAGES } from "@/assets";
import BlogsPreviewCard from "./BlogsPreviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const Blogs = () => {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row justify-between gap-10 w-full mt-24">
        <div className="w-full xl:w-[70%]">
          <h1 className="text-white font-semibold text-[28px] md:text-[40px] font-Poppins">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent mr-3">
              Featured
            </span>
            This Month
          </h1>
          <div className="h-[420px] overflow-y-auto flex flex-col gap-7 custom-scrollbar mt-16 pr-6">
          <BlogCardDetails
            category="Web Development"
            title="Why do you need a website for your business?"
            authorName="Amplogix"
            authorImage={IMAGES.logo}
            date="20 December 2025"
            readTime="3 "
            description="Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models.Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change."
            blogImage={IMAGES.project1}
          />
          <BlogCardDetails
            category="Web Development"
            title="Why do you need a website?"
            authorName="Amplogix"
            authorImage={IMAGES.logo}
            date="20 December 2025"
            readTime="3 "
            description="Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models."
            blogImage={IMAGES.project1}
          />
          </div>
        </div>
        <div className="w-full xl:w-[30%] ">
          <h1 className="text-white font-semibold text-[28px] md:text-[40px] font-Poppins">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent mr-3">
              Popular
            </span>
            Posted
          </h1>
          <div className="mt-16">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="blogs-swiper"
      >
        {/* Blog Slides */}
        <SwiperSlide className="mb-14">
          <div className="flex flex-col gap-8">
          <BlogsPreviewCard
            category="Web Development"
            title="Why You Need a Website?"
            authorName="Amplogix"
            authorImage={IMAGES.logo}
            date="January 25, 2025"
            readTime="5"
            description="Dynamically underwhelm integrated outsourcing via timely models. Rapidly reconceptualize visionary imperatives without 24/365 catalysts for change."
          />
          <BlogsPreviewCard
            category="Web Development"
            title="Why You Need a Website?"
            authorName="Amplogix"
            authorImage={IMAGES.logo}
            date="January 25, 2025"
            readTime="5"
            description="Dynamically underwhelm integrated outsourcing via timely models. Rapidly reconceptualize visionary imperatives ..."
          />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col gap-8">
          <BlogsPreviewCard
            category="Web Development"
            title="Why You Need a Website?"
            authorName="Amplogix"
            authorImage={IMAGES.logo}
            date="January 25, 2025"
            readTime="5"
            description="Dynamically underwhelm integrated outsourcing via timely models. Rapidly reconceptualize visionary imperatives without 24/365 catalysts for change."
          />
          <BlogsPreviewCard
            category="Web Development"
            title="Why You Need a Website?"
            authorName="Amplogix"
            authorImage={IMAGES.logo}
            date="January 25, 2025"
            readTime="5"
            description="Dynamically underwhelm integrated outsourcing via timely models. Rapidly reconceptualize visionary imperatives ..."
          />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
        </div>

        {/* Custom Swiper Pagination Styles */}
      <style jsx global>{`
        .blogs-swiper .swiper-pagination-bullet {
          background-color: #CACACA; /* Non-active dot color */
        }
        .blogs-swiper .swiper-pagination-bullet-active {
          background-color: #d946ef; /* Active dot color */
        }
      `}</style>
      </div>
    </Container>
  );
};

export default Blogs;
