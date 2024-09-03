import { Hero } from "@/UI/Hero/Hero";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero
        title="NextUI"
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              Esta es una aplicación de ticketing
            </h2>
            <p>Apta para todas las startups</p>
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
