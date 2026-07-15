import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className={`sticky top-16 rounded-xl border p-7 sm:p-10 bg-asphalt ${
        project.highlight ? 'border-red/40' : 'border-line'
      }`}
      style={{ zIndex: index + 1 }}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3 font-mono text-xs text-grey-dim">
          <span>{String(index + 1).padStart(2, '0')}</span>
          {project.highlight && (
            <span className="px-2 py-0.5 rounded-full bg-red/15 text-red tracking-wide">FLAGSHIP</span>
          )}
          <span>{project.year}</span>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-full border border-line text-chalk hover:border-red hover:text-red transition-colors shrink-0"
          >
            OPEN LIVE
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      <h3 className="font-display font-bold text-3xl sm:text-4xl text-chalk mb-1.5">
        {project.title}
      </h3>
      <p className="text-red font-medium text-sm mb-5">{project.subtitle}</p>

      <p className="text-[15px] sm:text-base text-grey leading-relaxed max-w-2xl mb-7">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-sm bg-asphalt-light text-grey"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
