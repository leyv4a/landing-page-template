import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import { IoTelescope } from "react-icons/io5";
import { FaBullseye, FaChildren} from "react-icons/fa6";

export default function ValuesCard() {
  return (
   <>
   
    <div className="flex w-full items-center md:items-start flex-col mt-10 ">
        <p className='my-3 text-3xl'>Our porpuses</p>
      <Tabs aria-label="Options" color='primary' variant='bordered'>
        <Tab key="photos" title={
            <div className="flex items-center space-x-2">
              <FaBullseye/>
              <span>Mision</span>
            </div>
          }>
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title={
            <div className="flex items-center space-x-2">
              <IoTelescope/>
              <span>Vision</span>
            </div>
          }>
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title={
            <div className="flex items-center space-x-2">
              <FaChildren/>
              <span>Valores</span>
            </div>
          }>
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
   </>
  )
}
