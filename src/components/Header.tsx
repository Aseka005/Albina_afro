import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { IG, WA } from '../lib/links';

export const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О мастере' },
  { id: 'services', label: 'Услуги' },
  { id: 'training', label: 'Обучение' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-gold/15 py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between gap-6">
        <a href="#home" className="group flex items-baseline gap-1" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl md:text-[28px] font-semibold tracking-wide text-cream">Albina</span>
          <span className="font-display italic text-2xl md:text-[28px] text-gold transition-colors group-hover:text-gold-soft">_afro</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[13px] uppercase tracking-[0.18em] text-sand/80">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="link-u hover:text-cream transition-colors">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="grid place-items-center w-10 h-10 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-ink transition-all duration-300 hover:-translate-y-0.5">
            <InstagramIcon className="w-[18px] h-[18px]" />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="btn-gold hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em]">
            <WhatsAppIcon className="w-4 h-4" /> Записаться
          </a>
          <button onClick={() => setOpen((v) => !v)} aria-label="Меню"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-gold/35 text-cream hover:border-gold transition">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-ink/97 backdrop-blur-lg px-6 pt-10">
            <nav className="flex flex-col gap-2">
              {NAV.map((n, i) => (
                <motion.a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                  className="font-display text-4xl py-2 border-b border-gold/10 text-cream hover:text-gold transition-colors">
                  {n.label}
                </motion.a>
              ))}
            </nav>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="btn-gold mt-10 flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.14em]">
              <WhatsAppIcon /> Записаться в WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
