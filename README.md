# Sanskruti Udage — Portfolio

A single-page portfolio built around an F1 race-telemetry visual language — a nod to
[PitWall](https://pitwall-lilac.vercel.app), the flagship project it showcases.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · lucide-react

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/portfolio.json      <- ALL editable content lives here
  types/portfolio.ts       <- TypeScript shape of that content
  hooks/usePortfolio.ts    <- typed accessor used by every component
  components/
    Navbar.tsx              Fixed nav + live "session timer"
    HeroSection.tsx         Name, tagline, driver-number/gauge signature graphic
    AboutSection.tsx        Bio + strength tags
    SkillsSection.tsx       Skills grouped by category
    ExperienceSection.tsx   Numbered career timeline
    ProjectsSection.tsx     Sticky-stacked project cards (flagship pinned first)
    ProjectCard.tsx
    CredentialsSection.tsx  Education + certifications, two columns
    Footer.tsx               Contact + site nav
    SocialLinks.tsx
```

## Editing content

Everything you'd want to change day-to-day (bio, experience, projects, skills,
education, certifications, socials) lives in **`src/data/portfolio.json`**.
No component file needs to change for a content update.

- To add a new project: append an object to `projects[]`. Set `"highlight": true`
  on at most one project to pin it first with the red "FLAGSHIP" tag.
- To reorder skills: edit the `skills.categories[]` array.
- Testimonials are supported (`testimonials[]`) but the section is intentionally
  omitted from the page while the array is empty. Add real quotes and wire a
  `TestimonialsSection` component back in if you collect any later.
- `profile.driverNumber` drives the badge number and gauge in the hero.

## Deploying

This is a static Vite build. Drag the `dist/` folder into Vercel, Netlify, or
GitHub Pages, or run `vercel` / `netlify deploy` from this directory.
