import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer id="contact" className="border-t border-line carbon-bg">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-24 pb-10">
        <div className="grid sm:grid-cols-3 gap-12 sm:gap-8">
          <div>
            <h2 className="hero-heading font-display font-bold text-3xl sm:text-4xl leading-tight">
              {profile.shortName}
            </h2>
            <p className="text-sm text-grey mt-2">{profile.specialization}</p>
            <p className="font-mono text-xs text-grey-dim mt-4">{profile.location.toUpperCase()}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-grey-dim mb-4">NAVIGATE</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Credentials'].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-grey hover:text-chalk transition-colors"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-widest text-grey-dim mb-4">REACH OUT</h3>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm text-chalk hover:text-red transition-colors mb-3"
            >
              {profile.social.email}
              {copied ? <Check size={14} className="text-green" /> : <Copy size={14} className="text-grey-dim" />}
            </button>
            <a href={`tel:${profile.social.phone.replace(/\s+/g, '')}`} className="block text-sm text-grey hover:text-chalk transition-colors mb-5">
              {profile.social.phone}
            </a>
            <SocialLinks social={profile.social} />
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-grey-dim tracking-wide">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>BUILT WITH REACT · TAILWIND · CLAUDE</span>
        </div>
      </div>
    </footer>
  );
}
