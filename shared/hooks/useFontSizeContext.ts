import { useContext, createContext, Dispatch, SetStateAction } from "react";

type FontSize = {
    fontSize: number,
    changeFontSize: Dispatch<SetStateAction<number>>
}

export const FontSizeContext = createContext<FontSize>({
    fontSize: 12,
    changeFontSize: () => {}
});

export const useFontSizeContext = () => useContext(FontSizeContext);