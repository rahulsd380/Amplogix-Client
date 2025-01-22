type TSelectService = {
  selectedService: string;
  setSelectedService: (selectedService: string) => void;
};

const SelectService: React.FC<TSelectService> = ({
  selectedService,
  setSelectedService,
}) => {
  const services = ["Website", "Android App", "IOS App", "UI/UX Design"];
  return (
    <>
      <p className="text-neutral-15 font-Inter">
        Please select which service you want and hit next.
      </p>
      <div className="mt-5 flex items-center gap-5">
        {services?.map((service) => (
          <button
            onClick={() => setSelectedService(service)}
            key={service}
            className={`border border-neutral-15/30 rounded-md focus:outline-none px-5 py-2 text-white/90 font-medium flex items-center gap-3 z-10 ${
              selectedService === service
                ? "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500"
                : "bg-none"
            }`}
          >
            {service}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectService;
