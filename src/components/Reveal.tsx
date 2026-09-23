import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}>
      {children}
    </motion.div>
  );
}

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-gold">
    <span className="h-px w-10 bg-gold/60" />{children}
  </div>
);
