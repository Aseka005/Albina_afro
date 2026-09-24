import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Sparkles, HeartHandshake, MessageCircleHeart, Star, BookOpen, Layers, LifeBuoy, Award, Phone } from 'lucide-react';
import Header, { NAV } from './components/Header';
import Reveal, { Eyebrow } from './components/Reveal';
import { BraidLine, InstagramIcon, WhatsAppIcon } from './components/Icons';
import { GIS, IG, PHONE, WA, WA_STUDY } from './lib/links';

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const services = [
  { img: '/img/s-ponytail3.webp', title: 'Афро хвост', pos: 'object-center' },
  { img: '/img/s-classic3.webp', title: 'Классика', pos: 'object-center' },
  { img: '/img/s-braids4.webp', title: 'Брейды', pos: 'object-center' },
  { img: '/img/s-extensions.webp', title: 'Сфинкс с кудрями' },
  { img: '/img/s-micro6.webp', title: 'Микро косы', pos: 'object-center' },
  { img: '/img/s-micro.webp', title: 'Наращивание' },
  { img: '/img/s-boxer3.webp', title: 'Боксёрские косы', pos: 'object-center' },
  { img: '/img/s-curls2.webp', title: 'Афро кудри', pos: 'object-center' },
];

const course = [
  { icon: BookOpen, title: 'Полная программа', text: 'От теории до практики — структура волос, материалы, схемы и отработка на моделях.' },
  { icon: Layers, title: 'Все техники брейдов', text: 'Все востребованные техники плетения за один курс — без лишних доплат.' },
  { icon: LifeBuoy, title: 'Поддержка', text: 'Сопровождение на всех этапах обучения и после — отвечаю на вопросы и помогаю стартовать.' },
  { icon: Award, title: 'Сертификат', text: 'Сертификат по окончании обучения — подтверждение вашей квалификации.' },
];

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Header />

      {/* HERO */}
      <section id="home" className="grain relative min-h-[100svh] flex items-center pt-28 pb-16 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,#4a2f1f_0%,#1a110c_60%)]" />
        <div className="absolute -left-40 top-1/3 -z-10 w-[520px] h-[520px] rounded-full bg-clay/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl w-full px-5 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Eyebrow>Студия афро-причёсок · Караганда</Eyebrow>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display mt-6 text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.9] font-medium tracking-tight">
              Albina<span className="italic text-gold">_afro</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
              className="font-display mt-6 text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight text-sand">
              Каждая коса — <span className="italic text-gold-soft">точность</span>,<br className="hidden sm:block" /> каждая причёска — <span className="italic text-gold-soft">искусство</span>
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-6 max-w-xl text-[15px] md:text-base leading-relaxed text-muted">
              Афро косы любых видов, афро кудри, дреды и наращивание волос. Аккуратное плетение и образ, созданный именно под вас.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4">
              <a href={WA} {...ext} className="btn-gold inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em]">
                <WhatsAppIcon /> Записаться
              </a>
              <a href="#services" className="btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em]">
                Услуги <ArrowUpRight size={16} />
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-8 text-sand/80">
              <div><div className="font-display text-4xl text-gold">100%</div><div className="text-xs uppercase tracking-[0.18em] mt-1">довольных клиентов</div></div>
              <div className="h-10 w-px bg-gold/25" />
              <div><div className="font-display text-4xl text-gold">4</div><div className="text-xs uppercase tracking-[0.18em] mt-1">направления</div></div>
              <div className="h-10 w-px bg-gold/25 hidden sm:block" />
              <div className="hidden sm:block"><div className="font-display text-4xl text-gold">♀ ♂</div><div className="text-xs uppercase tracking-[0.18em] mt-1">для всех</div></div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -inset-4 rounded-t-full border border-gold/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
              <img src="/img/hero.webp" alt="Афро косы от Albina_afro" fetchPriority="high" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-6 bottom-10 md:-left-12 rounded-2xl bg-cream text-ink px-5 py-4 shadow-2xl">
              <div className="flex gap-0.5 text-clay">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
              <div className="font-display text-xl font-semibold mt-1">Брейдер Альбина</div>
              <div className="text-xs text-bark/70">точность и красота плетения</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-gold/15 bg-cocoa py-5 overflow-hidden">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display italic text-2xl md:text-3xl text-sand/70">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ['Афро косы', 'Афро кудри', 'Дреды', 'Наращивание', 'Брейды', 'Обучение Braid Master'].map((t) => (
              <span key={k + t} className="flex items-center gap-10">{t}<span className="text-gold not-italic text-lg">✦</span></span>
            ))
          )}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative bg-cream text-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-[480px] mx-auto overflow-hidden rounded-[2rem]">
              <img src="/img/about.webp" alt="Мастер плетёт афро косы" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105" />
            </div>
            <div className="absolute -bottom-6 right-2 md:right-10 rounded-full bg-ink text-cream w-32 h-32 grid place-items-center text-center rotate-[-8deg] shadow-xl">
              <div>
                <div className="font-display italic text-gold text-3xl leading-none">Albina</div>
                <div className="text-[10px] uppercase tracking-[0.2em] mt-1">braider</div>
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-clay"><span className="h-px w-10 bg-clay/60" />О мастере</div>
              <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] font-medium">
                Брейдер <span className="italic text-clay">Альбина</span>
              </h2>
              <BraidLine className="mt-6 w-48 text-gold" />
              <p className="mt-8 text-[16px] md:text-[17px] leading-relaxed text-bark/85">
                Делаю любые виды афро кос индивидуально под каждого клиента, а также афро кудри, дреды и наращивание.
                Главное в моей работе — <b className="text-ink">точность и красота плетения</b>.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Sparkles, t: 'Индивидуальный подход', d: 'Причёска подбирается под ваш образ и пожелания' },
                { icon: MessageCircleHeart, t: 'Консультация по уходу', d: 'Полная инструкция, как сохранить результат' },
                { icon: HeartHandshake, t: 'Довольные клиенты', d: 'Все клиенты остаются довольны результатом' },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-bark/10 bg-white/50 p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(59,39,28,.35)]">
                    <div className="grid place-items-center w-11 h-11 rounded-full bg-ink text-gold transition-colors group-hover:bg-clay group-hover:text-cream"><f.icon size={20} /></div>
                    <div className="font-display text-xl font-semibold mt-4 leading-tight">{f.t}</div>
                    <div className="text-sm text-bark/70 mt-2 leading-relaxed">{f.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <a href={WA} {...ext} className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-cream px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-clay hover:-translate-y-1">
                <WhatsAppIcon /> Записаться к мастеру
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="grain relative py-24 md:py-32 bg-ink">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal>
              <Eyebrow>Услуги</Eyebrow>
              <h2 className="font-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] font-medium">
                Что я <span className="italic text-gold">создаю</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-muted leading-relaxed">Каждая работа — с вниманием к деталям, ровными проборами и консультацией по уходу после процедуры.</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <a href={WA} {...ext} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gold/15 bg-cocoa p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_24px_50px_-24px_rgba(201,161,91,.55)]">
                  <div className="relative aspect-[2/3] overflow-hidden rounded-[1.1rem]">
                    <img src={s.img} alt={s.title} loading="lazy" className={`h-full w-full object-cover ${(s as { pos?: string }).pos ?? 'object-top'} transition-transform duration-[1.2s] ease-out group-hover:scale-110`} />
                    <div className="absolute top-3 left-3 font-display italic text-gold text-xl drop-shadow">{String(i + 1).padStart(2, '0')}</div>
                    <div className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-ink/40 backdrop-blur border border-cream/20 text-cream transition-all duration-500 group-hover:bg-gold group-hover:text-ink group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-2 pt-4 pb-2">
                    <h3 className="font-display text-2xl font-bold leading-tight transition-colors group-hover:text-gold-soft">{s.title}</h3>
                    <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-gold">Запись →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="relative py-24 md:py-32 bg-cocoa overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <Eyebrow>Обучение</Eyebrow>
              <h2 className="font-display mt-5 text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-medium">
                Braid <span className="italic text-gold">Master</span>
              </h2>
              <p className="font-display mt-4 text-2xl md:text-3xl text-sand">обучение от нуля до мастера</p>
              <p className="mt-6 max-w-lg text-muted leading-relaxed">
                Хотите освоить профессию брейдера и зарабатывать любимым делом? Я передам вам свой опыт, технику и секреты точного, красивого плетения.
              </p>
              <a href={WA_STUDY} {...ext} className="btn-gold mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.14em]">
                <WhatsAppIcon /> Записаться на обучение
              </a>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gold/20">
                <img src="/img/training.webp" alt="Обучение плетению Braid Master" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-full bg-gold text-ink px-5 py-3 shadow-xl">
                <Award size={20} /> <span className="text-sm font-bold uppercase tracking-[0.12em]">Сертификат</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {course.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-[1.5rem] border border-gold/15 bg-ink/40 p-7 transition-all duration-500 hover:border-gold/50 hover:-translate-y-1.5 hover:bg-ink/70">
                  <div className="font-display italic text-6xl text-gold/20 absolute top-4 right-6 transition-colors group-hover:text-gold/40">{i + 1}</div>
                  <div className="grid place-items-center w-12 h-12 rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink"><c.icon size={20} /></div>
                  <h3 className="font-display text-2xl font-semibold mt-6">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative bg-cream text-ink py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <Reveal>
            <div className="flex justify-center items-center gap-3 text-[12px] uppercase tracking-[0.3em] text-clay"><span className="h-px w-10 bg-clay/60" />Контакты<span className="h-px w-10 bg-clay/60" /></div>
            <h2 className="font-display mt-5 text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] font-medium">
              Запишитесь на <span className="italic text-clay">свой образ</span>
            </h2>
            <BraidLine className="mx-auto mt-6 w-48 text-gold" />
            <p className="mt-6 max-w-xl mx-auto text-bark/80 leading-relaxed">
              Напишите в WhatsApp — подберём причёску, время и ответим на все вопросы. Студия находится в Караганде.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <a href={WA} {...ext} className="inline-flex items-center justify-center gap-3 rounded-full bg-ink text-cream px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-clay hover:-translate-y-1 hover:shadow-xl">
                <WhatsAppIcon /> Записаться
              </a>
              <a href={GIS} {...ext} className="inline-flex items-center justify-center gap-3 rounded-full border border-ink/25 px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:border-ink hover:bg-ink/5 hover:-translate-y-1">
                <MapPin size={18} /> Как нас найти
              </a>
            </div>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { href: WA, icon: <WhatsAppIcon className="w-5 h-5" />, k: 'WhatsApp', v: PHONE },
              { href: IG, icon: <InstagramIcon className="w-5 h-5" />, k: 'Instagram', v: '@albina_afro' },
              { href: GIS, icon: <MapPin size={20} />, k: '2ГИС', v: 'Караганда' },
            ].map((c, i) => (
              <Reveal key={c.k} delay={i * 0.08}>
                <a href={c.href} {...ext} className="group flex items-center gap-4 rounded-2xl border border-bark/10 bg-white/60 p-5 transition-all duration-500 hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(59,39,28,.35)]">
                  <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-ink text-gold transition-colors group-hover:bg-clay group-hover:text-cream">{c.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-bark/60">{c.k}</span>
                    <span className="block font-display text-xl font-semibold truncate">{c.v}</span>
                  </span>
                  <ArrowUpRight size={18} className="ml-auto text-bark/40 transition-all group-hover:text-clay group-hover:rotate-45" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#home" className="font-display text-3xl"><span className="font-semibold">Albina</span><span className="italic text-gold">_afro</span></a>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">Студия афро-причёсок: афро косы, афро кудри, дреды и стрижки. Обучение Braid Master.</p>
          </div>
          <nav className="flex flex-wrap md:justify-center gap-x-7 gap-y-3 text-[13px] uppercase tracking-[0.16em] text-sand/80">
            {NAV.map((n) => <a key={n.id} href={`#${n.id}`} className="link-u hover:text-cream transition-colors">{n.label}</a>)}
          </nav>
          <div className="flex md:justify-end items-center gap-3">
            <a href={WA} {...ext} aria-label="WhatsApp" className="grid place-items-center w-11 h-11 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-ink transition-all hover:-translate-y-0.5"><WhatsAppIcon /></a>
            <a href={IG} {...ext} aria-label="Instagram" className="grid place-items-center w-11 h-11 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-ink transition-all hover:-translate-y-0.5"><InstagramIcon /></a>
            <a href={GIS} {...ext} aria-label="2ГИС" className="grid place-items-center w-11 h-11 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-ink transition-all hover:-translate-y-0.5"><MapPin size={18} /></a>
            <a href="tel:+77086796061" aria-label="Позвонить" className="grid place-items-center w-11 h-11 rounded-full border border-gold/35 text-gold hover:bg-gold hover:text-ink transition-all hover:-translate-y-0.5"><Phone size={18} /></a>
          </div>
        </div>
        <div className="border-t border-gold/10 py-5 text-center text-xs text-muted tracking-wide">
          © {new Date().getFullYear()} Albina_afro · Брейдер Альбина · Караганда
        </div>
      </footer>

      {/* Floating WhatsApp (mobile) */}
      <a href={WA} {...ext} aria-label="Записаться в WhatsApp"
        className="btn-gold fixed bottom-5 right-5 z-40 grid place-items-center w-14 h-14 rounded-full sm:hidden">
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
