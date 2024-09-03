import {
  Navbar as NUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

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
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NUINavbar>
  );
}
