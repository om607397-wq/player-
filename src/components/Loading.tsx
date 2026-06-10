import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useAppContext } from '../context';
import { DUMMY_DATA } from '../types';

export const Loading = ({ onComplete }: { onComplete: () => void }) => {
  const { lang } = useAppContext();
  const data = DUMMY_DATA;

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200); // slightly longer to enjoy animation
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 relative"
      >
        <div className="relative">
          {/* Glowing ring */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border-2 border-brand/30 border-t-brand border-r-brand"
          />
          <img 
            src={data.heroImage} 
            alt={data.name[lang]} 
            className="w-32 h-32 rounded-full object-cover border-4 border-bg-primary shadow-xl"
          />
          {/* Club logo badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white p-1 border-2 border-bg-primary shadow-lg"
          >
            <img src={data.clubLogo} alt="Club" className="w-full h-full object-cover rounded-full" />
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="flex flex-col items-center"
        >
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary uppercase mb-2">
            {data.name[lang]}
          </h1>
          <div className="text-brand font-medium tracking-widest text-sm uppercase">
            {data.position[lang]}
          </div>
        </motion.div>

        <div className="h-1 w-32 overflow-hidden rounded-full bg-border mt-4">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "circInOut" }}
            className="h-full w-full bg-brand"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
