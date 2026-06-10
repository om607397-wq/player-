import { Menu, Moon, Sun, X, Shield, Palette, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useAppContext, AppColor } from '../context';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const { lang, setLang, theme, setTheme, appColor, setAppColor } = useAppContext();
  const t = useTranslation(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [showPalette, setShowPalette] = useState(false);

  const colors: AppColor[] = ['emerald', 'blue', 'rose', 'amber', 'violet'];
  const colorHex: Record<AppColor, string> = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
    violet: 'bg-violet-500',
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'journey', href: '#journey' },
    { key: 'highlights', href: '#highlights' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' },
  ] as const;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg-primary/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Shield className="text-brand" size={24} />
          <span className="font-heading font-bold text-lg tracking-tight uppercase">PlayPro</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-brand transition-colors"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="h-4 w-[1px] bg-border mx-2"></div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowPalette(!showPalette)} 
                className="text-text-primary hover:text-brand transition flex items-center mt-1"
              >
                <Palette size={20} />
              </button>
              <AnimatePresence>
                {showPalette && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 p-4 bg-bg-primary border border-border rounded-2xl shadow-xl flex gap-3 z-50 flex-col items-center min-w-max"
                  >
                    <span className="text-[10px] uppercase font-bold text-text-secondary tracking-widest leading-none">Theme Color</span>
                    <div className="flex gap-2.5">
                       {colors.map(c => (
                         <button 
                           key={c} 
                           onClick={() => { setAppColor(c); setShowPalette(false); }} 
                           className={`relative w-8 h-8 rounded-full ${colorHex[c]} ${appColor === c ? 'ring-2 ring-offset-2 ring-offset-bg-primary ring-text-primary' : 'hover:scale-110'} transition-all flex items-center justify-center`}
                         >
                            {appColor === c && <CheckCircle2 size={16} className="text-white absolute" />}
                         </button>
                       ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={toggleLang} className="text-sm font-bold text-text-primary hover:text-brand transition">
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="text-text-primary hover:text-brand transition">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
           <button onClick={() => setShowPalette(!showPalette)} className="text-text-primary">
              <Palette size={20} />
           </button>
           <button onClick={toggleTheme} className="text-text-primary">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          <button onClick={() => { setIsOpen(!isOpen); setShowPalette(false); }} className="text-text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Theme Palette Panel */}
      <AnimatePresence>
        {showPalette && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-bg-primary flex flex-col items-center py-4 px-4 gap-3 bg-bg-secondary"
          >
            <span className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">Select Theme Color</span>
            <div className="flex gap-3 justify-center w-full">
               {colors.map(c => (
                 <button 
                   key={c} 
                   onClick={() => { setAppColor(c); setShowPalette(false); }} 
                   className={`w-10 h-10 rounded-full ${colorHex[c]} ${appColor === c ? 'ring-2 ring-offset-2 ring-offset-bg-secondary ring-text-primary' : ''} transition-all flex items-center justify-center`}
                 >
                   {appColor === c && <CheckCircle2 size={20} className="text-white" />}
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-bg-primary"
          >
            <ul className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium text-text-secondary hover:text-brand"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
              <li className="pt-2 mt-2 border-t border-border">
                 <button onClick={() => { toggleLang(); setIsOpen(false); }} className="w-full text-left text-sm font-bold text-text-primary">
                  {lang === 'en' ? 'Switch to Arabic' : 'التبديل للإنجليزية'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
