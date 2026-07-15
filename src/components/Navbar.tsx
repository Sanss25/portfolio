import { useEffect, useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function Navbar() {
  const { profile } = usePortfolio();
  const [elapsed, setElapsed] = useState(0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => setElapsed((Date.now() - start) / 1000), 500);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-track/95 border-line backdrop-blur' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between font-mono text-[13px] tracking-wide">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-chalk hover:text-red transition-colors"
          aria-label="Scroll to top"
        >
          <span className="grid place-items-center w-8 h-8 rounded-sm border border-red text-red font-display font-bold text-sm">
            {profile.driverNumber}
          </span>
          <span className="hidden sm:inline text-grey">{profile.shortName.toUpperCase()}</span>
        </button>

        <ul className="hidden md:flex items-center gap-7 uppercase">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="text-grey hover:text-chalk transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 text-grey-dim">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          <span>SESSION {formatClock(elapsed)}</span>
        </div>

        <button
          className="md:hidden text-chalk text-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 font-mono uppercase text-sm bg-track border-b border-line">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className="w-full text-left py-2 text-grey hover:text-chalk transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
