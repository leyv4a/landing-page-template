import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Tooltip,
} from "@nextui-org/react";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ScrollIntoView from 'react-scroll-into-view'
export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Productos", "Testimonios", "Sobre Nosotros", "Contacto"];
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className={`font-sans text-foreground`}
        isBlurred={true}
        isBordered
        height={'10vh'}
      >
        <NavbarContent>
          {/* LOGOTIPO DE LA EMPRESA */}
          <NavbarBrand>
            <ScrollIntoView selector="#home">
              <button className="font-bold text-foreground">LOGO</button>
            </ScrollIntoView>
          </NavbarBrand>
        </NavbarContent>

        {/* GRUPO DE ITEMS */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <ScrollIntoView selector="#productos">
              <button className="font-bold hover:text-foreground-200"  >
                Productos
              </button>
            </ScrollIntoView>
          </NavbarItem>
          <NavbarItem>
            <ScrollIntoView selector="#testimonios">
              <button className="font-bold hover:text-foreground-200"  >
                Testimonios
              </button>
            </ScrollIntoView>
          </NavbarItem>
          <NavbarItem>
            <ScrollIntoView selector="#about">
              <button className="font-bold hover:text-foreground-200"  >
                Sobre Nosotros
              </button>
            </ScrollIntoView>
          
          </NavbarItem>
         
        </NavbarContent>

        {/* NAVBAR BOTON CTA */}
        <NavbarContent justify="end">
          <NavbarItem className="flex items-center justify-center">
            <Tooltip content="Ir a la pagina de Facebook">
              <Button
                as={Link}
                href="https://www.facebook.com/"
                className="bg-trasparent"
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
                className="bg-trasparent"
                isIconOnly
                size="sm"
              >
                <BsTwitterX className="text-xl" />
              </Button>
            </Tooltip>
            <ThemeSwitch />
            <Button className="hidden sm:flex font-bold bg-primary text-background hover:ring-2 rounded" color="foreground" href="#">
              Contacto
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* HAMBURGER MENU ITEMS */}
        <NavbarMenu className="items-end  ">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 3
                    ? "primary"
                    : "foreground"
                }
                className="w-full text-3xl "
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        {/* HAMBURGUER MENU */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground"
        />
      </Navbar>
    </>
  );
}
