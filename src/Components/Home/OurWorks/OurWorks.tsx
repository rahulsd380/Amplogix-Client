"use client";
import { IMAGES } from "@/assets";
import Container from "@/Components/Reusable/Container/Container";
import Heading from "@/Components/Reusable/Heading/Heading";
import { useState } from "react";
import OurWorkCard from "./OurWorkCard";

const OurWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Frontend Development"
  );
  const projectCategories = [
    "Frontend Development",
    "Backend Development",
    // "Mobile Development",
    "UI/UX Design",
  ];

  const dummyProjects = [
    {
      img: IMAGES.work1,
      name: "E-commerce Website",
      technologyUsed: ["Next.JS", "Redux", "Typescript", "Tailwind CSS"],
      liveLink: "https://www.google.com",
    },
    {
      img: IMAGES.project5,
      name: "E-commerce Website",
      technologyUsed: ["Next.JS", "Redux", "Typescript", "Tailwind CSS"],
      liveLink: "https://www.google.com",
    },
  ];

  return (
    <div id="our-works" className="bg-[#0C0D21] px-5 py-16 relative mt-24">
      <Container>
        <div
          id="our-works"
          className="flex flex-col gap-[64px]"
        >
          {/* Heading */}
          <div className="flex flex-col gap-8">
            <Heading
              alignment="center"
              heading="Our Awesome Works"
              description="Discover a showcase of our exceptional creations, blending innovation and craftsmanship to deliver outstanding results. Explore the brilliance behind our work and get inspired by our expertise."
              descriptionWidth="max-w-[900px] mx-auto"
            />

            <div className="flex items-center justify-center gap-5">
              {projectCategories?.map((category) => (
                <button
                  onClick={() => setSelectedCategory(category)}
                  key={category}
                  className={`border border-neutral-15/30 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500"
                      : "bg-none"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {selectedCategory === "Frontend Development" &&
              dummyProjects?.map((project, index) => (
                <OurWorkCard key={index} {...project} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurWorks;
