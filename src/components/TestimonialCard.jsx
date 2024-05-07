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
      <div data-aos={fade}>
        <div
          className={`${position} w-[95vw] md:w-[65vw] flex justify-between`}
        >
          <div className="w-[10rem] h-[10rem] bg-primary rounded-full">
            {image}
          </div>
          <div className="flex flex-col justify-center">
            <p
              className={`${textPosition} text-4xl md:text-6xl font-main font-semibold mb-3`}
            >
              {name}
            </p>
            <p
              className={`${textPosition} text-xl md:text-2xl font-main font-semibold text-foreground-200`}
            >
              "{text}"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
