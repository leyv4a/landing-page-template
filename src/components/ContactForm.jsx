import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function ContactForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="flip-up"  className="w-[100%] shadow shadow-foreground-700 rounded">
        <form className="m-10" onSubmit={handleSubmit}>
        <p className="text-3xl font-bold font-sans mb-4 text-center">
          Send us a message
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Input
              type="text"
              label="Your name"
              placeholder="Enter your full name"
              variant="bordered"
            />
            <Input
              type="email"
              label="Email address"
              placeholder="Enter your email"
              variant="bordered"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <Input
              type="tel"
              label="Phone number"
              placeholder="Enter your phone number"
              variant="bordered"
            />
            <Input
              type="text"
              label="Company name"
              placeholder="Enter your company name"
              variant="bordered"
            />
          </div>
          <Textarea
           minRows={2}
           maxRows={3}
           variant="bordered"
            label="Message"
            placeholder="Enter your message"
            className="mb-2"
          />
          <button className="px-4 py-2 bg-primary text-foreground rounded hover:ring w-full">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
