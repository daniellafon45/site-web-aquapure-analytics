import type { Locale, Translations } from "../types";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { zh } from "./zh";

export const translations: Record<Locale, Translations> = {
  fr,
  en,
  zh,
  es,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.fr;
}
