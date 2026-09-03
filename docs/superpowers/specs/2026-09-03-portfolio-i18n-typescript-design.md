# Portfolio: RU/EN i18n, TypeScript migration, content refresh

Date: 2026-09-03
Status: Approved

## Problem

The portfolio site at `github.com/Kulob/portfolio` has drifted from the CV it is
supposed to represent, and carries a set of defects that undermine it with the
audience it exists for — recruiters.

Content drift: the site claims React 18 while the CV says React 19, and the four
Zypl.ai projects that carry the CV (Lucid.AI, aion.tj, Pass ID, Dynamic Scoring)
do not appear on the site at all. The strongest material — DAG visualisation,
granular RBAC, Ed25519 signature verification, 200+ spec files — is absent.

Defects: a hardcoded `margin-top: 650px`, a misspelled CSS variable that breaks
the mobile container, two dead components (one importing files that do not
exist), a contact form that gives no feedback on submit, and nav highlighting
that never syncs with scroll position.

Reach: the site is single-language English. A large part of the target audience
(the CV states relocation to Russia and Moscow-hours remote work) reads Russian.

## Goals

1. RU/EN toggle that switches the whole site, persists the choice, and defaults
   to the browser language.
2. Serve the correct PDF resume per language.
3. Full TypeScript migration under `strict`.
4. Surface the CV's project detail on the site.
5. Fix the defects found in review.

## Non-goals

- Full visual redesign. Palette and layout stay; typography, spacing, hover and
  scroll-reveal get a pass.
- A CMS or backend. Content stays in typed modules in the repo.
- Routing. There are no routes; `react-router-dom` is removed.

## Architecture

```
src/
  main.tsx  App.tsx  vite-env.d.ts
  i18n/
    index.ts              i18next init: detect -> localStorage -> fallback en
    locales/en.ts, ru.ts  typed resource objects
    i18next.d.ts          CustomTypeOptions -> compile-time key checking
  types/index.ts          Project, ExperienceEntry, SkillGroup, Locale
  data/                   projects.ts, experience.ts, skills.ts
  hooks/
    useActiveSection.ts   IntersectionObserver -> nav highlight
    useScrollReveal.ts    IntersectionObserver -> section reveal
  components/
    header/ nav/ about/ skills/ timeline/ portfolio/ contact/ footer/
    languageSwitcher/
```

### i18n typing

Translation resources are TypeScript objects, not JSON. `en.ts` is the source of
truth; `CustomTypeOptions` derives the key union from it so `t('hero.tagline')`
is checked by the compiler — a typo becomes a build error rather than an empty
string in production. `ru.ts` is typed as `typeof en`, which makes an untranslated
key impossible to ship.

Data modules hold i18n *keys*, not prose, so a project's bullet list is
translated by the same mechanism as the rest of the page.

### Language switching

A segmented RU|EN control in the header. On change: i18next language, `<html lang>`,
and `localStorage` all update. First visit resolves from `navigator.language`,
falling back to English.

### Resumes

`Mirov_CV_EN_3_1.pdf` and `Mirovon_CV_3_1_RU.pdf` move into `src/assets/`. The
CTA serves the file matching the active language and sets an explicit
`download="Mirov_Khudobakhsh_CV_<LANG>.pdf"` so the recruiter does not receive a
Vite content hash as a filename. The old `CV.pdf` is deleted.

## Content changes

| Change | Rationale |
|---|---|
| New Experience timeline: Zypl.ai (4 projects) + Freelance/Bozorcha | The CV's strongest material was entirely absent |
| Old "My Experience" becomes Skills, grouped Core / State & Data / Styling / Testing & Tooling | A flat list containing "Nest JS — Basic" works against the candidate |
| Tech-stack chips on project cards; Github button only where source is public | A "Github" button pointing at the profile root on an NDA project reads as misdirection |
| Contact form states idle -> sending -> success/error, plus honeypot | Submitting currently produces no visible result |
| SEO: title, description, OG, Twitter, JSON-LD Person, favicon, robots.txt, per-language `lang` | The site is searched for by name |
| A11y: `aria-label` on icon links, `:focus-visible`, scrollbar restored, `prefers-reduced-motion` honoured | `::-webkit-scrollbar { display: none }` breaks keyboard navigation |

About and profile copy are rewritten from the current CV in both languages.

## Removals

`Services.tsx`, `Testimonials.tsx` (dead; the latter imports `avatar1..4.jpg`,
which do not exist), `swiper`, `react-router-dom` and `BrowserRouter`,
`src/components/nav/React Portfolio.code-workspace`, unused assets
(`Hotel.png`, `me-about.jpg`, `me.png`, `pizza12.png`), and `vercel.json` —
which declares `framework: create-react-app` for a Vite project that deploys to
GitHub Pages.

## TypeScript

`strict: true`, `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`.
Adds `typescript`, `@types/react`, `@types/react-dom`, a `typecheck` script, and a
typecheck step in `deploy.yml` so type regressions cannot reach production.
All `.jsx` become `.tsx`; `index.html` is updated to point at `main.tsx`.

## Configuration

EmailJS identifiers move to `import.meta.env.VITE_EMAILJS_*`, with the current
literals as fallback so the form keeps working when no secrets are configured.
`.env.example` documents the variables. These are publishable client-side
identifiers by EmailJS design, not secrets.

## Verification

- `yarn typecheck` passes with zero errors.
- `yarn build` succeeds.
- Both languages render every section with no missing keys.
- Both PDFs download with clean filenames.
- Nav highlight follows scroll position.
- Layout is correct at 375px, 768px, 1440px.
