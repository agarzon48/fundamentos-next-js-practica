import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { LoginButton } from "./LoginButton";

export function Navbar() {
  return (
    <NUINavbar>
      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit">My Company</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/pricing">Precios</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/contact-sales">Contratar</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LoginButton />
        </NavbarItem>
      </NavbarContent>
    </NUINavbar>
  );
}
