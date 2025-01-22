"use client";
import Container from "@/Components/Reusable/Container/Container";
import Heading from "@/Components/Reusable/Heading/Heading";
import React from "react";
import OurServiceCard from "./OurServiceCard";
import { IMAGES } from "@/assets";

const OurServices = () => {
  const ourServices = [
    {
      animation : IMAGES.webDevelopment,
      title: "Web Development",
      description:
        "We create robust, scalable, and visually engaging websites tailored to your business needs. From ideation to deployment, we deliver seamless web experiences that captivate users.",
      features: [
        "Custom website development with modern frameworks.",
        "Mobile-friendly and responsive designs.",
        "Comprehensive support for maintenance and updates.",
      ],
    },
    {
      animation : IMAGES.frontendDevelopment,
      title: "Frontend Development",
      description:
        "Our frontend solutions ensure captivating designs and seamless user interactions. We blend creativity with functionality to craft pixel-perfect interfaces for all devices.",
      features: [
        "Cross-browser compatible and responsive layouts.",
        "Smooth animations and dynamic user experiences.",
        "Integration with the latest JavaScript libraries and frameworks.",
      ],
    },
    {
      animation : IMAGES.backendDevelopment,
      title: "Backend Development",
      description:
        "Our backend development focuses on creating robust, secure, and scalable server-side solutions to support seamless functionality for your web applications.",
      features: [
        "Secure database management and integration.",
        "Scalable architecture for high performance.",
        "API creation and third-party service integration.",
      ],
    },
    {
      animation : IMAGES.performanceOptimization,
      title: "Performance Optimization",
      description:
        "We enhance your website’s performance with faster loading speeds, efficient coding practices, and robust optimizations to deliver exceptional user experiences.",
      features: [
        "Image and code optimization for faster load times.",
        "Advanced caching and compression techniques.",
        "Regular performance monitoring and updates.",
      ],
    },
    {
      animation : IMAGES.seo,
      title: "Website SEO Optimization",
      description:
        "Boost your website's visibility with our SEO optimization services. We improve rankings, drive traffic, and help you reach your target audience effectively.",
      features: [
        "Keyword research and on-page optimization.",
        "Technical SEO audits and fixes.",
        "Link-building and content marketing strategies.",
      ],
    },
    {
      animation : IMAGES.uiUx,
      title: "UI/UX Design",
      description:
        "We design intuitive and visually appealing interfaces that enhance user engagement and satisfaction, ensuring seamless navigation across your digital platforms.",
      features: [
        "User-centric designs tailored to your brand.",
        "Wireframing and prototyping for better visualization.",
        "Accessibility-focused design principles for inclusivity.",
      ],
    },
  ];
  
  return (
    <Container>
      <div id="our-services" className="flex flex-col gap-[64px] mt-24">
        {/* Heading */}
        <Heading
          alignment="center"
          heading="Our Services & Solutions"
          description="Explore our tailored services and innovative solutions designed to empower your business with efficiency, creativity, and growth. From strategy to execution, we deliver excellence to meet your unique needs."
          descriptionWidth="max-w-[900px] mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            ourServices?.map(service => 
          <OurServiceCard key={service?.title} {...service} />
            )
          }
          
        </div>
      </div>
    </Container>
  );
};

export default OurServices;
