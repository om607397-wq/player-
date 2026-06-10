import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Theme } from './types';

export type AppColor = 'emerald' | 'blue' | 'rose' | 'amber' | 'violet';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  appColor: AppColor;
  setAppColor: (color: AppColor) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [appColor, setAppColor] = useState<AppColor>('emerald');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Initial theme detection
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const themeVars = {
      emerald: { brand: '#10b981', lightBrandLight: '#ecfdf5', darkBrandLight: '#064e3b' },
      blue: { brand: '#3b82f6', lightBrandLight: '#eff6ff', darkBrandLight: '#1e3a8a' },
      rose: { brand: '#f43f5e', lightBrandLight: '#fff1f2', darkBrandLight: '#881337' },
      amber: { brand: '#f59e0b', lightBrandLight: '#fffbeb', darkBrandLight: '#78350f' },
      violet: { brand: '#8b5cf6', lightBrandLight: '#f5f3ff', darkBrandLight: '#4c1d95' },
    };

    const current = themeVars[appColor];
    root.style.setProperty('--brand', current.brand);
    
    const updateBrandLight = () => {
       const isDark = root.classList.contains('dark');
       root.style.setProperty('--brand-light', isDark ? current.darkBrandLight : current.lightBrandLight);
    };
    
    updateBrandLight();

    const observer = new MutationObserver(updateBrandLight);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, [appColor]);

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, appColor, setAppColor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
