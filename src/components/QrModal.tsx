import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import QRCode from 'react-qr-code';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

export const QrModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { lang, theme } = useAppContext();
  const t = useTranslation(lang);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
           onClick={onClose}
        >
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ scale: 0.9, opacity: 0 }}
             className="bg-bg-primary rounded-3xl p-8 max-w-sm w-full relative shadow-2xl border border-border"
             onClick={(e) => e.stopPropagation()}
          >
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors p-2 bg-bg-secondary rounded-full"
             >
               <X size={20} />
             </button>
             <div className="flex flex-col items-center text-center mt-4">
                <h3 className="font-heading text-2xl font-bold uppercase text-text-primary mb-2">Scan & Share</h3>
                <p className="text-text-secondary text-sm mb-8">Scan this QR code to view this player profile on any mobile device.</p>
                <div className="p-4 bg-white rounded-2xl shadow-inner border border-gray-100 flex items-center justify-center">
                   <QRCode 
                      value={url} 
                      size={200} 
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      bgColor="#ffffff"
                      fgColor="#000000"
                    />
                </div>
             </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
