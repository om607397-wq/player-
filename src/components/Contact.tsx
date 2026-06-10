import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Instagram, QrCode } from 'lucide-react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';
import { QrModal } from './QrModal';

// Simple TikTok icon SVG
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a5 5 0 0 0-3-1v8a8 8 0 1 1-8-8v3a5 5 0 0 0 5 5z"></path>
  </svg>
);

export const Contact = () => {
  const { lang } = useAppContext();
  const t = useTranslation(lang);
  const data = DUMMY_DATA;
  const [isQrOpen, setIsQrOpen] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center mb-10 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-text-primary tracking-tight">
            {t('contact')}
          </h2>
          <div className="w-12 md:w-16 h-1.5 bg-brand mt-4 md:mt-6"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
           <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={data.socials.whatsapp} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center justify-center gap-3 w-28 h-28 sm:w-36 sm:h-36 rounded-[1.5rem] bg-bg-primary border border-border shadow-sm hover:shadow-xl hover:border-brand/50 transition-all group"
           >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-text-secondary uppercase">WhatsApp</span>
           </motion.a>
           
           <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${data.socials.phone}`}
              className="flex flex-col items-center justify-center gap-3 w-28 h-28 sm:w-36 sm:h-36 rounded-[1.5rem] bg-bg-primary border border-border shadow-sm hover:shadow-xl hover:border-brand/50 transition-all group"
           >
               <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-text-secondary uppercase">Call</span>
           </motion.a>
           
           <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={data.socials.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center justify-center gap-3 w-28 h-28 sm:w-36 sm:h-36 rounded-[1.5rem] bg-bg-primary border border-border shadow-sm hover:shadow-xl hover:border-brand/50 transition-all group"
           >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram size={24} className="sm:w-7 sm:h-7" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-text-secondary uppercase">Instagram</span>
           </motion.a>

           <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href={data.socials.tiktok} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center justify-center gap-3 w-28 h-28 sm:w-36 sm:h-36 rounded-[1.5rem] bg-bg-primary border border-border shadow-sm hover:shadow-xl hover:border-brand/50 transition-all group"
           >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-text-primary/10 text-text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <TikTokIcon size={24} />
              </div>
              <span className="font-bold text-xs sm:text-sm text-text-secondary uppercase">TikTok</span>
           </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
            <button 
                onClick={() => setIsQrOpen(true)}
                className="inline-flex items-center gap-4 bg-bg-primary border border-border py-4 px-8 rounded-full shadow-sm hover:border-brand hover:text-brand transition-colors cursor-pointer group"
            >
                <QrCode size={24} className="text-text-secondary group-hover:text-brand transition-colors" />
                <span className="font-bold text-text-primary tracking-wide uppercase text-sm group-hover:text-brand transition-colors">Scan to Connect</span>
            </button>
        </motion.div>

        <QrModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)} />

      </div>
    </section>
  );
};
