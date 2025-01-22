/* eslint-disable react/no-unescaped-entities */
import Container from "@/Components/Reusable/Container/Container";
import Heading from "@/Components/Reusable/Heading/Heading";
import { whyChooseUs } from "./whyChooseUs.data";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <Container>
      <div id="why-us" className="mt-24 flex flex-col gap-[64px]">
        <Heading
          alignment="center"
          heading="Why Choose Us?"
          description="Choose us for our expertise, innovative solutions, and commitment to delivering exceptional results. We prioritize quality, efficiency, and client satisfaction to help you achieve your digital goals seamlessly."
          descriptionWidth="max-w-[900px] mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {whyChooseUs?.map((item) => (
            <WhyChooseUsCard key={item?.title} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
