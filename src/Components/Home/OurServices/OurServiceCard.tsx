/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useRef, useState } from "react";

type TOurServiceCard = {
  animation: any;
  title: string;
  description: string;
  features: string[];
};

const OurServiceCard: React.FC<TOurServiceCard> = ({ animation, title, description, features }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={cardRef}
      className="bg-neutral-20 border border-purple-950 rounded-xl p-5 relative group cursor-pointer overflow-hidden font-Poppins"
    >
      <div className="w-full h-[300px] flex items-center justify-center">
        <Image src={animation} alt={title} />
      </div>
      <h1 className="bg-text-gradient bg-clip-text text-transparent text-2xl font-semibold mt-5">
        {title}
      </h1>

      <p className="text-neutral-15/70 font-Inter text-sm mt-3">{description}</p>

      <div
        className="flex flex-col backdrop-blur-xl text-white absolute bottom-0 w-full p-5 translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden left-0"
      >
        <h1 className="text-xl translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-semibold opacity-0 group-hover:opacity-100">
          Special Features
        </h1>

        <div className="flex flex-col gap-3 mt-[15px] text-sm">
          {features.map((feature: string, index: number) => (
            <div
              key={index}
              className={`translate-y-[100px] group-hover:translate-y-0 transition-all duration-[${
                500 + index * 300
              }ms] opacity-0 group-hover:opacity-100 flex items-center gap-3`}
            >
              <div className="size-2 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-full"></div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* hovered color shadow */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none blur-[50px]"
          style={{
            background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
          }}
        />
      )}
    </div>
  );
};

export default OurServiceCard;
