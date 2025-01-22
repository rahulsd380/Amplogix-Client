import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const ProjectCard = ({ flexDirection }: { flexDirection: string }) => {
    const contentControls = useAnimation();
    const imageControls = useAnimation();
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    const contentInView = useInView(contentRef);
    const imageInView = useInView(imageRef);

    useEffect(() => {
        if (contentInView) {
            contentControls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
            });
        } else {
            contentControls.start({ opacity: 0, x: flexDirection === "flex-row" ? -100 : 100 });
        }

        if (imageInView) {
            imageControls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
            });
        } else {
            imageControls.start({ opacity: 0, x: flexDirection === "flex-row" ? 100 : -100 });
        }
    }, [contentInView, imageInView, contentControls, imageControls, flexDirection]);

    return (
        <div className={`font-Poppins flex items-center gap-20 overflow-hidden ${flexDirection}`}>
            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, x: flexDirection === "flex-row" ? -100 : 100 }}
                animate={contentControls}
            >
                <h1 className="bg-text-gradient bg-clip-text text-transparent text-6xl font-bold">
                    Student Tiffin Service
                </h1>
                <p className="text-neutral-15/60 mt-5 max-w-[700px] text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae
                    tenetur dolorum nostrum, saepe sapiente rem eaque officia delectus
                    maxime commodi laboriosa
                </p>
                <h3 className="text-neutral-15/80 mt-10 font-semibold text-xl">
                    Features :
                </h3>
                <div className="flex flex-col gap-4 mt-4 text-sm">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="text-neutral-15/60 flex items-center gap-3">
                            <Image src={ICONS.pointer} alt="" className="size-4" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    ))}
                </div>
                <Link
                    href={"/"}
                    className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-2 w-fit mt-10 hover:bg-gradient-to-r hover:from-fuchsia-700 hover:via-purple-700 hover:to-violet-600 transition duration-300"
                >
                    <Image src={ICONS.live} alt="" className="size-6" />
                    View Live Preview
                </Link>
            </motion.div>

            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: flexDirection === "flex-row" ? 100 : -100 }}
                animate={imageControls}
            >
                <Image src={IMAGES.work1} alt="" className="max-w-[500px]" />
            </motion.div>
        </div>
    );
};

export default ProjectCard;
