import Container from "@/Components/Reusable/Container/Container";
import BlogCardDetails from "./BlogCardDetails";
import { ICONS, IMAGES } from "@/assets";
import BlogsPreviewCard from "./BlogsPreviewCard";

const Blogs = () => {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row justify-between gap-10 w-full">
        <div className="w-full xl:w-[70%]">
          <h1 className="text-white font-semibold text-[28px] md:text-[40px] font-Poppins">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent mr-3">
              Featured
            </span>
            This Month
          </h1>
          <div className="pt-10"></div>
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
        <div className="w-[2px] bg-white self-stretch mt-24"> </div>
        <div className="w-full xl:w-[30%] ">
          <h1 className="text-white font-semibold text-[28px] md:text-[40px] font-Poppins">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent mr-3">
              Popular
            </span>
            Posted
          </h1>
          <div className="">
            <div className="pt-10 flex flex-col gap-8">
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
                description="Dynamically underwhelm integrated outsourcing via timely models. Rapidly reconceptualize visionary imperatives without 24/365 catalysts for change."
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
