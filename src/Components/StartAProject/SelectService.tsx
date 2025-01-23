import Image from "next/image";
import Spinner from "../Loaders/Spinner/Spinner";
import { ICONS } from "@/assets";
import { Dispatch, SetStateAction } from "react";

type TSelectService = {
  selectedService: string;
  setSelectedService: (selectedService: string) => void;
  loading: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleNextStep: () => void;
};

const SelectService: React.FC<TSelectService> = ({
  selectedService,
  setSelectedService,
  loading, 
  setOpenModal, 
  handleNextStep
}) => {
  const services = ["Website", "Android App", "IOS App", "UI/UX Design"];
  return (
    <div>
      <p className="text-neutral-15 font-Inter">
        Please select which service you want and hit next.
      </p>
      <div className="mt-5 flex items-center gap-5">
        {services?.map((service) => (
          <button
            onClick={() => setSelectedService(service)}
            key={service}
            className={`border border-neutral-15/30 rounded-md focus:outline-none px-5 py-2 text-white/90 font-medium flex items-center gap-3 z-10 ${selectedService === service
                ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500"
                : "bg-none"
              }`}
          >
            {service}
          </button>
        ))}
      </div>
      <div className="w-full flex items-center justify-end gap-6 mt-10">
        <button
          onClick={() => setOpenModal(false)}
          className="border border-purple-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10">
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
    </div>
  );
};

export default SelectService;
