/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";

const MessageReceived = ({ icon = ICONS.success, setOpenModal }: { icon?: any, setOpenModal : (isOpen:boolean) => void; }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center text-center">
      <Image src={icon} alt="success-icon" className="size-[180px]" />
      <div>
        <h1 className="bg-text-gradient bg-clip-text text-transparent text-2xl font-semibold font-Poppins text-center">
          Boom! Your message just landed!
        </h1>
        <p className="text-neutral-15 font-Inter text-sm mt-2">
          Thanks for reaching out to us!! We will get back to you shortly.
        </p>
      </div>

      <div className="flex items-center justify-center mt-7">
        <button
          onClick={() => setOpenModal(false)}
          className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 px-5 py-3 rounded-md focus:outline-none w-[150px] text-white/90 font-medium z-10"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageReceived;
