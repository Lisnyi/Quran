import { strings } from "../localization";
import { useLanguageContext } from "./useLanguageContext";

export function useTranslation() {
  const { language } = useLanguageContext();

  strings.setLanguage(language);
  return strings;
}