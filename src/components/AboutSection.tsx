import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

export default function AboutSection() {
  const { profile, skills } = usePortfolio();

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-widest text-red">ABOUT</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 leading-tight">
            {profile.specialization}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p
            className="text-lg sm:text-xl leading-relaxed text-chalk"
            style={{ overflowWrap: 'normal', wordBreak: 'normal' }}
          >
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.strengths.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-line text-grey"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
