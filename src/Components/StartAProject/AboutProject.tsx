import { useForm, SubmitHandler } from "react-hook-form";
import TextInput from "../Reusable/TextInput/TextInput";
import TextAreaInput from "../Reusable/TextAreaInput/TextAreaInput";

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  websiteType: string;
  details?: string;
}

const AboutProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <TextInput
        label="Your Name"
        placeholder="ex: John Doe"
        error={errors.name}
        register={register("name", { required: "Name is required" })}
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
          error={errors.email}
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
      </div>
      <TextInput
        label="Type of website"
        placeholder="E-commerce, Portfolio, Hospital etc"
        error={errors.websiteType}
        register={register("websiteType", { required: "Website type is required" })}
      />
      <TextAreaInput
        label="More about it (Optional)"
        rows={5}
        placeholder="Please add a short detail about your website"
        error={errors.details}
        register={register("details")}
      />
    </form>
  );
};

export default AboutProject;
