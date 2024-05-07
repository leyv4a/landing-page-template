import { Badge } from "@nextui-org/react";
import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-[95vw] md:w-[65vw] flex flex-col mx-auto items-start justify-center md:justify-start">
        <div data-aos="zoom-in">
          <h2
            id="testimonios"
            className="text-left text-4xl md:text-6xl font-main font-semibold mb-28 "
          >
            What our costumers
            <br /> are saying
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <TestimonialCard
            name={"John Doe"}
            text={
              "lorem ipsum dolor thelr mennr poler siler xilir poliz darwe troes piles"
            }
            position={""}
            textPosition={"text-left"}
            fade={"fade-right"}
          />
          <TestimonialCard
            name={"Joan Doe"}
            text={
              "lorem ipsum dolor thelr mennr poler siler xilir poliz darwe troes piles"
            }
            position={"flex-row-reverse"}
            textPosition={"text-right"}
            fade={"fade-left"}
          />
        </div>
      </div>
    </>
  );
}
