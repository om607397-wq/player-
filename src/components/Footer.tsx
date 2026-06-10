import { Shield } from 'lucide-react';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

export const Footer = () => {
  const { lang } = useAppContext();
  const t = useTranslation(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex justify-center items-center gap-3">
          <Shield className="text-brand border border-brand/20 rounded-full p-1 w-8 h-8 opacity-80" />
          <span className="font-heading font-bold uppercase tracking-[0.2em] text-text-primary">PlayPro</span>
        </div>
        
        <p className="text-text-secondary text-sm font-medium tracking-wide">
          {lang === 'ar' ? 'صُمم لأكاديميات ولاعبي كرة القدم.' : 'Designed for Academy Players.'}
        </p>
        
        <p className="text-text-secondary/60 font-mono text-xs uppercase tracking-wider mt-4">
          &copy; {currentYear} PlayPro. {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};
