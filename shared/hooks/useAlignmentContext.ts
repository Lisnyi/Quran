import { useContext, createContext, Dispatch, SetStateAction } from "react";

type Alignment = {
    alignment: 'left' | 'right',
    changeAlignment: Dispatch<SetStateAction<'left' | 'right'>>
}

export const AlignmentContext = createContext <Alignment>({
    alignment: 'left',
    changeAlignment: () => {}
});

export const useAlignmentContext = () => useContext(AlignmentContext);