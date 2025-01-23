import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../Reusable/TextInput/TextInput";
import TextAreaInput from "../Reusable/TextAreaInput/TextAreaInput";
import Image from "next/image";
import Spinner from "../Loaders/Spinner/Spinner";
import { ICONS } from "@/assets";
import emailjs from '@emailjs/browser';
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

type TAboutProjectProps = {
  selectedService: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleNextStep: () => void;
}

type TFormData = {
  from_name: string;
  phoneNumber: string;
  from_email: string;
  applicationCategory: "Website" | "Android App" | "IOS App" | "UI/UX Design";
  applicationType: string; // "E-commerce, Portfolio, Hospital etc"
  details?: string;
};

const AboutProject: React.FC<TAboutProjectProps> = ({ selectedService, setOpenModal, handleNextStep }) => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm<TFormData>();

  const [isLoading, setIsLoading] = useState(false);

  // const form = useRef<HTMLFormElement>(null);

  const sendEmail: SubmitHandler<TFormData> = (formData) => {
    console.log("object");
    // if (!form.current) return;

    setIsLoading(true);
    const emailData = {
      from_name: formData.from_name,
      phoneNumber: formData.phoneNumber,
      from_email: formData.from_email,
      applicationCategory: selectedService,
      applicationType: formData.applicationType,
      details: formData.details || "",
    };

    emailjs
      .send(
        "service_infr17w",
        "template_yy7cto6",
        emailData,
        "AxbshSm6FwP2TIbyx"
      )
      .then(
        () => {
          setIsLoading(false);
          reset();
          toast.success("Email sent successfully!");
          handleNextStep();
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          toast.error("Failed! Try again.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-6">
      <TextInput
        label="Your Name"
        placeholder="ex: John Doe"
        error={errors.from_name}
        register={register("from_name", { required: "Name is required" })}
      />
      <div className="flex flex-col md:flex-row w-full gap-5">
        <TextInput
          label="Phone Number"
          placeholder="ex: +91 3242 2345"
          error={errors.phoneNumber}
          register={register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^[+]?[0-9\s-]{10,15}$/,
              message: "Invalid phone number",
            },
          })}
        />
        <TextInput
          label="Your Email"
          placeholder="ex: john@gmail.com"
          error={errors.from_email}
          register={register("from_email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
      </div>
      <TextInput
        label={`Type of ${selectedService}`}
        placeholder={
          selectedService === "Website"
            ? "E-commerce, Portfolio, Hospital etc"
            : selectedService === "Android App"
              ? "Social Media, Delivery App, Fitness Tracker etc"
              : selectedService === "IOS App"
                ? "Music App, Productivity Tool, Game etc"
                : "Wireframes, High-fidelity Design, Prototyping etc"
        }
        error={errors.applicationType}
        register={register("applicationType", { required: `${selectedService} type is required` })}
      />

      <TextAreaInput
        label="More about it (Optional)"
        rows={5}
        placeholder={`Please add a short detail about your ${selectedService}`}
        error={errors.details}
        register={register("details")}
      />

      <div className="w-full flex items-center justify-end gap-6">
        <button
          onClick={() => setOpenModal(false)}
          className="border border-purple-500 rounded-md focus:outline-none px-5 py-3 text-white/90 font-medium flex items-center gap-3 z-10">
          Cancel
        </button>

        <div className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none w-[150px] px-5 py-3 text-white/90 font-medium flex items-center justify-center gap-3 z-10">
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
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
    </form>
  );
};

export default AboutProject;
