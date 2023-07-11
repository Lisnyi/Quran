import { FC, useState, PropsWithChildren } from 'react';
import { LanguageContext, AlignmentContext, FontSizeContext } from '../../shared'

type LanguageState = 'en' | 'ua'
type AlignmentState = 'left' | 'right'

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const [language, changeLanguage] = useState<LanguageState>('ua');
    const [alignment, changeAlignment] = useState<AlignmentState>('left');
    const [fontSize, changeFontSize] = useState<number>(16);

    return (
      <LanguageContext.Provider value={{ language, changeLanguage }}>
        <AlignmentContext.Provider value={{ alignment, changeAlignment }}>
          <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
            {children}
          </FontSizeContext.Provider>
        </AlignmentContext.Provider>
      </LanguageContext.Provider>
    );
  }