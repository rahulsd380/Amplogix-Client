"use client"

import { FaWhatsapp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
      <div className="fixed bottom-5 right-5 flex flex-col z-20">
        <button
        onClick={scrollToTop}
        className="px-3 py-2 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 text-white rounded-t-xl shadow-lg hover:bg-purple-900 transition duration-300"
        aria-label="Scroll to top"
      >
        <p className="animate-bounce text-xl">↑</p>
      </button>
        <a
        href="https://wa.me/919359963665"
        rel="noopener noreferrer"
        target="_blank"
        className="px-3 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 text-white rounded-b-xl shadow-lg hover:bg-purple-900 transition duration-300 border-t border-neutral-10/40"
        aria-label="Scroll to top"
      >
        <FaWhatsapp />
      </a>
      </div>
  );
};

export default ScrollToTop;


// 1. Budget in start a project form