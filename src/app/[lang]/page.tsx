import { Hero } from "@/UI/Hero/Hero";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { AvailableLocales } from "@/translations/translations.types";
import { getTranslations } from "@/translations/translations";

export default async function Home({
  params,
}: {
  params: { lang: AvailableLocales };
}) {
  const lang = params.lang;
  const t = await getTranslations(lang);

  return (
    <>
      <Hero
        title={t.home.hero.title}
        cta={
          <>
            <h2 className="font-bold text-4xl mb-4 mt-6">
              {t.home.hero.subtitle}
            </h2>
            <p>{t.home.hero.text}</p>
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
            {t.home.hero.button_buy}
          </Button>,
          <Button
            as={Link}
            href="/pricing"
            color="primary"
            variant="ghost"
            key="second"
            size="lg"
          >
            {t.home.hero.button_learn_more}
          </Button>,
        ]}
      />
    </>
  );
}
