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
        <p id='testimonios' className='invisible '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor laudantium hic aliquid a suscipit! Vero mollitia enim quo magni! Beatae quod, quia doloremque temporibus, modi molestias laudantium eligendi laborum assumenda quidem nihil at et esse fugiat, tempore nulla maxime ad explicabo magni dolorum possimus! Aperiam itaque omnis recusandae? Molestias distinctio libero ea fugit. Officiis ut magni consectetur odio quisquam omnis accusantium nisi possimus recusandae. Ipsum laborum alias impedit quas minus recusandae voluptatum earum minima incidunt delectus hic, maxime, maiores doloribus necessitatibus! Cupiditate, consectetur similique voluptatum perferendis sapiente quod.</p>
      <div className="w-[95vw] md:w-[65vw] flex flex-col mx-auto items-start justify-center md:justify-start  font-sans">
        <div data-aos="zoom-in">
          <h2
           
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
