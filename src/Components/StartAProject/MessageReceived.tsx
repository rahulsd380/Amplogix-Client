/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";

const MessageReceived = ({icon=ICONS.success} : {icon?:any}) => {
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
    </div>
  );
};

export default MessageReceived;
