import { Hero } from "@/UI/Hero/Hero";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function ContactSales() {
  return (
    <>
      <Hero
        title="Contrata ya"
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              Contacta con nuestro equipo de ventas
            </h2>
            <p>
              Te ayudaremos a elegir el plan que mejor se adapte a tus
              necesidades
            </p>
          </>
        }
        actions={[
          <Button
            as={Link}
            href="/pricing"
            color="primary"
            variant="ghost"
            key="second"
            size="lg"
          >
            Saber más
          </Button>,
        ]}
      />
    </>
  );
}
