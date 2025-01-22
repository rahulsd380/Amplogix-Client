/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import "./OurWorkCard.css";

type TOurWorkCard = {
  img: any;
  name: string;
  technologyUsed: string[];
  liveLink: string;
};
const OurWorkCard: React.FC<TOurWorkCard> = ({
  img,
  name,
  technologyUsed,
  liveLink,
}) => {
  return (
    <div className="bg-neutral-20 border border-purple-500 p-4 rounded-xl">
      <div className="img-area rounded-md">
        <Image
          src={img}
          alt={name}
          className="imgFile rounded-md"
          width={800}
          height={1200}
        />
      </div>
      <h1 className="bg-text-gradient bg-clip-text text-transparent text-2xl font-semibold font-Poppins mt-5">
        {name}
      </h1>
      <p className="text-neutral-15 font-Inter mt-3">
        <strong>Technology Used:</strong> {technologyUsed.join(", ")}
      </p>

      <p className="text-neutral-15/80 font-Inter mt-3 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae
        tenetur dolorum nostrum, saepe sapiente rem eaque officia delectus
        maxime commodi laboriosam ab omnis perferendis adipisci nisi excepturi
        expedita! Amet.
      </p>

      <div className="flex items-center justify-end mt-7">
      {/* <h1 className="projectName text-neutral-20 text-4xl font-bold uppercase font-Poppins">
        {name}
      </h1> */}
        <Link
          href={liveLink}
          className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-5 py-2 text-white/90 text-lg font-medium flex items-center gap-3 z-10"
        >
          View Live
        </Link>
      </div>
    </div>
  );
};

export default OurWorkCard;
