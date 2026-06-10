import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovered(!!isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', updateHoverState, { passive: true });
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: isVisible ? 1 : 0 }}
       className="pointer-events-none fixed inset-0 z-[9999]"
    >
       <motion.div 
         className="absolute top-0 left-0 w-4 h-4 bg-brand rounded-full origin-center mix-blend-difference"
         animate={{ 
           x: mousePosition.x - 8, 
           y: mousePosition.y - 8, 
           scale: isHovered ? 2.5 : 1,
           opacity: isHovered ? 0.6 : 1
         }}
         transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
       />
    </motion.div>
  );
};
