"use client"
/* eslint-disable react/no-unescaped-entities */
import { IMAGES } from "@/assets";
import Container from "@/Components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { BsSendArrowUpFill } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const navLinks = [
    {
      label: "Home",
      action: () => {
        router.push("/");
        const homeSection = document.getElementById("home");
        homeSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Services",
      action: () => {
        const servicesSection = document.getElementById("our-services");
        servicesSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Our Works",
      action: () => {
        router.push("/our-works");
      },
    },
    {
      label: "Blogs",
      action: () => {
        // router.push("/");
        const blogsSection = document.getElementById("blogs");
        blogsSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "FAQs",
      action: () => {
        // router.push("/");
        const faqsSection = document.getElementById("faqs");
        faqsSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Contact Us",
      action: () => {
        // router.push("/");
        const contactUsSection = document.getElementById("contactUs");
        contactUsSection?.scrollIntoView({ behavior: "smooth" });
      },
    },
    
  ];
  return (
    <Container>
      <div id="home" className="font-Poppins py-5 flex items-center justify-between">
        <Link href={"/"} className="text-3xl font-semibold bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 bg-clip-text text-transparent flex items-center gap-3">
        <Image src={IMAGES.logo} alt="" className="w-8"/>
        Amplogix
        </Link>

        <div className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-6">
          {navLinks?.map((item) => (
            <button
              key={item?.label}
              onClick={item.action}
              className="text-white hover:text-primary-20 transition duration-300"
            >
              {item?.label}
            </button>
          ))}
        </div>
        <button onClick={() => {
        const startAProject = document.getElementById("startAProject");
        startAProject?.scrollIntoView({ behavior: "smooth" });
      }} className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-3 text-white font-medium hidden sm:flex items-center gap-3">
          <BsSendArrowUpFill /> Let's Talk
        </button>
        <HamburgerMenu/>
        </div>

      </div>
    </Container>
  );
};

export default Navbar;
