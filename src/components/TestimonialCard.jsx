import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function TestimonialCard({
  name,
  text,
  image,
  position,
  textPosition,
  fade,
}) {

    React.useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
        <div
        data-aos={fade}
          className={`flex-col md:${position} w-[95vw] md:w-[65vw] flex  justify-between gap-2`}
        >
          <div className="size-[4rem] lg:size-[10rem] bg-primary rounded-full">
            {image}
          </div>
          <div className="flex flex-col justify-center">
            <p
              className={`md:${textPosition} text-1xl lg:text-6xl font-main font-semibold mb-3`}
            >
              {name}
            </p>
            <p
              className={`md:${textPosition} lg:text-2xl font-main font-semibold text-foreground-200`}
            >
              "{text}"
            </p>
          </div>
        </div>
    </>
  );
}
