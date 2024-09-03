import type { Translations, AvailableLocales } from "./translations.types";
import es from "./es.json";
import en from "./en.json";

export const AVAILABLE_LOCALES: AvailableLocales[] = ["es", "en"];

const dictionary = { es, en };

export const getTranslations = async (lang: AvailableLocales) => {
  const translations: Translations = dictionary[lang];
  return translations;
};

export const useClientTranslations = (lang?: AvailableLocales) => {
  if (!globalThis?.window) {
    return dictionary.es;
  }
  if (lang) {
    return dictionary[lang];
  }
  if (globalThis?.window.location.pathname.startsWith("/en")) {
    return dictionary.en;
  }
  return dictionary.es;
};
