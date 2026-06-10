import { motion } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';

export const Quote = () => {
  const { lang } = useAppContext();
  const data = DUMMY_DATA;

  return (
    <section className="py-20 md:py-32 px-4 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative px-6 md:px-8"
        >
          <QuoteIcon className="text-brand/20 w-20 h-20 md:w-32 md:h-32 absolute -top-8 -left-4 md:-top-12 md:-left-12 -rotate-12 select-none z-0 opacity-50" />
          <p className="relative z-10 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
            "{data.quote[lang]}"
          </p>
          <div className="mt-8 md:mt-12 flex items-center justify-center gap-4 md:gap-6">
             <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-brand rounded-full"></div>
             <span className="font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm text-text-primary">{data.name[lang]}</span>
             <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-brand rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
