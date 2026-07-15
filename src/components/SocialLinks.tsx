import { Github, Linkedin, Instagram, Mail, Phone, Globe } from 'lucide-react';
import type { Social } from '../types/portfolio';

interface Props {
  social: Social;
  variant?: 'row' | 'stack';
}

export default function SocialLinks({ social, variant = 'row' }: Props) {
  const items = [
    { key: 'github', href: social.github, icon: Github, label: 'GitHub' },
    { key: 'linkedin', href: social.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { key: 'instagram', href: social.instagram, icon: Instagram, label: 'Instagram' },
    { key: 'website', href: social.website, icon: Globe, label: 'Website' },
    { key: 'email', href: social.email ? `mailto:${social.email}` : '', icon: Mail, label: 'Email' },
    { key: 'phone', href: social.phone ? `tel:${social.phone.replace(/\s+/g, '')}` : '', icon: Phone, label: 'Phone' },
  ].filter((i) => i.href);

  return (
    <div className={variant === 'row' ? 'flex items-center gap-3' : 'flex flex-col gap-3'}>
      {items.map(({ key, href, icon: Icon, label }) => (
        <a
          key={key}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="group grid place-items-center w-10 h-10 rounded-full border border-line text-grey hover:text-chalk hover:border-red transition-colors"
        >
          <Icon size={16} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
