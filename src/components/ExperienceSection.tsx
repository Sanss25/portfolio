import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="font-mono text-xs tracking-widest text-red">EXPERIENCE</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-14">Career timeline</h2>

        <div>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid sm:grid-cols-[auto_1fr] gap-4 sm:gap-8 py-8 border-t border-line first:border-t-0"
            >
              <span className="font-display font-bold text-4xl text-grey-dim/70 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-chalk">
                    {exp.role} <span className="text-grey font-normal">— {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-line text-grey-dim whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-grey mb-4">
                  {exp.summary} · {exp.location}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] text-chalk/90 leading-relaxed">
                      <span className="text-red mt-1.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
