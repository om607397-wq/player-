import { motion } from 'motion/react';
import { Activity, Star, Trophy, Shield } from 'lucide-react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

// Custom Shoe icon for preferred foot
const ShoeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 16v-2.38C4 11.5 5.28 10 7 10h1.52L10 6.64A2 2 0 0 1 11.66 6h4.68a2 2 0 0 1 1.94 1.5l1.6 6.38a1.9 1.9 0 0 0 1.9 1.45H22v2H4z"></path>
    <path d="M4 16h18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z"></path>
  </svg>
);

const POSITION_MAP: Record<string, { x: number, y: number }> = {
  'GK': { x: 50, y: 90 },
  'CB': { x: 50, y: 75 },
  'LB': { x: 20, y: 75 },
  'RB': { x: 80, y: 75 },
  'CDM': { x: 50, y: 60 },
  'CM': { x: 50, y: 50 },
  'CAM': { x: 50, y: 35 },
  'LW': { x: 20, y: 25 },
  'RW': { x: 80, y: 25 },
  'ST': { x: 50, y: 15 },
};

// Simple Football Pitch Graphic
const Pitch = ({ positionCode }: { positionCode: string }) => {
  const coords = POSITION_MAP[positionCode?.toUpperCase()] || { x: 50, y: 50 };

  return (
    <div className="relative w-full max-w-[280px] aspect-[2/3] border-2 border-white/20 rounded-lg bg-emerald-600/20 overflow-hidden mx-auto shadow-inner">
      {/* Center line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20 -translate-y-1/2"></div>
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 w-20 h-20 border-[2px] border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      {/* Penalty areas */}
      <div className="absolute top-0 left-1/2 w-40 h-20 border-x-[2px] border-b-[2px] border-white/20 -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-40 h-20 border-x-[2px] border-t-[2px] border-white/20 -translate-x-1/2"></div>
      
      {/* Player Position Marker */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.3 }}
        className="absolute w-6 h-6 bg-brand rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_var(--brand)] border-2 border-white flex items-center justify-center z-10"
        style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
      >
        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
      </motion.div>
    </div>
  );
};

export const About = () => {
  const { lang } = useAppContext();
  const t = useTranslation(lang);
  const data = DUMMY_DATA;

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             className="bg-[#0a0a0a] rounded-[2rem] p-6 sm:p-12 relative overflow-hidden shadow-2xl border border-white/10"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent"></div>
             <Pitch positionCode={data.positionCode} />
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: lang === 'en' ? 30 : -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="flex flex-col gap-8 relative z-10"
          >
            <div>
              <h2 className="font-heading text-4xl font-bold uppercase text-text-primary tracking-tight">
                {t('about')}
              </h2>
              <div className="w-16 h-1.5 bg-brand mt-4"></div>
            </div>
            
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              {data.bio[lang]}
            </p>

            <div className="grid grid-cols-2 gap-4">
               {/* Icon Cards Replacement for text blocks */}
               <div className="flex flex-col gap-3 p-5 bg-bg-primary rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-brand/30 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                     <ShoeIcon size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-text-secondary tracking-widest mb-1">{t('preferredFoot')}</span>
                    <span className="font-heading font-bold text-lg text-text-primary capitalize">{t(data.preferredFoot)}</span>
                  </div>
               </div>

               <div className="flex flex-col gap-3 p-5 bg-bg-primary rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-brand/30 transition-all group">
                  <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform bg-white rounded-full p-1 border border-border">
                    <img src={data.clubLogo} alt="Club Logo" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-text-secondary tracking-widest mb-1">Current Club</span>
                    <span className="font-heading font-bold text-lg text-text-primary">{data.club[lang]}</span>
                  </div>
               </div>

               <div className="flex flex-col gap-3 p-5 bg-bg-primary rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-brand/30 transition-all group col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform bg-white rounded-full p-1 border border-border">
                      <img src={data.favoriteClubLogo} alt="Favorite Club" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-text-secondary tracking-widest mb-1">{t('favoriteClub')}</span>
                      <span className="font-heading font-bold text-lg text-text-primary">{data.favoriteClub[lang]}</span>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
