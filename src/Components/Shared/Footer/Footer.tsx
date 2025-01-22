"use client";
import { IMAGES } from "@/assets";
import Container from "@/Components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddCall, MdEmail } from "react-icons/md";

const Footer = () => {
  const homeLinks = [
    {
      label: "Home",
      action: () => {
        // router.push("/");
        const homeSection = document.getElementById("home");
        homeSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Tech Toolbox",
      action: () => {
        // router.push("/");
        const toolboxSection = document.getElementById("tech-toolbox");
        toolboxSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Why Us",
      action: () => {
        // router.push("/");
        const whyUsSection = document.getElementById("why-us");
        whyUsSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Our Works",
      action: () => {
        // router.push("/");
        const whyUsSection = document.getElementById("our-works");
        whyUsSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const importantLinks = [
    {
      label: "Our Services",
      path: "/our-services",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
    {
      label: "FAQs",
      path: "/faqs",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      icon: <BsInstagram />,
      href: "#",
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
    },
    {
      icon: <FaTwitter />,
      href: "#",
    },
  ];

  const titleStyle =
    "bg-text-gradient bg-clip-text text-transparent text-2xl font-semibold font-Poppins";

  return (
    <div className="mt-28 bg-[#0C0D21] px-5 py-16 relative">
      <div className="z-20">
        <Container>
          <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-3 left-2 z-0"></div>
          <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-4 right-0 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 z-20 relative">
            {/* Company info */}
            <div className="flex flex-col gap-6 col-span-1 xl:col-span-2">
              <Link
                href="/"
                className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-clip-text text-transparent"
              >
                Amplogix
              </Link>
              <p className="text-neutral-15 font-Poppins text-sm max-w-full xl:max-w-[80%]">
                <span className="text-white font-bold">Amplogix</span> offers
                expert web development, App Development, UI/UX design, and
                innovative digital solutions for businesses.
              </p>

              <div className="flex items-center gap-6 z-10 mt-5">
                <button onClick={() => {
                  const contactUs = document.getElementById("contactUs");
                  contactUs?.scrollIntoView({ behavior: "smooth" });
                }}
                  className="border border-purple-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10"
                >
                  Contact Now
                </button>
                <Link
                  href={"/"}
                  className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10"
                >
                  Start A Project
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className={titleStyle}>Home</h1>
              <div className="flex flex-col gap-4">
                {homeLinks.map(({ action, label }, index) => (
                  <div
                    key={index}
                    onClick={action}
                    className="text-neutral-15 font-Poppins text-sm hover:underline cursor-pointer w-fit"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Important links */}
            <div className="flex flex-col gap-6">
              <h1 className={titleStyle}>Important Links</h1>
              <div className="flex flex-col gap-4">
                {importantLinks?.map((link) => (
                  <Link
                    key={link?.label}
                    href={link?.path}
                    className="text-neutral-15 font-Poppins text-sm hover:underline w-fit"
                  >
                    {link?.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <h1 className={titleStyle}>Contact Info</h1>
              <div className="flex flex-col gap-5">
                <div className="text-neutral-15 font-Poppins text-sm flex items-center gap-3">
                  <IoLocationSharp className="text-purple-700 text-2xl" />

                  <div className="flex flex-col gap-1">
                    {/* <p>Cumilla-3501, Bangladesh,</p> */}
                    <p>Kolkata, 12, India</p>
                  </div>
                </div>
                <div className="text-neutral-15 font-Poppins text-sm flex items-center gap-3">
                  <MdAddCall className="text-purple-700 text-2xl" />

                  <div className="flex flex-col gap-1">
                    {/* <a href="tel:+880 1608 249337" className="hover:underline">
                      +880 1608 249337
                    </a> */}
                    <a href="tel:+91 94208 32505" className="hover:underline flex items-center gap-[2px]">
                      +91 94208 32505 (<FaWhatsapp className="" />)
                    </a>
                  </div>
                </div>
                <div className="text-neutral-15 font-Poppins text-sm flex items-center gap-3">
                  <MdEmail className="text-purple-700 text-2xl" />
                  <div className="flex flex-col gap-1">
                    {/* <a
                      href="mailto:rahulsd380@gmail.com"
                      className="hover:underline"
                    >
                      rahulsd380@gmail.com
                    </a> */}
                    <a
                      href="mailto:prernabadwane@gmail.com"
                      className="hover:underline"
                    >
                      prerna@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border border-primary-20/10 my-10" />

          {/* Copyright and social media links */}
          <div className="flex items-center justify-between relative z-20">
            <p className="text-neutral-15">
              Copyright ©2025 Amplogix. All Rights Reserved
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="size-10 text-xl rounded-full text-purple-600 hover:text-white hover:bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 transition duration-300 flex items-center justify-center"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <Image
        src={IMAGES.lineBg}
        alt="linner-background"
        className="absolute top-0 bottom-0 right-0 left-0 h-full opacity-15 z-0"
      />
    </div>
  );
};

export default Footer;
