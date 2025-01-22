import Container from "@/Components/Reusable/Container/Container";
import React from "react";
import { ICONS } from "./../../../assets/index";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "@/Components/Reusable/Heading/Heading";

const TechToolBox = () => {
  const techToolboxLeft = [
    {
      icon: ICONS.js,
      name: "JavaScript",
      borderColor: "#F7DF1E", // JavaScript yellow
    },
    {
      icon: ICONS.nextjs,
      name: "Next.JS",
      borderColor: "#A8B9C0", // Next.js gray
    },
    {
      icon: ICONS.reactjs,
      name: "React.JS",
      borderColor: "#61DAFB", // React blue
    },
    {
      icon: ICONS.nodeJS,
      name: "Node.JS",
      borderColor: "#8AC54A", // Node.js green
    },
    {
      icon: ICONS.postgresql,
      name: "Postgres SQL",
      borderColor: "#336791", // PostgreSQL blue
    },
    {
      icon: ICONS.html,
      name: "HTML",
      borderColor: "#E44D26", // HTML orange-red
    },
    {
      icon: ICONS.css,
      name: "CSS",
      borderColor: "#1572B6", // CSS blue
    },
  ];

  const techToolboxRight = [
    {
      icon: ICONS.firebase,
      name: "Firebase",
      borderColor: "#FFCA28", // Firebase yellow
    },
    {
      icon: ICONS.github,
      name: "Github",
      borderColor: "#d946ef", // GitHub black
    },
    {
      icon: ICONS.mongodb,
      name: "Mongo DB",
      borderColor: "#47A248", // MongoDB green
    },
    {
      icon: ICONS.redux,
      name: "Redux & RTK Query",
      borderColor: "#764ABC", // Redux purple
    },
    {
      icon: ICONS.restApi,
      name: "Rest API",
      borderColor: "#00758F", // REST API teal
    },
    {
      icon: ICONS.tailwind,
      name: "Tailwind CSS",
      borderColor: "#38B2AC", // Tailwind teal
    },
    {
      icon: ICONS.typescript,
      name: "TypeScript",
      borderColor: "#3178C6", // TypeScript blue
    },
  ];

  return (
    <div id="tech-toolbox" className="mt-28 bg-[#0C0D21] px-3 sm:px-5 py-10 sm:py-16 relative">
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-3 xl:top-[50px] left-2"></div>
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-4 right-0"></div>
      <Container>
        <Heading
          alignment="start"
          heading="Our Tech Toolbox"
          description=" Our Tech Toolbox highlights cutting-edge technologies like JavaScript,
          React, Node.js, MongoDB, and more, enabling us to create innovative,
          scalable, and robust web development solutions for modern digital
          needs."
          descriptionWidth="max-w-[900px]"
        />

        <Marquee className="mt-16" speed={70}>
          {techToolboxLeft.map((tech, index) => (
            <div
              key={index}
              className={`px-5 py-3 flex items-center gap-2 text-lg font-Inter rounded-md border w-fit mr-16`}
              style={{ borderColor: tech.borderColor, color: tech.borderColor }}
            >
              <Image src={tech.icon} alt={tech.name} className="size-6" />
              {tech.name}
            </div>
          ))}
        </Marquee>

        <Marquee className="mt-10" direction="right">
          {techToolboxRight.map((tech, index) => (
            <div
              key={index}
              className={`px-5 py-3 flex items-center gap-2 text-lg font-Inter rounded-md border w-fit mr-16`}
              style={{ borderColor: tech.borderColor, color: tech.borderColor }}
            >
              <Image src={tech.icon} alt={tech.name} className="size-6" />
              {tech.name}
            </div>
          ))}
        </Marquee>
      </Container>
    </div>
  );
};

export default TechToolBox;
