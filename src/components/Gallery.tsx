import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Expand, X } from 'lucide-react';
import { DUMMY_DATA } from '../types';
import { useAppContext } from '../context';
import { useTranslation } from '../i18n';

export const Gallery = () => {
  const { lang } = useAppContext();
  const t = useTranslation(lang);
  const data = DUMMY_DATA;
  
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesToShow = expanded ? data.gallery : data.gallery.slice(0, 3);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-text-primary tracking-tight">
              {t('gallery')}
            </h2>
            <div className="w-12 md:w-16 h-1.5 bg-brand mt-4 md:mt-6"></div>
          </div>
          {data.gallery.length > 3 && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-brand font-semibold hover:text-brand-light transition px-6 py-2 border-2 border-brand rounded-full hover:bg-brand hover:text-white"
            >
              {expanded ? t('lessPhotos') : t('morePhotos')}
            </button>
          )}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {imagesToShow.map((url, idx) => (
              <motion.div
                key={url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-bg-primary"
                onClick={() => setSelectedImage(url)}
              >
                <img src={url} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Expand className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
             <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage} 
                alt="Selected full screen" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
             />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
