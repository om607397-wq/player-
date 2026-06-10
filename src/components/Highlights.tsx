import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

export const Highlights = () => {
  const { lang } = useAppContext();
  const t = useTranslation(lang);
  const data = DUMMY_DATA;

  const VideoCard = ({ url, isMain = false }: { url: string; isMain?: boolean }) => (
    <div className={`relative group cursor-pointer overflow-hidden rounded-3xl bg-black shadow-lg hover:shadow-brand/20 transition-all border border-border/50 hover:border-brand/50 ${isMain ? 'aspect-video w-full' : 'aspect-video'}`}>
      <img src={url} alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand/90 backdrop-blur-sm flex items-center justify-center text-white shadow-[0_0_30px_var(--color-brand)] transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/20">
          <Play size={32} fill="currentColor" className="ml-2" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
        <div className="text-xs uppercase tracking-widest font-bold text-brand mb-1">Highlight</div>
        <div className="text-lg font-heading font-bold">{t('watchVideo')}</div>
      </div>
    </div>
  );

  return (
    <section id="highlights" className="py-16 md:py-24 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-10 md:mb-12 flex flex-col items-center text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-text-primary tracking-tight">
            {t('highlights')}
          </h2>
          <div className="w-12 md:w-16 h-1.5 bg-brand mt-4 md:mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <VideoCard url={data.videos.main} isMain />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            {data.videos.others.map((url, idx) => (
              <VideoCard key={idx} url={url} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
