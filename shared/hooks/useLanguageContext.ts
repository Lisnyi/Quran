import { useContext, createContext, Dispatch, SetStateAction } from "react";

type Language = {
    language: 'en' | 'ua',
    changeLanguage: Dispatch<SetStateAction<'en' | 'ua'>>
}

export const LanguageContext = createContext <Language>({
    language: 'en',
    changeLanguage: () => {}
});

export const useLanguageContext = () => useContext(LanguageContext);