import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import { MdOutlineMail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

const StartProjectBanner = () => {

    return (
        <section
            id="startAProject"
            className="w-full max-w-[1100px] mx-auto rounded-xl my-20 py-[20px] sm:py-[40px] px-[40px] sm:px-[80px] bg-gradient-to-br from-[#161819] to-[#5C26B5] relative overflow-hidden font-Poppins">
            <div className="w-full sm:w-[60%]">
                <div className="w-full sm:w-[75%]">
                    <h1 className="text-[2rem] uppercase sm:text-[2.8rem] bg-text-gradient bg-clip-text text-transparent leading-[45px] font-semibold">Why do you need a website ?</h1>
                    <p className="text-[0.9rem] text-[#CBCBCB] mt-5">A website enhances visibility, credibility, and engagement, connecting you with a wider audience.✌️</p>
                </div>

                {/* <Link
                  href={"/"}
                  className="border border-purple-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10 w-fit mt-5"
                >
                  Start A Project
                </Link>

                <p className="text-white mt-5 ml-10">Or</p> */}

                <div className="relative mb-5 mt-12">
                    <input type="num" className="py-3 pr-4 pl-12 w-full outline-none rounded-md"
                        placeholder="Your Contact Number" />
                    <MdOutlinePhoneIphone
                        className="p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]" />
                    {/* absolute bottom-[-20px] right-[-20px] bg-[#825FF1] hover:bg-[#7755e8] text-white py-3 px-8 rounded-md flex items-center gap-2 */}
                    <button
                        className="absolute bottom-[-20px] right-[-20px] bg-[#825FF1] hover:bg-[#7755e8] text-white py-3 px-8 rounded-md flex items-center gap-2">
                        <FaLocationArrow />
                        Submit
                    </button>
                    <Image src={IMAGES.rightAngle} alt="90 degree shape" className="absolute -bottom-9 -right-9 size-10" />
                </div>
            </div>

            <MdOutlineMail
                className="text-[30rem] absolute top-[-100px] right-[-100px] text-white opacity-10 rotate-[-30deg]" />
        </section>
    );
};

export default StartProjectBanner;
