import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

export const CTA = () => {
  const { lang, theme } = useAppContext();
  const t = useTranslation(lang);

  return (
    <section className="py-16 md:py-24 px-4 bg-brand text-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute -top-40 -right-40 w-64 md:w-80 h-64 md:h-80 bg-white/20 rounded-full blur-[80px] md:blur-[100px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-tight"
        >
          {t('createWebsiteHeading')}
        </motion.h2>
        
        <motion.button
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className={`inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all transform hover:scale-105 shadow-xl ${theme === 'dark' ? 'bg-black text-white hover:bg-zinc-900' : 'bg-white text-black hover:bg-gray-100'}`}
        >
          {t('createWebsiteBtn')}
          <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
        </motion.button>
      </div>
    </section>
  );
};
