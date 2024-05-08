import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {
    Button,
    Tooltip,
    Link
  } from "@nextui-org/react";
export default function Footer() {
  return (
    <>
      <hr className="mb-10 opacity-45" />
      <div className="w-[95vw] md:w-[65vw] mx-auto flex justify-between mb-10  font-sans">
        <div className="flex  w-full">
          <p className="text-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className=" w-full flex justify-center"></div>
      </div>
        <hr className="max-w-[80%] mx-auto my-3 opacity-45"  />
      <div className="mx-auto w-[95vw] md:w-[65vw] justify-between mx-auto flex pb-10 ">
        <p className="text-foreground-300">&copy; Copyright 2024</p>
        <div>
        <Tooltip content="Ir a la pagina de Facebook">
              <Button
                as={Link}
                href="https://www.facebook.com/"
                className="bg-trasparent text-foreground-300"
                isIconOnly
                size="sm"
              >
                <FaFacebookF className="text-xl" />
              </Button>
            </Tooltip>
            <Tooltip content="Ir a la pagina de Twitter(X)">
              <Button
                as={Link}
                href="https://www.x.com/"
                className="bg-trasparent text-foreground-300"
                isIconOnly
                size="sm"
              >
                <BsTwitterX className="text-xl" />
              </Button>
            </Tooltip>
        </div>
      </div>
    </>
  );
}
