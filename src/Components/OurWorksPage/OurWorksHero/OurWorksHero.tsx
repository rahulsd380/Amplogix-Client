"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const OurWorksHero = () => {
    const [selectedCategory, setSelectedCategory] = useState(
        "Frontend Development"
    );
    const projectCategories = [
        "Frontend Development",
        "Backend Development",
        // "Mobile Development",
        "UI/UX Design",
    ];
    return (
        <div className='font-Poppins relative mt-20'>
            {/* Linner svg */}
            <svg className='w-full absolute opacity-40' xmlns="http://www.w3.org/2000/svg" width="1728" height="340" viewBox="0 0 1728 340" fill="none">
                <path d="M-8 113.043C34.2453 176.602 181.754 360.993 435.404 336.562C745.005 306.742 830.607 65.5001 1140.23 11.4557C1387.92 -31.7798 1622.61 66.7274 1733.37 114.874" stroke="#d946ef" strokeLinejoin="round" stroke-dasharray="10 15" />
            </svg>


            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
                <Link className='text-neutral-15 hover:underline' href={"/"}>Home</Link>
                <FaChevronRight className='text-neutral-15 text-sm' />
                <Link className='text-primary-20' href={"/our-works"}>Our Works</Link>
            </div>

            {/* Heading */}
            <div className='relative w-fit mt-7'>
                <h1 className='text-[56px] font-bold leading-[64px] bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 bg-clip-text text-transparent capitalize'>Our Works</h1>
                <div className='w-[180px] h-2 bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-300 opacity-50 rounded-3xl absolute right-1 bottom-2'></div>
            </div>
            <p className='text-neutral-15 text-sm mt-4'>Dynamic marketing solutions to drive community engagement and social purpose</p>

            <div className="flex items-center mt-7 gap-5">
                {projectCategories?.map((category) => (
                    <button
                        onClick={() => setSelectedCategory(category)}
                        key={category}
                        className={`border border-neutral-15/30 rounded-3xl focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10 ${selectedCategory === category
                                ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500"
                                : "bg-none"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default OurWorksHero;