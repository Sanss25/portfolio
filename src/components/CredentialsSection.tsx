import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

export default function CredentialsSection() {
  const { education, certifications } = usePortfolio();

  return (
    <section id="credentials" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-14 md:gap-10">
        <div>
          <span className="font-mono text-xs tracking-widest text-red">EDUCATION</span>
          <h2 className="font-display font-bold text-3xl mt-3 mb-8">Grid</h2>
          <div className="flex flex-col gap-6">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4 pb-6 border-b border-line last:border-b-0 last:pb-0"
              >
                <GraduationCap size={18} className="text-grey-dim mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-chalk">{ed.school}</h3>
                    {ed.period && (
                      <span className="font-mono text-[11px] text-grey-dim">{ed.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-grey mt-0.5">{ed.credential}</p>
                  <p className="font-mono text-xs text-grey-dim mt-1">{ed.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <span className="font-mono text-xs tracking-widest text-red">CERTIFICATIONS</span>
          <h2 className="font-display font-bold text-3xl mt-3 mb-8">Pit stops</h2>
          <div className="flex flex-col gap-6">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4 pb-6 border-b border-line last:border-b-0 last:pb-0"
              >
                <BadgeCheck size={18} className="text-green mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-chalk leading-snug">{c.title}</h3>
                  <p className="font-mono text-xs text-grey-dim mt-1">{c.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
