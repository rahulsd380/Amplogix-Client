"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICONS, IMAGES } from "@/assets";
import InputField from "@/Components/Shared/InputFields/InputField";
import Heading from "@/Components/Reusable/Heading/Heading";
import { toast, Toaster } from "sonner";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Spinner from "@/Components/Loaders/Spinner/Spinner";
import Modal from "@/Components/Modal/Modal";
import MessageReceived from "@/Components/StartAProject/MessageReceived";

type FormData = {
  from_name: string;
  from_email: string;
  phone: string;
  message: string;
  budget: string;
};

const ContactUs = () => {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);
  const { handleSubmit, register, reset, formState: { errors } } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail: SubmitHandler<FormData> = () => {
    if (!form.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_infr17w",
        "template_mbn02kl",
        form.current,
        "AxbshSm6FwP2TIbyx"
      )
      .then(
        () => {
          setIsLoading(false);
          setOpenProjectModal(true);
          reset();
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          toast.error("Failed! Try again.");
        }
      );
  };

  return (
    <div id="contactUs" className="relative h-fit flex py-20 px-5 w-full flex-col gap-2 items-center justify-center">
      {/* Background Decorations */}
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-[50px] left-2"></div>
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute top-4 right-0"></div>
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute bottom-[50px] right-2"></div>
      <div className="hidden lg:block size-[400px] rounded-full bg-primary-20/10 bg-opacity-30 blur-[100px] absolute bottom-4 left-0"></div>

      <Image src={IMAGES.ContactUs_bg} alt="" className="absolute top-0 bottom-0 right-0 left-0 z-0" />

      <div className="w-full max-w-[1280px] flex flex-col justify-center items-center mx-auto px-4 md:px-8 xl:px-0">
        <Heading
          alignment="center"
          heading="Get In Touch"
          description="Get in touch, and together, let's scale new heights of success!"
          descriptionWidth="max-w-[900px] mx-auto"
        />

        <div className="inline-flex p-5 w-full h-full md:max-h-[546px] items-center md:gap-4 lg:gap-7 rounded-2xl border-2 border-[rgba(10,13,23,0.05)] bg-[rgba(255,255,255,0.04)] backdrop-blur-[190px] my-10 flex-col md:flex-row">
          <div className="w-full order-2 md:order-1 md:w-[50%] md:px-10 px-2 py-10 h-full">
            <form ref={form} onSubmit={handleSubmit(sendEmail)} className="space-y-4">
              <InputField
                {...register("from_name", { required: "Name is required" })}
                type="text"
                placeholder="Your Name"
                className="w-full"
                error={errors.from_name?.message}
              />
              <InputField
                {...register("from_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="Your Email"
                className="w-full"
                error={errors.from_email?.message}
              />
              <InputField
                {...register("phone", { required: "Phone number is required" })}
                type="number"
                placeholder="Your Phone No."
                className="w-full"
                error={errors.phone?.message}
              />
              <select
                {...register("budget", { required: "Budget is required" })}
                className="border border-border-10 rounded-md py-2 px-4 w-full text-white bg-white bg-opacity-5 focus:outline-none focus:border-2 focus:ring-0"
              >
                <option className="text-neutral-10" value="" disabled defaultValue="">Select Budget Range</option>
                <option className="text-neutral-10" value="₹5000-₹20000">₹5000-₹20000</option>
                <option className="text-neutral-10" value="₹20000-₹50000">₹20000-₹50000</option>
                <option className="text-neutral-10" value="₹50000-₹80000">₹50000-80000</option>
                <option className="text-neutral-10" value="₹80000-₹100000">₹80000-₹100000</option>
                <option className="text-neutral-10" value="₹100000-Above">₹100000-Above</option>
                {/* <option className="text-neutral-10" value="other">Other</option> */}
              </select>
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget.message}</p>}

              <InputField
                {...register("message", { required: "Message is required" })}
                isMultiline
                placeholder="Your Purpose"
                className="w-full"
                error={errors.message?.message}
              />

              <button
                type="submit"
                className="w-full justify-center bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 transition-all duration-500 ease-in-out hover:bg-gradient-to-l hover:from-violet-500 hover:via-purple-600 hover:to-fuchsia-600 rounded-md focus:outline-none px-5 py-3 text-white/90 text-lg font-medium flex items-center gap-3 z-10"
              >
                {
                  isLoading ?
                    <Spinner />
                    :
                    "Submit"
                }
              </button>
            </form>
          </div>

          <div className="relative w-full order-1 md:order-2 md:w-[50%] md:p-0 h-full">
            <Image src={IMAGES.ContactUs} alt="hero-image" className="object-cover rounded-3xl w-full h-full md:max-h-[456px]" />
            <div className="absolute inset-0 flex items-end justify-center px-6 bg-black/50 rounded-3x pb-10">
              <p className="text-white/80 text-center text-xs font-medium">
                Ready to turn your ideas into reality? We’re here to help you navigate the digital landscape with innovative solutions tailored to your needs. Whether you’re looking for cutting-edge technology, seamless integrations, or expert guidance, our team is dedicated to empowering your business to thrive. Let’s connect and explore how we can create something remarkable together!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        openModal={openProjectModal}
        setOpenModal={setOpenProjectModal}
        heading={"Success!"} step={3} setStep={function (): void {
          throw new Error("Function not implemented.");
        }} handleNextStep={function (): void {
          throw new Error("Function not implemented.");
        }} loading={false}>
        <MessageReceived icon={ICONS.successBox} />
      </Modal>
      <Toaster />
    </div>
  );
};

export default ContactUs;
