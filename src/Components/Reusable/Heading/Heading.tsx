type THeading = {
  heading: string;
  description: string;
  alignment: string;
  headingWidth?: string;
  descriptionWidth?: string;
};

const Heading: React.FC<THeading> = ({
  heading,
  description,
  alignment = "center",
  headingWidth,
  descriptionWidth,
}) => {
  return (
    <div className={`flex flex-col  ${alignment === "start" ? "items-start" : alignment === "center" ? "items-center justify-center" : "justify-end"}`}>
      <h1
        className={`text-white font-semibold text-[28px] md:text-[40px] font-Poppins text-${alignment} ${headingWidth}`}
      >
        {heading}
      </h1>
      <p className={`font-Inter text-[#ffffff99] mt-3 text-${alignment} ${descriptionWidth}`}>
        {description}
      </p>
    </div>
  );
};

export default Heading;
