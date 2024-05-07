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
      <div
        id="about"
        className="w-[95vw] md:w-[65vw] mx-auto flex flex-col items-end"
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
