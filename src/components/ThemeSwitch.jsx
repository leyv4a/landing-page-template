import React from 'react';
import {Switch, Tooltip, VisuallyHidden, toggle, useSwitch} from "@nextui-org/react";
import { useTheme } from '../contexts/ThemeProvider';
import { IoMdSunny } from "react-icons/io";
import {  FaMoon  } from "react-icons/fa";

export const ThemeSwitch = ({props}) => {
    const { theme, toggleTheme } = useTheme();

    const {
        Component, 
        slots, 
        isSelected, 
        getBaseProps, 
        getInputProps, 
        getWrapperProps
      } = useSwitch(props);
    
    

       // Almacenar el tema seleccionado en el localStorage
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
    return (
     <>
     <Tooltip content="Cambiar tema">
    <div className="flex flex-col gap-2">
      <Component> 
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-lg text-foreground cursor-pointer",
                "text-xl bg-transparent"
              ],
            })}
            onClick={toggleTheme}
          >
            {isSelected ? <IoMdSunny/> : <FaMoon/>}
          </div>
      </Component>
    </div>
    </Tooltip>
     </>
    )
  }