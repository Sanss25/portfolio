import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';
import avatar from '../assets/img/avatar.jpeg';

export default function HeroSection() {
  const { profile } = usePortfolio();
  const [first, ...rest] = profile.name.split(' ');
  const last = rest.join(' ');

  return (
    <section
      id="home"
      className="relative min-h-screen carbon-bg overflow-hidden grid grid-rows-[auto_1fr_auto] pt-16"
    >
      {/* ambient red glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-red/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-purple/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pt-8 flex items-center justify-between font-mono text-xs text-grey-dim tracking-widest">
        <span>PORTFOLIO / 2026 SEASON</span>
        <span className="hidden sm:inline">{profile.location.toUpperCase()}</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5 font-mono text-xs tracking-widest"
          >
            <span className="px-2 py-1 rounded-sm bg-red text-track font-semibold">P1</span>
            <span className="text-grey">{profile.role.toUpperCase()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="hero-heading font-display font-bold leading-[0.92] text-[15vw] sm:text-[9vw] md:text-[6.4vw] lg:text-7xl xl:text-8xl whitespace-nowrap"
          >
            {first}
            <br />
            {last}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-lg text-base sm:text-lg text-grey"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <SocialLinks social={profile.social} />
            <span className="hidden sm:block h-8 w-px bg-line" />
            <span className="font-mono text-xs text-grey-dim">{profile.status}</span>
          </motion.div>
        </div>

        {/* Signature: driver ID card, styled like an F1 broadcast lower-third */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative shrink-0 w-48 sm:w-56"
        >
          <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden border border-red/50 bg-asphalt">
            <img
              src={avatar}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.85]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(155deg, rgba(230,39,44,0.65) 0%, rgba(10,11,13,0.05) 55%, rgba(168,85,247,0.35) 100%)',
                mixBlendMode: 'color',
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(0deg, rgba(10,11,13,0.9) 0%, transparent 38%)' }}
            />

            {/* corner brackets */}
            {[
              'top-2 left-2 border-t border-l',
              'top-2 right-2 border-t border-r',
              'bottom-2 left-2 border-b border-l',
              'bottom-2 right-2 border-b border-r',
            ].map((pos) => (
              <span key={pos} className={`absolute w-3 h-3 border-chalk/70 ${pos}`} />
            ))}

            <div className="absolute bottom-0 inset-x-0 px-3 py-2.5 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-chalk">
                {profile.shortName.toUpperCase()}
              </span>
              <span className="font-display font-bold text-lg text-chalk leading-none">
                {profile.driverNumber}
              </span>
            </div>
          </div>
          <div className="absolute -top-3 -left-3 px-2 py-0.5 rounded-sm bg-red text-track font-mono text-[10px] font-semibold tracking-widest">
            ON TRACK
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-1 text-grey-dim hover:text-grey transition-colors font-mono text-[11px] tracking-widest"
        aria-label="Scroll to about section"
      >
        SCROLL
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
