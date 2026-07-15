import { motion } from 'framer-motion';
import { usePortfolio } from '../hooks/usePortfolio';

export default function SkillsSection() {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-3">
          <div>
            <span className="font-mono text-xs tracking-widest text-red">SKILLS</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3">Spec sheet</h2>
          </div>
          <span className="font-mono text-xs text-grey-dim">CERTIFIED · AI/ML · AWS · PYTHON</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-lg overflow-hidden">
          {skills.categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-asphalt p-6"
            >
              <h3 className="font-mono text-[11px] tracking-widest text-grey-dim uppercase mb-4">
                {cat.name}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-chalk font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
