import { Hero } from "@/UI/Hero/Hero";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <Hero
        title="Precios"
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              Consulta nuestros precios
            </h2>
            <p>Elige el plan que mejor se adapte a tus necesidades</p>
          </>
        }
        actions={[
          <Button
            as={Link}
            href="/contact-sales"
            color="primary"
            variant="shadow"
            key="first"
            size="lg"
          >
            Contratar
          </Button>,
        ]}
      />
    </>
  );
}
