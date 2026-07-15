import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects } = usePortfolio();
  const sorted = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-line">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="font-mono text-xs tracking-widest text-red">PROJECTS</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-14">Race log</h2>

        <div className="flex flex-col gap-10">
          {sorted.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
