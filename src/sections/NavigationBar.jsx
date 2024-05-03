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
import { useTheme } from "../contexts/ThemeProvider";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  const menuItems = ["Profile", "Dashboard", "Activity"];
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className={`${theme} `}
        isBlurred={false}
      >
        <NavbarContent>
          {/* LOGOTIPO DE LA EMPRESA */}
          <NavbarBrand>
            <p className="font-bold text-foreground">LOGO</p>
          </NavbarBrand>
        </NavbarContent>

        {/* GRUPO DE ITEMS */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link  className="font-bold hover:text-foreground-200" color="foreground" href="#">
              Productos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="font-bold hover:text-foreground-200" color="foreground" href="#">
              Testimonios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="font-bold hover:text-foreground-200" color="foreground" href="#">
              Sobre Nosotros
            </Link>
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
            <Button className="font-bold bg-primary text-background hover:ring-2 rounded" color="foreground" href="#">
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
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full text-3xl"
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
