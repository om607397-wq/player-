import { motion } from 'motion/react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

export const Timeline = () => {
  const { lang } = useAppContext();
  const t = useTranslation(lang);
  const data = DUMMY_DATA;

  return (
    <section id="journey" className="py-16 md:py-24 px-4 bg-bg-primary relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-text-primary tracking-tight">
            {t('journey')}
          </h2>
          <div className="w-12 md:w-16 h-1.5 bg-brand mt-4 md:mt-6"></div>
        </motion.div>

        <div className="relative border-l-2 border-border/50 md:border-l-0 md:mx-auto">
           {/* Center line for desktop */}
           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2"></div>
           
           <div className="flex flex-col gap-8 md:gap-12">
             {data.timeline.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-4 md:gap-12 pl-6 md:pl-0 w-full`}
               >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-6 md:-translate-x-1/2 w-3 h-3 bg-brand rounded-full ring-4 ring-bg-primary"></div>

                  <div className={`md:w-1/2 flex items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="bg-bg-secondary border border-border p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full md:max-w-sm group">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white p-1 overflow-hidden shadow-sm border border-border/50 group-hover:border-brand transition-colors shrink-0">
                          <img src={item.logo} alt={item.club[lang]} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <div className="text-brand font-bold text-sm tracking-widest">{item.year}</div>
                          <h3 className="text-xl font-bold text-text-primary font-heading">{item.title[lang]}</h3>
                        </div>
                      </div>
                      <div className="text-text-secondary font-medium">
                        {item.club[lang]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
