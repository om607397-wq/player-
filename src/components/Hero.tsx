import { motion } from 'motion/react';
import { Activity, Shield, Star, Trophy, Footprints } from 'lucide-react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';

// Custom Shoe icon for preferred foot
const ShoeIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 16v-2.38C4 11.5 5.28 10 7 10h1.52L10 6.64A2 2 0 0 1 11.66 6h4.68a2 2 0 0 1 1.94 1.5l1.6 6.38a1.9 1.9 0 0 0 1.9 1.45H22v2H4z"></path>
    <path d="M4 16h18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z"></path>
  </svg>
);

export const Hero = () => {
  const { lang } = useAppContext();
  const data = DUMMY_DATA;

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-bg-primary">
      {/* Stadium / Pitch Lighting Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Pitch Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay [transform:perspective(500px)_rotateX(60deg)_scale(2)] transform-origin-bottom"></div>
        {/* Stadium Lights */}
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[500px] bg-brand/5 rounded-full blur-[100px] md:blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 z-10 flex flex-col items-center">
        
        {/* Large Player Context Image */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative mb-8 md:mb-10"
        >
          {/* Subtle glowing ring background */}
          <div className="absolute inset-0 rounded-full bg-brand/20 blur-xl md:blur-2xl animate-pulse"></div>
          <div className="absolute -inset-2 md:-inset-4 rounded-full border border-brand/30 border-t-brand animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute -inset-4 md:-inset-8 rounded-full border border-border/40 border-b-brand/50 animate-[spin_15s_linear_infinite_reverse]"></div>
          
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-bg-primary shadow-2xl z-10">
            <img 
              src={data.heroImage} 
              alt={data.name[lang]} 
              className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Sub Logo overlap */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -bottom-2 -right-2 md:-bottom-4 md:right-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white p-1 border-4 border-bg-primary shadow-xl z-20"
          >
            <img src={data.clubLogo} alt={data.club[lang]} className="w-full h-full object-cover rounded-full" />
          </motion.div>
        </motion.div>

        {/* Big Number Visual & Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center relative w-full mb-10 md:mb-12"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] select-none -z-10 pointer-events-none w-full overflow-hidden flex justify-center">
             <span className="font-heading text-[8rem] sm:text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-border/40 to-transparent">
              {data.number}
             </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-text-primary leading-none mb-3 md:mb-4">
            {data.name[lang]}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-base sm:text-lg md:text-xl text-text-secondary font-medium">
             <span className="text-brand flex items-center gap-1.5 md:gap-2">
                <Activity size={18} className="md:w-5 md:h-5" />
                {data.position[lang]}
             </span>
             <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
             <span>{data.club[lang]}</span>
          </div>
        </motion.div>

        {/* Icon Badges (instead of plain text) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full"
        >
          <div className="flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl bg-bg-secondary border border-border shadow-sm hover:border-brand/40 transition-colors">
             <div className="p-1.5 md:p-2 rounded-full bg-brand/10 text-brand"><Shield size={18} className="md:w-5 md:h-5" /></div>
             <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] uppercase text-text-secondary font-bold tracking-wider">Position</span>
                <span className="font-heading font-bold text-xs md:text-sm text-text-primary">{data.position[lang]}</span>
             </div>
          </div>
          
          <div className="flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl bg-bg-secondary border border-border shadow-sm hover:border-brand/40 transition-colors">
             <div className="p-1.5 md:p-2 rounded-full bg-brand/10 text-brand"><ShoeIcon size={18} className="md:w-5 md:h-5" /></div>
             <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] uppercase text-text-secondary font-bold tracking-wider">Foot</span>
                <span className="font-heading font-bold text-xs md:text-sm text-text-primary uppercase">{data.preferredFoot}</span>
             </div>
          </div>

          <div className="flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl bg-bg-secondary border border-border shadow-sm hover:border-brand/40 transition-colors">
             <div className="p-1 md:p-1.5 rounded-full bg-white w-8 h-8 md:w-10 md:h-10 overflow-hidden shadow-sm border border-border">
                <img src={data.clubLogo} alt="Current Club" className="w-full h-full object-cover" />
             </div>
             <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] uppercase text-text-secondary font-bold tracking-wider">Current Club</span>
                <span className="font-heading font-bold text-xs md:text-sm text-text-primary">{data.club[lang]}</span>
             </div>
          </div>

          <div className="flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-2xl bg-bg-secondary border border-border shadow-sm hover:border-brand/40 transition-colors">
             <div className="p-1 md:p-1.5 rounded-full bg-white w-8 h-8 md:w-10 md:h-10 overflow-hidden shadow-sm border border-border">
                <img src={data.favoriteClubLogo} alt="Favorite Club" className="w-full h-full object-cover" />
             </div>
             <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] uppercase text-text-secondary font-bold tracking-wider">Fav Club</span>
                <span className="font-heading font-bold text-xs md:text-sm text-text-primary">{data.favoriteClub[lang]}</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
