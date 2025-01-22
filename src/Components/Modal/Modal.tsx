"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import { ReactNode } from "react";
import Spinner from "../Loaders/Spinner/Spinner";

type TModal = {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  step: number;
  setStep: (step: number) => void;
  handleNextStep: () => void;
  loading: boolean;
  heading: string;
  children: ReactNode;
};
const Modal: React.FC<TModal> = ({
  openModal,
  setOpenModal,
  step,
  setStep,
  handleNextStep,
  loading,
  heading,

  children,
}) => {
  return (
    <div>
      <div
        className={`${
          openModal ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-full h-screen fixed top-0 left-0 z-50 bg-neutral-10/60 flex items-center justify-center transition-all duration-300 `}
      >
        <div className="w-full max-w-[600px] max-h-[500px] overflow-y-auto custom-scrollbar bg-[#0e101f] border border-purple-500 p-6 rounded-xl">
          {/* Header */}
          <div className="w-full flex items-center justify-between border-b pb-3 border-neutral-15/50">
            <div className="flex items-center gap-3">
              {step === 2 && (
                <Image
                  src={ICONS.leftArrow}
                  alt="cross-icon"
                  className="size-6 cursor-pointer"
                  onClick={() => setStep(step - 1)}
                />
              )}
              <h1 className="bg-text-gradient bg-clip-text text-transparent text-xl font-semibold font-Poppins">
                {heading}
              </h1>
            </div>
            <Image
              src={ICONS.cross}
              alt="cross-icon"
              className="size-6 cursor-pointer"
              onClick={() => setOpenModal(false)}
            />
          </div>

          <div className="mt-10">{children}</div>

          {
            step === 3 ?
            <div className="flex items-center justify-center mt-7">
              <button
                  onClick={() => setOpenModal(false)}
                  className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 px-5 py-3 rounded-md focus:outline-none w-[150px] text-white/90 font-medium z-10"
                >
                  Close
                </button>
            </div>
          :
          <div className="w-full flex items-center justify-end gap-6 mt-10">
            <button
              onClick={() => setOpenModal(false)}
              className="border border-purple-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10"
            >
              Cancel
            </button>

            <div className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none w-[150px] px-5 py-3 text-white/90 font-medium flex items-center justify-center gap-3 z-10">
              {loading ? (
                <Spinner />
              ) : (
                <button
                  onClick={handleNextStep}
                  className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none w-[150px] text-white/90 font-medium flex items-center justify-center gap-3 z-10"
                >
                  Next
                  <Image
                    src={ICONS.rightArrow}
                    alt="arrow-icon"
                    className="size-5"
                  />
                </button>
              )}
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;
