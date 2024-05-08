import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HistoryCard from "../components/HistoryCard";
import ValuesCard from "../components/ValuesCard";
export default function About() {
    React.useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
     <p id='about' className='invisible '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor laudantium hic aliquid a suscipit! Vero mollitia enim quo magni! Beatae quod, quia doloremque temporibus, modi molestias laudantium eligendi laborum assumenda quidem nihil at et esse fugiat, tempore nulla maxime ad explicabo magni dolorum possimus! Aperiam itaque omnis recusandae? Molestias distinctio libero ea fugit. Officiis ut magni consectetur odio quisquam omnis accusantium nisi possimus recusandae. Ipsum laborum alias impedit quas minus recusandae voluptatum earum minima incidunt delectus hic, maxime, maiores doloribus necessitatibus! Cupiditate, consectetur similique voluptatum perferendis sapiente quod.</p>
      <div
        className="w-[95vw] md:w-[65vw] mx-auto flex flex-col items-end  font-sans"
      >
        <div data-aos="zoom-out-right" className="text-right" > 
          <h2 className="text-4xl md:text-6xl font-main font-semibold mb-28 ">
           About us
          </h2>
        </div>
        <HistoryCard/>
        <ValuesCard/>
      </div>
    </>
  );
}
