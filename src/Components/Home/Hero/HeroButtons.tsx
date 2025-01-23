"use client";
import Modal from "@/Components/Modal/Modal";
import AboutProject from "@/Components/StartAProject/AboutProject";
import MessageReceived from "@/Components/StartAProject/MessageReceived";
import SelectService from "@/Components/StartAProject/SelectService";
import React, { useState } from "react";

const HeroButtons = () => {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedService, setSelectedService] = useState("Website");

  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 1300);
  };

  return (
    <div className="flex items-center gap-6 z-10 mt-5">
      <button
      onClick={() => {
        const contactUs = document.getElementById("contactUs");
        contactUs?.scrollIntoView({ behavior: "smooth" });
      }}
        className="border border-purple-500 rounded-md focus:outline-none px-3 sm:px-5 py-3 text-white/90 text-sm sm:text-lg font-medium flex items-center gap-3 z-10"
      >
        Contact Now
      </button>
      <button
        onClick={() => {
          setOpenProjectModal(true);
          setStep(1);
        }}
        className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-500 rounded-md focus:outline-none px-3 sm:px-5 py-3 text-white/90 text-sm sm:text-lg font-medium flex items-center gap-3 z-10"
      >
        Start A Project
      </button>

      <Modal
        openModal={openProjectModal}
        setOpenModal={setOpenProjectModal}
        step={step}
        setStep={setStep}
        heading={
          step === 1 ? "What do you want?" : step === 2 ? "Tell us about your project" : "Success!"
        }
        >
        {step === 1 && (
          <SelectService
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            loading={loading} setOpenModal={setOpenProjectModal} handleNextStep={handleNextStep}
          />
        )}
        {step === 2 && <AboutProject selectedService={selectedService} setOpenModal={setOpenProjectModal} handleNextStep={handleNextStep} />}
        {step === 3 && <MessageReceived setOpenModal={setOpenProjectModal} />}
      </Modal>
    </div>
  );
};

export default HeroButtons;
